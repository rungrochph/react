import PropTypes from 'prop-types'; // ES6
import "./Item.css"
const Item =(props)=>{
    const {title,amount} = props
    const status = amount < 0 ? "expense":"income"
    const symbol = amount < 0 ? "" : "+"
    return( 
        <li className={status}>{title}<span>{symbol}{amount}</span></li>
    )
}
  
Item.propTypes={
    // id:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
}

export default Item