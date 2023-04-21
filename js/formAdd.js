
export function appendForm(el, form){
    form.style.display = 'block';
    return el.appendChild(form);
}

export function closeForm(el, table){

    el.parentElement.style.display = 'none';
    if(el.nextSibling !== document.querySelector('form')){
        table.style.display = 'block'
    }else{
        el.nextSibling.reset()
        table.style.display = 'block';
    }
}

export function removeActiveClassListOnClose(arr){
    for(let act of arr){
        if(act.cell.className === 'cells activeCell'){
            act.cell.classList.remove('activeCell');
        }
        arr = []
    }
    
    return arr;
}


export function focusEls(crnt){
    let count = 0
    document.activeElement.blur();
    let current = [crnt.elements[1], crnt.elements[2], crnt.elements[3], crnt.elements[4], crnt.elements[5]];
    current[count].focus();

    crnt.addEventListener('keypress', (e) => {
        // cycle through fields on enter
        if(e.key === 'Enter'){
            e.preventDefault();
            count++;
            console.log(count)
            if(count === current.length) count = 0;
            }
            current[count].focus();
    })
}

export function validateInput(inp){
    
    if(inp.value !== ''){
        inp.style.border = ''
        return true
    }else{
        inp.focus()
        inp.style.border = '5px solid red'
        inp.style.backgroundColor = '#D3D8DC'
        inp.setAttribute('placeholder', 'please enter a title');
        return false
    }
   
}

