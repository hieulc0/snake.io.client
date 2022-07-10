import React from "react";
import * as snakeWasm from "snake-wasm";

class Content extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
		this.state = {
			canvas: document.createElement("div"),
		}
	}

	componentDidMount() {
		this.loadWasm();
	}

	loadWasm = async () => {
		try {
			console.log("wasm: ", snakeWasm);
			snakeWasm
				.default()
				.then( () => {
					snakeWasm.greet("hello, world! From react.");
					let res = snakeWasm.start();
					console.log("res of start() func: ", res);
					this.setState({
						canvas: res
					});
					console.log("current canvas: ", this.state.canvas);
					this.myRef.current.appendChild(res);
				});
		} catch(err) {
			console.error(`Unexpected error in loadWasm. [Message: ${err.message}]`);
		}
	};

	render() {
		return (
			<div key="canvas" ref={this.myRef}></div>
		);
	}
}

export default Content;

