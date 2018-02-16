import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Bin extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            price: 0,
            toggle: false
        }
        this.deleteBin = this.deleteBin.bind(this)
    }

    // componentDidMount() {
    //     axios.get(`http://localhost:3500/api/bin/${this.props.match.params.id.charAt(1)}`).then(res => {
    //         this.setState({name: res.data[0].name, price: res.data[0].price})
    //     })
    // }

    deleteBin() {
        axios.delete(`http://localhost:3500/api/bin/${this.props.match.params.id.charAt(1)}`).then(res => {
            console.log("placeholder")
        })
    }

    render() {
        return(
            <div>
                <header className='binHeader'>
                    <Link to='/'className='headerLogo'><button>Home</button></Link>
                    <Link to={`/api/bins/${this.props.match.params.id.charAt(0)}`} className='headerShelf'>
                    <div>{`Shelf ${this.props.match.params.id.charAt(0)}`}</div>
                    </Link>
                    <div className='headerBin'>{`Bin ${this.props.match.params.id}`}</div>
                </header> <br />
                {this.state.name ? 
                
                (<div>
                <h3>Name</h3>
                <input value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} disabled={!this.state.toggle}/>
                <h3>Price</h3>
                <input value={this.state.price} onChange={(e) => this.setState({price: e.target.value})} disabled={!this.state.toggle}/><br />
                <button onClick={() => this.setState({toggle: !this.state.toggle})}>{!this.state.toggle ? "Edit" : "Save"}</button>
                <Link to={`/api/bins/${this.props.match.params.id.charAt(0)}`} onClick={() => this.deleteBin()}><button>Delete</button></Link>
                </div>)
                    
                    :

                    (<div>   
                        <h3>Name</h3>
                        <input onChange={(e) => this.setState({name: e.target.value})}/>
                        <h3>Price</h3>
                        <input onChange={(e) => this.setState({price: e.target.value})}/>
                        <br /><br />
                        <Link to={`/api/bins/${this.props.match.params.id.charAt(0)}`}><button className="addInventory">+ Add to Inventory</button></Link>
                    </div>
                    )
                    // value={`$ ${this.state.price}`}
                }
                
                
                
                
            </div>
        )
    }
}