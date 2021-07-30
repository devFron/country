import {header} from "./helpers/header.js";
const $root = document.querySelector('#root')
document.addEventListener('DOMContentLoaded',(e)=>{
    $root.appendChild(header())
})