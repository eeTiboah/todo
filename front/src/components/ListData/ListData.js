import React from 'react'


const ListData = ({titleInfo})=> {
    const customIndividual = titleInfo.map((item)=>{
        return (
            <div className="card" key={item._id}>
                <p>{item.name}</p>
                <button>Delete</button>
            </div>
        )
    })

    const addItemHandler = (event)=>{
        console.log(event.target.value);
    }
    return (
        <div >
            <div className="listData">
                {customIndividual}
            </div>
           
        </div>
    )
}

export default ListData;