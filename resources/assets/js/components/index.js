import React, { Component } from 'react'
import Nav from './navbar'

import 'semantic-ui-css/semantic.min.css';

class Index extends Component {

  render() {
    return (
       <div> 
          <Nav />       
          <div className="container text-center  title">
               <h1>Selamat datang di SIPUJ</h1>
               <p>Hubungi <b>Rakha Ramadhana</b> untuk mendaftar sebagai Relawan SIPUJ</p>
        </div> 
       </div>   
    )
  }

}

export default Index