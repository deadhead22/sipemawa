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
      namapelapor:'',
      pilihtps:'',
      tingkat:'',
      pilihfakultas:'',
      pilihprodi:'',
      jumlahcalon:'1',
      suarakotakkosong:'0',
      suaracalon1:'0',
      suaracalon2:'0',
      suaracalon3:'0',
      suarasah:'0',
      suaraabstain:'0',
      suratterpakai:'0',
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
    // axios.get('/api/lapor')
    // .then(response=>{
    //     this.setState({listlaporan:response.data})
    // })
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
            suaraterpakai:this.state.suratterpakai,
            suarasah:this.state.suarasah,
            suaraabstain:this.state.suaraabstain,
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

  dataProdi = [ 
    { key: '1', value: 'Pend. Informatika dan Komputer', text: 'Pend. Informatika dan Komputer' },
    { key: '2', value: 'Pend. Sastra Inggris', text: 'Pend. Sastra Inggris' },
    { key: '3', value: 'Teknologi Pendidikan', text: 'Teknologi Pendidikan' },
  ]

  handleChange = (e, {name, value}) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value }) 
      if(value === 'Universitas') this.setState({ visibleFakultas: false, visibleProdi: false })
      if(value === 'Fakultas') this.setState({ visibleFakultas: true })
      if(value === 'Prodi') this.setState({ visibleFakultas: true, visibleProdi: true })
      //console.log(name+':', value)
      
    }
    //console.log(this.state)
  } 

  render() {
    //const { dataTingkat } = this.state
    const { visibleFakultas } = this.state
    const { visibleProdi } = this.state

    const fakultas = this.state.listfakultas.map
    (
      dataFakultas=>
      (
        {text: dataFakultas.fakultas, value: dataFakultas.fakultas}
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
                  <Dropdown placeholder='Pilih TPS' name='pilihtps' scrolling fluid search selection options={this.dataTPS} onChange={this.handleChange} value={this.state.pilihtps}/>
                </Form.Field>
                <Form.Field>
                  <label>Tingkat</label>
                  <Select name='tingkat' placeholder='Pilih Tingkat' fluid search selection options={this.dataTingkat} onChange={this.handleChange} value={this.state.tingkat}/>
                </Form.Field>
                <Transition visible={visibleFakultas} animation='scale' duration={500}>
                <Form.Field>
                  <label>Fakultas</label>
                  <Select fluid selection name='pilihfakultas' placeholder='Pilih fakultas' options={fakultas} onChange={this.handleChange} value={this.state.pilihfakultas}/>
                </Form.Field>
                </Transition>
                <Transition visible={visibleProdi} animation='scale' duration={500}>
                <Form.Field>
                  <label>Prodi</label>
                  <Dropdown placeholder='Pilih Prodi' name='pilihprodi' scrolling fluid search selection options={this.dataProdi} onChange={this.handleChange} value={this.state.pilihprodi}/>
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
                <Form.Group widths='equal'>                  
                  <Form.Field type='number' min='0' control={Input} label='Suara Sah' placeholder='Suara SAH' onChange={this.handleChange} name='suarasah' value={this.state.suarasah}/>
                  <Form.Field type='number' min='0' control={Input} label='Suara Abstain' placeholder='Suara ABSTAIN' onChange={this.handleChange} name='suaraabstain' value={this.state.suaraabstain} />
                </Form.Group>                
                <Form.Group widths='equal'>                  
                  <Form.Field type='number' min='0' control={Input} label='Surat Suara Terpakai' placeholder='Surat Suara Terpakai' onChange={this.handleChange} name='suratterpakai' value={this.state.suratterpakai}/>
                  <Form.Field type='number' min='0' control={Input} label='Sisa Surat Suara' placeholder='Sisa Surat Suara' onChange={this.handleChange} name='suratsisa' value={this.state.suratsisa} />
                </Form.Group>                 
                <Button type='submit'>Submit</Button>
              </Form>
            </Container>
          </div>   
    )
  }
}

export default Lapor