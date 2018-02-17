import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Bins extends Component {
    constructor() {
        super()

        this.state = {
            bins: []
        }
    }
    // componentWillReceiveProps() {
    //     axios.get(`http://localhost:3500/api/bins`).then(res => {
    //         this.setState({bins: res.data})
    //         console.log(this.state)
    //     })
    // }

    componentDidMount() {
        axios.get(`http://localhost:3500/api/bins/${this.props.match.params.id}`).then(res => {
            this.setState({bins: res.data})
        })

    }

    render() {
        console.log(this.state)
        let mapped = this.state.bins.map((x, i) => {
            return (
            !this.state.bins[i].name ? 
            <Link to={`/api/bin/${this.props.match.params.id}${x.id}`} key={i}><button>+ Add inventory to bin</button></Link> 
            : 
            <Link to={`/api/bin/${this.props.match.params.id}${x.id}`} key={i}><button>{`Bin ${x.id}`}</button></Link>
        )})
        return (
            <div>
                <header className='binsHeader'>
                    <Link to='/'><button className='binsLogoHolder'>Home</button></Link>
                    <div>{`Shelf ${this.props.match.params.id}`}</div>
                </header> <br />
                {mapped}
                
            </div>
        )
    }
}