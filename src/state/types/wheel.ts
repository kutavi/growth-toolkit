export enum WheelValues {
  current = 'current',
  ideal = 'ideal',
}

type CategoryValues = {
  [key in WheelValues]: number;
};

export interface Category extends CategoryValues {
  id: number | string;
}
