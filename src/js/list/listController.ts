import { getLastFilms } from "./listModel";
import { buildListFilms } from "./listView";
import { Film } from "../utils/interface";
export const listController = async(listWrapper: HTMLElement) :Promise<void> => {
    
    
    const loadFilms =  async (page?: number): Promise<Film[]> => {
        if (page === undefined){
            page = 1
        }
        const films =  await getLastFilms(page)
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

    const handlerLoadPage = () :void => {
        let pages:number = 1
        const observerLoadPage = new IntersectionObserver(async (entries) => {
            console.log(entries)
            if(!entries[0].isIntersecting){return}
            pages += 1
            console.log('Ejecuto una accion cuando el elemento esta visible' + entries[0].target);
            const films = await loadFilms(pages)
            handlerListBuild(films)
            lastItem(observerLoadPage)
        })

        lastItem(observerLoadPage)
    }

    const lastItem = (observerLoadPage) :void => {
        const filmsInPage = listWrapper.querySelectorAll('.col') as NodeListOf<HTMLDivElement>;
        console.log(filmsInPage);
        const lastFilmInPage = filmsInPage[filmsInPage.length - 1]
        console.log(lastFilmInPage)
        observerLoadPage.observe(lastFilmInPage) 
    }

    const films = await loadFilms()
    handlerListBuild(films)
    handlerLoadPage()

}