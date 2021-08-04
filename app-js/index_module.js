import {header} from "./helpers/header.js";
import { Form } from "./helpers/form.js";
import { GetAll } from "./request.js";
import { aCountry } from "./helpers/a_country.js";
import {CheckDarkMode} from "./dark_mode.js"
const $root = document.querySelector('#root')
const $countries = document.createElement('section')
$countries.classList.add('countries')
const $upButton = document.createElement('section')
$upButton.classList.add('up')
$upButton.innerHTML = `<i class="fas fa-arrow-up up__icon"></i>`
$upButton.style.display = 'none'
const $seeCountryBox = document.createElement('section')
$seeCountryBox.classList.add('see__country')
const $seeCountryTemplate = document.querySelector('#a-country-template').content
let $clone = document.importNode($seeCountryTemplate,true)
document.addEventListener('DOMContentLoaded',async(e)=>{
    $root.appendChild(header())
    $root.appendChild(Form())
    $root.appendChild($countries)
    $root.appendChild($upButton)
    await GetAll({
        filter:'false'
    })
    $seeCountryBox.appendChild($clone)
    $root.appendChild($seeCountryBox)
    CheckDarkMode()
})

document.addEventListener('submit',(e)=>{if(e.target.matches('form')){e.preventDefault()}})

document.addEventListener('click',async(e) =>{

    if(e.target.matches('.search__icon')){

        let nameOfCountry = document.querySelector('#form').search.value.toLowerCase()
        let expreg = /^[0-9]+$/;
        if(expreg.test(nameOfCountry)){
            alert('please enter a valid country')
        }

        await GetAll({
            url:`https://restcountries.eu/rest/v2/name/${nameOfCountry}`,
            filter:'true'
        })
        CheckDarkMode()
    }

    if(e.target.matches('.up')|| e.target.matches('.up__icon')){
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    if(e.target.matches('.country-box')){
        $seeCountryBox.style.display='block'     
        aCountry(e.target)
    }
    if(e.target.matches('.a-country__button')){
        $seeCountryBox.style.display='none'     
    }
    if(e.target.matches('.dark-mode') ||e.target.matches('.dark-mode > *')){
        let $body = document.querySelector('body')
        $body.classList.toggle('body__dark')
        if($body.classList.contains('body__dark')){
            localStorage.setItem('dark-mode-country','true')
        }else{
            localStorage.setItem('dark-mode-country','false')
        }
    }
})

document.addEventListener('change',async(e)=>{
    if(e.target.matches('select')){
        if(e.target.value === 'Filter by Region'|| e.target.value === 'America'){
            return
        }else{
            await GetAll({
                url:`https://restcountries.eu/rest/v2/region/${e.target.value.toLowerCase()}`,
                filter:'true'
            })
            CheckDarkMode()
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