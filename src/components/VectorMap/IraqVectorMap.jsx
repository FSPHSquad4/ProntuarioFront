import 'jsvectormap';
import 'jsvectormap/dist/maps/iraq.js';
import BaseVectorMap from './BaseVectorMap';
const IraqVectorMap = ({
  width,
  height,
  options
}) => {
  return <>
      <BaseVectorMap width={width} height={height} options={options} type="iraq" />
    </>;
};
export default IraqVectorMap;