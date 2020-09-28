import axios from 'axios'

const url = 'http://localhost:5000';

export const getTodos = async(customList)=>{
    try{
        const {data} = await axios.get(url)
        return data;
    }
    catch (error) {
        throw new Error(error)
    }
}

export const addCustomList = async(payload)=>{
    try{
        const customListName = {
            name: payload.name,
            status: false,
            items: [{
                name: payload.items.name
            }]
        }
        const saveTodo = await axios.post(url, customListName)
        return saveTodo
    } catch(error){
        throw new Error(error)
    }
}


export const deleteCustomListData = async(_id)=>{
    try{
        const deletedTodo = await axios.delete(`${url}/delete${_id}`)
        return deletedTodo
    } catch(error){
        throw new Error(error)
    }
}

// export const getCustomList = async()=>{
//     try{
//         const todos = await axios.get(`${url}/customList`)
//         console.log(todos)
//         return todos
//     }
//     catch (error) {
//     throw new Error(error)
//     }
// }

// export const getCustomTodo = async()=>{
//     try{
//         const customTodo = await axios.get(url)
//     }
// }

