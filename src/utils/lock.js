// @flow

export type Coordinate = [number, number];
export type GetSlope = [Coordinate, Coordinate];
export type Slope = { slope: number };
export type GetIntercept = { point: Coordinate } & Slope;

export type FluidSizeType = {
  min: number,
  max: number,
  lockMin?: number,
  lockMax?: number,
};

export const getSlope = ([[x1, y1], [x2, y2]]: GetSlope) =>
  (y2 - y1) / (x2 - x1);
export const getIntercept = ({ point: [x, y], slope }: GetIntercept) =>
  y - slope * x;

export const createLockFunction = ({
  min: y1,
  max: y2,
  lockMin: x1 = 400,
  lockMax: x2 = 1000,
}: FluidSizeType) => {
  const slope = getSlope([[x1, y1], [x2, y2]]);
  const intercept = getIntercept({ point: [x1, y1], slope });

  // console.log(y1, y2, slope, intercept);

  return (width: number) =>
    width < x1 ? y1 : width >= x2 ? y2 : slope * width + intercept;
};

export default createLockFunction;
