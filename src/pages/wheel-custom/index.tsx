import { useState, useEffect, useRef } from 'react';
import { Layout } from '../../components/Layout/Layout';
import { SEO } from '../../components/Seo/Seo';
import { WheelView } from '../../components/Wheel/Wheel';
import { Button } from '../../library/Button/Button';
import { Icon } from '../../library/Icon/Icon';
import { InputArea } from '../../library/InputArea/InputArea';
import { MultiSelect } from '../../library/MultiSelect/MultiSelect';
import { Popover } from '../../library/Popover/Popover';
import { CustomCategory } from '../../state/context/AppContext';
import { useSettings } from '../../state/hooks/useSettings';
import { useWheelCustom } from '../../state/hooks/useWheelCustom';
import { WheelValues } from '../../state/types/wheel';
import { texts, wheelAreas } from '../../utils/configs';
import { track } from '../../utils/helpers';
import * as styles from '../Page.module.scss';

const selections = WheelValues;

interface SavedWheel {
  id: string;
  name: string;
  categories: CustomCategory[];
}

const WheelCustomPage = () => {
  const { isWheelInfoOpen, updateSettings } = useSettings();
  const { categories: wheelData, updateCategories } = useWheelCustom();
  const [selection, updateSelection] = useState(selections.current);
  const isInitialMount = useRef(true);
  const [savedWheels, setSavedWheels] = useState<SavedWheel[]>([]);
  const [isNamingWheel, setIsNamingWheel] = useState(false);
  const [wheelName, setWheelName] = useState('');
  const [showCopied, setShowCopied] = useState(false);
  const nameInputRef = useRef<HTMLTextAreaElement>(null);

  // Load saved wheels from localStorage on mount
  useEffect(() => {
    const saved = window.localStorage.getItem('savedWheels');
    if (saved) {
      setSavedWheels(JSON.parse(saved));
    }
  }, []);

  // Load wheel from URL or last viewing state on initial mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fieldsParam = params.get('fields');

    if (fieldsParam) {
      // Load from URL
      const fieldNames = fieldsParam
        .split(',')
        .map(f => decodeURIComponent(f.trim()))
        .filter(Boolean);

      if (fieldNames.length > 0) {
        const categories = fieldNames.map((name, index) => {
          const existingArea = wheelAreas.find(area => area.label === name);
          return {
            name,
            id: existingArea
              ? existingArea.value
              : `custom-${Date.now()}-${index}`,
            current: 0,
            ideal: 0,
          };
        });
        updateCategories(categories);
      }
    } else {
      // Load last viewing state if no URL
      const lastViewing = window.localStorage.getItem('lastViewingWheel');
      if (lastViewing) {
        const parsedData = JSON.parse(lastViewing);
        if (parsedData.categories && parsedData.categories.length > 0) {
          updateCategories(parsedData.categories);
        }
      }
    }
    isInitialMount.current = false;
  }, []);

  // Update URL and save to localStorage when wheelData changes (after initial mount)
  useEffect(() => {
    if (isInitialMount.current) return;

    const params = new URLSearchParams(window.location.search);

    if (wheelData.length > 0) {
      const fieldNames = wheelData
        .map(w => encodeURIComponent(w.name))
        .join(',');
      params.set('fields', fieldNames);
    } else {
      params.delete('fields');
    }

    const newUrl = `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}`;
    window.history.replaceState({}, '', newUrl);

    window.localStorage.setItem(
      'lastViewingWheel',
      JSON.stringify({ categories: wheelData })
    );
  }, [wheelData]);

  const getCurrentColor = (opacity: string = '50%') =>
    selection === selections.current
      ? `rgb(191 0 0 / ${opacity})`
      : 'rgb(191 0 0 / 35%)';
  const getIdealColor = (opacity: string = '50%') =>
    selection === selections.ideal
      ? `rgb(0 8 137 / ${opacity})`
      : 'rgb(77 88 251 / 33%)';

  const highestScore = 10;

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setShowCopied(true);
    track('Copied wheel link');
    setTimeout(() => setShowCopied(false), 2000);
  };

  const handleSaveWheel = () => {
    if (wheelData.length === 0) return;
    setIsNamingWheel(true);
    setWheelName('');
    setTimeout(() => nameInputRef.current?.focus(), 0);
  };

  const handleSaveWheelName = () => {
    if (!wheelName.trim() || wheelData.length === 0) {
      setIsNamingWheel(false);
      return;
    }

    const newWheel: SavedWheel = {
      id: `wheel-${Date.now()}`,
      name: wheelName.trim(),
      categories: wheelData,
    };

    const updatedWheels = [...savedWheels, newWheel];
    setSavedWheels(updatedWheels);

    try {
      window.localStorage.setItem('savedWheels', JSON.stringify(updatedWheels));
      track('Saved wheel', { name: wheelName });
    } catch (error) {
      console.warn('Error saving wheel:', error);
    }

    setIsNamingWheel(false);
    setWheelName('');
  };

  const handleLoadWheel = (wheel: SavedWheel) => {
    updateCategories(wheel.categories);
  };

  const handleDeleteWheel = (wheelId: string) => {
    const updatedWheels = savedWheels.filter(w => w.id !== wheelId);
    setSavedWheels(updatedWheels);

    window.localStorage.setItem('savedWheels', JSON.stringify(updatedWheels));
    track('Deleted saved wheel');
  };

  return (
    <>
      <SEO
        title={texts.wheelCustom.title}
        description={texts.wheelCustom.description}
      />
      <Layout>
        <Popover
          isShown={isWheelInfoOpen}
          toggle={value => {
            track(`${value ? 'Opened' : 'Closed'} custom wheel info`);
            updateSettings({ isWheelInfoOpen: value });
          }}
          position={'topLeft'}
          buttonIcon={'help'}
          buttonLabel={'About'}
          title={texts.wheelCustom.title}>
          {texts.wheelCustom.info}
        </Popover>
        <div className={styles.toolArea}>
          <div className={styles.select}>
            <MultiSelect
              placeholder={'Select or type in your own focus areas...'}
              options={wheelAreas}
              closeMenuOnSelect={false}
              value={wheelData.map(d => ({ label: d.name, value: d.id }))}
              onSelect={(options, params) => {
                if (params?.action === 'select-option') {
                  const newOption = params.option || { label: '', value: '' };
                  track('Added area to wheel', {
                    value: `${newOption.value} - ${newOption.label}`,
                  });
                }
                if (params?.action === 'remove-value') {
                  const removed = params.removedValue;
                  track('Removed area from wheel', {
                    value: `${removed.value} - ${removed.label}`,
                  });
                }
                updateCategories(
                  options.map(s => ({ id: s.value, name: s.label }))
                );
              }}
            />
          </div>
          <div className={styles.buttons}>
            <div className={styles.title}>{'Pick one:'}</div>
            <Button
              size={'sm'}
              style={{ backgroundColor: getCurrentColor('78%') }}
              onClick={() => {
                track('Select current - custom');
                updateSelection(selections.current);
              }}>
              {'Current life'}
            </Button>
            <Button
              size={'sm'}
              style={{ backgroundColor: getIdealColor('78%') }}
              onClick={() => {
                track('Select ideal - custom');
                updateSelection(selections.ideal);
              }}>
              {'Ideal life'}
            </Button>
            {/* <Button
              size={'sm'}
              onClick={handleCopyLink}
              disabled={wheelData.length === 0}>
              {showCopied ? 'Copied!' : 'Copy wheel link'}
            </Button> */}
          </div>
        </div>
        <div className={styles.savedWheelsContainer}>
          {savedWheels.length > 0 && (
            <div className={styles.savedWheels}>
              {savedWheels.map(wheel => (
                <div
                  key={wheel.id}
                  className={styles.pill}
                  onClick={() => handleLoadWheel(wheel)}>
                  <span>{wheel.name}</span>
                  <div
                    className={styles.deletePill}
                    onClick={e => {
                      e.stopPropagation();
                      handleDeleteWheel(wheel.id);
                    }}
                    role='button'
                    aria-label='Delete wheel'>
                    <Icon icon='close' size={14} />
                  </div>
                </div>
              ))}
            </div>
          )}
          {!isNamingWheel ? (
            <Button
              size={'sm'}
              onClick={handleSaveWheel}
              disabled={wheelData.length === 0}
              className={styles.saveWheelButton}>
              {'Save wheel'}
            </Button>
          ) : (
            <div className={styles.nameInputContainer}>
              <InputArea
                ref={nameInputRef}
                className={styles.wheelNameInput}
                value={wheelName}
                onChange={setWheelName}
                placeholder='Type name...'
                rows={1}
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    handleSaveWheelName();
                  } else if (e.key === 'Escape') {
                    setIsNamingWheel(false);
                  }
                }}
                onBlur={handleSaveWheelName}
              />
            </div>
          )}
        </div>
        <div className={styles.chartContainer} id='capture'>
          <WheelView
            chartToEdit={selection}
            maxPoints={highestScore}
            datasetLabels={wheelData.map(category => category.name)}
            datasets={[
              {
                label: 'Current life',
                id: selections.current,
                data: wheelData.map(category => category.current),
                backgroundColor: getCurrentColor(),
                borderColor: 'white',
                borderWidth: 1,
              },
              {
                label: 'Where I want to be',
                id: selections.ideal,
                data: wheelData.map(category => category.ideal),
                backgroundColor: getIdealColor(),
                borderColor: 'white',
                borderWidth: 1,
              },
            ]}
            updateDataset={(chartToEdit, category, score) => {
              track('Update wheel');
              const categories = wheelData.map(c =>
                c.name === category ? { ...c, [chartToEdit]: score } : c
              );
              updateCategories(categories);
            }}
          />
        </div>
      </Layout>
    </>
  );
};

export default WheelCustomPage;
