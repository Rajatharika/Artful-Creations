import React from 'react'
import './style.css'
import { Link, Routes } from 'react-router-dom';
function Sidebar() {
    const picture={
        name:'logo', 
        url:'https://i.ibb.co/0XWvM7w/Logo-removebg-preview-modified.png', 
        imageSize:500
    }; 
  return (
    <div className='bg-white sidebar p-2' style={{
        position:'fixed',
        zIndex:1,
        top:0,
        left:0,
        overflowX:'hidden'
    }}>
    <div className='m-3'>
    <img className='pic1'
            style={{ 
                width: '70px',
                height: '70px',
                float:'left',
                borderRadius:'50%',
                marginLeft:'30px'
            }}
            src={picture.url}
            alt={picture.name}
                />
      <span className='brand-name fs-6 ' style={{
        fontWeight:'bold',
        fontFamily:'arial'

      }}>Artfull Creations</span>
    </div>
    <hr className='text dark'/>
    <div className='list-group list-group-flush'>
        <a className='list-group-item py-2'>
            <i className='bi bi-speedometer2 fs-5 me-2'></i>
            <span className="fs-5">Dashboard</span>
        </a>
        <a className='list-group-item py-2'>
            <i className='bi bi-house fs-5 me-2'></i>
            <Link to='/Home' style={{
                textDecoration:'none',
                fontFamily:'sans-serif',
                fontSize:'20px',
            }}>Home</Link> 
        </a>
        <a className='list-group-item py-2'>
            <i className='bi bi-table fs-5 me-2'></i>
            <Link to='/paintt' style={{
                textDecoration:'none',
                fontFamily:'sans-serif',
                fontSize:'20px',
            }}>paintings</Link>
            </a>
            <a className='list-group-item py-2'>
            <i className='bi bi-people fs-5 me-2'></i>
            <Link to='/Mehndi' style={{
                textDecoration:'none',
                fontFamily:'sans-serif',
                fontSize:'20px',
            }}>Mehndi Designs</Link>
        </a>
        <a className='list-group-item py-2'>
            <i className='bi bi-clipboard-data fs-5 me-2'></i>
            <Link to='/craft' style={{
                textDecoration:'none',
                fontFamily:'sans-serif',
                fontSize:'20px',
            }}>Crafts</Link>
        </a>
        <a className='list-group-item py-2'>
            <i className='bi bi-people fs-5 me-2'></i>
            <Link to='/product' style={{
                textDecoration:'none',
                fontFamily:'sans-serif',
                fontSize:'20px',
            }}>Our Products</Link>
        </a>
        <a className='list-group-item py-2'>
            <i className='bi bi-power fs-5 me-2'></i>
            <Link to='/' style={{
                textDecoration:'none',
                fontFamily:'sans-serif',
                fontSize:'20px',
            }}>Logout</Link>
        </a>
    </div>
    </div>
  )
}

export default Sidebar
