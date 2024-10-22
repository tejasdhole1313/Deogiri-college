import { list } from 'postcss';
import React from 'react'

const Navbar = () => {
  return (
    <section className='bg-blue-600 '>
 {/* <div>
<div className="">
      <div className="logo">
        <h2>Sundaram PEB Solutions</h2>
      </div>

      <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      <div className="menu-icon" onClick={toggleMenu}>
        <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
    </div>
    </div> */}
        <div className=' w-full  px-16  gap-4 ' >
         
             
            
             {['Home', 'About us', 'Administration', 'Courses' , 'Departments ', 'Research' , 'Facilities', 'UGC', 'NAAC', 'IQAC', 'Placements' , 'Awards', 'Student Corner'].map((item, index ) =>(
                <a key={index} className='fw-semibold     ml-10  '>{item}</a>

            ) )}
                
            

         
        </div>
    </section>
  )
}

export default  Navbar;



