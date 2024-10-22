import React from 'react'
import './Header.css';

const Header = () => {
  return (

  <section className='container'>
    <div className='left-header  '>
      <ul  className=''>
        <li className='grid-rows-1 space-x-10'><a href=""><p><i class="fa-solid fa-phone-flip"></i>0240-2367333</p></a></li>
        <li><a href="https://deogiricollege.org/alumni-deogiri-college/#"><p><i class="fa-regular fa-envelope"></i>Contact Us</p></a></li>
        <li><a href="https://deogiricollege.org/alumni-deogiri-college/"><p><i class="fa-solid fa-graduation-cap"></i>Alumni</p></a></li>
        <li><a href="https://20.219.176.203/mspmt/"><p><i class="fa-solid fa-building-columns"></i>Online Admission & Fees Portal</p></a></li>
        <li><a href="https://deogiricollege.org/screen-reader/"><p><i></i>Screen Reader</p></a></li>
        <li> <a href=""><p><i></i>Staff Login</p></a></li>
      </ul>
    </div>
    <div className='right-header '>
      <li><a href=""><i class="fa-brands fa-youtube"></i></a></li>
      
      <li><a href=""><i class="fa-brands fa-facebook-f"></i></a></li>
      <li><a href="https://www.linkedin.com/in/deogiri-college-482630328/"><i class="fa-brands fa-linkedin-in"></i></a></li>
      <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
    </div>
    
  </section>
  

  
  )
}

export default Header