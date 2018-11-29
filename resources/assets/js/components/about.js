import React, { Component } from 'react'
import Nav from './navbar'
import { Container, Header } from 'semantic-ui-react'

const wrapper = {
  paddingTop: '15px',
  paddingBottom: '15px'
}

class About extends Component {

  render() {
    return (
         <div> 
            <Nav link="Logout" />       
            <Container text className="row" style={ wrapper }>
                  <Header as='h1'>About</Header>
                  <p>
                  SIPUJ merupakan Sistem Informasi Pemilu UNJ
                  </p>
                  <p>
                  SIPUJ digunakan untuk kebutuhan menghimpun data kedalam database dari berjalannya,
                  Pemilihan Umum Mahasiswa di UNJ.

                  Sistem ini dibangun oleh Rakha Ramadhana
                  </p>
              </Container>
          </div>   
    )
  }
}

export default About