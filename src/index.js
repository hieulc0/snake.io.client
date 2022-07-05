import React from 'react';
import ReactDOM from "react-dom/client";
import Header from './component/header';

class App extends React.Component {
	render() {
		return (
			<Header />
		);
	}
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

