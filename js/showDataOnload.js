export class ShowDataOnload {
    /**
     * grab any data from local storage and show on page load
     */
    days = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat'];

    showWeekCommencing(text){
        
        let date = new Date()
        let day = date.toDateString()
      
        return text.textContent += `${day} ` 
    }

    checkLocalStorage(){
        console.log('i will check local storage and show data on page if anything is in local storage')
    }
}