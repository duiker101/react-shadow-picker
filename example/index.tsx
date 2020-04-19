import React, {useState} from "react";
import ReactDOM from "react-dom";
import {ShadowPicker} from "../lib/src";

const App = () => {
	const [custom, setCustom] = useState(false);
	const [shadow, setShadow] = useState("5px 5px 20px 2px #00000055");

	return (
		<div className={"wrapper"}>
			<div>
				<label>
					Custom theme
					<input
						type={"checkbox"}
						checked={custom}
						onChange={() => setCustom(!custom)}
					/>
				</label>
				<div>
					<ShadowPicker
						className={custom && "custom-picker"}
						value={shadow}
						onChange={(value) => {
							setShadow(value);
						}}
					/>
				</div>
			</div>
			<div className={"example-wrapper"}>
				<div className={"example"} style={{boxShadow: shadow}}></div>
			</div>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
