'use client'
import MyScroll from '/public/NavbarScroll.svg';
import './Navbar.css';

function Navbar() {
  
  const slideRin=(e)=>{
    console.log('slidein')
  }
  const slideRout=(e)=>{
    console.log('slideout')
  }
  return (
    <div className='navbarscrolls'>
      <button onMouseOver={slideRin} onMouseLeave={slideRout}><MyScroll /></button>
      <button onMouseOver={slideRin} onMouseLeave={slideRout}><MyScroll /></button>
      <button onMouseOver={slideRin} onMouseLeave={slideRout}><MyScroll /></button>
      <button onMouseOver={slideRin} onMouseLeave={slideRout}><MyScroll /></button>
    </div>
  );
}

export default Navbar;
