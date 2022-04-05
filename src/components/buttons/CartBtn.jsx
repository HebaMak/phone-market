import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"

const CartBtn = () => {

  const state = useSelector(state => state.reducer)
  
  return (
    <NavLink to='/cart' className='btn btn-outline-danger ms-2'>
      <i className="fa fa-shopping-cart me-1"> Cart ({state.length})</i>
    </NavLink>
  )
}

export default CartBtn