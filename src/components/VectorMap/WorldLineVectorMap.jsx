import 'jsvectormap';
import 'jsvectormap/dist/maps/world-merc';

//components
import BaseVectorMap from './BaseVectorMap';
const WorldLineVectorMap = ({
  width,
  height,
  options
}) => {
  return <>
      <BaseVectorMap width={width} height={height} options={options} type="world" />
    </>;
};
export default WorldLineVectorMap;