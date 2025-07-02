import _React from 'react'

function Navbar(props) {
  return (
   <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary position-fixed w-100 top-0 z-3">
  <div className="container-fluid">
    <a className="navbar-brand fs-2 fw-bold text-danger" href='/home'>  {props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto ms-5 mb-2 mb-lg-0 ">
        <li className="nav-item">
          <a className="nav-link active " aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
         <li className="nav-item">
          <a className="nav-link" href="#">My Work</a>
        </li>
         <li className="nav-item">
          <a className="nav-link" href="#">Contact Me</a>
        </li>
        {/* <li className="nav-item dropdown"/>
          <Link className="nav-link dropdown-toggle" to="/services" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </Link>
          {/* <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/">Web Development</Link></li>
            <li><Link className="dropdown-item" to="/">Web Designing</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/">Search Engine optimization</Link></li>
          </ul>
        </li> */}
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
   </div>
  )
};


export default Navbar;
