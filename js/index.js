import { ShowDataOnload } from "./showDataOnload.js";

import { AddToCells } from "./addToCells.js";

const runTimeTable = function(){
    // everything runs from here

    const main = document.getElementById('main');
    const tableCells = document.querySelectorAll()
    console.log(main)

    const showSavedDataOnload = new ShowDataOnload();
    showSavedDataOnload.checkLocalStorage()
}
document.addEventListener('DOMContentLoaded', runTimeTable)