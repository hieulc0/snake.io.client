import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from "react-router-dom";

import React from 'react';
import ReactDOM from "react-dom/client";


class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<ul>
						<li><Link to="/home">Home</Link></li>
					</ul>
				</div>
			</Router>
		);
	}
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

