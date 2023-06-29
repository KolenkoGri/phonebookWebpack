const phonebook = 'phonebook';

const getStorage = (key) => {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
const setStorage = (key, object) => {
  const data = getStorage(key);
  data.push(object);
  localStorage.setItem(key, JSON.stringify(data));
};
const dataStorage = JSON.parse(localStorage.getItem(phonebook));
const removeStorage = (key, phoneNumber) => {
  const data = getStorage(key);
  const dataFiltered = data.filter((item) => item.phone !== phoneNumber);
  localStorage.setItem(key, JSON.stringify(dataFiltered));
};

export default {
  phonebook,
  dataStorage,
  getStorage,
  setStorage,
  removeStorage,
};
