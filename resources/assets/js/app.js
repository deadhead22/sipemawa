import React from 'react'
import ReactDOM from 'react-dom'
import {  BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Index from './components/index'
import Login from './components/login'
import Register from './components/register'
import Home from './components/home'
import About from './components/about'
import DataTPS from './components/datatps'
import DataFakultas from './components/datafakultas'
import DataProdi from './components/dataprodi'
import Lapor from './components/lapor'
import Statistik from './components/statistik'
import Forgot from './components/forgot'
import Reset from './components/reset'



ReactDOM.render(
	<Router>
	    <Switch>
			<Route exact path='/' component={Index}/>
			<Route path='/login' component={Login}/>
			<Route path='/register' component={Register}/>
			<Route path='/home' component={Home}/>
			<Route path='/about' component={About}/>
			<Route path='/datatps' component={DataTPS}/>
			<Route path='/datafakultas' component={DataFakultas}/>
			<Route path='/dataprodi' component={DataProdi}/>
			<Route path='/lapor' component={Lapor}/>
			<Route path='/statistik' component={Statistik}/>
			<Route path='/forgotpassword' component={Forgot}/>
			<Route path='/password/reset/:token' component={Reset}/>
		</Switch>
	</Router>,
    document.getElementById('app')
);