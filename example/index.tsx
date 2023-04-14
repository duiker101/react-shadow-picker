import React, {useState} from "react";
import ReactDOM from "react-dom";
import {ShadowPicker} from "../lib/src";

const App = () => {
    const [custom, setCustom] = useState(false);
    const [shadow, setShadow] = useState("5px 5px 20px 2px #00000055");

    return (
        <>
            <div>
                <label>
                    Custom theme
                    <input
                        type={"checkbox"}
                        checked={custom}
                        onChange={() => setCustom(!custom)}
                    />
                </label>
                <ShadowPicker
                    className={custom && "custom-picker"}
                    value={shadow}
                    onChange={(value) => {
                        setShadow(value);
                    }}
                />
            </div>
            <div className={"example-wrapper"}>
                <div className={"example"} style={{boxShadow: shadow}}></div>
            </div>
        </>
    );
};

ReactDOM.render(<App/>, document.getElementById("root"));
