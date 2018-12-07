import React, { Component } from 'react'
import Nav from './navbar'
import {
  Container,
  Header,
  Form,
  Button,
  Dropdown,
  Input,
  Select,
  Transition,
  Label
} from 'semantic-ui-react'

import axios from 'axios'

const wrapper = {
  paddingTop: '15px',
  paddingBottom: '15px'
}

class Lapor extends Component {

  constructor(props){
    super(props)
    this.state = {
      visibleProdi: false, 
      visibleFakultas: false, 
      listfakultas:[],
      listprodi:[],
      listtps:[],
      namapelapor:'',
      pilihtps:'',
      tingkat:'',
      pilihfakultas:'-',
      pilihprodi:'-',
      jumlahcalon:'1',
      suarakotakkosong:'0',
      suaracalon1:'0',
      suaracalon2:'0',
      suaracalon3:'0',
      suarasah:'0',
      suaraabstain:'0',
      suaratidaksah:'0',
      suratsisa:'0',

    }
    console.log(props)
    console.log(this.state)
  }

  componentDidMount(){    
    axios.get('/api/listfakultas')
    .then(response=>{
        this.setState({listfakultas:response.data})
    })

    axios.get('/api/listprodi')
    .then(response=>{
        this.setState({listprodi:response.data})
    })

    axios.get('/api/listtps')
      .then(response=>{
          this.setState({
            listtps:response.data,
          })
          
      })
  }

  onSubmit(e)
    {
        //console.log(this.state);

        const laporanData = {
            nama_pelapor:this.state.namapelapor,
            no_tps:this.state.pilihtps,
            tingkat:this.state.tingkat,
            fakultas:this.state.pilihfakultas,
            prodi:this.state.pilihprodi,
            jumlahcalon:this.state.jumlahcalon,
            suarakotakkosong:this.state.suarakotakkosong,
            suaracalon1:this.state.suaracalon1,
            suaracalon2:this.state.suaracalon2,
            suaracalon3:this.state.suaracalon3,
            suarasah:this.state.suarasah,
            suaraabstain:this.state.suaraabstain,
            suaratidaksah:this.state.suaratidaksah,
            sisasurat:this.state.suratsisa
        }

        axios.post("/api/lapor/store", laporanData)
        .then(res=>
            {
                console.log(res + " is added!"),
                window.location="/lapor";
            }); 
    }

  dataTPS = [ 
    { key: '1', value: 'TPS 1', text: 'TPS 1' },
    { key: '2', value: 'TPS 2', text: 'TPS 2' },
    { key: '3', value: 'TPS 3', text: 'TPS 3' },
    { key: '4', value: 'TPS 4', text: 'TPS 4' },
    { key: '5', value: 'TPS 5', text: 'TPS 5' },
    { key: '6', value: 'TPS 6', text: 'TPS 6' },
    { key: '7', value: 'TPS 7', text: 'TPS 7' },
    { key: '8', value: 'TPS 8', text: 'TPS 8' },
    { key: '9', value: 'TPS 9', text: 'TPS 9' },
    { key: '10', value: 'TPS 10', text: 'TPS 10' },
  ]

  dataTingkat = [ 
    { key: '1', value: 'Universitas', text: 'Universitas' },
    { key: '2', value: 'Fakultas', text: 'Fakultas' },
    { key: '3', value: 'Prodi', text: 'Program Studi' },
  ]

  handleChange = (e, {name, value}) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value }) 
      if(value === 'Universitas') this.setState({ visibleFakultas: false, visibleProdi: false })
      if(value === 'Fakultas') this.setState({ visibleFakultas: true, visibleProdi: false })
      if(value === 'Prodi') this.setState({ visibleFakultas: true, visibleProdi: true })
      console.log(name+':', value)
    }
    //console.log(this.state)
  }

  render() {
    const { visibleFakultas } = this.state
    const { visibleProdi } = this.state

    const tps = this.state.listtps.map
    (
      dataTPS=>
      (
        {text: dataTPS.no_tps, value: dataTPS.no_tps}
      )
    )

    const fakultas = this.state.listfakultas.map
    (
      dataFakultas=>
      (
        {text: dataFakultas.fakultas, value: dataFakultas.fakultas}
      )
    )

    const prodi = this.state.listprodi.map
    (
      dataProdi=>
      (
        {text: dataProdi.prodi, value: dataProdi.prodi}
      )
    )

    return (
         <div> 
            <Nav link="Logout" />       
            <Container text style={wrapper}>
              <Header as='h2'>Yuk Lapor</Header>
              <Form onSubmit={this.onSubmit.bind(this)}>
                <Form.Field>
                  <label>Nama Pelapor</label>
                  <Form.Field control={Input} placeholder='Nama Pelapor' name='namapelapor' onChange={this.handleChange} value={this.state.namapelapor} />
                </Form.Field>
                <Form.Field>
                  <label>No. TPS</label>
                  <Dropdown placeholder='Pilih TPS' name='pilihtps' scrolling fluid search selection options={tps} onChange={this.handleChange} value={this.state.pilihtps}/>
                </Form.Field>
                <Form.Field>
                  <label>Tingkat</label>
                  <Select name='tingkat' placeholder='Pilih Tingkat' fluid search selection options={this.dataTingkat} onChange={this.handleChange} value={this.state.tingkat}/>
                </Form.Field>
                <Transition visible={visibleFakultas} animation='scale' duration={500}>
                <Form.Field>
                  <label>Fakultas</label>
                  <Select fluid search selection name='pilihfakultas' placeholder='Pilih fakultas' options={fakultas} onChange={this.handleChange} value={this.state.pilihfakultas}/>
                </Form.Field>
                </Transition>
                <Transition visible={visibleProdi} animation='scale' duration={500}>
                <Form.Field>
                  <label>Program Studi</label>
                  <Dropdown placeholder='Pilih Prodi' name='pilihprodi' scrolling fluid search selection options={prodi} onChange={this.handleChange} value={this.state.pilihprodi}/>
                </Form.Field>
                </Transition>        
                <Form.Group widths='four'>
                  <Form.Field type='number' name='jumlahcalon' control={Input} min='1' max='3' label='Jumlah Calon' placeholder='Jumlah calon' fluid onChange={this.handleChange} value={this.state.jumlahcalon}/>
                  <Transition visible={this.state.jumlahcalon == 1 ? true : false} animation='scale' duration={500}>
                    <Form.Field type='number' name='suarakotakkosong' min='0' control={Input} label='Kotak Kosong' placeholder='Suara Kotak Kosong' onChange={this.handleChange} value={this.state.suarakotakkosong}/>
                  </Transition>
                  <Transition visible={this.state.jumlahcalon >= 1 ? true : false} animation='scale' duration={500}>
                    <Form.Field type='number' name='suaracalon1' value={this.state.suaracalon1} control={Input} label='Suara Calon 1' placeholder='Suara calon 1' onChange={this.handleChange} value={this.state.suaracalon1} />
                  </Transition>
                  <Transition visible={this.state.jumlahcalon >= 2 ? true : false} animation='scale' duration={500}>
                    <Form.Field type='number' name='suaracalon2' min='0' control={Input} label='Suara Calon 2' placeholder='Suara calon 2' onChange={this.handleChange} value={this.state.suaracalon2}/>
                  </Transition>
                  <Transition visible={this.state.jumlahcalon >= 3 ? true : false} animation='scale' duration={500}>
                    <Form.Field type='number' name='suaracalon3' min='0' control={Input} label='Suara Calon 3' placeholder='Suara calon 3' onChange={this.handleChange} value={this.state.suaracalon3}/>
                  </Transition>
                </Form.Group>
                <Form.Group widths='four'>                  
                  <Form.Field type='number' min='0' control={Input} label='Suara Sah' placeholder='Suara SAH' onChange={this.handleChange} name='suarasah' value={this.state.suarasah}/>
                  <Form.Field type='number' min='0' control={Input} label='Suara Abstain' placeholder='Suara ABSTAIN' onChange={this.handleChange} name='suaraabstain' value={this.state.suaraabstain} />
                  <Form.Field type='number' min='0' control={Input} label='Suara Tidak Sah' placeholder='Suara Tidak Sah' onChange={this.handleChange} name='suaratidaksah' value={this.state.suaratidaksah}/>
                </Form.Group>                
                <Button type='submit'>Submit</Button>
              </Form>
            </Container>
          </div>   
    )
  }
}

export default Lapor