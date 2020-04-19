import React, {useState} from "react";
import ReactDOM from "react-dom";
import {ShadowPicker, ShadowPickerParams} from "../lib/src";

const App = () => {
	const [custom, setCustom] = useState(false);
	const [shadow, setShadow] = useState("");
	const [params, setParams] = useState<ShadowPickerParams>({
		offset: {x: "5px", y: "5px"},
		blur: "40px",
		color: "#a4a4a4",
	});

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
						params={params}
						onChange={(value, params) => {
							setShadow(value);
							setParams(params);
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
