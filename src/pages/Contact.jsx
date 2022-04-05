import React from 'react'

const Contact = () => {
  return (
    <div className='container mb-5'>
      <div className="row">
        <div className="col-12 text-center py-4 my-4">
          <h1>Do you have any Question?</h1>
          <hr />
        </div>
      </div>

      <div className="row">
        <div className="col-md-5 text-center">
          <img src="/assets/images/contact.png" alt="Contact Us" height="300px" width="300px" />
        </div>
        <div className="col-md-7">
          <form>
            <div class="mb-3">
              <label for="fullName" class="form-label">Full Name</label>
              <input type="text" class="form-control" id="fullName" placeholder="Hapi Mak" />
            </div>
            <div class="mb-3">
              <label for="formEmail" class="form-label">Email address</label>
              <input type="email" class="form-control" id="formEmail" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
              <label for="formTextarea" class="form-label">Example textarea</label>
              <textarea class="form-control" id="formTextarea" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-outline-danger">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact





