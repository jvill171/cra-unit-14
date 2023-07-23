// Choose a random item
const choice = (items) =>{
    const idx = Math.floor(Math.random() * items.length)
    return items[idx]
}

// Return copy of array w/o first appearance of item, if not found return undefined
const remove = (items, item) =>{
    for(let i = 0; i < items.length; i++){
        if(items[i] === item){
            return [...items.slice(0, i), ...items.slice(i + 1)]
        }
    }
}


export { choice, remove };