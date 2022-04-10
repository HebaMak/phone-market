import { NavLink } from "react-router-dom"


const About = () => {
  return (
      <div className="container py-5">
        <div className="row">
          <div className="col-md-8">
            <h1 className="text-danger fw-bold mb-4">About Us</h1>
            <p> this is a simple mobile shop app made by using react.js and redux</p>

          <h5>featutes in this app</h5>
          <ul>
            <li>app formed of simple pages Home, Products, Product details Contact, Checkout and Cart. </li>
            <li>Navbar has login , register icons which open login and register modal and icon "Cart" which direct to the cart page and show the number of items in the cart.</li>
            <li>in the Home page and Products page there is a display to the 30 product.</li>
            <li>each product show an image, title, price and icon to by it.</li>
            <li>buy now icon direct to the details page of each product in which you can see more details about the product and also you can add it to the cart.</li>
            <li>in product details the button is add to cart if the product is not in the cart and remove from cart if the product is in the cart.</li>
            <li>in cart page you can see the image of the product, title and price and a button for deleting the product from the cart.</li>
            <li>in cart page also if there are products you will proceed the checkout page in which you can see the total price and process of pay </li>
            <li>I use Bootsrtap in styling and the app is responsive for different screens</li>
          </ul>
  
          </div>
          <div className="col-md-4 text-center mt-5">
          <img src="/assets/images/about.png" alt="About Us" height="400px" width="400px" />
            <NavLink to="/contact" className="btn btn-outline-danger px-3">Contact Us</NavLink>
          </div>
        </div>
      </div>
  )
}

export default About