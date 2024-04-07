import { getLastFilms } from "./listModel";
export const listController = (listWrapper: HTMLElement) : void => {
    console.log(listWrapper);
    const films = getLastFilms()
    
}