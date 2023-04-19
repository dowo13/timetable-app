export class ViewCellItems {
    itemsArr = [];
    itemsSet = new Set();

    constructor(selectedCells, items, element ){
        this.selectedCells = selectedCells;
        this.items = items;
        this.element = element;
    }
    viewCellItems(){
        console.log('yo yoy yoy yoy')
        console.log(this.items)
        console.log(this.selectedCells)

        let arrOfItems = [];

        if(this.selectedCells.length < 1) return;

        for(let c of this.selectedCells){
            for(let i of this.items){
                for(let a of i.cellID){
                    if(c.id === a){
                        arrOfItems.push(i);
                    }
                }
            }
        }
        return this.appendListOfItems(arrOfItems)
    }
    appendListOfItems(arr){


        for(let j of arr){
            this.itemsSet.add(j)
        }

        this.itemsArr = arr;
        console.log(this.itemsSet)
        let itemCount = 0;
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('itemDiv');
        itemDiv.style.width = `30vw`;
        itemDiv.style.height = `70vh`;
        itemDiv.style.margin = `0 auto`;
        itemDiv.style.position = 'relative';
        itemDiv.style.padding = `1rem`;
        itemDiv.style.backgroundColor = 'yellow'

        const closeItems = document.createElement('span');
        closeItems.classList.add('closeForm');
        closeItems.setAttribute('title', 'close')
        closeItems.innerHTML =  '&#x2715'
        closeItems.style.width = '1.5rem'
        closeItems.style.position = 'absolute'
        closeItems.style.right = 0.5 + 'rem'
        closeItems.style.top = '0.5rem'
        closeItems.style.fontSize = '1.5rem'
        closeItems.style.fontWeight = 'bold'
        closeItems.style.fontFamily = 'Times'

        const fieldset = document.createElement('fieldset')
        fieldset.style.height = '65vh'
        fieldset.style.width = 25 + 'vw'
        fieldset.style.margin = '0 auto'
        fieldset.style.padding = '1rem'
        fieldset.style.overflow = 'hidden'
        

        const leg = document.createElement('legend')
        leg.textContent = 'saved items';
        leg.style.fontSize = `2rem`;
        leg.style.fontWeight = 'bold';

        const viewUl = document.createElement('ul');
        viewUl.classList.add('viewUl');
        viewUl.style.margin = `1rem`;

        for(let i of this.itemsSet){
            const vLi = document.createElement('li');
            vLi.classList.add('viewItemLi' + itemCount++);
            vLi.textContent = i.title;
            vLi.style.fontSize = `1.5rem`
            vLi.setAttribute('title', 'click for details');
            viewUl.appendChild(vLi);
        }

        itemDiv.appendChild(closeItems)
        itemDiv.appendChild(fieldset)
        fieldset.appendChild(leg);
        fieldset.appendChild(viewUl)

        let x = window.matchMedia("(orientation:portrait)")
        let y = window.matchMedia("(max-width: 920px)")

        if(x){
            itemDiv.style.width = 'auto'
            itemDiv.style.marginTop = '3rem'
            fieldset.style.width = 'auto'
        }

        if(y.matches){
            itemDiv.style.width = '80vw'
            itemDiv.style.border = '3px solid black'
            itemDiv.style.marginTop = '2rem'
        
            fieldset.style.height = '60vh'
            fieldset.style.width = 'auto'
            fieldset.style.overflow = 'scroll'
           
        }else{
            itemDiv.style.width = '70vw'
            itemDiv.style.width = '30vw'
            itemDiv.style.border = '5px solid black'
            itemDiv.style.marginTop = ''
        
            fieldset.style.height = '65vh'
            fieldset.style.width = '25vw'
            fieldset.style.overflow = 'hidden'
        }

        this.showItemDetailsOnClick(fieldset, viewUl)
        return itemDiv;
    }

    showItemDetailsOnClick(appendTo, list){
        
        let arrayOfTitles = Array.from(list.children)
        
        arrayOfTitles.forEach(el => {
            el.addEventListener('click', () => {
                console.log(el.textContent)
                for(let i of this.itemsSet){
                    if(i.title === el.textContent){
                        console.log('match')
                        appendTo.appendChild(this.buildEventPopUp(i))
                    }
                }
            })
        })
        let x = window.matchMedia("(orientation:landscape)")
        if(x){
            // appendTo.style.display = 'flex'   
        }
    }

    buildEventPopUp(item){

        console.log(item)

        const popUpDiv = document.createElement('div');
        popUpDiv.classList.add('itemPopUp');
        popUpDiv.style.border = '2px black solid'
        popUpDiv.style.position = 'relative'
        popUpDiv.style.padding = `1.2rem`
        popUpDiv.style.backgroundColor = 'pink'

        const heading = document.createElement('span');
        heading.classList.add('SavedHeading');
        heading.textContent = 'Event Details';
        heading.style.textAlign = 'center'
        heading.style.position = 'absolute';
        heading.style.top = 0;
        heading.style.left = `40%`
        heading.style.fontWeight = 'bold'

        const closeItems = document.createElement('span');
        closeItems.classList.add('closeForm');
        closeItems.setAttribute('title', 'close')
        closeItems.innerHTML =  '&#x2715'
        closeItems.style.width = '1.5rem'
        closeItems.style.position = 'absolute'
        closeItems.style.top = 0
        closeItems.style.right = 0 + 'rem'
        closeItems.style.backgroundColor = 'red'
        closeItems.style.textAlign = 'center'
        closeItems.addEventListener('click', () => {
            popUpDiv.style.display = 'none'
        })
        
        closeItems.style.fontSize = '1rem'
        closeItems.style.fontWeight = 'bold'

        const cellDetailsDays = document.createElement('input');
        cellDetailsDays.classList.add('cellDetailsDays');
        cellDetailsDays.setAttribute('readonly', 'true');
        cellDetailsDays.value = `Days: ${item.day}`
        cellDetailsDays.style.fontWeight = 'bold'
        cellDetailsDays.style.width = `100%`

        const cellDetailsHours = document.createElement('input');
        cellDetailsHours.classList.add('cellDetailsHours');
        cellDetailsHours.setAttribute('readonly', 'true');
        cellDetailsHours.value = `Time: ${item.hour} `
        cellDetailsHours.style.fontWeight = 'bold'
        cellDetailsHours.style.width = `100%`

        const itemTitle = document.createElement('input');
        itemTitle.classList.add('iTitle');
        itemTitle.setAttribute('readonly', 'true')
        itemTitle.value = `Title: ${item.title}`;
        itemTitle.style.fontWeight = 'bold'
        itemTitle.style.width = `100%`
        const itemDate = document.createElement('input');
        itemDate.classList.add('iDate');
        itemDate.setAttribute('readonly', 'true')
        itemDate.value = `Date: ${item.date}`;
        itemDate.style.width = `100%`
        itemDate.style.fontWeight = 'bold'
        const itemNote = document.createElement('textArea');
        itemNote.classList.add('iNote');
        itemNote.setAttribute('readonly', 'true')
        itemNote.textContent = item.note;
        itemNote.style.width = `100%`
        itemNote.style.resize = 'none'
        itemNote.style.fontWeight = 'bold'

        const del = document.createElement('button');
        del.classList.add('deleteItem');
        del.textContent = 'delete'
        del.addEventListener('click', () => {
            this.deleteItemsFromPageAndStorage(item, this.selectedCells)
            closeItems.click();
        } )

        popUpDiv.appendChild(heading);
        popUpDiv.appendChild(closeItems);
        popUpDiv.appendChild(cellDetailsDays);
        popUpDiv.appendChild(cellDetailsHours)
        popUpDiv.appendChild(itemTitle);
        popUpDiv.appendChild(itemDate);
        popUpDiv.appendChild(itemNote);
        popUpDiv.appendChild(del)

       
        return popUpDiv;
    }

    deleteItemsFromPageAndStorage(itm, cells){
        console.log(itm)
        console.log(cells)
        console.log(this.items)

        for(let id of itm.cellID){
            for(let c of cells){
                if(c.id === id){
                    for(let o of this.items){
                        if(itm.title === o.title){
                            o.cellID.splice(o.cellID.indexOf(c.id), 1);
                            o.hour.splice(o.hour.indexOf(c.hour), 1);
                            o.day.splice(o.day.indexOf(c.day), 1);
                            c.cell.children[0].children[0].remove()
                            if(o.cellID.length < 1){
                                this.items.splice(this.items.indexOf(o), 1)
                            }
                        }
                    }

                }
            }
            
        }
        console.log(this.items)
        return this.items
    }
}