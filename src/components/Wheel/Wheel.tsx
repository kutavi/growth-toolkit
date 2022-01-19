import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  RadialLinearScale,
  Tooltip,
} from 'chart.js';
import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import { useWheelOfLife } from '../../state/hooks/useWheelOfLife';
import { WheelValues } from '../../state/reducers/wheelOfLife';

interface WheelViewProps {
  selectedChart: Partial<WheelValues>;
}
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const highestScore = 10;

const selectionSetting = {
  intersect: true,
  mode: 'point' as any,
};
export const WheelView = ({ selectedChart }: WheelViewProps) => {
  const { categories: wheelData, updateWheel } = useWheelOfLife();
  const idealColor = selectedChart === 'ideal' ? '#00088980' : '#000ffb54';
  const currentColor = selectedChart === 'current' ? '#6a6a6abf' : '#959595bd';
  const categoriesLabels = wheelData.map(category => category.label);
  const interactionPoints = new Array(highestScore).fill(0).map((i, index) => ({
    label: '',
    data: new Array(wheelData.length).fill(index + 1),
    backgroundColor: ['transparent'],
    borderColor: 'black',
    borderWidth: 1,
    animation: {
      duration: 0,
    },
  }));

  const data = {
    labels: categoriesLabels,
    datasets: interactionPoints.concat([
      {
        label: 'Current state',
        data: wheelData.map(category => category.current),
        backgroundColor: [currentColor],
        borderColor: 'white',
        borderWidth: 1,
      },
      {
        label: 'Where I want to be',
        data: wheelData.map(category => category.ideal),
        backgroundColor: [idealColor],
        borderColor: 'white',
        borderWidth: 1,
      },
    ] as any),
  };

  return (
    <PolarArea
      data={data}
      options={{
        hover: selectionSetting,
        interaction: selectionSetting,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            ...selectionSetting,
            mode: 'index',
            filter: (tooltipItem, index, tooltips, chartData) => {
              const datasetLabel =
                chartData.datasets[tooltipItem.datasetIndex].label;
              return datasetLabel !== '';
            },
          },
        },
        onClick: (evt, elements) => {
          if (elements.length > 0) {
            const selection = elements[0];
            const category = categoriesLabels[selection.index];
            const score = data.datasets[elements[0].datasetIndex]
              .data[0] as number;
            const categories = wheelData.map(c =>
              c.label === category ? { ...c, [selectedChart]: score } : c
            );
            updateWheel({ categories });
          }
        },
        scales: {
          r: {
            grid: {
              color: 'black',
            },

            ticks: {
              z: 1,
              font: {
                size: 18,
                weight: 'bold',
              },
              backdropColor: '#9d9d9d',
              color: 'white',
              maxTicksLimit: highestScore,
              count: highestScore,
              precision: 0,
              stepSize: 1,
            },
            pointLabels: {
              display: true,
              centerPointLabels: true,
              color: selectedChart === 'ideal' ? '#00088980' : '#6a6a6abf',
              font: {
                weight: 'bold',
                size: 22,
              },
            },
          },
        },
      }}
    />
  );
};
