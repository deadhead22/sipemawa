import React, { Component } from 'react'
import Nav from './navbar'
import {
  Container,
  Header,
  Form,
  Button,
  Dropdown,
  Input,
} from 'semantic-ui-react'

const wrapper = {
  paddingTop: '15px',
  paddingBottom: '15px'
}


class LaporProdi extends Component {

  constructor(props){
    super(props)
    
    console.log(props)
  }

  componentDidMount(){

  }

  dataTPS = [ 
    { key: '1', value: '1', text: 'TPS 1' },
    { key: '2', value: '2', text: 'TPS 2' },
    { key: '3', value: '3', text: 'TPS 3' },
    { key: '4', value: '4', text: 'TPS 4' },
    { key: '5', value: '5', text: 'TPS 5' },
    { key: '6', value: '6', text: 'TPS 6' },
    { key: '7', value: '7', text: 'TPS 7' },
    { key: '8', value: '8', text: 'TPS 8' },
    { key: '9', value: '9', text: 'TPS 9' },
    { key: '10', value: '10', text: 'TPS 10' },
  ]

  dataTingkat = [ 
    { key: '1', value: 'Universitas', text: 'Universitas' },
    { key: '2', value: 'Fakultas', text: 'Fakultas' },
    { key: '3', value: 'Prodi', text: 'Program Studi' },
  ]

  dataFakultas = [ 
    { key: '1', value: 'Fakultas Teknik', text: 'Fakultas Teknik' },
    { key: '2', value: 'Fakultas Bahasa dan Seni', text: 'Fakultas Bahasa dan Seni' },
    { key: '3', value: 'Fakultas Ilmu Pendidikan', text: 'Fakultas Ilmu Pendidikan' },
  ]

  dataProdi = [ 
    { key: '1', value: 'Pend. Informatika dan Komputer', text: 'Pend. Informatika dan Komputer' },
    { key: '2', value: 'Pend. Sastra Inggris', text: 'Pend. Sastra Inggris' },
    { key: '3', value: 'Teknologi Pendidikan', text: 'Teknologi Pendidikan' },
  ]

  dataCalon = [ 
    { key: '1', value: '1', text: '1' },
    { key: '2', value: '2', text: '2' },
    { key: '3', value: '3', text: '3' },
    { key: '4', value: '4', text: '4' },
    { key: '5', value: '5', text: '5' },
  ]

  state = { 
    visibleProdi: false, 
    visibleFakultas: false 
  }

  toggleVisibilityFakultas = () => this.setState({ visibleFakultas: !this.state.visibleFakultas })
  toggleVisibilityProdi = () => this.setState({ visibleProdi: !this.state.visibleProdi })

  handleChange(e){
    let {name, value} = e.target;
    var text = e.target.value
    console.log(name, value, text)
  }

  submitForm(e){
    e.preventDefault();
  }

  render() {
    const { dataTingkat } = this.state

    return (
         <div> 
            <Nav link="Logout" />       
            <Container text style={wrapper}>
              <Header as='h2'>Yuk Lapor (Program Studi)</Header>
              <Form onSubmit={this.submitForm}>
                <Form.Field>
                  <label>Nama Pelapor</label>
                  <Form.Field control={Input} placeholder='Nama Pelapor' />
                </Form.Field>
                <Form.Field>
                  <label>No. TPS</label>
                  <Dropdown placeholder='Pilih TPS' scrolling fluid search selection options={this.dataTPS}/>
                </Form.Field>
                <Form.Field>
                  <label>Fakultas</label>
                  <Dropdown placeholder='Pilih Fakultas' scrolling fluid search selection options={this.dataFakultas} />
                </Form.Field>
                <Form.Field>
                  <label>Prodi</label>
                  <Dropdown placeholder='Pilih Prodi' scrolling fluid search selection options={this.dataProdi} />
                </Form.Field>
                <Form.Group widths='equal'>
                  <Form.Field type='number' min='0' control={Input} label='Suara Calon 1' placeholder='Suara calon 1' />
                  <Form.Field type='number' min='0' control={Input} label='Suara Calon 2' placeholder='Suara calon 2' />
                  <Form.Field type='number' min='0' control={Input} label='Suara Calon 3' placeholder='Suara calon 3' />
                </Form.Group>
                <Form.Group widths='equal'>                  
                  <Form.Field type='number' min='0' control={Input} label='Suara Sah' placeholder='Suara SAH' />
                  <Form.Field type='number' min='0' control={Input} label='Suara Abstain' placeholder='Suara ABSTAIN' />
                </Form.Group>                
                <Form.Group widths='equal'>                  
                  <Form.Field type='number' min='0' control={Input} label='Surat Suara Terpakai' placeholder='Surat Suara Terpakai' />
                  <Form.Field type='number' min='0' control={Input} label='Sisa Surat Suara' placeholder='Sisa Surat Suara' />
                </Form.Group>                 
                <Button type='submit'>Submit</Button>
              </Form>
            </Container>
          </div>   
    )
  }
}

export default LaporProdi