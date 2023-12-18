function hasNull(target) {
  for (var member in target) {
    if (target[member] == '') return true;
  }
  return false;
}

function checkIfImageExists(url, callback) {
  const img = new Image();
  img.src = url;

  if (img.complete) {
    callback(true);
  } else {
    img.onload = () => {
      callback(true);
    };

    img.onerror = () => {
      callback(false);
    };
  }
}

export { hasNull, checkIfImageExists };
