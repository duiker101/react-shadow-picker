import React from "react";
import styled from "styled-components";
import Input from "../inputs/Input";
import {Label} from "../inputs/Label";

const Wrapper = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;

interface Props {
	value: string;
	onChange: (value: string) => void;
	colorPicker?: React.ReactChild;
}

export default ({value, onChange, colorPicker}: Props) => {
	const updated = (e) => {
		onChange(e.target.value);
	};

	return (
		<Wrapper>
			<Label>Color</Label>
			<Input value={value} onChange={onChange} />
			{colorPicker ? (
				colorPicker
			) : (
				<input value={value} onChange={updated} type={"color"} />
			)}
		</Wrapper>
	);
};
