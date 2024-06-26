import { getmaterias } from "../config/urlapis";

export const materiasapi = async (token) => {
  try {
    const response = await fetch(getmaterias, {
      method: "GET",
      headers: { mani: token },
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
export const obtenermaterasapi = async (token) => {
  try {
    const response = await fetch(getMateriaById, {
      method: "GET",
      headers: { mani: token },
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
