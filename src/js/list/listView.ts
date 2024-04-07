import { Film } from "../utils/interface"
export const buildListFilms = (data:Film): HTMLElement => {
    return `
        <div class="list-item">
           <div class="item-image">
            <img src="${data}"
           </div> 
        </div>
    `
}