
export function addActiveCells(cellArray){
    let s = []
    cellArray.forEach(el => {
        let ob = {}
        ob.id = el.id
        ob.cell = el
        ob.cellRow = el.parentElement.className;
        ob.hour = el.parentElement.children[0].innerText;
        ob.day = document.querySelectorAll('th')[el.cellIndex].textContent;
        s.push(ob)
    });
    
    return s
}

export function showNavButtons(nav, arr){
    console.log(nav)

    nav.forEach(el => {
        if(arr.length === 0){
            el.style.visibility = 'hidden';
        }else{
            el.style.visibility = 'visible'
        }
    })

    return nav
}

export function addEvsToCorrectCellandClearSet(evtOb, cells){
    console.log(evtOb)
    console.log(cells)
    let cellsWithContent = []
    cellsWithContent.push(evtOb)

    for(let c of cells){
        for(let i of evtOb.cellID){
            let ul = document.createElement('ul')
            ul.classList.add('cellListUl')
            let li = document.createElement('li');
            li.textContent = evtOb.title
            if(c.id === i){
                if(!c.firstElementChild){
                    c.appendChild(ul);
                    ul.appendChild(li)
                }else{
                    c.firstElementChild.appendChild(li);
                }
            }
        }
    }
   
    console.log(evtOb.cellID)

    return evtOb
}

