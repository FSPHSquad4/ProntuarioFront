const groupByFields = (array, f) => {
  /*
    descrição dos parâmetros:
        f: função que retorna o array de campos 
        por exemplo : (item) => {
            return [itemField1, itemField2];
        }
        array: array de dados para agrupar, por ex. : [{...}, {...}]
    */
  const groups = {};
  array.forEach(o => {
    const group = JSON.stringify(f(o));
    groups[group] = groups[group] || [];
    groups[group].push(o);
  });
  return Object.keys(groups).map(group => {
    return groups[group];
  });
};

/**
 * dividir a matriz em pedaços
 * @param array - matriz para dividir
 * @param chunkSize - tamanho do pedaço
 * @returns
 */
const splitArray = (array, chunkSize) => {
  const chunks = Array(Math.ceil(array.length / chunkSize)).fill(1).map((_, index) => index * chunkSize).map(begin => array.slice(begin, begin + chunkSize));
  return chunks;
};
export { groupByFields, splitArray };