import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Home extends Component {
    render() {
        let shelves = ['A', 'B', 'C', 'D']
        let mappedShelves = shelves.map((x, i) => {
            return <Link to={`/api/bins/${x}`} key={i}><button>{`Shelf ${x}`}</button></Link>
        })
        return (
            <div>
                {mappedShelves}
            </div>
        )
    }
}