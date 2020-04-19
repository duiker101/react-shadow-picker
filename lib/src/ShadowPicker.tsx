import React, {useEffect, useState} from "react";
import styled from "styled-components";
import TypeField from "./fields/TypeField";
import OffsetField from "./fields/OffsetField";
import SliderField from "./fields/SliderField";
import {ShadowOffset, ShadowPickerParams, ShadowPosition} from "./types";
import ColorField from "./fields/ColorField";
import {buildShadowString, parseShadowString} from "./common";

const Wrapper = styled.div`
	padding: 8px;
	display: flex;
	flex-direction: column;
	background: #2a2a2a;

	width: 240px;
	height: 240px;
	font-size: 14px;

	font-family: sans-serif;
	color: #bec6cf;
`;

export interface Props {
	onChange: (value: string) => void;
	value?: string;
	className?: string;
	colorPicker?: React.ReactChild;
}

const useShadowParameters = (
	onChange: Props["onChange"],
	value?: string
): [
	ShadowPickerParams,
	(
		column: keyof ShadowPickerParams
	) => (value: string | ShadowOffset | ShadowPosition | undefined) => void
] => {
	const isControlled = value && onChange;
	const [state, setState] = useState<ShadowPickerParams>({});

	useEffect(() => {
		if (!isControlled) return;

		const p = parseShadowString(value);

		if (p) setState(p);
	}, [value]);

	useEffect(() => {
		if (isControlled) return;
		const newValue = buildShadowString(state);
		onChange(newValue);
	}, [state]);

	const updateState = (column: keyof ShadowPickerParams) => (
		value: string | ShadowOffset | ShadowPosition | undefined
	) => {
		const newParams = {...state, [column]: value};
		onChange(buildShadowString(newParams));
		!isControlled && setState(newParams);
	};

	return [state, updateState];
};

export default ({onChange, value, className = ""}: Props) => {
	const [state, updateState] = useShadowParameters(onChange, value);

	return (
		<Wrapper className={"shadow-picker " + className}>
			<TypeField
				value={state?.position || "outside"}
				onChange={updateState("position")}
			/>
			<OffsetField
				value={state?.offset || {x: "0", y: "0"}}
				onChange={updateState("offset")}
			/>
			<SliderField
				value={state?.blur || "0"}
				onChange={updateState("blur")}
				title={"Blur"}
			/>
			<SliderField
				value={state?.spread || "0"}
				onChange={updateState("spread")}
				title={"Spread"}
			/>
			<ColorField
				value={state?.color || "#000000"}
				onChange={updateState("color")}
			/>
		</Wrapper>
	);
};
