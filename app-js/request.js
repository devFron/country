import {Countries} from "./helpers/countries.js";
export const GetAll = async(url)=>{
    try {
        let res = await fetch(url || 'https://restcountries.eu/rest/v2/all') 
        if(!res.ok)throw {
            status:res.status,
            message_status:res.statusText
        }    
        let json = await res.json()
        json.forEach(el=> {
            Countries({
                image:el.flag,
                name:el.name,
                population:el.population,
                region:el.region,
                capital:el.capital                
            })
        });
    } catch (err) {
        console.log(err.status);
        if(err.status === 404){
            alert(`I'm sorry, an error occurred when recovering the countries `)        
        }else{
            alert(`I'm sorry, something unexpected happened Error ${err.status} ${err.message_status}`)        
        }
    }
}