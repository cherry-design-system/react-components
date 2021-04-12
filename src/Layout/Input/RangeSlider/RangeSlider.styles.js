import { css } from "@emotion/react";
import { resetButtonStyles } from "../../../helperStyles";
import {
	activeColorsStyles,
	defaultBackgroundStyles,
	defaultShadowStyles,
	hoverColorsStyles,
	focusColorsStyles,
} from "../Input.styles";

export const rangeSliderStyles = (theme, size, variant, disabled) => css`
	padding: 0;
	height: 10px;
	font-size: 0;
	box-shadow: none;
	border: none;
	background: transparent;

	&::-webkit-slider-runnable-track {
		width: 100%;
		cursor: pointer;
		background: ${theme.colors.light};
		border-radius: 25px;
		border: 2px solid ${theme.colors.grayLight};
		transition: all 0.3s ease;
		${defaultShadowStyles(theme, variant)};
	}

	&::-webkit-slider-thumb {
		${resetButtonStyles}
		border: 0 solid transparent;
		border-radius: 50%;
		cursor: pointer;
		transition: all 0.3s ease;
		${defaultBackgroundStyles(theme, variant)};
		${defaultShadowStyles(theme, variant)};
	}

	&::-moz-range-track {
		width: 100%;
		height: 6px;
		cursor: pointer;
		background: ${theme.colors.light};
		border-radius: 25px;
		border: 2px solid ${theme.colors.grayLight};
		transition: all 0.3s ease;
		${defaultShadowStyles(theme, variant)};
	}

	&::-moz-range-thumb {
		border: 0 solid transparent;
		height: 22px;
		width: 22px;
		border-radius: 50%;
		cursor: pointer;
		transition: all 0.3s ease;
		${defaultBackgroundStyles(theme, variant)};
		${defaultShadowStyles(theme, variant)};
	}

	@media (hover: hover) {
		&:hover:not([disabled]) {
			&::-webkit-slider-runnable-track {
				${hoverColorsStyles(theme, variant)};
			}

			&::-moz-range-track {
				${hoverColorsStyles(theme, variant)};
			}
		}
	}

	&:focus:not([disabled]) {
		box-shadow: none;

		&::-webkit-slider-runnable-track {
			background: ${theme.colors.light};
			${focusColorsStyles(theme, variant)};
		}

		&::-webkit-slider-thumb {
			border-color: ${theme.colors.grayLight};
			outline: none;
			${focusColorsStyles(theme, variant)};
		}

		&::-moz-range-track {
			background: ${theme.colors.light};
			${focusColorsStyles(theme, variant)};
		}

		&::-moz-range-thumb {
			outline: none;
			border-color: ${theme.colors.grayLight};
			outline: none;
			${focusColorsStyles(theme, variant)};
		}
	}

	&:active:not([disabled]) {
		box-shadow: none;

		&::-webkit-slider-runnable-track {
			${activeColorsStyles(theme, variant)};
		}

		&::-webkit-slider-thumb {
			${activeColorsStyles(theme, variant)};
		}

		&::-moz-range-track {
			${activeColorsStyles(theme, variant)};
		}

		&::-moz-range-thumb {
			${activeColorsStyles(theme, variant)};
		}
	}

	${size === "big"
		? css`
				min-width: 200px;
				height: 32px;

				&::-webkit-slider-runnable-track {
					height: 14px;
				}

				&::-webkit-slider-thumb {
					width: 32px;
					height: 32px;
					margin-top: -11px;
				}

				&::-moz-range-track {
					height: 10px;
				}

				&::-moz-range-thumb {
					width: 32px;
					height: 32px;
				}
		  `
		: css`
				min-width: 130px;
				height: 22px;

				&::-webkit-slider-runnable-track {
					height: 10px;
				}

				&::-webkit-slider-thumb {
					height: 22px;
					width: 22px;
					margin-top: -8px;
				}

				&::-moz-range-track {
					height: 6px;
				}

				&::-moz-range-thumb {
					width: 22px;
					height: 22px;
				}
		  `}

	${disabled &&
	css`
		&:disabled {
			background: transparent;
			border-color: transparent;
		}

		&::-webkit-slider-runnable-track {
			cursor: not-allowed;
			background: ${theme.colors.grayLight};
		}

		&::-webkit-slider-thumb {
			background: ${theme.colors.gray};
			cursor: not-allowed;
		}

		&::-moz-range-track {
			cursor: not-allowed;
			background: ${theme.colors.grayLight};
		}

		&::-moz-range-thumb {
			background: ${theme.colors.gray};
			cursor: not-allowed;
		}
	`}
`;
