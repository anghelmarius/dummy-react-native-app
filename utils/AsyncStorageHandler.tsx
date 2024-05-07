import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveInLocalStorage = async (key: string, data: any) => {
  await AsyncStorage.setItem(key, data);
};
export const removeFromLocalStorage = async (key: string) => {
  await AsyncStorage.removeItem(key);
};
export const getfromLocalStorage = async (key: string) => {
  return await AsyncStorage.getItem(key);
};
