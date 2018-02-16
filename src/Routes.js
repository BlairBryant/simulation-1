import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home'

export default (
    <Route path='/' component={Home} exact/>
)