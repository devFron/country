import {header} from "./helpers/header.js";
import { Form } from "./helpers/form.js";
import { GetAll } from "./request.js";
const $root = document.querySelector('#root')
const $countries = document.createElement('section')
$countries.classList.add('countries')
document.addEventListener('DOMContentLoaded',(e)=>{
    $root.appendChild(header())
    $root.appendChild(Form())
    $root.appendChild($countries)
    GetAll()
    const $form = $root.querySelector('#form')
    document.addEventListener('submit',(e)=>{
        if(e.target === $form)e.preventDefault()
    })
    document.addEventListener('click',(e) =>{
        if(e.target.matches('.search__icon')){
            let nameOfCountry = $form.search.value.toLowerCase()
            let expreg = /^[0-9]+$/;
            if(expreg.test(nameOfCountry)){
                alert('please enter a valid country')
            }
            GetAll(`https://restcountries.eu/rest/v2/name/${nameOfCountry}`)
        }
    })
    
})