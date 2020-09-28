import React, {useState} from 'react'
import ListData from '../ListData/ListData'
import {getTodos} from '../../api' 
import {withRouter} from 'react-router-dom'

const ListDropDown = ({listTitles, history})=>{

    const [selectedTitle, setSelectedTitle] = useState('')
    const [titleInfo, setTitleInfo] = useState([])


    const optionSelect = listTitles.map((item)=>{
        return <option key={item._id} value={item.name}>{item.name}</option>
    });

    const listChangeHandler = async (event)=>{
        const selectCustomName = event.target.value
        history.push(`/${selectCustomName}`)
        setSelectedTitle(selectCustomName)
        const listInputTitle = event.target.value
        const {selectedList} = await getTodos()
        const index = selectedList.findIndex((x=>x.name === listInputTitle))
        const titleInfo = selectedList[index]
        setTitleInfo(titleInfo['items'])
        // setSelectedTitle(listInputTitle)
        console.log(titleInfo['items'])
        console.log(selectedList)
    }

    // console.log(selectedTitle)


    return (
        <div>
            <select onChange={listChangeHandler}>
                {optionSelect}
            </select>

            <ListData titleInfo={titleInfo}/>
        </div>
    )
}

export default withRouter(ListDropDown);