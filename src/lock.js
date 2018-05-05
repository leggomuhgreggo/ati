// @flow

type Coordinate = [number, number];
type GetSlope = [Coordinate, Coordinate];
type Slope = { slope: number };
type GetIntercept = { point: Coordinate } & Slope;

type FluidSizeType = {
  min: number,
  max: number,
  lockMin?: number,
  lockMax?: number,
};

const getSlope = ([[x1, y1], [x2, y2]]: GetSlope) => (y2 - y1) / (x2 - x1);
const getIntercept = ({ point: [x, y], slope }: GetIntercept) => y - slope * x;

const createFluidSizeFunction = ({
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

export default createFluidSizeFunction;
