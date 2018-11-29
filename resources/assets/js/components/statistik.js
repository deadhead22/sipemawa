import React, { Component } from 'react'
import Nav from './navbar'
import {
  Container,
  Header,
  Statistic,
  Icon
} from 'semantic-ui-react'

const wrapper = {
  paddingTop: '15px',
  paddingBottom: '15px'
}


class Statistik extends Component {

  render() {
    return (
         <div> 
            <Nav link="Logout" />       
            <Container text style={wrapper}>
              <Header as='h2'>Data Statistik</Header>
              <p> Under construction </p>
              <Statistic.Group>
                <Statistic>
                  <Statistic.Value><Icon name='send' size='small' /> 5500</Statistic.Value>
                  <Statistic.Label>Laporan</Statistic.Label>
                </Statistic>
                <Statistic>
                  <Statistic.Value><Icon name='clipboard' size='small' /> 50,000</Statistic.Value>
                  <Statistic.Label>Surat Suara</Statistic.Label>
                </Statistic>
              </Statistic.Group>
              
            </Container>
          </div>   
    )
  }
}

export default Statistik