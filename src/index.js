import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(<App />, document.querySelector('#root'))

const arr = [0, 6, 9, 4, 7]
const arr2 = [{ 0: 1 }, { 6: 1 }, { 9: 5 }, { 4: 7 }, { 7: 8 }]
// arr2.delete(2)
console.log(arr2)
