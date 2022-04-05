import { NavLink } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { delItem } from '../redux/actions' 


const Cart = () => {

  const state = useSelector(state => state.reducer)
  const dispatch = useDispatch()

  const handleClose = item => {
    dispatch(delItem(item))
  }

  const cartItems = item => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={item.id}>
        <div className='container py-4'>
          <button className="btn-close float-end" aria-label="close" onClick={()=>handleClose(item)}></button>
          <div className="row">
            <div className="col-md-4">
              <NavLink to={`/products/${item.id}`}>
                <img className="my-3" src={item.img} alt={item.title} height='200px' width='180px' />
              </NavLink>
            </div>
            <div className="col-md-4">
              <h3>{item.title}</h3>
              <p className="lead fw-bold">{`$${item.price}`}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
            <h2 className="text-center">Your Cart is Empty</h2>
        </div>
      </div>
    )
  }
  
  const button = () => {
    return (
      <div className="container">
        <div className="row">
          <NavLink to='/checkout' className='btn btn-outline-danger mb-5 w-25 mx-auto'>
            Proceed to Checkout
          </NavLink>
        </div>
      </div>
    )
  }

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}
    </>
  )
}

export default Cart