import React, { Component } from 'react'
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            a: '',
            b: '',
            c: '',
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        const { a, b } = this.state
        const aNumber = parseInt(a)
        const bNumber = parseInt(b)
        const firstMath = aNumber * bNumber
        const result = firstMath / 100

        this.setState({ c: result })

        e.preventDefault()
    }

    render() {
        let { a, b, c } = this.state
        return (
            <div>
                <h1>Takeout Calculator</h1>
                <h4>Type the number -</h4>
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        name='a'
                        value={a}
                        type='number'
                    />
                    <h4>Type the percent -</h4>
                    <input
                        onChange={this.handleChange}
                        name='b'
                        value={b}
                        type='number'
                    />
                    <br />
                    <br />
                    <button type='submit'>Calculate</button>
                    <br />
                    <h4>Result: {c}</h4>
                </form>
            </div>
        )
    }
}

export default App
