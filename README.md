## React Shadow Picker

A shadow picker inspired by the Chromium devtools

### Installation

```sh
yarn add react-show-picker
```

### Usage

#### Uncontrolled component

```typescript jsx
import {ShadowPicker} from "react-shadow-picker";

const App = () => {
	const [shadow, setShadow] = useState("0px 0px 10px 10px");

	return (
		<div style={{boxShadow: shadow + " #0005"}}>
			<ShadowPicker
				onChange={(value) => {
					setShadow(value);
				}}
			/>
		</div>
	);
};
```

#### Controlled component

```typescript jsx
import {ShadowPicker, ShadowPickerParams} from "react-shadow-picker";

const App = () => {
	const [shadow, setShadow] = useState("0px 0px 10px 10px");
	const [params, setParams] = useState<ShadowPickerParams>({});

	return (
		<div style={{boxShadow: shadow + " #0005"}}>
			<ShadowPicker
				onChange={(value, params) => {
					setShadow(value);
					setParams(params);
				}}
			/>
		</div>
	);
};
```

#### Styling

Assign the picker a custom class

```jsx
<ShadowPicker className={"custom-picker"} />
```

and then style it with these classes

```css
.custom-picker.shadow-picker {
	background: antiquewhite;
	color: blue;
}
.custom-picker .shadow-picker__position {
	border: 1px solid blue;
}
.custom-picker .shadow-picker__position.active {
	background: aquamarine;
}
.custom-picker .shadow-picker__grid {
	border: 1px solid blue;
}
.custom-picker .shadow-picker__grid-line {
	color: red;
}
.custom-picker .shadow-picker__grid-handle {
	color: red;
}
.custom-picker .shadow-picker__input {
	border: 1px solid teal;
}
.custom-picker .shadow-picker__slider {
	background: red;
}
.custom-picker .shadow-picker__slider::-webkit-slider-thumb {
	background: blue;
}
```
