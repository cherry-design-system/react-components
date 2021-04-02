import { css } from "@emotion/react";
import { Breakpoints, mq } from "../../mq";

export const labelStyles = (theme, error, success) => css`
	color: ${theme.colors.gray};
	display: inline-block;
	vertical-align: middle;
	padding: 0;
	margin: 0;
	line-height: ${theme.sizes.text.lineheight.mobile};

	${mq(Breakpoints.lg)} {
		line-height: ${theme.sizes.text.lineheight.desktop};
	}

	${error &&
	css`
		color: ${theme.colors.error};
	`};

	${success &&
	css`
		color: ${theme.colors.success};
	`};
`;
