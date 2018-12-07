import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { 
  Menu,
  Icon,
  Header,
  Sidebar,
  Input,
  Image, 
} from 'semantic-ui-react'


class Nav extends Component {

  constructor(props){
      super(props);
  }   

  state = {visible: false}

  // Menu Active Item Click
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
  logout(e){
       e.preventDefault();  
       axios.post('api/logout')
          .then(response=> {
            this.props.history.push('/');
          })
          .catch(error=> {
            console.log(error);
          });
  }
  
  handleClick(e){

    e.preventDefault();
    this.props.history.push('/');

  }

  // Sidebar
  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })

  render() {

    const { activeItem } = this.state
    const { visible } = this.state

    if (this.props.link) {
      return (
        <div>
          <Menu inverted attached>
            <Menu.Item position='left' onClick={this.handleShowClick}>
                <Icon name='bars' size='large' />
            </Menu.Item>
            
            <Header inverted as={Link} to='/home' icon textAlign='center'>
              <Image circular src='https://react.semantic-ui.com/logo.png' /> SIPUJ
            </Header>

            <Menu.Item position='right' name='sign-out' active={activeItem === 'sign-out'} onClick={this.logout.bind(this)}>
              Logout
            </Menu.Item>
          </Menu>
            <Sidebar as={Menu}
              animation='overlay'
              icon='labeled'
              inverted vertical visible
              onHide={this.handleSidebarHide}
              visible={visible}
              size='massive'
            >
            <Menu.Item>
              <Image centered circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' size='tiny' />
              <Header inverted size='tiny' textAlign='center'>Admin</Header>
            </Menu.Item>
            <Menu.Item>
              <Input placeholder='Search...' />
            </Menu.Item>

            <Menu.Item>
              Main Menu
              <Menu.Menu>
                <Menu.Item
                  as={Link}
                  name='home'
                  active={activeItem === 'home'}
                  to='/home'
                  onClick={this.handleItemClick}
                >
                  Home
                </Menu.Item>
                <Menu.Item
                  as={Link}
                  name='about'
                  active={activeItem === 'about'}
                  to='/about'
                  onClick={this.handleItemClick}
                >
                  About
                </Menu.Item>
              </Menu.Menu>
            </Menu.Item>
            <Menu.Item>
              Database
              <Menu.Menu>
                <Menu.Item
                  as={Link}
                  name='datatps'
                  active={activeItem === 'datatps'}
                  to='/datatps'
                  onClick={this.handleItemClick}
                >
                  Data TPS
                </Menu.Item>
                <Menu.Item
                  as={Link}
                  name='datafakultas'
                  active={activeItem === 'datafakultas'}
                  to='/datafakultas'
                  onClick={this.handleItemClick}
                >
                  Data Fakultas
                </Menu.Item>
                <Menu.Item
                  as={Link}
                  name='dataprodi'
                  active={activeItem === 'dataprodi'}
                  to='/dataprodi'
                  onClick={this.handleItemClick}
                >
                  Data Prodi
                </Menu.Item>
              </Menu.Menu>
            </Menu.Item>
            <Menu.Item
                  as={Link}
                  name='lapor'
                  active={activeItem === 'lapor'}
                  to='/lapor'
                  onClick={this.handleItemClick}
                >
                Lapor
            </Menu.Item>
                    <Menu.Item 
                      as={Link}
                      name='statistik'
                      active={activeItem === 'statistik'}
                      to='/statistik'
                      onClick={this.handleItemClick}
                      >
                    Statistik
                    </Menu.Item>
                </Sidebar>      
        </div>
        )
    }
    return (
      <div>
        <Menu inverted stackable attached>
          <Menu.Item>
            <img src='https://react.semantic-ui.com/logo.png' />
          </Menu.Item>

          <Menu.Item header>SIPUJ</Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item as={Link} name='sign-in' active={activeItem === 'sign-in'} to='/login'>Login</Menu.Item>
            <Menu.Item as={Link} name='sign-up' active={activeItem === 'sign-up'} to='/register'>Register</Menu.Item>
          </Menu.Menu>
        </Menu>  
      </div>
      
    )
  }

}

export default  withRouter(Nav)