// import { ShowDataOnload } from "./showDataOnload.js";
// import { LocalStorageClass } from "./localStorageClass.js";
// import { AddToCells } from "./addToCells.js";
// import { AddToCellForm } from "./addToCellForm.js";
// import { handleFormData } from "./handleForms.js";


const topLevelVariables = {
    main: document.getElementById('main'),
    table: document.querySelector('.timetable'),
    tableCells: document.querySelectorAll('.cells'),
}


const runTimeTable = function(){
    // everything runs from here
    const weekCommence = document.querySelector('.currentMonday')
    console.log()

    // load in any items from local storage
    const showSavedDataOnload = new ShowDataOnload(localStorage);
    showSavedDataOnload.showWeekCommencing(weekCommence)
    showSavedDataOnload.checkLocalStorage()

    // call addToCells class
    const addTocellsFrm = new AddToCellForm()
    const eventForm = addTocellsFrm.enterEventInformation()

    const addItems = new AddToCells(addTocellsFrm, topLevelVariables.tableCells, topLevelVariables.main)
    let targetCell 

    const appendForm = topLevelVariables.tableCells.forEach(cell => {
        cell.addEventListener('click', () => {
            topLevelVariables.table.style.display = 'none';
            targetCell = cell;
            getForm()
        })
    })

    async function getForm(){
        const appnd = await addItems.appendFormToPage();
        const addBut = appnd.querySelector('.evBut')
        console.log(addBut, targetCell)
    }

   


    
}
// document.addEventListener('DOMContentLoaded', runTimeTable)

export { topLevelVariables }