import { getLastFilms } from "./listModel";
import { buildListFilms } from "./listView";
import { Film } from "../utils/interface";
export const listController = async(listWrapper: HTMLElement) :Promise<void> => {
 
    const loadFilms =  async (): Promise<Film[]> => {
        const films =  await getLastFilms()
        console.log(films);
        
        return films
    }

    const handlerListBuild = (films: Film[]) : void =>{
        const listContainer = document.createElement('div');
        listContainer.classList.add('container');

        for (const film of films) {
            const cardFilmElement = document.createElement('div');
            cardFilmElement.classList.add('col')
            const cardFilm = buildListFilms(film, cardFilmElement);
            listWrapper.appendChild(cardFilm);

        }
    }

    const films = await loadFilms()
    handlerListBuild(films)
}