import { ShowDataOnload } from "./showDataOnload.js";

import { AddToCells } from "./addToCells.js";

const runTimeTable = function(){
    // everything runs from here

    const main = document.getElementById('main');
    const weekCommence = document.querySelector('.weekCommencing')
    const tableCells = document.querySelectorAll('.cells');
    console.log(weekCommence)

    const showSavedDataOnload = new ShowDataOnload();
    showSavedDataOnload.showWeekCommencing(weekCommence)
    showSavedDataOnload.checkLocalStorage()
}
document.addEventListener('DOMContentLoaded', runTimeTable)