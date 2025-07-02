import _React from 'react'

function Contact(props) {
  return (
    <div>
        <div className="container mb-5">
          <h1 className='text-center'>{props.detail}</h1>
      <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Enter Your Name" aria-label="Enter Your Name" aria-describedby="basic-addon1"/>
</div>

{/* <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient’s username" aria-label="Recipient’s username" aria-describedby="basic-addon2"/>
  <span class="input-group-text" id="basic-addon2">@example.com</span>
</div> */}

{/* <div class="mb-3">
  <div class="input-group">
  </div>
</div> */}


<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Email Address" aria-label="Username"/>
</div>

<div class="input-group">
  {/* <span class="input-group-text"></span> */}
  <textarea class="form-control" aria-label="With textarea" placeholder='Enter your message' rows={12} style={{resize: 'none'}}></textarea>
</div>
<div className="btn-primary d-flex justify-content-center my-3">
  <button className='bg-primary border' style={{height: 45}}>Submit</button>
</div>
    </div>
    </div>
  )
}

export default Contact
