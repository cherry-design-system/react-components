import React from "react";
import { localTheme } from "../../theme";
import { minHeightStyles } from "./MinHeight.styles";

function MinHeight({ className, children, theme = localTheme }) {
	return (
		<div className={className} css={minHeightStyles(theme)}>
			{children}
		</div>
	);
}

export { MinHeight };
