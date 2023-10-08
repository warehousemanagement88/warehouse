export function isiDataIndex(results) {
  const inputMapping = [
    { id: "agita", path: "agita" },
    { id: "novi", path: "novi" },
    { id: "image", path: "image" },
    { id: "lb", path: "lb" },
    { id: "da", path: "da" },
    { id: "kes", path: "kes" },
  ];

  inputMapping.forEach(({ id, path, index, property }) => {
    const inputElement = document.getElementById(id);
    const value = getNestedValue(results, path, index, property);
    inputElement.innerHTML = value;
  });
}

export function isiDataProposal(results) {
  const inputMapping = [
    { id: "lb", path: "lb" },
    { id: "da", path: "da" },
    { id: "kes", path: "kes" },
  ];

  inputMapping.forEach(({ id, path, index, property }) => {
    const inputElement = document.getElementById(id);
    const value = getNestedValue(results, path, index, property);
    inputElement.innerHTML = value;
  });
}

export function isiDataUs(results) {
  const inputMapping = [
    { id: "agita", path: "agita" },
    { id: "novi", path: "novi" },
    { id: "image", path: "image" },
  ];

  inputMapping.forEach(({ id, path, index, property }) => {
    const inputElement = document.getElementById(id);
    const value = getNestedValue(results, path, index, property);
    inputElement.innerHTML = value;
  });
}
function getNestedValue(obj, path, index, property) {
  const value = path
    .split(".")
    .reduce((value, key) => (value && value[key] ? value[key] : ""), obj);
  // console.log(`Value at path ${path}:`, value);

  if (
    Array.isArray(value) &&
    value.length > index &&
    value[index].hasOwnProperty(property)
  ) {
    return value[index][property];
  }

  return value;
}
