import React from "react";
import { localTheme } from "../../theme";
import { containerStyles } from "./Container.styles";

function Container({
	children,
	fluid,
	className,
	textAlign,
	id,
	theme = localTheme,
}) {
	return (
		<div
			css={containerStyles(theme, fluid, textAlign)}
			className={className}
			data-container
			id={id}
		>
			{children}
		</div>
	);
}

export { Container };
