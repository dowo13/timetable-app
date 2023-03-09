import { LocalStorageClass } from "./localStorageClass.js";

export class ShowDataOnload {
    /**
     * grab any data from local storage and show on page load
     */
    days = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat'];

    constructor(storObj){
        this.storObj = storObj
    }

    showWeekCommencing(text){
        
        let date = new Date();
        let day = date.toDateString();
        
        const dateNow = new Date();
        const today = dateNow.getDate();
        const currentDay = dateNow.getDay();
        const newDate = dateNow.setDate(today - currentDay + 1);

        return text.textContent = `${new Date(newDate).toDateString()}`
    }

    checkLocalStorage(){
        console.log('i will check local storage and show data on page if anything is in local storage')

        const storageName = 'daily_time_table';

        if(localStorage.getItem(storageName) === null ){
            return;
        }else{
            // load in storage from here

            
        }
        console.log()
    }
}