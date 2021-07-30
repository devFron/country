import {header} from "./helpers/header.js";
import { Form } from "./helpers/form.js";
const $root = document.querySelector('#root')
document.addEventListener('DOMContentLoaded',(e)=>{
    $root.appendChild(header())
    $root.appendChild(Form())
})