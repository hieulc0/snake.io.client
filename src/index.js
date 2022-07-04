import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from "react-router-dom";

import React from 'react';
import ReactDOM from "react-dom/client";
import Home from "./component/home";


class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<ul>
						<li><Link to="/home">Home</Link></li>
					</ul>
				</div>
				<Routes>
					<Route exact path="/home" element={<Home />}></Route>
				</Routes>
			</Router>
		);
	}
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

