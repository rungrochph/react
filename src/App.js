import Transection from "./conponents/Transection";
import "./App.css";
import Formcom from "./conponents/Form";
import { useEffect, useState } from "react";
import DataContext from "./data/DataContext";
import ReportCom from "./conponents/ReportCom";
// import { element } from "prop-types";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"

const Title = () => (
  <h3 style={{ color: "red", textAlign: "center" }}>
    แอพบัญชีรายรับ - รายจ่าย
  </h3>
);
function App() {
  // const initdata = [
  //   {id:1,title:"ค่ารักษาพยาบาล",amount:-400} ,
  //   {id:2,title:"ค่าข้าว",amount:-400} ,
  //   {id:3,title:"เงินเดือน",amount:400}

  //  ]
  const [item, setItem] = useState([]);
  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);
  // const [showReport,setShowReport] = useState(false);
  // const reducer =(state,action)=>{
  //   switch(action.type){
  //     case "ADD" :
  //       return setShowReport(true)
  //     case "SUB" :
  //       return setShowReport(false)
  //     default: 
  //     // return showReport()
  //   }
  // }
  // const [result,dispatch] = useReducer(reducer,showReport)
  const newDataapp = (newitem) => {
    // console.log("Items",newitem)
    setItem((prev) => {
      return [newitem, ...prev];
    });
  };
  //return <h1>Hello react </h1> //only one line
  useEffect(() => { 
    const amount = item.map((item) => item.amount);
    const income = amount
      .filter((element) => element > 0)
      .reduce((total, element) => (total += element), 0);
    const expense = amount
      .filter((element) => element < 0)
      .reduce((total, element) => (total += element), 0);
    setReportIncome(income);
    setReportExpense(expense*-1);
  }, [item, reportIncome, reportExpense]);
  return (
    //return many of line

    <DataContext.Provider value={{income: reportIncome,expense: reportExpense, }}>
      <div className="container">
        <Title />
        {/* {showReport && <ReportCom />} */}
        <Router>
        <div>
          <ul className="horizontal-menu">
            <li>
              <Link to="/">ข้อมูลบัญชี</Link>
              <Link to="/insert">บันทึกข้อมูล</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/" exact><ReportCom></ReportCom></Route>
            <Route path="/insert"><Formcom additemDa={newDataapp}></Formcom><Transection items={item}></Transection></Route>
          </Switch>
        </div>
        </Router>
        
        
        {/* <button onClick={()=>dispatch({type:"ADD"})}>แสดง</button>
        <button onClick={()=>dispatch({type:"SUB"})}>ซ่อน</button> */}
      </div>
    </DataContext.Provider>
  );
}

export default App;
