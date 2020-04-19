// import parse

import {buildShadowString, parseShadowString} from "../../src/common";

test("x y color", () => {
	expect(parseShadowString("3px 2px #0000ff")).toStrictEqual({
		offset: {x: "3px", y: "2px"},
		color: "#0000ff",
		position: "outside",
	});
});

test("x  color", () => {
	expect(parseShadowString("3px  #0000ff")).toStrictEqual({
		offset: {x: "3px", y: ""},
		color: "#0000ff",
		position: "outside",
	});
});

test("inset x y color", () => {
	expect(parseShadowString("inset 3px 2px #0000ff")).toStrictEqual({
		offset: {x: "3px", y: "2px"},
		color: "#0000ff",
		position: "inside",
	});
});

test("build inset x y color", () => {
	expect(
		buildShadowString({
			offset: {x: "3px", y: "2px"},
			color: "#0000ff",
			position: "inside",
		})
	).toStrictEqual("inset 3px 2px #0000ff");
});
