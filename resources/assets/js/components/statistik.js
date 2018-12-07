import React, { Component } from 'react'
import Nav from './navbar'
import axios from 'axios'
import {
  Container,
  Header,
  Statistic,
  Icon,
  Table,
  Label,
  Menu
} from 'semantic-ui-react'

const wrapper = {
  paddingTop: '15px',
  paddingBottom: '15px'
}


class Statistik extends Component {

  constructor(props){
    super(props)
    this.state={
        listlaporan:[''],
    }
    console.log(super.constructor);
  }

  componentDidMount(){
      axios.get('/api/laporan')
      .then(response=>{
          this.setState({
            listlaporan:response.data,
          })
          
      })
  }

  suaraSum(){
    let lapSum = 0

    for (let i = 0 ; i < this.state.listlaporan.length ; i ++) {
      lapSum += this.state.listlaporan[i].suarasah + this.state.listlaporan[i].suaratidaksah + this.state.listlaporan[i].suaraabstain
    }
    return lapSum
  }

  calonSum(){
    let calonSum = 0

    for (let i = 0 ; i < this.state.listlaporan.length ; i ++) {
      calonSum += this.state.listlaporan[i].jumlahcalon
    }
    return calonSum
    
  }

  render() {
    return (
         <div> 
            <Nav link="Logout" />       
            <Container style={wrapper}>
              <Header as='h2'>Data Statistik</Header>
              <p> Under construction </p>
              <Statistic.Group>
                <Statistic>
                  <Statistic.Value><Icon name='send' size='small' /> { this.state.listlaporan.length }</Statistic.Value>
                  <Statistic.Label>Laporan</Statistic.Label>
                </Statistic>
                <Statistic>
                  <Statistic.Value><Icon name='clipboard' size='small' /> { this.suaraSum() }</Statistic.Value>
                  <Statistic.Label>Surat Suara</Statistic.Label>
                </Statistic>
                <Statistic>
                  <Statistic.Value><Icon name='user' size='small' /> { this.calonSum() }</Statistic.Value>
                  <Statistic.Label>Jumlah Calon</Statistic.Label>
                </Statistic>
              </Statistic.Group>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>No</Table.HeaderCell>
                    <Table.HeaderCell>No. TPS</Table.HeaderCell>
                    <Table.HeaderCell>Tingkat</Table.HeaderCell>
                    <Table.HeaderCell>Fakultas</Table.HeaderCell>
                    <Table.HeaderCell>Prodi</Table.HeaderCell>
                    <Table.HeaderCell>Jumlah Calon</Table.HeaderCell>
                    <Table.HeaderCell>Suara Kotak Kosong</Table.HeaderCell>
                    <Table.HeaderCell>Suara Calon 1</Table.HeaderCell>
                    <Table.HeaderCell>Suara Calon 2</Table.HeaderCell>
                    <Table.HeaderCell>Suara Calon 3</Table.HeaderCell>
                    <Table.HeaderCell>Suara Sah</Table.HeaderCell>
                    <Table.HeaderCell>Suara Abstain</Table.HeaderCell>
                    <Table.HeaderCell>Suara Tidak Sah</Table.HeaderCell>                    
                    <Table.HeaderCell>Created At</Table.HeaderCell>
                    <Table.HeaderCell>Updated At</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {this.state.listlaporan.map((listlaporan, index)=>{
                    return (
                      <Table.Row key={index}>
                        <Table.Cell>{index + 1}</Table.Cell>
                        <Table.Cell>{listlaporan.no_tps}</Table.Cell>
                        <Table.Cell>{listlaporan.tingkat}</Table.Cell>
                        <Table.Cell>{listlaporan.fakultas}</Table.Cell>
                        <Table.Cell>{listlaporan.prodi}</Table.Cell>
                        <Table.Cell>{listlaporan.jumlahcalon}</Table.Cell>
                        <Table.Cell>{listlaporan.suarakotakkosong}</Table.Cell>
                        <Table.Cell>{listlaporan.suaracalon1}</Table.Cell>
                        <Table.Cell>{listlaporan.suaracalon2}</Table.Cell>
                        <Table.Cell>{listlaporan.suaracalon3}</Table.Cell>
                        <Table.Cell>{listlaporan.suarasah}</Table.Cell>
                        <Table.Cell>{listlaporan.suaraabstain}</Table.Cell>                        
                        <Table.Cell>{listlaporan.suaratidaksah}</Table.Cell>
                        <Table.Cell>{listlaporan.created_at}</Table.Cell>
                        <Table.Cell>{listlaporan.updated_at}</Table.Cell>
                      </Table.Row>
                      )
                    })
                  }
                </Table.Body>

                <Table.Footer>
                  <Table.Row>
                    <Table.HeaderCell colSpan='15'>
                      <Menu floated='right' pagination>
                        <Menu.Item as='a' icon>
                          <Icon name='chevron left' />
                        </Menu.Item>
                        <Menu.Item as='a'>1</Menu.Item>
                        <Menu.Item as='a'>2</Menu.Item>
                        <Menu.Item as='a'>3</Menu.Item>
                        <Menu.Item as='a'>4</Menu.Item>
                        <Menu.Item as='a' icon>
                          <Icon name='chevron right' />
                        </Menu.Item>
                      </Menu>
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Footer>
              </Table>
              
            </Container>
          </div>   
    )
  }
}

export default Statistik