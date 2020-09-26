import React, {useState, useEffect} from 'react'
import {getTodos} from '../../api'
import ListDropDown from '../ListDropDown/ListDropDown'


const ListTitle = () => {
    const [listTitles, setListTitles] = useState([])
    const [inputListTitle, setInputListTitle] = useState('')
    const [inputListItem, setInputListItem] = useState('')
    const [customListData, setCustomListData] = useState({
        name: '',
        items: [{
            name: ''
        }]
    })

    useEffect(()=>{
        const customList = async()=>{
            const {selectedList} = await getTodos();
            setListTitles(selectedList)
        }
        customList()
    }, [])

    const changeHandler = (event)=>{
        const item = event.target.value;
        setInputListTitle(item)
    }

    const addItemHandler = (event) => {
        const item = event.target.value
        setInputListItem(item)
    }

    const addListNameHandler = ()=>{
        setCustomListData({
            name: inputListTitle,
            items: [{
                name: ''
            }]
        })
    }

    const addListItemHandler = ()=> {
        console.log('')
    }

    return (
       <div>
            <label htmlFor="listname">Title</label>
            <input type='text' id="listname" value={customListData.name} onChange={changeHandler} name="listname" placeholder="Add New Item" />
            <button onClick={addListNameHandler}>Add List Name</button>

            <ListDropDown listTitles={listTitles} />
            <label htmlFor='todoItem'>Add Item</label>
            <input type='text' id="todoItem" value={customListData.items.name} onChange={addItemHandler} name="todoItem" placeholder="Add New Item" /> 
            <button onClick={addListItemHandler}>Add List Item</button>

        </div>
    )
}

export default ListTitle;