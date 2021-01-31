import { css } from "@emotion/react";
import {
	buttonBigFontStyles,
	buttonFontStyles,
	resetButtonStyles,
} from "../../helperStyles";

export const buttonStyles = (
	theme,
	variant,
	size,
	frame,
	disabled,
	fullWidth,
) => css`
	${resetButtonStyles};
	display: inline-block;
	vertical-align: middle;
	font-weight: 600;
	padding: 15px 25px;
	border-radius: 100px;
	white-space: nowrap;
	hyphens: auto;

	${fullWidth &&
	css`
		width: 100%;
	`}

	${size === "default"
		? css`
				${buttonFontStyles(theme)};
		  `
		: css`
				${buttonBigFontStyles(theme)};
		  `}

	${variant === "primary" &&
	!frame &&
	css`
		background: ${theme.colors.primary};
		border: solid 2px ${theme.colors.primary};
		color: ${theme.colors.light};
		box-shadow: 0 0 0 0 ${theme.colors.primaryLight};

		@media (hover: hover) {
			&:hover:not([disabled]) {
				color: ${theme.colors.light};
				background: ${theme.colors.primaryDark};
				border-color: ${theme.colors.primaryDark};
			}
		}

		&:focus:not([disabled]) {
			box-shadow: 0 0 0 4px ${theme.colors.primaryLight};
		}

		&:active:not([disabled]) {
			box-shadow: 0 0 0 2px ${theme.colors.primaryLight};
		}
	`}

	${variant === "primary" &&
	frame &&
	css`
		border: solid 2px ${theme.colors.primary};
		color: ${theme.colors.primary};
		box-shadow: 0 0 0 0 ${theme.colors.primaryLight};

		@media (hover: hover) {
			&:hover:not([disabled]) {
				border: solid 2px ${theme.colors.primaryDark};
				color: ${theme.colors.primaryDark};
			}
		}

		&:focus:not([disabled]) {
			box-shadow: 0 0 0 4px ${theme.colors.primaryLight};
		}

		&:active:not([disabled]) {
			box-shadow: 0 0 0 2px ${theme.colors.primaryLight};
		}
	`}

	${variant === "secondary" &&
	!frame &&
	css`
		background: ${theme.colors.secondary};
		border: solid 2px ${theme.colors.secondary};
		color: ${theme.colors.light};
		box-shadow: 0 0 0 0 ${theme.colors.secondaryLight};

		@media (hover: hover) {
			&:hover:not([disabled]) {
				color: ${theme.colors.light};
				background: ${theme.colors.secondaryDark};
				border-color: ${theme.colors.secondaryDark};
			}
		}

		&:focus:not([disabled]) {
			box-shadow: 0 0 0 4px ${theme.colors.secondaryLight};
		}

		&:active:not([disabled]) {
			box-shadow: 0 0 0 2px ${theme.colors.secondaryLight};
		}
	`}

	${variant === "secondary" &&
	frame &&
	css`
		border: solid 2px ${theme.colors.secondary};
		color: ${theme.colors.secondary};
		box-shadow: 0 0 0 0 ${theme.colors.secondaryLight};

		@media (hover: hover) {
			&:hover:not([disabled]) {
				border: solid 2px ${theme.colors.secondaryDark};
				color: ${theme.colors.secondaryDark};
			}
		}

		&:focus:not([disabled]) {
			box-shadow: 0 0 0 4px ${theme.colors.secondaryLight};
		}

		&:active:not([disabled]) {
			box-shadow: 0 0 0 2px ${theme.colors.secondaryLight};
		}
	`}

	${variant === "tertiary" &&
	!frame &&
	css`
		background: ${theme.colors.tertiary};
		border: solid 2px ${theme.colors.tertiary};
		color: ${theme.colors.light};
		box-shadow: 0 0 0 0 ${theme.colors.tertiaryLight};

		@media (hover: hover) {
			&:hover:not([disabled]) {
				color: ${theme.colors.light};
				background: ${theme.colors.tertiaryDark};
				border-color: ${theme.colors.tertiaryDark};
			}
		}

		&:focus:not([disabled]) {
			box-shadow: 0 0 0 4px ${theme.colors.tertiaryLight};
		}

		&:active:not([disabled]) {
			box-shadow: 0 0 0 2px ${theme.colors.tertiaryLight};
		}
	`}

	${variant === "tertiary" &&
	frame &&
	css`
		border: solid 2px ${theme.colors.tertiary};
		color: ${theme.colors.tertiary};
		box-shadow: 0 0 0 0 ${theme.colors.tertiaryLight};

		@media (hover: hover) {
			&:hover:not([disabled]) {
				border: solid 2px ${theme.colors.tertiaryDark};
				color: ${theme.colors.tertiaryDark};
			}
		}

		&:focus:not([disabled]) {
			box-shadow: 0 0 0 4px ${theme.colors.tertiaryLight};
		}

		&:active:not([disabled]) {
			box-shadow: 0 0 0 2px ${theme.colors.tertiaryLight};
		}
	`}

	${disabled &&
	!frame &&
	css`
		background: ${theme.colors.grayLight};
		border-color: ${theme.colors.grayLight};
		color: ${theme.colors.gray};
		cursor: not-allowed;
	`}

	${disabled &&
	frame &&
	css`
		border: solid 2px ${theme.colors.grayLight};
		color: ${theme.colors.gray};
		cursor: not-allowed;
	`}
`;
