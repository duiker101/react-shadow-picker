import {useEffect, useState} from "react";
import {ShadowPickerParams, ShadowPosition} from "./types";

export const unitRegex = /(-?\d+)((r?em)|(px)|\%)$/;

export const parseShadowString = (value: string): ShadowPickerParams | null => {
	const parts = value.split(" ");
	let position: ShadowPosition = "outside";

	if (parts[0] === "inset") {
		parts.shift();
		position = "inside";
	}

	if (parts.length === 3) {
		const [x, y, color] = parts;
		return {offset: {x: x, y: y}, color, position};
	}

	if (parts.length === 4) {
		const [x, y, blur, color] = parts;
		return {offset: {x: x, y: y}, color, blur, position};
	}

	if (parts.length === 5) {
		const [x, y, blur, spread, color] = parts;
		return {offset: {x: x, y: y}, color, spread, blur, position};
	}

	return null;
};

export const buildShadowString = (params: ShadowPickerParams): string => {
	const values = [
		params.position === "inside" ? "inset" : undefined,
		params.offset?.x || "0",
		params.offset?.y || "0",
		params.blur,
		params.spread,
		params.color || "#000000",
	].filter((p) => !!p);

	return values.join(" ");
};

export const useUnitValue = (value: string) => {
	const [amount, setAmount] = useState(0);
	const [unit, setUnit] = useState("px");

	useEffect(() => {
		const matches = value.match(unitRegex);

		if (matches?.length === 5) {
			setAmount(parseInt(matches[1]));
			setUnit(matches[2]);
		}
	}, [value]);

	return {unit, amount, setUnit, setAmount};
};
