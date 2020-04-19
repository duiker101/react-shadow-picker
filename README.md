![npm](https://img.shields.io/npm/v/react-shadow-picker) ![NPM](https://img.shields.io/npm/l/react-shadow-picker)

## React Shadow Picker

A shadow picker inspired by the Chromium devtools

## Example

![Demo](https://raw.githubusercontent.com/duiker101/react-shadow-picker/master/docs/demo.png)

[**Live Demo**](https://react-shadow-picker.now.sh)

### Installation

```sh
yarn add react-shadow-picker
```

### Usage

The component can be used either in a Controlled or Uncontrolled way.
If you pass the value back to the component, it will be controlled.

```typescript jsx
import {ShadowPicker} from "react-shadow-picker";

const App = () => {
	const [shadow, setShadow] = useState("0px 0px 10px 10px #44444455");

	return (
		<div style={{boxShadow: shadow}}>
			<ShadowPicker
				value={shadow}
				onChange={(value) => {
					setShadow(value);
				}}
			/>
		</div>
	);
};
```

#### Styling

Assign the picker a custom class

```jsx
<ShadowPicker className={"custom-picker"} ... />
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
