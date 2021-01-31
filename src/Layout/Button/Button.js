import React from "react";
import { localTheme } from "../../theme";
import { buttonStyles } from "./Button.styles";

function Button({
	className,
	children,
	variant = "primary",
	size = "default",
	frame,
	fullWidth,
	theme = localTheme,
	...props
}) {
	return (
		<button
			className={className}
			css={buttonStyles(
				theme,
				variant,
				size,
				frame,
				props.disabled,
				fullWidth,
			)}
			{...props}
		>
			{children}
		</button>
	);
}

export { Button };
