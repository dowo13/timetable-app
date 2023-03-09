import { AddToCells } from "./addToCells.js";
import { AddToCellForm } from "./addToCellForm.js";
import { ShowDataOnload } from "./showDataOnload.js";

const runTimeTable = function(){
    
    const main = document.getElementById('main');
    const tTable = document.querySelector('.timetable');
    const navLinks = document.querySelector('.navbarLinks>ul');
    const addToCell = document.querySelector('.addToCell');
    const viewItems = document.querySelector('.viewItems');
    const deletItems = document.querySelector('.deleteItems');
    const weekCommence = document.querySelector('.currentMonday');
    const cells = Array.from(document.querySelectorAll('.cells'));
    console.log(tTable)
    // instantiate add to cells form form
    const addCellForm = new AddToCellForm().enterEventInformation()
    console.log(addCellForm)


    const showDataOnPageLoad = function(){
        // this will check storage and populate the required cells

            const showSavedDataOnload = new ShowDataOnload(localStorage);
            showSavedDataOnload.showWeekCommencing(weekCommence)
            showSavedDataOnload.checkLocalStorage()
    }

    const localSor = showDataOnPageLoad()

    // select cell to edit
    for(let c of cells){
        console.log()
        c.addEventListener('click', () => {
            navLinks.style.display = 'flex';
            c.classList.add('activeCell')
            editCell(c)
        })
    }

    function editCell(cell){
        console.log(cell)
        addToCell.addEventListener('click', (e) => {
            console.log('form from here')
            tTable.style.display = 'none';

            const openForm = new AddToCells(cell, addCellForm, main, tTable)
            openForm.appendFormToPage();
            openForm.closeForm()
            navLinks.style.display = 'none'
            // i may need to show data again here //
            console.log(openForm)
        })
        viewItems.addEventListener('click', (e) => {
            console.log('view saved items here')
        })
        deletItems.addEventListener('click', (e) => {
            console.log('delete items here')
        })

    }
    


   

   console.log()

   
}
document.addEventListener('DOMContentLoaded', runTimeTable)