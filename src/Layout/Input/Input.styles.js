import { css } from "@emotion/react";
import {
	inputBigFontStyles,
	inputFontStyles,
	resetButtonStyles,
} from "../../helperStyles";
import { Breakpoints, mq } from "../../mq";

export const inputStyles = (
	theme,
	type,
	size,
	disabled,
	success,
	error,
	fullWidth,
) => css`
	appearance: none;
	border: none;
	transition: all 0.3s ease;
	line-height: 1;
	vertical-align: middle;
	margin: 0;
	font-family: ${theme.fonts.text};
	border-radius: 6px;
	border: solid 2px ${theme.colors.grayLight};
	padding: 15px 15px;
	background: ${theme.colors.light};

	@media (hover: hover) {
		&:hover:not([disabled]) {
			border-color: ${theme.colors.secondary};
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
		box-shadow: 0 0 0 0 ${theme.colors.secondaryLight};

		${fullWidth &&
		css`
			display: block;
			width: 100%;
		`}

		${error &&
		css`
			border-color: ${theme.colors.error};
		`}

		${success &&
		css`
			border-color: ${theme.colors.success};
		`}
	`};

	&:focus:not([disabled]) {
		border-color: ${theme.colors.secondary};
		box-shadow: 0 0 0 4px ${theme.colors.secondaryLight};
		outline: none;
	}

	&:active:not([disabled]) {
		box-shadow: 0 0 0 2px ${theme.colors.secondaryLight};
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

	${disabled &&
	css`
		background: ${theme.colors.grayLight};
		border-color: ${theme.colors.gray};
		color: ${theme.colors.gray};
		cursor: not-allowed;
		opacity: 0.9;
	`}
`;

export const radioCheckWrapperStyles = (theme, type, size, fullWidth) => css`
	position: relative;
	display: inline-flex;
	line-height: 1;

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
					margin-top: 4px;
				}
		  `
		: css`
				& label {
					max-width: calc(100% - 30px);
					margin-top: -1px;
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
					}
			  `
			: css`
					& label {
						max-width: calc(100% - 60px);
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
			background: ${theme.colors.secondary};
			transition: all 0.3s ease;
			opacity: 0;
			pointer-events: none;
			transform: translate3d(0, 0, 0) scale(0.7);

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

		&:disabled ~ svg {
			& polyline,
			& path {
				stroke: ${theme.colors.gray};
			}
		}
	}

	& select:focus:hover ~ svg {
		opacity: 1;
		transform: translate3d(0, 0, 0) rotate(180deg);

		& polyline,
		& path {
			stroke: ${theme.colors.secondary};
		}
	}

	& svg {
		position: absolute;
		top: ${size === "big" ? "22px" : "21px"};
		right: 15px;
		opacity: 1;
		pointer-events: none;
		transform: translate3d(0, 0, 0) rotate(0deg);

		& polyline,
		& path {
			stroke: ${theme.colors.secondary};

			${success &&
			css`
				stroke: ${theme.colors.success};
			`}

			${error &&
			css`
				stroke: ${theme.colors.error};
			`}
		}
	}
`;
