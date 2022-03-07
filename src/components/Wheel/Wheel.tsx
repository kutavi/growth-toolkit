import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  RadialLinearScale,
  Tooltip,
} from 'chart.js';
import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import useIsMobile from '../../state/hooks/useIsMobile';
import { WheelValues } from '../../state/types/wheel';
import * as colors from '../../styles/_colors.module.scss';
import { windowLoaded } from '../../utils/helpers';

type Dataset = {
  label: string;
  id: any;
  data: number[];
  backgroundColor: string;
  borderColor?: string;
  borderWidth?: number;
  animation?: {
    duration: number;
  };
};

interface WheelViewProps {
  chartToEdit: Partial<WheelValues>;
  maxPoints: number;
  datasetLabels: string[];
  datasets: Dataset[];
  updateDataset: (
    chartToEdit: Partial<WheelValues>,
    category: string,
    score: number
  ) => void;
}

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const containerWidth = 690;

const portraitRatio = 1;
const squareRatio = 2;

const selectionSetting = {
  intersect: true,
  mode: 'point' as any,
};
export const WheelView = ({
  chartToEdit,
  maxPoints,
  datasetLabels,
  datasets,
  updateDataset,
}: WheelViewProps) => {
  const isMobile = useIsMobile(900);

  const isPortrait =
    windowLoaded() &&
    Math.min(window.innerWidth, containerWidth) < window.innerHeight;
  const chartIsEmpty = !datasetLabels.length;
  const interactionPoints: Dataset[] = new Array(maxPoints)
    .fill(0)
    .map((i, index) => ({
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
        aspectRatio: !isPortrait ? squareRatio : portraitRatio,
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
            updateDataset(chartToEdit, category, score);
          }
        },
        scales: {
          r: {
            grid: {
              color: 'black',
            },

            ticks: {
              display: !chartIsEmpty,
              z: 1,
              font: {
                size: isMobile ? 10 : 14,
                weight: 'bold',
              },
              backdropColor: colors.grey,
              color: 'white',
              maxTicksLimit: maxPoints,
              count: maxPoints,
              precision: 0,
              stepSize: 1,
            },
            pointLabels: {
              display: true,
              centerPointLabels: true,
              color: datasets.find(dataset => dataset.id === chartToEdit)
                ?.backgroundColor,
              font: {
                weight: 'bold',
                size:
                  datasetLabels.length > 10
                    ? isMobile
                      ? 12
                      : 18
                    : isMobile
                    ? 14
                    : 22,
              },
            },
          },
        },
      }}
    />
  );
};
