import { css } from "@emotion/react";
import { resetButtonStyles, shadowStyles } from "../../helperStyles";

export const notificationsStyles = (theme, align, bottom) => css`
	position: fixed;
	z-index: 99999;
	margin: 0;
	padding: 0;
	list-style: none;

	${align === "center" &&
	css`
		left: 50%;
		transform: translateX(-50%);
	`}

	${align === "right" &&
	css`
		right: 20px;
	`}

${align === "left" &&
	css`
		left: 20px;
	`}

${bottom
		? css`
				bottom: 12px;
		  `
		: css`
				top: 12px;
		  `}

	& li {
		justify-content: center;
		display: flex;
		margin: 0;
		transition: all 0.3s ease;
		opacity: 0;
		pointer-events: none;
		transform: translateY(-20px);
		height: 50px;
		padding: 5px 0;

		& .item {
			display: inline-flex;
			background: ${theme.colors.info};
			border-radius: 6px;
			margin: 0;
			overflow: hidden;
			${shadowStyles(theme)};
			${theme.isDark
				? css`
						color: ${theme.colors.dark};
				  `
				: css`
						color: ${theme.colors.light};
				  `}

			& span {
				display: inline-flex;
				padding: 8px 0 8px 12px;
				overflow: hidden;
				height: 100%;
				line-height: 23px;
			}

			& .close-button {
				${resetButtonStyles};
				margin: auto 0 auto 10px;
				padding: 14px 12px;
				display: inline-flex;
				background: rgba(255, 255, 255, 0);
				transition: all 0.3s ease;
				max-width: 40px;
				width: 40px;
				overflow: hidden;
				height: 100%;
				border-left: solid 1px rgba(255, 255, 255, 0.3);

				& svg {
					width: 12px;
					height: auto;
					opacity: 1;
				}

				& * {
					margin: auto;
				}

				@media (hover: hover) {
					&:hover {
						background: rgba(255, 255, 255, 0.2);
					}
				}
			}
		}

		&.error {
			& .item {
				background: ${theme.colors.error};
			}
		}

		&.success {
			& .item {
				background: ${theme.colors.success};
			}
		}

		&.warning {
			& .item {
				background: ${theme.colors.warning};
			}
		}

		&.visible {
			opacity: 1;
			pointer-events: all;
			transform: translateY(0);
		}

		&.hidden {
			padding: 0;
			height: 0;
		}

		&.static {
			position: relative;
			z-index: 10;
		}
	}
`;
