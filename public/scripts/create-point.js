
function populateUFs() {
    const ufselect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json())
    .then( states => {
        for(const state of states){
            ufselect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
        
    })
}

populateUFs()

function getcities(event) {
    const cityselect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")


    const ufvalue = event.target.value

    stateInput.value = event.target.options[event.target.selectedIndex].text
    
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufvalue}/municipios`
    
    cityselect.innerHTML = ""
    cityselect.disabled = true

    fetch(url)
    .then( res => res.json())
    .then( cities => {
        for(const city of cities){
            cityselect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }   
        cityselect.disabled = false
    })
}


document
    .querySelector("select[name=uf]")
    .addEventListener("change", getcities)



//itens de coleta
document
    .querySelector("select[name=uf]")
    .addEventListener("change", getcities)

const itemToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items")

let selectedItems = []

function handleSelectedItem(event) {
    const itemLi =event.target
    //adicionar ou remover classe com js
    itemLi.classList.toggle("selected")

    const itemId = event.target.dataset.id
    
    const alreadySelected = selectedItems.findIndex( item => {
        const itemFound = item == itemId
        return itemFound
    })

    if (alreadySelected >= 0) {
        const filteredItems = selectedItems.filter(item => {
            const itemIsDiferent = item != itemId
            return itemIsDiferent
        })
        selectedItems = filteredItems
    }else{
        selectedItems.push(itemId)
    }
    
    collectedItems.value = selectedItems
}
