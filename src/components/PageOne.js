import React, { Component } from 'react'
import App from './App'
import { Link } from 'react-router-dom'
import JSONDebugger from '../utils/JSONDebugger'

// example JSON data
const exampleJSONData = {
    data1: 'data1',
    data2: 'data2',
    data3: 123
}

class PageOne extends Component {
    render(){
        return(
            <App> 
                <br/>
                <div className="border color-aqua">
                    <p><Link to='/'>Go to root page</Link></p>
                    <p> This is page one </p>
                    <p> Observe the page address on your browser </p>
                    <p>Below is an example of the JSON debugger</p>
                    <JSONDebugger json={exampleJSONData} />
                
                </div> 
            </App> 
        )
    }
}

export default PageOne

