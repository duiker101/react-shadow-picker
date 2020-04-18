import React, {useEffect, useState} from "react";
import styled from "styled-components";

const Input = styled.input`
	background: transparent;
	color: inherit;
	border: 1px solid #555a;
	border-radius: 2px;
	width: 60px;
	height: 28px;
	margin: 0 8px;
	box-sizing: border-box;
	flex: 1;
	text-align: right;
`;

interface Props {
	value: string;
	onChange: (value: string) => void;
}

export default ({value, onChange}: Props) => {
	const [tmp, setTmp] = useState(value);
	const [active, setActive] = useState(false);

	useEffect(() => {
		if (!active) setTmp(value);
	}, [value]);

	const changed = (e) => {
		setTmp(e.target.value);
		onChange(e.target.value);
	};

	const blur = () => {
		setActive(false);
		if (/(-?\d+)((r?em)|(px)|\%)$/.test(tmp)) onChange(tmp);
	};

	return (
		<Input
			className={"shadow-picker__input"}
			value={tmp}
			onFocus={() => setActive(true)}
			onBlur={blur}
			onChange={changed}
		/>
	);
};
