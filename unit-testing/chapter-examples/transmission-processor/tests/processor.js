function processor(transmission) {
  transmission = transmission.trim();

  if (
    transmission.indexOf("::") < 0 ||
    transmission.split("::").length - 1 !== 1
  ) {
    return -1;
  }

  let parts = transmission.split("::");
  const idPart = parts[0];
  let rawDataPart = parts[1];

  const id = Number(idPart);
  if (isNaN(id)) {
    return -1;
  }

  if (rawDataPart[0] !== "<" || rawDataPart[rawDataPart.length - 1] !== ">") {
    return { id, rawData: -1 };
  }

  rawDataPart = rawDataPart.substring(1, rawDataPart.length - 1);

  let isValid = true;

  rawDataPart.split("").forEach((char) => {
    if (isNaN(char) || char.trim() === "") {
      isValid = false;
    }
  });

  if (!isValid) {
    return { id, rawData: -1 };
  }

  return {
    id,
    rawData: rawDataPart,
  };
}

module.exports = processor;
