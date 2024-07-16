import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './scss/style.scss'
import './helpers/i18n'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
import gift from './img/gift.svg';
import right from './img/right.png';
import left from './img/left.png';
export{
	gift,
	left,
	right

}
ReactDOM.render(
	<Suspense fallback={'Loading...'}>
		<React.StrictMode>
			<Provider store={store}>
				<App/>
			</Provider>
		</React.StrictMode>
	</Suspense>,
	document.getElementById('root')
)