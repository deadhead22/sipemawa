import React, { Component } from 'react'
import Nav from './navbar'
import { Button, Link } from 'semantic-ui-react'


class Home extends Component {  

  render() {
    
    return (
         <div> 
            <Nav link="Logout" />       
            <div className="container text-center title">
               <Button primary href='/lapor'><h1> Lapor Yuk </h1></Button>
               <p> Kamu sudah masuk! </p>
            </div>
          </div>   
    )
  }
}

export default Home