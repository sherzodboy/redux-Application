export const SetItem = (key, data) => {
  try {
    localStorage.setItem(key, data);
  } catch (error) {
    console.log("Error saving data");
  }
};
