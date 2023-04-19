
export class AddEvent{
    constructor(cells){
        this.cells = cells
    }
    deselectCellOnTwoClicks(activeC){
        console.log()
        this.cells.delete(activeC);
        return activeC.classList.remove('activeCell');
    }
    closeForm(el, table){
        console.log()
        el.addEventListener('click', () => {
            el.parentElement.style.display = 'none';
            table.style.display = 'block';
            for(let c of this.cells){
                if(c.className === 'cells activeCell'){
                    c.classList.remove('activeCell')
                    el.nextSibling.reset();
                }
            }
        })
    }
    // getData(form, title, date, note){
    //     console.log(form)
    //     if(title.value === ''){
    //         title.addEventListener('keypress', (e) => {
                
    //             const target = e.key;

    //             title.style.border = '';
    //             if(target === 'Enter'){
    //                 e.preventDefault()
    //             }
                
    //         })
    //     }else{
    //         title.style.border = '';
    //         console.log(title.value, date.value, note.value)
    //         return {title:title.value, date:date.value, note: note.value};
    //     }
      
    // }
    validateForm(fields){
        let passedVal;
        console.log()
        for(let f of fields){
        console.log()
        if(f.value === ''){
            f.style.border = '5px solid red';
        }else{
            f.style.border = '';
        }
        }
       
       
        let test = fields.map(el => {
            return el.value !== ''
        })
        console.log()
        let res = test.every(el => el === true)
        console.log(res)
        return res;
    }
    makeFormdataObjects(){
        
    }


}