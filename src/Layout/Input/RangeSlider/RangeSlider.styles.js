import { css } from "@emotion/react";
import { resetButtonStyles } from "../../../helperStyles";

export const rangeSliderStyles = (theme, size, disabled) => css`
	padding: 0;
	height: 10px;
	font-size: 0;
	box-shadow: none;
	border: none;

	&::-webkit-slider-runnable-track {
		width: 100%;
		cursor: pointer;
		background: ${theme.colors.light};
		border-radius: 25px;
		border: 2px solid ${theme.colors.grayLight};
		transition: all 0.3s ease;
		box-shadow: 0 0 0 0 ${theme.colors.secondaryLight};
	}

	&::-webkit-slider-thumb {
		${resetButtonStyles}
		border: 0 solid transparent;
		border-radius: 50%;
		background: ${theme.colors.secondary};
		cursor: pointer;
		box-shadow: 0 0 0 0 ${theme.colors.secondaryLight};
		transition: all 0.3s ease;
	}

	&::-moz-range-track {
		width: 100%;
		height: 6px;
		cursor: pointer;
		background: ${theme.colors.light};
		border-radius: 25px;
		border: 2px solid ${theme.colors.grayLight};
		transition: all 0.3s ease;
		box-shadow: 0 0 0 0 ${theme.colors.secondaryLight};
	}

	&::-moz-range-thumb {
		border: 0 solid transparent;
		height: 22px;
		width: 22px;
		border-radius: 50%;
		background: ${theme.colors.secondary};
		cursor: pointer;
		box-shadow: 0 0 0 0 ${theme.colors.secondaryLight};
		transition: all 0.3s ease;
	}

	@media (hover: hover) {
		&:hover:not([disabled]) {
			&::-webkit-slider-runnable-track {
				border-color: ${theme.colors.secondary};
			}

			&::-moz-range-track {
				border-color: ${theme.colors.secondary};
			}
		}
	}

	&:focus:not([disabled]) {
		box-shadow: none;

		&::-webkit-slider-runnable-track {
			border-color: ${theme.colors.secondary};
			background: ${theme.colors.light};
			box-shadow: 0 0 0 4px ${theme.colors.secondaryLight};
		}

		&::-webkit-slider-thumb {
			border-color: ${theme.colors.grayLight};
			box-shadow: 0 0 0 4px ${theme.colors.secondaryLight};
			outline: none;
		}

		&::-moz-range-track {
			border-color: ${theme.colors.secondary};
			box-shadow: 0 0 0 4px ${theme.colors.secondaryLight};
		}

		&::-moz-range-thumb {
			border-color: ${theme.colors.grayLight};
			box-shadow: 0 0 0 4px ${theme.colors.secondaryLight};
			outline: none;
		}
	}

	&:active:not([disabled]) {
		box-shadow: none;

		&::-webkit-slider-runnable-track {
			box-shadow: 0 0 0 2px ${theme.colors.secondaryLight};
		}

		&::-webkit-slider-thumb {
			box-shadow: 0 0 0 2px ${theme.colors.secondaryLight};
		}

		&::-moz-range-track {
			box-shadow: 0 0 0 2px ${theme.colors.secondaryLight};
		}

		&::-moz-range-thumb {
			box-shadow: 0 0 0 2px ${theme.colors.secondaryLight};
		}
	}

	${size === "big"
		? css`
				min-width: 200px;

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
