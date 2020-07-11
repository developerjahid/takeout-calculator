import React, { Component } from 'react'
import { Table } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            a: 0,
            b: 28,
            c: 32,
            d: 0,
            ee: 0,
            f: 0,
            g: 0,
            h: 0,
            i: 0,
            j: 0,
            k: 17,
            l: 29.7,
            m: 32.2,
            n: 32.8,
            o: 40.5,
            p: 3.8,
            q: 0,
            r: 0,
            s: 0,
            t: 0,
            u: 0,
            v: 0,
            w: 0,
            x: 0,
            y: 0,
            z: 0,
            aa: 0,
            ab: 0,
            ac: 0,
            ad: 0,
            ae: 0,
            af: 0,
            ag: 0,
            ah: 0,
            ai: 0,
            aj: 0,
            ak: 0,
            al: 0,
            am: 0,
            an: '-',
            monthlyAverage: 0,
            yearlyAverage: 0,
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        const { a, b, c, k, l, m, n, o, p } = this.state

        //for d
        const dNum = a * 12

        //for ee
        const eeNum = (a * b) / 100

        //for f
        const fNum = eeNum * 12

        //for g
        const gNum = (a * c) / 100

        //for h
        const hNum = gNum * 12

        //for i
        const iNum = a - eeNum - gNum

        //for i
        const jNum = iNum * 12

        //for q
        const qNum = (iNum * k) / 100

        //for r
        const rNum = (iNum * l) / 100

        //for s
        const sNum = (iNum * m) / 100

        //for t
        const tNum = (iNum * n) / 100

        //for u
        const uNum = (iNum * o) / 100

        //for v
        const vNum = (iNum * p) / 100

        //for w
        const wNum = qNum * 12

        //for x
        const xNum = rNum * 12

        //for x
        const yNum = sNum * 12

        //for x
        const zNum = tNum * 12

        //for x
        const aaNum = uNum * 12

        //for x
        const abNum = vNum * 12

        //for ac
        const acNum = iNum - qNum

        //for ad
        const adNum = iNum - rNum

        //for ae
        const aeNum = iNum - sNum

        //for af
        const afNum = iNum - tNum

        //for ag
        const agNum = iNum - uNum

        //for ah
        const ahNum = iNum - vNum

        //for ai
        const aiNum = qNum - vNum

        //for aj
        const ajNum = rNum - vNum

        //for ak
        const akNum = sNum - vNum

        //for al
        const alNum = tNum - vNum

        //for am
        const amNum = uNum - vNum

        //for average number /////////
        const arrayNum = [aiNum, ajNum, akNum, alNum, amNum]
        //monthly average
        let total = 0
        for (let i = 0; i < 5; i++) {
            total += arrayNum[i]
        }
        const maNum = total / 5

        //monthly average
        const yaNum = maNum * 12

        //set the state
        this.setState({
            d: dNum.toFixed(2),
            ee: eeNum.toFixed(2),
            f: fNum.toFixed(2),
            g: gNum.toFixed(2),
            h: hNum.toFixed(2),
            i: iNum.toFixed(2),
            j: jNum.toFixed(2),
            q: qNum.toFixed(2),
            r: rNum.toFixed(2),
            s: sNum.toFixed(2),
            t: tNum.toFixed(2),
            u: uNum.toFixed(2),
            v: vNum.toFixed(2),
            w: wNum.toFixed(2),
            x: xNum.toFixed(2),
            y: yNum.toFixed(2),
            z: zNum.toFixed(2),
            aa: aaNum.toFixed(2),
            ab: abNum.toFixed(2),
            ac: acNum.toFixed(2),
            ad: adNum.toFixed(2),
            ae: aeNum.toFixed(2),
            af: afNum.toFixed(2),
            ag: agNum.toFixed(2),
            ah: ahNum.toFixed(2),
            ai: aiNum.toFixed(2),
            aj: ajNum.toFixed(2),
            ak: akNum.toFixed(2),
            al: alNum.toFixed(2),
            am: amNum.toFixed(2),
            monthlyAverage: maNum.toFixed(2),
            yearlyAverage: yaNum.toFixed(2),
        })

        e.preventDefault()
    }

    render() {
        let {
            a,
            b,
            c,
            d,
            ee,
            f,
            g,
            h,
            i,
            j,
            q,
            r,
            s,
            t,
            u,
            v,
            w,
            x,
            y,
            z,
            aa,
            ab,
            ac,
            ad,
            ae,
            af,
            ag,
            ah,
            ai,
            aj,
            ak,
            al,
            am,
            an,
            monthlyAverage,
            yearlyAverage,
        } = this.state
        return (
            <div className='container'>
                <br />
                <h1>Takeout Calculator</h1>
                <h4>Type Monthly Gross -</h4>
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        name='a'
                        value={a}
                        type='number'
                    />
                    <h5>Type Percentage Labor Costs -</h5>
                    <input
                        onChange={this.handleChange}
                        name='b'
                        value={b}
                        type='number'
                    />
                    <h5>Type Percentage Food Costs-</h5>
                    <input
                        onChange={this.handleChange}
                        name='c'
                        value={c}
                        type='number'
                    />
                    <br />
                    <br />
                    <button type='submit'>Calculate</button>
                    <br />
                </form>
                <br />
                <Table bordered>
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Monthly</th>
                            <th>Annual</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope='row'>Gross</th>
                            <td></td>
                            <td>{a}</td>
                            <td>{d}</td>
                        </tr>
                        <tr>
                            <th scope='row'>Labor Costs</th>
                            <td>{b}</td>
                            <td>{ee}</td>
                            <td>{f}</td>
                        </tr>
                        <tr>
                            <th scope='row'>Food Costs</th>
                            <td>{c}</td>
                            <td>{g}</td>
                            <td>{h}</td>
                        </tr>
                        <tr>
                            <th scope='row'>Net Before Delivery Servicess</th>
                            <td></td>
                            <td>{i}</td>
                            <td>{j}</td>
                        </tr>
                    </tbody>
                </Table>
                <br />
                <br />
                <div className='text-center'>
                    <h2>Delivery/Online Ordering Service</h2>
                </div>
                <br />
                <Table responsive bordered>
                    <thead>
                        <tr>
                            <th>Delivery / Online Ordering Service</th>
                            <th>Monthly Cost</th>
                            <th>Annual Cost</th>
                            <th>Net after Deliver Services</th>
                            <th>Monthly Savings</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope='row'>Seamless</th>
                            <td>{q}</td>
                            <td>{w}</td>
                            <td>{ac}</td>
                            <td>{ai}</td>
                        </tr>
                        <tr>
                            <th scope='row'>UberEats</th>
                            <td>{r}</td>
                            <td>{x}</td>
                            <td>{ad}</td>
                            <td>{aj}</td>
                        </tr>
                        <tr>
                            <th scope='row'>Caviar</th>
                            <td>{s}</td>
                            <td>{y}</td>
                            <td>{ae}</td>
                            <td>{ak}</td>
                        </tr>
                        <tr>
                            <th scope='row'>Doordash</th>
                            <td>{t}</td>
                            <td>{z}</td>
                            <td>{af}</td>
                            <td>{al}</td>
                        </tr>
                        <tr>
                            <th scope='row'>PostMates</th>
                            <td>{u}</td>
                            <td>{aa}</td>
                            <td>{ag}</td>
                            <td>{am}</td>
                        </tr>
                        <tr>
                            <th scope='row'>Hungry Hippo Solutions</th>
                            <td>{v}</td>
                            <td>{ab}</td>
                            <td>{ah}</td>
                            <td>{an}</td>
                        </tr>
                    </tbody>
                </Table>
                <div className='text-center'>
                    <h2>
                        The Online Ordering Services Can Save You at Hungry
                        Hippo Solutions:
                    </h2>
                    <br />
                    <h3>Average Monthly Saving: {monthlyAverage} </h3>
                    <br />
                    <h3>Average Annual Saving: {yearlyAverage}</h3>
                    <br />
                    <br />
                </div>
            </div>
        )
    }
}

export default App
