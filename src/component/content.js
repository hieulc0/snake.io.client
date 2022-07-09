import React from "react";
import * as snake_wasm from "snake-wasm";

class Content extends React.Component {
	componentDidMount() {
		this.loadWasm();
	}

	loadWasm = async () => {
		try {
			//const wasm = await import("../../node_modules/snake-wasm/snake_wasm");
			console.log("wasm: ", snake_wasm);
			//start();
			//greet("hello world, from react");
			snake_wasm
				.default()
				.then( () => {
					snake_wasm.greet("hello, world! From react.");
				});
		} catch(err) {
			console.error(`Unexpected error in loadWasm. [Message: ${err.message}]`);
		}
	}; render() {
		return (
			<div key="canvas"></div>
		);
	}
}

export default Content;

