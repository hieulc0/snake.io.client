import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from "react-router-dom';

import React from 'react';

class App extends React.Component {
	render() {
		return (
			<div>
				<ul>
					<li><Link to="/home">Home</Link></li>
				</ul>
				
			</div>
		);
	}
}

