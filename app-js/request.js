import {Countries} from "./helpers/countries.js";
export const GetAll = async(url)=>{
    try {
        let res = await fetch(url || 'https://restcountries.eu/rest/v2/all') 
        
    } catch (err) {
        
    }
}