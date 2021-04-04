import { css } from "@emotion/react";
import { Breakpoints, mq } from "../../mq";

export const labelStyles = (theme, error, success, fullWidth) => css`
	color: ${theme.colors.gray};
	display: inline-block;
	vertical-align: middle;
	padding: 0 10px 0 0;
	margin: auto 0;
	line-height: ${theme.sizes.text.lineheight.mobile};

	${fullWidth &&
	css`
		width: 100%;
	`}

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
