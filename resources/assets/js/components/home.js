import React, { Component } from 'react'
import Nav from './navbar'
import { Button } from 'semantic-ui-react'


class Home extends Component {  

  render() {
    
    return (
         <div> 
            <Nav link="Logout" />       
            <div className="container text-center title">
               <h1> Yuk Lapor </h1>
               <p> Kamu sudah masuk! </p>
            </div>
          </div>   
    )
  }
}

export default Home