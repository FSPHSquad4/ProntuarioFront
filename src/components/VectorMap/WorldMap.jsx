import 'jsvectormap';
import 'jsvectormap/dist/maps/world.js';
import BaseVectorMap from './BaseVectorMap';

//components

const WorldVectorMap = ({
  width,
  height,
  options
}) => {
  return <>
      <BaseVectorMap width={width} height={height} options={options} type="world" />
    </>;
};
export default WorldVectorMap;