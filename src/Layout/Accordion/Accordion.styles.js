import { css } from "@emotion/react";
import { Breakpoints, mq } from "../../mq";

export const resetButtonStyles = css`
	appearance: none;
	background: none;
	border: none;
	border-radius: 0;
	cursor: pointer;
	padding: 0;
	margin: 0;
`;

export const introTextStyles = (theme) => css`
	font-size: ${theme.sizes.text.size.mobile};
	line-height: ${theme.sizes.text.lineheight.mobile};
	margin: 0;
	padding: 0;
	text-align: left;

	${mq(Breakpoints.lg)} {
		font-size: ${theme.sizes.text.size.desktop};
		line-height: ${theme.sizes.text.lineheight.desktop};
	}
`;

export const accordionStyles = (theme, isActive) => css`
	margin-bottom: -2px;

	& button {
		${resetButtonStyles};
		width: 100%;
		background: transparent;
		border-top: solid 2px ${theme.colors.grayLight};
		border-bottom: solid 2px ${theme.colors.grayLight};
		padding: 20px 0;
		text-align: left;
		font-size: ${theme.sizes.h5.size.mobile};
		line-height: ${theme.sizes.h5.lineheight.mobile};
		display: flex;
		position: relative;

		${mq(Breakpoints.lg)} {
			font-size: ${theme.sizes.h2.size.desktop};
			line-height: ${theme.sizes.h2.lineheight.desktop};
		}

		${isActive &&
		css`
			border-bottom-color: transparent;
		`}

		& .title {
			margin: auto 0;
			padding-right: 44px;
			font-size: 24px;
			line-height: 26px;
			color: ${theme.colors.dark};
			transition: 0.3s ease;

			${mq(Breakpoints.lg)} {
				padding-right: 76px;
			}

			@media (hover: hover) {
				&:hover {
					color: ${theme.colors.primary};
				}
			}
		}

		& .indicator {
			position: absolute;
			top: 50%;
			right: 0;
			transform: translateY(-50%);
			width: 25px;
			height: 25px;
			margin: auto 0;

			&:before,
			&:after {
				content: "";
				display: block;
				position: absolute;
				background: ${theme.colors.primary};
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
				transition: all 0.3s ease;
			}

			&:before {
				width: 2px;
				height: 100%;

				${isActive &&
				css`
					transform: translate(-50%, -50%) rotate(90deg);
				`}
			}

			&:after {
				width: 100%;
				height: 2px;
			}
		}
	}
`;

export const accordionContentStyles = (theme, isActive, height) => css`
	clear: both;
	overflow: hidden;
	max-height: 0;
	opacity: 0;
	transition: all 0.3s ease;
	color: ${theme.colors.gray};

	${isActive &&
	css`
		opacity: 1;
		max-height: ${height}px;
	`}

	& .inner-accordion-content {
		padding: 20px 0;
		max-width: 1200px;
		transition: all 0.3s ease;

		& strong {
			color: ${theme.colors.dark};
		}

		${isActive &&
		css`
			padding-top: 0;
		`}
	}
`;
