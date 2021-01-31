import { css } from "@emotion/react";

export const labelStyles = (theme, error, success) => css`
	color: ${theme.colors.gray};
	display: inline-block;
	vertical-align: middle;
	padding: 0;
	margin: 0;

	${error &&
	css`
		color: ${theme.colors.error};
	`};

	${success &&
	css`
		color: ${theme.colors.success};
	`};
`;
