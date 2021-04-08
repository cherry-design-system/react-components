import { css } from "@emotion/react";
import { resetButtonStyles } from "../../../helperStyles";
import {
	activeColorsStyles,
	defaultBackgroundStyles,
	defaultLightBackgroundStyles,
	defaultShadowStyles,
	focusColorsStyles,
	hoverColorsStyles,
} from "../Input.styles";

export const toggleInputStyles = (theme, size, variant) => css`
	display: inline-block;
	margin: auto 0;
	position: relative;
	vertical-align: middle;

	& * {
		vertical-align: middle;
	}

	& input {
		${resetButtonStyles};
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		outline: none;
	}

	& input:checked ~ .toggle-input-slider {
		&:before {
			max-width: 46px;
			${defaultLightBackgroundStyles(theme, variant)};
		}

		&:after {
			transform: translate3d(0, 0, 0) translateX(23px);
		}
	}

	@media (hover: hover) {
		& input:hover:not([disabled]) ~ .toggle-input-slider {
			${hoverColorsStyles(theme, variant)};
		}
	}

	& input:focus:not([disabled]) ~ .toggle-input-slider {
		outline: none;
		${focusColorsStyles(theme, variant)};
	}

	& input:active:not([disabled]) ~ .toggle-input-slider {
		${activeColorsStyles(theme, variant)};
	}

	& input:disabled {
		cursor: not-allowed;
	}

	& input:disabled ~ .toggle-input-slider {
		border-color: ${theme.colors.gray};

		&:before {
			background: ${theme.colors.grayLight};
		}

		&:after {
			background: ${theme.colors.gray};
		}
	}

	& .toggle-input-slider {
		border: solid 2px ${theme.colors.grayLight};
		border-radius: 30px;
		background: ${theme.colors.light};
		pointer-events: none;
		transition: all 0.3s ease;
		${defaultShadowStyles(theme, variant)};

		${size === "default"
			? css`
					height: 22px;
					width: 46px;
			  `
			: css`
					height: 32px;
					width: 56px;
			  `}

		&:before,
		&:after {
			content: "";
			display: block;
			position: absolute;
		}

		&:before {
			top: 5px;
			left: 5px;
			width: calc(100% - 10px);
			height: calc(100% - 10px);
			max-width: 0;
			border-radius: 30px;
			transition: all 0.3s ease;
			background: ${theme.colors.light};
		}

		&:after {
			left: 0;
			top: 0;
			border-radius: 50%;
			transition: all 0.3s ease;
			transform: translate3d(0, 0, 0) translateX(0);
			${defaultBackgroundStyles(theme, variant)};

			${size === "default"
				? css`
						width: 22px;
						height: 22px;
				  `
				: css`
						width: 32px;
						height: 32px;
				  `}
		}
	}
`;
