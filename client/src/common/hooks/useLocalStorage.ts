import { useState } from "react";

export function useLocalStorage<T>(key: string) {
  const [value, setValue] = useState<T>();

  try {
    const result = JSON.parse(localStorage.getItem(key) ?? "");

    if (result) {
      setValue(result);
    }
  } catch (error: unknown) {
    console.error(error);
    throw error;
  }

  function setLocalValue(value: T) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error: unknown) {
      console.error(error);
      throw error;
    }
    setValue(value);
  }

  return [value, setLocalValue];
}
