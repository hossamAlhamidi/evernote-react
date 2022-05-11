import React ,{useEffect} from 'react'
import {Link , NavLink} from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css';
import M from  'materialize-css/dist/js/materialize.min.js';

const Navbar = () => {
  // useEffect(()=>{
    
  //     var elems = document.querySelectorAll('#mobile-demo');
  //     M.Sidenav.init(elems, {});
   
  // },[])
  return (
    <div>
    <nav>
    <div className="nav-wrapper teal lighten-2">
      <Link to="/" className="brand-logo left">Notebook</Link>
      {/* <a  data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a> */}
      <ul id="nav-mobile" className="right ">
        <li><NavLink to="/favorites">Favorite</NavLink></li>
      </ul>
    </div>
  </nav>
  {/* <ul className="sidenav teal lighten-2" id="mobile-demo">
    <li><NavLink to="/favorites" className="white-text">Favorite</NavLink></li>
  </ul> */}
  </div>

  )
}

export default Navbar