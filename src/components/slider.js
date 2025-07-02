import _React from 'react'

function Slider(props) {
  return (
    <div>
        <div className="container text-center fs-1">
            <h1>{props.head}</h1>
      <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100"/>
    </div>
    <div className="carousel-item">
      <img src='' className="d-block w-100"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
    </div>
  )
}

export default Slider
