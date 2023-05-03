import './Formcss.css'
import {useEffect, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
const Formcom = (props) =>{
    const [title,setTitle] = useState("")
    const [amount,setAmount] = useState(0)
    const inputTitle = (event)=>{setTitle(event.target.value)}
    const inputAmout = (event)=>{setAmount(event.target.value)}
    const [formvalid,setFormvalid] = useState(false)
    const saveData= (event)=>{
        const itemData = {
            id:uuidv4(),
            title:title,
            amount:Number(amount)
        }
        event.preventDefault()
     
      props.additemDa(itemData)
        setTitle("")
        setAmount(0)
    }
    useEffect(()=>{
        if(amount !== 0 && title.trim().length >0){
            setFormvalid(true)
        }
    },[amount,title])
    return(
        <div>
            <form onSubmit={saveData}>
                <div className="form-control">
                <div >
                    <label>Name List</label>
                    <input type="text" placeholder="Input your list name" onChange={inputTitle} value={title}></input>
                </div>
                <div>
                    <label>Amount</label>
                    <input type="number" placeholder="(= รายรับ - รายจ่าย)" onChange={inputAmout} value={amount} ></input>
                </div>
                <div>
                    <button type="submit" className="btn" disabled={!formvalid}>Add Data</button>
                </div>
                </div>
                
            </form>
        </div>
    )
}
export default Formcom