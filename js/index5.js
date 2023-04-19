
import { AddToCellForm } from "./addToCellForm.js";
import { ShowDataOnload } from "./showDataOnload.js";

import { AddEvent } from "./addEvClass.js";
import { Formdata } from "./formDataObjClass.js";
import { LocalStorageClass } from "./localStorageClass.js";

import { showNavButtons, addActiveCells, addEvsToCorrectCellandClearSet } from "./addNewEvents.js";
import { appendForm, closeForm, removeActiveClassListOnClose, focusEls, validateInput } from "./formAdd.js";
import { ViewCellItems } from "./viewItems.js";


const runTimeTable = function(){
    const main = document.getElementById('main');
    const tTable = document.querySelector('.timetable');
    const navLinks = document.querySelector('.navUl'); //navbarLinks>ul
    const addToCell = document.querySelector('.addToCell');
    const viewItems = document.querySelector('.viewItems');
    const clearTable = document.querySelector('.resetAll');
    const weekCommence = document.querySelector('.currentMonday');
    
    let cells

    const activeCellsSet = new Set();
    const addEvForm = new AddToCellForm().enterEventInformation()
    const addNewEv = new AddEvent(activeCellsSet);
    let table = document.querySelector('.table-style');
    let arrObs = []
    
    let evObsCount = 0;

    const newDate = new Date();
        const [month, today, year] = [
            newDate.getMonth()+1,
            newDate.getDate(),
            newDate.getFullYear(),
          ];

     // check storage and bring in onload
     const strge = localStorage;
     const savToLocal = new LocalStorageClass(strge);
     const storageName = 'daily_time_table';
     const strgeObjName = 'daily_time_table_objects';
 
     let chkStrge;

     console.log()
     
 
     function startApp(){
         const showSavedDataOnload = new ShowDataOnload(strge);
         showSavedDataOnload.showWeekCommencing(weekCommence);
        //  navLinks.style.display = 'flex';
     }
     startApp()

      // if data in storage load it
    function bringInStoredData(){
        let loadDataStrge 
        cells = document.querySelectorAll('.cells');
        chkStrge = savToLocal.checkLocalStorage(storageName);
        console.log(chkStrge)
        if(chkStrge.length !== 0){
            savToLocal.updatePageFromStrge(chkStrge, cells)
        }
        return chkStrge;
    }
    bringInStoredData()
    console.log(chkStrge)

    let cellSelection = []

    for(let i=0; i<cells.length; i++){

        cells[i].setAttribute('id', i)
    
        if(cells[i].className === 'cells' || cells[i].className === 'cells activeCell'){
            cells[i].addEventListener('click', (e) => {
                cells[i].classList.toggle('activeCell')
                
        
                if(cells[i].className === 'cells activeCell'){
                    cellSelection.push(cells[i])
                }
        
                if(cells[i].className !== 'cells activeCell'){
                    cellSelection.splice(cellSelection.indexOf(cells[i]), 1);
                }
                
                
                arrObs = addActiveCells(cellSelection)
                console.log(arrObs)
                showNavButtons([addToCell, viewItems], cellSelection);
             
            })
        }
    }
    // clearTable.style.visibility = 'visible'

    addToCell.addEventListener('click', (e) => {
        tTable.style.display = 'none';
        // navLinks.style.display = 'none';
        addToCell.style.visibility = 'hidden'
        viewItems.style.visibility = 'hidden'

        let apd = appendForm(main, addEvForm);
        apd.children[1][1].style.border = '';
        apd.children[1][1].style.backgroundColor = '';
        let fcs = focusEls(apd.children[1]);

        console.log(cellSelection.length)

        let cls = apd.children[0].addEventListener('click', () => {
            closeForm(apd.children[0], tTable);
            arrObs = removeActiveClassListOnClose(arrObs);
            cellSelection = []
            console.log(arrObs)
        })

        let stopEnterSubmitting = document.forms['eventInfoForm'];
        stopEnterSubmitting.addEventListener('keypress', (e) => {
         let target = e.target;
         target.style.border = '';
         if(e.key === 'Enter'){
             e.preventDefault();
         }
        })

        let cellId = []
        let cellHours = []
        let cellDay = []
        
        let frm = document.forms['eventInfoForm'].elements;
         // validate form and submit //
        frm[2].value = `${today}/${month}/${year}`
        frm[4].addEventListener('click', (e) => {
            let validate = validateInput(frm[1]);
            if(validate){
                console.log(arrObs)
                arrObs.forEach(el => {
                    console.log(el)
                    cellId.push(el.id)
                    cellHours.push(el.hour)
                    cellDay.push(el.day)
                })
               
                console.log(arrObs)
                console.log(cellId)
                
                const evOb = new Formdata(frm[1].value, frm[2].value, frm[3].value, cellId, cellDay, cellHours);
                closeForm(apd.children[0], tTable)
                arrObs = removeActiveClassListOnClose(arrObs);
                let sv = savToLocal.saveToStorage(evOb, storageName)
                cellSelection = []
                cellId = []
                cellDay = []
                cellHours = []
                console.log(arrObs)
             
                console.log(sv)

                let addInfoToCells = addEvsToCorrectCellandClearSet(sv, cells);
                console.log(addInfoToCells)
                chkStrge.push(addInfoToCells)
            }
        })
    })
    
    viewItems.addEventListener('click', (e) => {
        console.log('view cell items from here')
        console.log(chkStrge)
        tTable.style.display = 'none';
        // navLinks.style.display = 'none';
        addToCell.style.visibility = 'hidden'
        viewItems.style.visibility = 'hidden'

        const viewCellContents = new ViewCellItems( arrObs, chkStrge, main).viewCellItems();
        
        console.log(viewCellContents)

        let appendItems = appendForm(main, viewCellContents)
        console.log(appendItems.children[0])
        appendItems.children[0].addEventListener('click', () => {
            closeForm(appendItems.children[0], tTable);
            arrObs = removeActiveClassListOnClose(arrObs);
            console.log(arrObs)
            cellSelection = []
            console.log(chkStrge)
            savToLocal.refreshedStorage(chkStrge, storageName)
        })
       
    })

    
    clearTable.addEventListener('click', () => {
        console.log('clear table')
        let clearAll = confirm('are you sure you want to delete everything?')
        console.log(clearAll)
        if(clearAll){
            localStorage.clear();
            location.reload()
        }
    })

   }

document.addEventListener('DOMContentLoaded', runTimeTable)