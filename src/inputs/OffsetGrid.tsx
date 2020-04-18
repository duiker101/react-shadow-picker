import React, {useRef, useState} from "react";
import styled from "styled-components";

const Wrapper = styled.svg`
	width: 100px;
	height: 100px;
	border: 1px solid #5a5a5a;
`;

const Handle = styled.circle<{dragging: boolean}>`
	cursor: ${(p) => (p.dragging ? "grabbing" : "grab")};
	color: #4285F4;
`;

const Line = styled.line`
	color: #555a;
`;

interface Offset {
	x: number;
	y: number;
}

interface Props {
	max?: number;
	offset: Offset;
	onChange: (offset: Offset) => void;
}

export default ({offset: {x, y}, max = 20, onChange}: Props) => {
	const [dragging, setDragging] = useState(false);
	const svg = useRef<SVGSVGElement>();

	const onMove = (e) => {
		if (!dragging || !svg?.current) return;

		let point = svg.current.createSVGPoint();
		point.x = e.clientX;
		point.y = e.clientY;
		let t = point.matrixTransform(svg.current.getScreenCTM().inverse());

		const offset = {
			x: Math.trunc((t.x - 50) * (max / 50) * 100) / 100,
			y: Math.trunc((t.y - 50) * (max / 50) * 100) / 100,
		};

		onChange(offset);
	};

	const posX = (50 / max) * x + 50;
	const posY = (50 / max) * y + 50;

	return (
		<Wrapper
			ref={svg}
			onMouseMove={onMove}
			className={"shadow-picker__grid"}
			viewBox={"0 0 100 100"}>
			<Line
				x1={50}
				y1={0}
				x2={50}
				y2={100}
				strokeWidth={2}
				strokeDasharray={"2,1"}
				stroke={"currentColor"}
				className={"shadow-picker__grid-line"}
			/>
			<Line
				x1={0}
				y1={50}
				x2={100}
				y2={50}
				strokeDasharray={"2,1"}
				strokeWidth={2}
				stroke={"currentColor"}
				className={"shadow-picker__grid-line"}
			/>
			<Line
				x1={50}
				y1={50}
				x2={posX}
				y2={posY}
				strokeWidth={2}
				stroke={"currentColor"}
				className={"shadow-picker__grid-line"}
			/>
			<Handle
				onMouseDown={() => setDragging(true)}
				onMouseUp={() => setDragging(false)}
				className={"shadow-picker__grid-handle"}
				cx={posX}
				cy={posY}
				r={5}
				fill={"currentColor"}
				dragging={dragging}
			/>
		</Wrapper>
	);
};
