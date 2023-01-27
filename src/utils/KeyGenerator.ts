export const KeyGenerator = () => {
  function* idMaker() {
    var index = Math.random();
    index = Math.round(index);
    while (true) yield index++;
  }

  return idMaker();
};
