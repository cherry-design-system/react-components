import { css } from "@emotion/react";
import {
	inputBigFontStyles,
	inputFontStyles,
	resetButtonStyles,
} from "../../helperStyles";
import { Breakpoints, mq } from "../../mq";
import { rangeSliderStyles } from "./RangeSlider/RangeSlider.styles";

export const inputStyles = (
	theme,
	type,
	size,
	disabled,
	success,
	error,
	fullWidth,
	variant,
) => css`
	appearance: none;
	border: none;
	transition: all 0.3s ease;
	line-height: 1;
	vertical-align: middle;
	margin: 0;
	font-family: ${theme.fonts.text};
	border-radius: 6px;
	padding: 15px 15px;
	background: ${theme.colors.light};
	border: solid 2px ${theme.colors.grayLight};

	@media (hover: hover) {
		&:hover:not([disabled]) {
			${hoverColorsStyles(theme, variant)};
		}
	}

	${size === "default"
		? css`
				${inputFontStyles(theme)};
		  `
		: css`
				${inputBigFontStyles(theme)};
		  `}

	${(type === "text") |
		(type === "number") |
		(type === "phone") |
		(type === "email") |
		(type === "password") &&
	css`
		display: inline-block;
		${defaultShadowStyles(theme, variant)};

		${error &&
		css`
			border-color: ${theme.colors.error};
		`}

		${success &&
		css`
			border-color: ${theme.colors.success};
		`}
	`};

	${(type !== "checkbox") | (type !== "radio") &&
	fullWidth &&
	css`
		display: block;
		width: 100%;
	`}

	&:focus:not([disabled]) {
		outline: none;
		${focusColorsStyles(theme, variant)};
	}

	&:active:not([disabled]) {
		${activeColorsStyles(theme, variant)};
	}

	${(type === "checkbox") | (type === "radio") &&
	css`
		padding: 0;
		cursor: pointer;

		${size === "big"
			? css`
					width: 32px;
					height: 32px;
			  `
			: css`
					width: 22px;
					height: 22px;
			  `};
	`};

	${type === "radio" &&
	css`
		border-radius: 50%;
	`}

	${type === "range" &&
	css`
		${rangeSliderStyles(theme, size, variant, disabled)}
	`}

	${disabled &&
	css`
		background: ${theme.colors.grayLight};
		border-color: ${theme.colors.gray};
		color: ${theme.colors.gray};
		cursor: not-allowed;
		opacity: 0.9;
	`}
`;

export const radioCheckWrapperStyles = (
	theme,
	type,
	size,
	fullWidth,
	variant,
) => css`
	position: relative;
	display: inline-flex;
	line-height: 1;
	vertical-align: middle;

	${fullWidth &&
	css`
		display: flex;
		width: 100%;
	`}

	& input {
		vertical-align: top;
	}

	& label {
		padding: 0 0 0 10px;
	}

	${size === "big"
		? css`
				& label {
					max-width: calc(100% - 40px);
					min-width: calc(100% - 32px);
					margin-top: 5px;

					${mq(Breakpoints.lg)} {
						margin-top: 4px;
					}
				}
		  `
		: css`
				& label {
					max-width: calc(100% - 30px);
					min-width: calc(100% - 22px);
					margin-top: 0;

					${mq(Breakpoints.lg)} {
						margin-top: -1px;
					}
				}
		  `}

	${type === "toggle-input" &&
	css`
		& .toggle-input-inner {
			margin-top: 0;
			vertical-align: top;
		}

		${size === "big"
			? css`
					& label {
						max-width: calc(100% - 70px);
						min-width: calc(100% - 56px);
					}
			  `
			: css`
					& label {
						max-width: calc(100% - 60px);
						min-width: calc(100% - 46px);
					}
			  `}
	`}

	${type === "checkbox" &&
	css`
		& input:checked ~ svg {
			opacity: 1;
			transform: translate3d(0, 0, 0) scale(1);
		}

		& input:disabled ~ svg {
			opacity: 0;
		}

		& svg {
			position: absolute;
			opacity: 0;
			pointer-events: none;
			transform: translate3d(0, 0, 0) scale(0.7);

			${svgColor(theme, false, false, variant)};

			${size === "big"
				? css`
						top: 10px;
						left: 9px;
						width: 14px;
						height: auto;
				  `
				: css`
						top: 7px;
						left: 6px;
						width: 10px;
						height: auto;
				  `};
		}
	`}

	${type === "radio" &&
	css`
		& input:checked ~ em {
			opacity: 1;
			transform: translate3d(0, 0, 0) scale(1);
		}

		& em {
			display: block;
			position: absolute;
			border-radius: 50%;
			transition: all 0.3s ease;
			opacity: 0;
			pointer-events: none;
			transform: translate3d(0, 0, 0) scale(0.7);
			${defaultBackgroundStyles(theme, variant)};

			${size === "big"
				? css`
						left: 9px;
						top: 9px;
						width: 14px;
						height: 14px;
				  `
				: css`
						left: 6px;
						top: 6px;
						width: 10px;
						height: 10px;
				  `};
		}
	`}
`;

export const selectWrapperStyles = (
	theme,
	size,
	success,
	error,
	fullWidth,
	variant,
) => css`
	position: relative;
	display: inline-block;
	line-height: 1;

	${fullWidth &&
	css`
		display: block;
		width: 100%;
	`}

	& select {
		min-height: ${size === "big" ? "55px" : "51px"};
		padding-right: 40px;

		${fullWidth &&
		css`
			width: 100%;
		`}

		&:focus:hover ~ svg {
			opacity: 1;
			transform: translate3d(0, 0, 0) rotate(180deg);
		}

		&:disabled ~ svg {
			& polyline,
			& path {
				stroke: ${theme.colors.gray};
			}
		}
	}

	& svg {
		position: absolute;
		top: ${size === "big" ? "22px" : "21px"};
		right: 15px;
		opacity: 1;
		pointer-events: none;
		transform: translate3d(0, 0, 0) rotate(0deg);
		${svgColor(theme, success, error, variant)};
	}
`;

export const svgColor = (theme, success, error, variant) => css`
	& polyline,
	& path {
		${variant === "primary" &&
		css`
			stroke: ${theme.colors.primary};
		`}

		${variant === "secondary" &&
		css`
			stroke: ${theme.colors.secondary};
		`}

		${variant === "tertiary" &&
		css`
			stroke: ${theme.colors.tertiary};
		`}

		${success &&
		css`
			stroke: ${theme.colors.success};
		`}

		${error &&
		css`
			stroke: ${theme.colors.error};
		`}
	}
`;

export const defaultShadowStyles = (theme, variant) => css`
	${variant === "primary" &&
	css`
		box-shadow: 0 0 0 0 ${theme.colors.primaryLight};
	`}

	${variant === "secondary" &&
	css`
		box-shadow: 0 0 0 0 ${theme.colors.secondaryLight};
	`}

	${variant === "tertiary" &&
	css`
		box-shadow: 0 0 0 0 ${theme.colors.tertiaryLight};
	`}
`;

export const defaultBackgroundStyles = (theme, variant) => css`
	${variant === "primary" &&
	css`
		background: ${theme.colors.primary};
	`}

	${variant === "secondary" &&
	css`
		background: ${theme.colors.secondary};
	`}

	${variant === "tertiary" &&
	css`
		background: ${theme.colors.tertiary};
	`}
`;

export const defaultLightBackgroundStyles = (theme, variant) => css`
	${variant === "primary" &&
	css`
		background: ${theme.colors.primaryLight};
	`}

	${variant === "secondary" &&
	css`
		background: ${theme.colors.secondaryLight};
	`}

	${variant === "tertiary" &&
	css`
		background: ${theme.colors.tertiaryLight};
	`}
`;

export const hoverColorsStyles = (theme, variant) => css`
	${variant === "primary" &&
	css`
		border-color: ${theme.colors.primary};
	`}

	${variant === "secondary" &&
	css`
		border-color: ${theme.colors.secondary};
	`}

	${variant === "tertiary" &&
	css`
		border-color: ${theme.colors.tertiary};
	`}
`;

export const focusColorsStyles = (theme, variant) => css`
	${variant === "primary" &&
	css`
		border-color: ${theme.colors.primary};
		box-shadow: 0 0 0 4px ${theme.colors.primaryLight};
	`}

	${variant === "secondary" &&
	css`
		border-color: ${theme.colors.secondary};
		box-shadow: 0 0 0 4px ${theme.colors.secondaryLight};
	`}

	${variant === "tertiary" &&
	css`
		border-color: ${theme.colors.tertiary};
		box-shadow: 0 0 0 4px ${theme.colors.tertiaryLight};
	`}
`;

export const activeColorsStyles = (theme, variant) => css`
	${variant === "primary" &&
	css`
		box-shadow: 0 0 0 2px ${theme.colors.primaryLight};
	`}

	${variant === "secondary" &&
	css`
		box-shadow: 0 0 0 2px ${theme.colors.secondaryLight};
	`}

	${variant === "tertiary" &&
	css`
		box-shadow: 0 0 0 2px ${theme.colors.tertiaryLight};
	`}
`;
