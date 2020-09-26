import React from 'react'
import {BrowserRouter} from 'react-router-dom'

import {ListTitle, NavBar} from './components'


const App = ()=> {
    return (
        <BrowserRouter>
            <div>
                <NavBar />
                <ListTitle />
            </div>
        </BrowserRouter>
    )
}

export default App;