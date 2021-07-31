import {header} from "./helpers/header.js";
import { Form } from "./helpers/form.js";
import { GetAll } from "./request.js";
const $root = document.querySelector('#root')
const $countries = document.createElement('section')
$countries.classList.add('countries')
const $upButton = document.createElement('section')
$upButton.classList.add('up')
$upButton.innerHTML = `<i class="fas fa-arrow-up up__icon"></i>`
$upButton.style.display = 'none'
document.addEventListener('DOMContentLoaded',(e)=>{
    $root.appendChild(header())
    $root.appendChild(Form())
    $root.appendChild($countries)
    $root.appendChild($upButton)
    GetAll({
        filter:false
    })
})

document.addEventListener('submit',(e)=>{if(e.target.matches('form')){e.preventDefault()}})

document.addEventListener('click',(e) =>{

    if(e.target.matches('.search__icon')){

        let nameOfCountry = document.querySelector('#form').search.value.toLowerCase()
        let expreg = /^[0-9]+$/;
        if(expreg.test(nameOfCountry)){
            alert('please enter a valid country')
        }

        GetAll({
            url:`https://restcountries.eu/rest/v2/name/${nameOfCountry}`,
            filter:true
        })
    }

    if(e.target.matches('.up')|| e.target.matches('.up__icon')){
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
})

document.addEventListener('change',(e)=>{
    if(e.target.matches('select')){
        if(e.target.value === 'Filter by Region'|| e.target.value === 'America'){
            return
        }else{
            GetAll({
                url:`https://restcountries.eu/rest/v2/region/${e.target.value.toLowerCase()}`,
                filter:true
            })
        }
    }
})

window.addEventListener('scroll',(e)=>{
    if(window.pageYOffset > 10){
        $upButton.style.display = 'flex'
    }else{
        $upButton.style.display = 'none'
    }
})