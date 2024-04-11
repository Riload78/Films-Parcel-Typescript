import { listController } from "./list/listController";
//import { CustomError } from "./utils/interface";
interface CustomError {
    type: string,
    message: string,
}

const errorHtlml:CustomError = {
    type: 'error',  
    message: 'Element with ID "list-wrapper" not found.'
}
const error: CustomError = { type:'error' , message:'Element with ID "list-wrapper" not found.'};

document.addEventListener("DOMContentLoaded", () : void  => {
    const listWrapper: HTMLElement | null = document.getElementById('list-wrapper') as HTMLElement

    if (!listWrapper) throw error;
    listController(listWrapper)
})