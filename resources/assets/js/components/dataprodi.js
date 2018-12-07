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


class DataProdi extends Component {

  constructor(props){
    super(props)
    this.state={
        listprodi:[''],
    }
    console.log(super.constructor);
  }

  componentDidMount(){
    axios.get('/api/listprodi')
    .then(response=>{
        this.setState({listprodi:response.data})
    })
  }

  render() {
    return (
         <div> 
            <Nav link="Logout" />       
            <Container style={wrapper}>
              <Header as='h2'>Data Prodi</Header>
              <p> Under construction </p>
              <Statistic.Group>
                <Statistic>
                  <Statistic.Value><Icon name='send' size='small' /> { this.state.listprodi.length }</Statistic.Value>
                  <Statistic.Label>Program Studi</Statistic.Label>
                </Statistic>
              </Statistic.Group>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>No</Table.HeaderCell>
                    <Table.HeaderCell>Fakultas</Table.HeaderCell>
                    <Table.HeaderCell>Prodi</Table.HeaderCell>                    
                    <Table.HeaderCell>Created At</Table.HeaderCell>
                    <Table.HeaderCell>Updated At</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {this.state.listprodi.map((listprodi, index)=>{
                    return (
                      <Table.Row key={index}>
                        <Table.Cell>{index + 1}</Table.Cell>
                        <Table.Cell>{listprodi.fakultas}</Table.Cell>
                        <Table.Cell>{listprodi.prodi}</Table.Cell>                        
                        <Table.Cell>{listprodi.created_at}</Table.Cell>
                        <Table.Cell>{listprodi.updated_at}</Table.Cell>
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

export default DataProdi