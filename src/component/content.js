import React from "react";
import {start} from "snake-wasm";

class Content extends React.Component {
	componentDidMount() {
		this.loadWasm();
	}

	loadWasm = async () => {
		try {
			const wasm = await import("../../node_modules/snake-wasm/snake_wasm");
			console.log("snake-wasm: ", wasm, start);
			start();
		//wasm
		//	.default()
		//	.then( () => {
		//		wasm.start();
		//	});
		} catch(err) {
			console.error(`Unexpected error in loadWasm. [Message: ${err.message}]`);
		}
	};

	render() {
		return (
			<div key="canvas"></div>
		);
	}
}

export default Content;

