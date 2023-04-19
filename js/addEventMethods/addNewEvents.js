
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
    // for(let b of nav){
    //     console.log(b)
    //     if(arr.length === 0){
    //         b.style.visibility = 'visible'
    //     }else{
    //         b.style.visibility = 'hidden'
    //     }
    // }
    // if(arr.length === 0){
    //     return nav.style.display = 'none';
    // }else{
    //     return nav.style.display = 'flex';
    // }
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

export function deleteObs(arr, strgArr){
    console.log(arr)
    console.log(strgArr)
   
    for(let i of arr){
        console.log(i)
        i.cell.classList.remove('activeCell')
        i.cell.classList.remove('cells')
    }
    return arr
}


