import React from 'react'

const Signup = () => {
  return (
    <>
      {/* Button trigger modal */}
      <button type="button" className="btn btn-outline-danger ms-auto " data-bs-toggle="modal" data-bs-target="#signupModal">
      <i className='fa fa-user-plus me-1'></i> Sign Up
      </button>

      {/* Modal */}
      <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="signupModalLabel">Sign Up</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <button className="btn btn-outline-danger w-100 mb-4">
                <i className="fa fa-google me-2"></i> Sign Up With Google
              </button>
              <button className="btn btn-outline-danger w-100 mb-4">
                  <i className="fa fa-facebook me-2"></i> Sign Up With Facebook
              </button>
            <form>
              <div className="mb-3">
                <label htmlFor="loginInput" className="form-label">User Name</label>
                <input type="text" className="form-control" id="loginInput" required/>
              </div>
              <div className="mb-3">
                <label htmlFor="loginInputEmail" className="form-label">Email address</label>
                <input type="email" className="form-control" id="loginInputEmail" aria-describedby="emailHelp" required/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="loginInputPassword" className="form-label">Password</label>
                <input type="password" className="form-control" id="loginInputPassword" required/>
              </div>
              <div className="mb-3">
                <label htmlFor="loginInputPasswordConfirm" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="loginInputPasswordConfirm" required/>
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="loginCheck"/>
                <label className="form-check-label" htmlFor="loginCheck">Check me out</label>
              </div>
              <button type="submit" className="btn btn-danger w-100 mb-5">Register</button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup