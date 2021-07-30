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
})