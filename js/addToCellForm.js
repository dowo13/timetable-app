

export class AddToCellForm {
    

    enterEventInformation(){
    
        const formDiv = document.createElement('div');
        formDiv.classList.add('eventInfo');
        formDiv.style.height = 70 + 'vh'
        formDiv.style.width = 30 + 'vw'
        formDiv.style.backgroundColor = 'pink'
        formDiv.style.margin = '0 auto'
        formDiv.style.border = '5px solid black'
        formDiv.style.padding = ' 1rem'
        formDiv.style.position = 'relative'
        formDiv.style.display = 'none'

        const closeForm = document.createElement('span');
        closeForm.classList.add('closeForm');
        closeForm.setAttribute('title', 'close')
        closeForm.innerHTML =  '&#x2715'
        closeForm.style.width = '1.5rem'
        closeForm.style.position = 'absolute'
        closeForm.style.right = 0.5 + 'rem'
        closeForm.style.top = '0.5rem'
        closeForm.style.fontSize = '1.5rem'
        closeForm.style.fontWeight = 'bold'
        closeForm.style.fontFamily = 'Times'
        

        const frm = document.createElement('form');
        frm.setAttribute('name', 'eventInfoForm');
        frm.setAttribute('id', 'eventInfoForm')
        

        const fieldset = document.createElement('fieldset')
        fieldset.style.height = '65vh'
        fieldset.style.width = 25 + 'vw'
        fieldset.style.margin = '0 auto'
        fieldset.style.padding = '1rem'
    

        const leg = document.createElement('legend')
        leg.textContent = 'Enter Event Details';
        leg.style.fontSize = `1.5rem`

        const titleDiv = document.createElement('div')
        titleDiv.classList.add('formTitleDiv')

        const titLabel = document.createElement('label')
        titLabel.setAttribute('for', 'eventTitle')
        titLabel.textContent = 'Event Title: '

        const titInput = document.createElement('input')
        titInput.setAttribute('type', 'text')
        titInput.setAttribute('id', 'eventTitle')
        titInput.setAttribute('name', 'eventTitle')
        titInput.style.width = '100%'
        titInput.style.height = '2rem'

        const dateDiv = document.createElement('div')
        dateDiv.classList.add('formDateDiv')
        dateDiv.style.marginTop = '0.5rem'

        const dateLabel = document.createElement('label')
        dateLabel.setAttribute('for', 'dateTitle')
        dateLabel.textContent = 'Event Date: '

        const dateInput = document.createElement('input')
        dateInput.setAttribute('id', 'dateInput')
        dateInput.setAttribute('name', 'dateInput')
        dateInput.style.width = '100%'
        dateInput.style.height = '2rem'

        const textareaDiv = document.createElement('div')
        textareaDiv.classList.add('textAreaDiv')
        textareaDiv.style.marginTop = '0.5rem'

        const tArea = document.createElement('textarea')
        tArea.classList.add('tArea')
        tArea.setAttribute('name', 'tArea')
        tArea.setAttribute('id', 'tArea')
        tArea.style.width = '100%'
        tArea.style.height = '40vh'
        tArea.setAttribute('placeholder', 'enter any further information here...')
        tArea.style.fontSize = '15px'

        const butDiv = document.createElement('div')
        butDiv.classList.add('eventButtDiv')
        butDiv.style.marginTop = '0.5rem'
        
        const addEventBut = document.createElement('input')
        addEventBut.setAttribute('type', 'button')
        addEventBut.classList.add('evBut')
        addEventBut.value = 'add event'
        addEventBut.style.height = '2rem'
        addEventBut.style.width = '10rem'
        addEventBut.setAttribute('title', 'click me to add event')

        formDiv.appendChild(closeForm);
        formDiv.appendChild(frm);
        frm.appendChild(fieldset);
        fieldset.appendChild(leg);
        fieldset.appendChild(titleDiv)
        titleDiv.appendChild(titLabel)
        titLabel.appendChild(titInput)
        fieldset.appendChild(dateDiv)
        dateDiv.appendChild(dateLabel)
        dateLabel.appendChild(dateInput)
        fieldset.appendChild(textareaDiv)
        textareaDiv.appendChild(tArea)
        fieldset.appendChild(butDiv)
        butDiv.appendChild(addEventBut)

        let x = window.matchMedia("(orientation:portrait)")
        let y = window.matchMedia("(orientation:landscape)")
        let z = window.matchMedia("(max-width: 930px)")
        if(x.matches){
            formDiv.style.width = '80vw'
            formDiv.style.marginTop = '3rem'
            frm.style.width = 'auto'
            frm.style.height = 'auto'
            fieldset.style.width = 'auto'
            tArea.style.height = '40vh'
        }
        if(y.matches && z.matches){
            formDiv.style.width = '80vw'
            formDiv.style.border = '3px solid black'
            formDiv.style.marginTop = '2rem'
            frm.style.height = 'auto'
            fieldset.style.height = '60vh'
            fieldset.style.width = 'auto'
            titleDiv.style.width = 'auto'
            titleDiv.style.height = 'auto'
            titInput.style.height = 'auto'
            dateInput.style.height = 'auto'
            tArea.style.height = '17.25vh'
            addEventBut.style.height = 'auto'
        }
        if(!y.matches && !z.matches){
            formDiv.style.width = '30vw'
            formDiv.style.backgroundColor = 'pink'
            formDiv.style.border = '5px solid black'
            formDiv.style.marginTop = ''
            frm.style.height = ''
            fieldset.style.height = '65vh'
            fieldset.style.width = '25vw'
            titleDiv.style.width = 'auto'
            titleDiv.style.height = ''
            titInput.style.height = '2rem'
            dateInput.style.height = '2rem'
            tArea.style.height = '40vh'
            addEventBut.style.height = '2rem'
        }

        return formDiv;
    }

    autoSizeTextArea(){

    }
}