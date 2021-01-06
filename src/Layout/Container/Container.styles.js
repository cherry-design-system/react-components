import { css } from "@emotion/react";
import { mq, Breakpoints } from "../../mq";

export const containerStyles = (theme, fluid, textAlign) => css`
	margin: auto;
	width: 100%;
	padding: 0 ${theme.spacing.marginContainer.mobile};

	${mq(Breakpoints.lg)} {
		padding: 0 ${theme.spacing.marginContainer.desktop};
	}

	${fluid
		? css`
				max-width: ${theme.spacing.maxWidthLimit};
		  `
		: css`
				max-width: ${theme.spacing.maxWidth};
		  `}

	${textAlign === "right" &&
	css`
		text-align: right;
	`}

	${textAlign === "left" &&
	css`
		text-align: left;
	`}

	${textAlign === "center" &&
	css`
		text-align: center;
	`}
`;
