import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import HelloComfunc  from './Hello'
// import Car from './HelloClass';
// const data =`สวัสดีชาวโลกกหีหมอย`

// function FrisrtCom(){
//   return <h1>Hello react</h1>
// }

// ReactDOM.render(<FrisrtCom/>,document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <HelloComfunc></HelloComfunc>
  // <FrisrtCom/>
  <App/>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
