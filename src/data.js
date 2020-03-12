// estas funciones son de ejemplo

export const orderAZ = (data) => {
  const sort = data.sort((abc, bcd) => abc.name.localeCompare(bcd.name));
  return sort;
};


export const anotherExample = () => 'OMG';
