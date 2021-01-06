import * as React from "react";

declare class H1 extends React.Component<
	HeadingProps,
	any
> {}

declare class H2 extends React.Component<
	HeadingProps,
	any
> {}

declare class H3 extends React.Component<
	HeadingProps,
	any
> {}

declare class H4 extends React.Component<
	HeadingProps,
	any
> {}

declare class H5 extends React.Component<
	HeadingProps,
	any
> {}

declare class H6 extends React.Component<
	HeadingProps,
	any
> {}

declare class Container extends React.Component<
	ContainerProps,
	any
> {}

declare class Row extends React.Component<
	RowProps,
	any
> {}

declare class Col extends React.Component<
	ColProps,
	any
> {}

interface HeadingProps {
	children?: React.ReactNode;
	id?: string;
	className?: string;
	size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "hero1" | "hero2" | "hero3";
	theme?: object;
}

interface ContainerProps {
	id?: string;
	className?: string;
	children?: React.ReactNode;
	fluid?: boolean;
	textAlign?: "right" | "left" | "center";
	theme?: object;
}

interface RowProps {
	id?: string;
	className?: string;
	children?: React.ReactNode;
	alignItems?:
		| "stretch"
		| "center"
		| "flex-start"
		| "flex-end"
		| "baseline"
		| "initial";
	justifyContent?:
		| "flex-start"
		| "flex-end"
		| "center"
		| "space-between"
		| "space-around"
		| "initial";
	gutterXs?: "default" | "medium" | "big";
	gutterSm?: "default" | "medium" | "big";
	gutterMd?: "default" | "medium" | "big";
	gutterLg?: "default" | "medium" | "big";
	gutterXl?: "default" | "medium" | "big";
	gutterXxl?: "default" | "medium" | "big";
	gutterXxxl?: "default" | "medium" | "big";
	theme?: object;
}

interface ColProps {
	id?: string;
	className?: string;
	children?: React.ReactNode;
	textAlign?: "right" | "left" | "center";
	xs?: number | "auto";
	sm?: number | "auto";
	md?: number | "auto";
	lg?: number | "auto";
	xl?: number | "auto";
	xxl?: number | "auto";
	xxxl?: number | "auto";
	first?: boolean;
	firstXs?: boolean;
	firstSm?: boolean;
	firstMd?: boolean;
	firstLg?: boolean;
	firstXl?: boolean;
	firstXxl?: boolean;
	firstXxxl?: boolean;
	last?: boolean;
	lastXs?: boolean;
	lastSm?: boolean;
	lastMd?: boolean;
	lastLg?: boolean;
	lastXl?: boolean;
	lastXxl?: boolean;
	lastXxxl?: boolean;
	display?:
		| "block"
		| "inline"
		| "inline-block"
		| "flex"
		| "inline-flex"
		| "none";
	fullScreen?: boolean;
	theme?: object;
}

export { H1, H2, H3, H4, H5, H6, Container, Row, Col };
