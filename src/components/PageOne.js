import React, { Component } from 'react'
import JSONDebugger from '../utils/JSONDebugger'

// example JSON data
const exampleJSONData = {
    data1: 'data1',
    data2: 'data2',
    data3: 123
}

class PageOne extends Component {

    handleClick = () => {
        alert('hello')
    }

    render(){
        return(
            <div className="border color-aqua">
                <button onClick={ this.handleClick }> Test button </button>

                <JSONDebugger json={exampleJSONData} />
            </div> 
        )
    }
}

export default PageOne

