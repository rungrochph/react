
import "./ReportCom.css"
import { useContext } from "react"

import DataContext from "../data/DataContext";
 const ReportCom = (()=>{
    const {income,expense} = useContext(DataContext)
    return(
        <div>
        {/* <DataContext.Consumer>
            {context=> <p>รายรับ :{context.income} รายจ่าย : {context.expense}</p>}
        </DataContext.Consumer> */}

            {/* <p>รายรับ: {income}</p>
            <p>รายจ่าย: {expense}</p> */}

        <h4>ยอดคงเหลือ (บาท)</h4>
        <h1>฿{income-expense}</h1>
        <div className="report-container">
            <div >
            <h4>ยอดรายได้ทั้งหมด</h4>
            <p className="report plus">฿{income}</p>
            </div>
            <div >
            <h4>ยอดรายจ่ายทั้งหมด</h4>
            <p className="report minus">฿{expense}</p>
            </div>
            
        </div>
        </div>
    )   
 })
 export default ReportCom