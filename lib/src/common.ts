import {useEffect, useState} from "react";

export const unitRegex = /(-?\d+)((r?em)|(px)|\%)$/;

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
