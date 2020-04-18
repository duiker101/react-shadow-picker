import React, {useEffect, useState} from "react";
import styled from "styled-components";
import TypeField from "./fields/TypeField";
import OffsetField from "./fields/OffsetField";
import SliderField from "./fields/SliderField";
import {ShadowOffset, ShadowPickerParams, ShadowPosition} from "./types";

const Wrapper = styled.div`
	//--color: red;
	//--accent: red;
	//--border: yellow;
	//--background: teal;
	//
	padding: 8px;
	display: flex;
	flex-direction: column;
	background: #2a2a2a;

	width: 240px;
	height: 240px;
	font-size: 14px;

	font-family: sans-serif;
	color: #BEC6CF;
`;

export interface Props {
	onChange: (value: string, params: ShadowPickerParams) => void;
	params?: ShadowPickerParams;
	className?: string;
}

export default ({onChange, params, className = ""}: Props) => {
	const isControlled = params && onChange;
	const [state, setState] = useState<ShadowPickerParams>(params ?? {});

	const paramsUpdate = (column: keyof ShadowPickerParams) => (
		value: string | ShadowOffset | ShadowPosition | undefined
	) => {
		const data = isControlled ? params : state;
		const newParams = {...data, [column]: value};
		const newValues = [
			newParams.position === "inside" ? "inset" : undefined,
			newParams.offset?.x || "0",
			newParams.offset?.y || "0",
			newParams.blur,
			newParams.spread,
		];

		onChange(newValues.join(" "), newParams);
		!isControlled && setState(newParams);
	};

	useEffect(() => {
		const data = isControlled ? params : state;
		paramsUpdate("offset")(data?.offset);
	}, []);

	const data = isControlled ? params : state;

	return (
		<Wrapper className={"shadow-picker " + className}>
			<TypeField
				value={data?.position || "outside"}
				onChange={paramsUpdate("position")}
			/>
			<OffsetField
				value={data?.offset || {x: "0", y: "0"}}
				onChange={paramsUpdate("offset")}
			/>
			<SliderField
				value={data?.blur || "0"}
				onChange={paramsUpdate("blur")}
				title={"Blur"}
			/>
			<SliderField
				value={data?.spread || "0"}
				onChange={paramsUpdate("spread")}
				title={"Spread"}
			/>
		</Wrapper>
	);
};
