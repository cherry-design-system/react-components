import React from "react";
import { localTheme } from "../../theme";
import { fontStyles } from "./FontStyle.styles";

function FontStyle({
	className,
	children,
	variant,
	theme = localTheme,
	...props
}) {
	return (
		<span className={className} css={fontStyles(theme, variant)} {...props}>
			{children}
		</span>
	);
}

export { FontStyle };
