
export class AddToCells {

    /**
     * requires a form 
     * table cells to enter
     * doc to append to
     */

    constructor(cell, formToAdd, elementToAppend, timetable){
        this.cell = cell
        this.formToAdd = formToAdd
        this.elementToAppend = elementToAppend
        this.timetable = timetable
    }

    appendFormToPage(){
        console.log(this.formToAdd)
        this.formToAdd.style.display = 'block'
        return this.elementToAppend.appendChild(this.formToAdd)
        
    }

    closeForm(){
        
        this.formToAdd.firstChild.addEventListener('click', (e) => {
            this.formToAdd.style.display = 'none';
            this.timetable.style.display = 'block'
            this.cell.classList.remove('activeCell')
        })
        console.log(this.formToAdd.firstChild)
    }
    
}