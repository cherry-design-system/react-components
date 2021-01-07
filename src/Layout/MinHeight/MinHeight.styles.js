import { css } from "@emotion/react";
import { Breakpoints, mq } from "../../mq";

export const minHeightStyles = (theme) => css`
	min-height: calc(100vh - ${theme.spacing.paddingTopBody.mobile});

	${mq(Breakpoints.lg)} {
		min-height: calc(100vh - ${theme.spacing.paddingTopBody.desktop});
	}
`;
