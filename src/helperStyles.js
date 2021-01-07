import { css } from "@emotion/react";
import { Breakpoints, mq } from "./mq";

export const resetButtonStyles = css`
	appearance: none;
	background: none;
	border: none;
	border-radius: 0;
	cursor: pointer;
	padding: 0;
	margin: 0;
`;

export const resetListStyles = css`
	list-style: none;
	margin: 0;
	padding: 0;

	& li {
		padding: 0;
		margin: 0;
	}
`;

export const shadowStyles = css`
	box-shadow: 0px 13px 31px rgba(12, 20, 33, 0.04),
		0px 9.45547px 20.8947px rgba(12, 20, 33, 0.032375),
		0px 6.58125px 13.5141px rgba(12, 20, 33, 0.027),
		0px 4.31641px 8.38574px rgba(12, 20, 33, 0.023125),
		0px 2.6px 5.0375px rgba(12, 20, 33, 0.02),
		0px 1.37109px 2.99707px rgba(12, 20, 33, 0.016875),
		0px 0.56875px 1.79219px rgba(12, 20, 33, 0.013),
		inset 0px 2px 1px #ffffff;
`;

export const shadowHoverStyles = css`
	box-shadow: 0px 0px 31px rgba(12, 20, 33, 0.04),
		0px 0px 20.8947px rgba(12, 20, 33, 0.032375),
		0px 0px 13.5141px rgba(12, 20, 33, 0.027),
		0px 4.31641px 8.38574px rgba(12, 20, 33, 0.023125),
		0px 2.6px 5.0375px rgba(12, 20, 33, 0.02),
		0px 1.37109px 2.99707px rgba(12, 20, 33, 0.016875),
		0px 0.56875px 1.79219px rgba(12, 20, 33, 0.013),
		inset 0px 2px 1px #ffffff;
`;

export const eyebrowFontStyles = (theme) => css`
	font-size: ${theme.sizes.eyebrow.size.mobile};
	line-height: ${theme.sizes.eyebrow.lineheight.mobile};
	font-weight: 600;

	${mq(Breakpoints.lg)} {
		font-size: ${theme.sizes.eyebrow.size.desktop};
		line-height: ${theme.sizes.eyebrow.lineheight.desktop};
	}
`;

export const subTitleFontStyles = (theme) => css`
	font-size: ${theme.sizes.subtitle.size.mobile};
	line-height: ${theme.sizes.subtitle.lineheight.mobile};
	font-weight: 600;

	${mq(Breakpoints.lg)} {
		font-size: ${theme.sizes.subtitle.size.desktop};
		line-height: ${theme.sizes.subtitle.lineheight.desktop};
	}
`;

export const buttonFontStyles = (theme) => css`
	font-size: ${theme.sizes.button.size.mobile};
	line-height: ${theme.sizes.button.lineheight.mobile};
	font-weight: 600;

	${mq(Breakpoints.lg)} {
		font-size: ${theme.sizes.button.size.desktop};
		line-height: ${theme.sizes.button.lineheight.desktop};
	}
`;

export const buttonBigFontStyles = (theme) => css`
	font-size: ${theme.sizes.buttonBig.size.mobile};
	line-height: ${theme.sizes.buttonBig.lineheight.mobile};
	font-weight: 600;

	${mq(Breakpoints.lg)} {
		font-size: ${theme.sizes.buttonBig.size.desktop};
		line-height: ${theme.sizes.buttonBig.lineheight.desktop};
	}
`;

export const leadFontStyles = (theme) => css`
	font-size: ${theme.sizes.lead.size.mobile};
	line-height: ${theme.sizes.lead.lineheight.mobile};
	font-weight: 400;

	${mq(Breakpoints.lg)} {
		font-size: ${theme.sizes.lead.size.desktop};
		line-height: ${theme.sizes.lead.lineheight.desktop};
	}
`;

export const inputFontStyles = (theme) => css`
	font-size: ${theme.sizes.input.size.mobile};
	line-height: ${theme.sizes.input.lineheight.mobile};
	font-weight: 400;

	${mq(Breakpoints.lg)} {
		font-size: ${theme.sizes.input.size.desktop};
		line-height: ${theme.sizes.input.lineheight.desktop};
	}
`;

export const inputBigFontStyles = (theme) => css`
	font-size: ${theme.sizes.inputBig.size.mobile};
	line-height: ${theme.sizes.inputBig.lineheight.mobile};
	font-weight: 400;

	${mq(Breakpoints.lg)} {
		font-size: ${theme.sizes.inputBig.size.desktop};
		line-height: ${theme.sizes.inputBig.lineheight.desktop};
	}
`;
