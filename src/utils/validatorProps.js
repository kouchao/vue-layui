export const oneOf = (failed, arr, value) => {
  const checked = arr.indexOf(value) !== -1;
  if (checked) {
    return checked;
  } else {
    console.error(`[vue-layui warn]: prop "${failed}" ${value} must be one of ${JSON.stringify(arr)}`);
  }

};
