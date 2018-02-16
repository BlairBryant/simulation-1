import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home'
import Bins from './Components/Bins'
import Bin from './Components/Bin'

export default (
    <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/api/bins/:id' component={Bins} exact/>
        <Route path='/api/bin/:id' component={Bin}/>    
    </Switch>
)