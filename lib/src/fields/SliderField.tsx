import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Input from "../inputs/Input";
import {Label} from "../inputs/Label";
import {unitRegex, useUnitValue} from "../common";

const Wrapper = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;

const Slider = styled.input`
	flex: 2;
	width: 100%;

	appearance: none;
	width: 100%;
	height: 2px;
	background: #555a;
	outline: none;

	&::-webkit-slider-thumb {
		appearance: none;
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background: #4285F4;
		cursor: pointer;
	}
`;

interface Props {
	title: string;
	value: string;
	onChange: (value: string) => void;
}

export default ({title, value, onChange}: Props) => {
	const {amount, unit, setAmount} = useUnitValue(value);

	const changed = (e) => {
		const val = parseInt(e.target.value);
		setAmount(val);
		onChange(val + unit);
	};

	return (
		<Wrapper>
			<Label>{title}</Label>
			<Input value={value} onChange={onChange} />
			<Slider
				className={"shadow-picker__slider"}
				type={"range"}
				value={amount}
				onChange={changed}
				max={100}
			/>
		</Wrapper>
	);
};
