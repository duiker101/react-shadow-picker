import React, {useState} from "react";
import ReactDOM from "react-dom";

import {ShadowPicker, ShadowPickerParams} from "../src";

const App = () => {
	const [shadow, setShadow] = useState("0px 0px 0px");
	// const [params, setParams] = useState<ShadowPickerParams>({
	// 	// offset: {x: "20px", y: "20px"},
	//     blur: "20px"
	// });

	return (
		<div style={{boxShadow: shadow + " #0005"}}>
			<ShadowPicker
				className={"custom-picker"}
				// params={params}
				onChange={(value, params) => {
					setShadow(value);
					// setParams(params);
				}}
			/>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
