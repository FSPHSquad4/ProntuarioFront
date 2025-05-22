import 'jsvectormap';
import 'jsvectormap/dist/maps/russia.js';
import BaseVectorMap from './BaseVectorMap';
const RussiaVectorMap = ({
  width,
  height,
  options
}) => {
  return <>
      <BaseVectorMap width={width} height={height} options={options} type="russia" />
    </>;
};
export default RussiaVectorMap;