import React from "react";
import styled from "styled-components";
import {Label} from "../inputs/Label";
import {ShadowPosition} from "../types";

const Wrapper = styled.div`
	flex: 1;
	display: flex;
`;

const Group = styled.div`
	display: flex;
	width: 170px;
	margin: 0 0 0 auto;
`;

const Button = styled.div<{active: boolean}>`
	border: 1px solid #555a;
	background: ${(p) => (p.active ? "#4285F4" : "transparent")};
	cursor: pointer;
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	margin: 0.5em 0;
`;

const ButtonOut = styled(Button)`
	border-radius: 2px 0 0 2px;
`;

const ButtonIn = styled(Button)`
	border-radius: 0 2px 2px 0;
`;

interface Props {
	value: ShadowPosition;
	onChange: (value: ShadowPosition) => void;
}

export default ({value, onChange}: Props) => {
	return (
		<Wrapper>
			<Label>Type</Label>
			<Group>
				<ButtonOut
					className={
						"shadow-picker__position " +
						(value === "outside" ? "active" : "")
					}
					active={value === "outside"}
					onClick={() => onChange("outside")}>
					Outside
				</ButtonOut>
				<ButtonIn
					className={
						"shadow-picker__position " +
						(value === "inside" ? "active" : "")
					}
					active={value === "inside"}
					onClick={() => onChange("inside")}>
					Inside
				</ButtonIn>
			</Group>
		</Wrapper>
	);
};
