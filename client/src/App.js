import './App.css';
import Header from './component/headers/Header';
import Home from './component/home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Cart from './component/carts/Cart'
import {TemplateProvider} from './template/TemplateProvider';

function App() {
	return (
		<TemplateProvider>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/cart' component={Cart} />
				</Switch>
			</BrowserRouter>
		</TemplateProvider>
	);
}

export default App;
