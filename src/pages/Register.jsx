import React from 'react'
import banner from '../image/near_by_help_logo.png'
import { Link } from 'react-router-dom'



function Register() {
  return (
    
    <div  className=' d-flex justify-content-center align-items-center p-5 '>
    <div style={{width:'800px',height:'500px'}} className="row shadow m-5">
        <div   style={{background:'white'}} className="col-6 d-flex justify-content-center align-items-center ">
            <img className='' style={{width:'100%', height:'150px'}} src={banner} alt="" />
          

        </div>
        <div style={{background:'black', color:'white'}} className="col-6">
          <h3 className='text-center m-3'>Register <i class="fa-solid fa-id-card"></i></h3>
          <div>
          <form className='d-flex justify-content-center  flex-column' >
      <div class="mb-1">
   <label style={{fontSize:'15px'}} htmlFor="" className='form-label'>NAME</label>
    <input style={{color:'white',background:'black'}} type="text-light" className='form-control'  />
    
  </div>

  <div class="mb-1">
   <label style={{fontSize:'15px'}} htmlFor="" className='form-label'>e-mail</label>
    <input style={{}} type="text-light" className='form-control'  />
    <div style={{color:'white'}} id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div class="mb-3">
   <label style={{fontSize:'15px'}} htmlFor="" className='form-label'>Password</label>
    <input style={{color:'white',background:'black'}} type="text-light" className='form-control'  />
  </div>
  
  
  <button type="submit" class="btn btn-outline-success">Register</button>
</form>
<p className='m-2' style={{color:'white'}}>already an user? click here to <Link to={'/login'}>Login</Link> </p>

          </div>
            
            
        </div>

    </div>


</div>
  )
}

export default Register
