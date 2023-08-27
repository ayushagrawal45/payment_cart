import React from 'react'
class Navbar extends React.Component {
    state = {  } 
    render() { 
        return <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#">
      Apna Cart
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
   
  </nav>
        </div>;
    }
}
 
export default Navbar;