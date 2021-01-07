import React from "react";
import { localTheme } from "../../theme";
import { fontStyles } from "./FontStyle.styles";

function FontStyle({
	id,
	className,
	children,
	variant,
	theme = localTheme,
	...props
}) {
	return (
		<span
			id={id}
			className={className}
			css={fontStyles(theme, variant)}
			{...props}
		>
			{children}
		</span>
	);
}

export { FontStyle };
