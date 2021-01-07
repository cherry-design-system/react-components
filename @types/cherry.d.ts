import * as React from "react";

declare class Button extends React.Component<ButtonProps, any> {}

declare class FontStyle extends React.Component<FontStyleProps, any> {}

declare class Container extends React.Component<ContainerProps, any> {}

declare class Row extends React.Component<RowProps, any> {}

declare class Col extends React.Component<ColProps, any> {}

declare class H1 extends React.Component<HeadingProps, any> {}

declare class H2 extends React.Component<HeadingProps, any> {}

declare class H3 extends React.Component<HeadingProps, any> {}

declare class H4 extends React.Component<HeadingProps, any> {}

declare class H5 extends React.Component<HeadingProps, any> {}

declare class H6 extends React.Component<HeadingProps, any> {}

declare class Input extends React.Component<InputProps, any> {}

declare class Select extends React.Component<SelectProps, any> {}

declare class Textarea extends React.Component<TextareaProps, any> {}

declare class Label extends React.Component<LabelProps, any> {}

declare class MinHeight extends React.Component<MinHeightProps, any> {}

declare class Space extends React.Component<SpaceProps, any> {}

declare class TableOverflow extends React.Component<TableOverflowProps, any> {}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode;
	variant?: "primary" | "secondary" | "tertiary";
	frame?: boolean;
	size?: "default" | "big";
	theme?: object;
}

interface FontStyleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode;
	variant?:
		| "eyebrow"
		| "subtitle"
		| "button"
		| "buttonBig"
		| "lead"
		| "input"
		| "inputBig";
	frame?: boolean;
	size?: "default" | "big";
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

interface HeadingProps {
	children?: React.ReactNode;
	id?: string;
	className?: string;
	size?:
		| "h1"
		| "h2"
		| "h3"
		| "h4"
		| "h5"
		| "h6"
		| "hero1"
		| "hero2"
		| "hero3";
	theme?: object;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	children?: React.ReactNode;
	error?: boolean;
	success?: boolean;
	size?: "default" | "big";
	theme?: object;
}

interface SelectProps extends React.InputHTMLAttributes<HTMLSelectElement> {
	children?: React.ReactNode;
	error?: boolean;
	success?: boolean;
	size?: "default" | "big";
	theme?: object;
}

interface TextareaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
	children?: React.ReactNode;
	error?: boolean;
	success?: boolean;
	size?: "default" | "big";
	theme?: object;
}

interface LabelProps extends React.InputHTMLAttributes<HTMLLabelElement> {
	children?: React.ReactNode;
	error?: boolean;
	success?: boolean;
	theme?: object;
}

interface MinHeightProps {
	children?: React.ReactNode;
	className?: string;
	theme?: object;
}

interface SpaceProps {
	size?: number;
	xsSize?: number;
	smSize?: number;
	mdSize?: number;
	lgSize?: number;
	xlSize?: number;
	xxlSize?: number;
	xxxlSize?: number;
	horizontal?: number;
}

interface TableOverflowProps {
	children?: React.ReactNode;
}

export {
	Button,
	Container,
	FontStyle,
	Row,
	Col,
	H1,
	H2,
	H3,
	H4,
	H5,
	H6,
	Input,
	Select,
	Textarea,
	Label,
	MinHeight,
	Space,
	TableOverflow,
};
