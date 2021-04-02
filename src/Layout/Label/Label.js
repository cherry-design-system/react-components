import React from "react";
import { localTheme } from "../../theme";
import { labelStyles } from "./Label.styles";

function Label({
	className,
	children,
	error,
	success,
	fullWidth,
	htmlFor,
	theme = localTheme,
	...props
}) {
	return (
		<label
			className={className}
			css={labelStyles(theme, error, success, fullWidth)}
			htmlFor={htmlFor}
			{...props}
		>
			{children}
		</label>
	);
}

export { Label };
