import React from "react";
import { localTheme } from "../../theme";
import { labelStyles } from "./Label.styles";

function Label({
	className,
	children,
	error,
	success,
	theme = localTheme,
	...props
}) {
	return (
		<label
			className={className}
			css={labelStyles(theme, error, success)}
			{...props}
		>
			{children}
		</label>
	);
}

export { Label };
