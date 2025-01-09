function splitBy<Type>(array: Type[], size: number): Type[][] {
  const result: Type[][] = [];
  let index: number = 0;
  for (let i = 0; i < size; i++) {
    result.push([]);
    for(let j = 0; j < Math.floor(array.length / size); j++)
      result[i].push(array[index++]);
  }
  result.push([]);
  for (let i = 0; i < array.length % size; i++)
    result[result.length - 1].push(array[index++]);
  return result;
}