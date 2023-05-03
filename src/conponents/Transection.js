import Item from "./Item";
import "./Transection.css";
// import DataContext from "../data/DataContext";


const Transection = (props) => {
  const { items } = props;


  return (
    <div>
      <ul className="item-list">
        {items.map((element) => {
          return <Item {...element} key={element.id}></Item>;
        })}
      </ul>
      
    </div>
  );
};

export default Transection;
