import React from 'react'

const AddItem = ()=>{

    const addItemHandler = (event) {
        const itemName = event.target.value
    }

    return (
        <div>
            <label htmlFor='todoItem'>Add Item</label>
            <input type='text' id="todoItem" onChange={addItemHandler} name="todoItem" placeholder="Add New Item" /> 
        </div>
    )
}

export default AddItem