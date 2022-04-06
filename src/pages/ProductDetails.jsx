import { useParams } from "react-router-dom"
import { useState , useEffect } from "react"
import { DATA } from "../DATA"
import { useDispatch  , useSelector} from "react-redux"
import { addItem , delItem } from "../redux/actions"

const ProductDetails = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const state = useSelector(state => state.reducer)
  
  const proDetails = DATA.filter( x=> x.id === parseInt(id))
  const product = proDetails[0]
  
  const exist = state.find(x => x.id === product.id)
  const [cartBtn , setCartBtn] = useState(exist ? true : false)

  const handleCart = product => {
    if(exist) {
      dispatch(delItem(product))
      setCartBtn(false)
    } else {
      dispatch(addItem(product)) 
      setCartBtn(true)
    }
  }


  useEffect(() => {
    localStorage.setItem('store' , JSON.stringify(state))
  }, [state])


  return (
    <div className="container product-details my-5 py-5">
      <div className="row">
        <div className="product-img col-md-6 text-center">
          <img src={product.img} alt={product.title}/>
        </div>
        <div className="details col-md-6">
          <h1 className="display-5 fw-bold">{product.title}</h1>
          <hr />
          <h2 className="my-4">{`$${product.price}`}</h2>
          <p className="lead">{product.desc}</p>
          <button className="btn btn-outline-danger my-5" onClick={()=>handleCart(product)}>{cartBtn ? 'Remove from Cart' : 'Add to Cart'}</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails