
export class EventObj {
    constructor(title, date, note, ind){
        this.title = title
        this.date = date
        this.note = note
        this.ind = ind
    }

    get eventTitle(){
        return this.title;
    }

    get eventDate(){
        return this.date;
    }

    get eventNotes(){
        return this.note;
    }

    get indexNo(){
        return this.ind;
    }
}