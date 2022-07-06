import React from 'react';
import ReactDOM from "react-dom/client";
import Header from './component/header';
import Content from "./component/content";

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Content />
			</div>
		);
	}
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

