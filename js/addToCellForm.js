

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
        

        const fieldset = document.createElement('fieldset')
        fieldset.style.height = '65vh'
        fieldset.style.width = 25 + 'vw'
        fieldset.style.margin = '0 auto'
        fieldset.style.padding = '1rem'
    

        const leg = document.createElement('legend')
        leg.textContent = 'Event Information';
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
        dateLabel.textContent = 'Date: '

        const dateInput = document.createElement('input')
        dateInput.setAttribute('type', 'date')
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
        tArea.setAttribute('placeholder', 'enter brief description of event...')
        tArea.style.fontSize = '15px'

        const butDiv = document.createElement('div')
        butDiv.classList.add('eventButtDiv')
        butDiv.style.marginTop = '0.5rem'

        const addEventBut = document.createElement('button')
        addEventBut.setAttribute('form', 'eventInfoForm')
        addEventBut.classList.add('evBut')
        addEventBut.textContent = 'add event'
        addEventBut.style.height = '2rem'
        addEventBut.style.width = '10rem'


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

        return formDiv;
    }

    autoSizeTextArea(){

    }

    handleFormdata(){
        console.log('yo yoy yoy yoy')
    }
}