import classnames from 'classnames';
import html2canvas from 'html2canvas';
import { useEffect, useState } from 'react';
import { IconButton } from '../../library/IconButton/IconButton';
import { Loader } from '../../library/Loader/Loader';
import Modal from '../../library/Modal/Modal';
import { track } from '../../utils/helpers';
import * as styles from './Share.module.scss';

export const Share = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setDisabled] = useState(true);
  const [copiedImage, setImageCopied] = useState(false);
  const [image, setImage] = useState('');
  const [blob, setBlob] = useState<Blob | null>(null);

  useEffect(() => {
    setTimeout(
      () => document.getElementById('capture') && setDisabled(false),
      2000
    );
  }, []);

  const captureElement = () => {
    setModalOpen(true);
    setIsLoading(true);
    const elementToCapture = document.getElementById('capture');
    if (elementToCapture?.childNodes?.length) {
      html2canvas(elementToCapture).then(canvas => {
        const htmlImage = canvas.toDataURL('image/png', 1.0);
        canvas.toBlob(imageBlob => setBlob(imageBlob));
        setImage(htmlImage);
        setTimeout(() => {
          document.getElementById('image-box')!.appendChild(canvas);
          setIsLoading(false);
        }, 500);
      });
    }
    if (!elementToCapture?.childNodes?.length) {
      setImage('none');
      setIsLoading(false);
    }
  };

  const downloadImage = () => {
    track('Download image');
    const fakeLink = window.document.createElement('a');
    fakeLink.download = 'results';
    fakeLink.href = image;
    document.body.appendChild(fakeLink);
    fakeLink.click();
    document.body.removeChild(fakeLink);
    fakeLink.remove();
  };

  const copyImage = () => {
    track('Copy image');
    navigator.clipboard.write([new ClipboardItem({ 'image/png': blob! })]);
    setImageCopied(true);
    setTimeout(() => setImageCopied(false), 1500);
  };

  return (
    <>
      <IconButton
        disabled={isDisabled}
        className={styles.shareButton}
        color={'primary'}
        icon='share'
        onClick={() => captureElement()}
      />
      <Modal
        className={classnames(styles.modal, { [styles.loading]: isLoading })}
        isShown={isModalOpen}
        onClose={() => {
          setModalOpen(false);
          track('Clicked Share');
        }}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className={styles.tools}>
              <IconButton
                icon='download'
                label={'Download'}
                color={'primary'}
                onClick={downloadImage}
              />
              <IconButton
                icon='copy'
                color={'primary'}
                label={copiedImage ? 'Copied!' : 'Copy image'}
                onClick={copyImage}
              />
            </div>

            {image === 'none' && (
              <div className={styles.empty}>
                <div>{'Nothing to share yet.'}</div>
                <div>
                  {' '}
                  {
                    'The activity might need completing first to unlock the results.'
                  }
                </div>
              </div>
            )}
          </>
        )}
        <div
          className={classnames({
            [styles.imageBox]: !isLoading && image !== 'none',
          })}
          id={'image-box'}
        />
      </Modal>
    </>
  );
};
