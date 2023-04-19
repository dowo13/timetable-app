export class LocalStorageClass {

    constructor(storageObj){
        this.storageObj = storageObj;
    }

    checkLocalStorage(name){
        let strgearray;

        // console.log(this.storageObj.getItem(name))
        if(this.storageObj.getItem(name) === null){
            strgearray = []
        }else{
            strgearray = this.getStorage(name)
        }

        return strgearray;
    }

    getStorage(name){
        let savedItems = localStorage.getItem(name);
        let readableStorage = JSON.parse(savedItems);
        return readableStorage;
    }

    loadSavedStorage(arr){
        if(arr.length !== 0){
            for(let i=0; i<arr.length; i++){
                console.log(arr[i]);
            }
        }
        return;
    }

    saveToStorage(ob, name){
        console.log(ob)
        console.log(ob.cellID)
        let svdItems 
        let jsonArr
        let prsedData
        let toSave = []
        let obToStr = []

        obToStr.push(ob)
        console.log(obToStr)
        console.log(this.storageObj.getItem(name))

        if(this.storageObj.getItem(name) === null){
            jsonArr = JSON.stringify(obToStr)
            this.storageObj.setItem(name, jsonArr)
        }else{

            svdItems = this.storageObj.getItem(name)
            toSave = JSON.parse(svdItems)
            toSave.push(obToStr[0])
            jsonArr = JSON.stringify(toSave)
         
            this.storageObj.clear()
            this.storageObj.setItem(name, jsonArr)
        }

        return ob;
    }

    updatePageFromStrge(arr, tbleCells){

        let setOfcellID = new Set()
        let arrayOf = []

        if(arr === undefined) return

        for(let c of tbleCells){
            let ul = document.createElement('ul')
            ul.classList.add('cellListUl')
            c.appendChild(ul)
        }

        for(let i of arr){
            for(let a of i.cellID){
                setOfcellID.add(a)
                let li = document.createElement('li')
                li.textContent = i.title
                setOfcellID.forEach(el => {
                    if(el === a){
                        tbleCells[a].firstElementChild.appendChild(li)
                    }
                })
            }
        }
        console.log(setOfcellID)
        
      return arr;
    }
    refreshedStorage(arr, name){
        let stArray = this.storageObj.getItem(name)
        let strfy = JSON.stringify(arr)
        this.storageObj.clear()
        this.storageObj.setItem(name, strfy)
        return arr;
    }
}
