import 'jsvectormap';
import 'jsvectormap/dist/maps/canada.js';
// import 'jsvectormap/dist/maps/'
import BaseVectorMap from './BaseVectorMap';

//components

const CanadaVectorMap = ({
  width,
  height,
  options
}) => {
  return <>
      <BaseVectorMap width={width} height={height} options={options} type="canada" />
    </>;
};
export default CanadaVectorMap;