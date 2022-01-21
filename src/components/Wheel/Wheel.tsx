import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  RadialLinearScale,
  Tooltip,
} from 'chart.js';
import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import { WheelValues } from '../../state/reducers/wheelOfLife';

type Dataset = {
    label: string;
    id: any;
    data: number[],
    backgroundColor: string,
    borderColor?: string,
    borderWidth?: number,
    animation?: {
      duration: number,
    }
};

interface WheelViewProps {
  chartToEdit: Partial<WheelValues>;
  maxPoints: number;
  datasetLabels: string[];
  datasets: Dataset[];
  updateWheel: (chartToEdit: Partial<WheelValues>, category: string, score: number) => void;
}

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const selectionSetting = {
  intersect: true,
  mode: 'point' as any,
};
export const WheelView = ({ chartToEdit, maxPoints, datasetLabels, datasets, updateWheel }: WheelViewProps) => {
  const interactionPoints: Dataset[] = new Array(maxPoints).fill(0).map((i, index) => ({
    id: index,
    label: '',
    data: new Array(datasetLabels.length).fill(index + 1),
    backgroundColor: 'transparent',
    borderColor: 'black',
    borderWidth: 1,
    animation: {
      duration: 0,
    },
  }));

  const data = {
    labels: datasetLabels,
    datasets: interactionPoints.concat(datasets),
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
            const category = datasetLabels[selection.index];
            const score = data.datasets[elements[0].datasetIndex].data[0];
            updateWheel(chartToEdit, category, score);
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
              maxTicksLimit: maxPoints,
              count: maxPoints,
              precision: 0,
              stepSize: 1,
            },
            pointLabels: {
              display: true,
              centerPointLabels: true,
              color: datasets.find(dataset => dataset.id === chartToEdit)?.backgroundColor,
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
