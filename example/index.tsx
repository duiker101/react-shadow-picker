import React, {useState} from "react";
import ReactDOM from "react-dom";

import {ShadowPicker} from "../src";

const App = () => {
	const [custom, setCustom] = useState(false);
	const [shadow, setShadow] = useState("0px 0px 0px");

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
						onChange={(value, params) => {
							setShadow(value);
						}}
					/>
				</div>
			</div>
			<div className={"example-wrapper"}>
				<div
					className={"example"}
					style={{boxShadow: shadow + " #0005"}}></div>
			</div>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
