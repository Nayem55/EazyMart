import style from '../styles/CartProduct.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash} from '@fortawesome/free-solid-svg-icons'

const CartProduct = ({item , loadCart}) => {
  const handleDelete=(id)=>{
    fetch(`http://localhost:3000/api/cart/${id}`,{
      method: "DELETE"
    });
    loadCart();
  }
    return (
        <div className={`${style.cartProduct} flex`}>
          <img src={item.img} alt="" />
          <div className="ml-5 text-black">
            <p>{item.name}</p>
            <p>Price : ${item.price}</p>
            <div className="form-control">
              <div className="input-group">
                <select className="select select-bordered border-primary">
                  <option disabled selected>
                    Pick size
                  </option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                  <option>XXL</option>
                </select>
              </div>
            </div>
            Quantity : {item?.quantity}
          </div>
          <button onClick={()=>handleDelete(item.id)} className='btn bg-white border-none hover:bg-white text-xl text-error hover:text-black ml-auto  cursor-pointer'>
          <FontAwesomeIcon className="" icon={faTrash}></FontAwesomeIcon>
          </button>
        </div>
      );
}

export default CartProduct