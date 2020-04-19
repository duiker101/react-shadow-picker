export type ShadowPosition = "inside" | "outside";

export interface ShadowOffset {
	x: string;
	y: string;
}

export interface ShadowPickerParams {
	position?: ShadowPosition;
	offset?: ShadowOffset;
	blur?: string;
	spread?: string;
	color?: string;
}
