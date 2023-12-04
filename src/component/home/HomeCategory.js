import React from 'react'

import carton from "../../image/carton.png"
import { Link } from 'react-router-dom'
function HomeCategory() {
  return (

      <div className='category-container '>
<div className='category-card'>
  <img src={carton} alt='notfounding' className='w-50 mt-4 mb-4'/>
<h3 className='category-card-heading'>أدوات مكتبيه </h3>
<p className='category-card-paragraph'>أدوات مكتبيه أدوات مكتبيهأدوات مكتبيهأدوات مكتبيهأدوات مكتبيه</p>
<Link to ="/cart" style={{textDecoration : "none"} }className="category-card-link">لمعرفه الادوات</Link>
</div>
<div className='category-card'>
  <img src={carton} alt='notfounding' className='w-50 mt-4 mb-4'/>
<h3 className='category-card-heading'>أدوات مكتبيه </h3>
<p className='category-card-paragraph'>أدوات مكتبيه أدوات مكتبيهأدوات مكتبيهأدوات مكتبيهأدوات مكتبيه</p>
<Link to ="/cart" style={{textDecoration : "none"} }className="category-card-link">لمعرفه الادوات</Link>
</div><div className='category-card'>
  <img src={carton} alt='notfounding' className='w-50 mt-4 mb-4'/>
<h3 className='category-card-heading'>أدوات مكتبيه </h3>
<p className='category-card-paragraph'>أدوات مكتبيه أدوات مكتبيهأدوات مكتبيهأدوات مكتبيهأدوات مكتبيه</p>
<Link to ="/cart" style={{textDecoration : "none"} }className="category-card-link">لمعرفه الادوات</Link>
</div>
</div>
  
  
  )
}

export default HomeCategory