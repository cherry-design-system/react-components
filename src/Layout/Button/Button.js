import React from "react";
import { localTheme } from "../../theme";
import { buttonStyles } from "./Button.styles";

function Button({
	className,
	children,
	variant = "primary",
	size = "default",
	frame,
	theme = localTheme,
	...props
}) {
	return (
		<button
			className={className}
			css={buttonStyles(theme, variant, size, frame, props.disabled)}
			{...props}
		>
			{children}
		</button>
	);
}

export { Button };
