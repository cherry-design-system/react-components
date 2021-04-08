import React from "react";
import { localTheme } from "../../../theme";
import { rowStyles } from "./Row.styles";

function Row({
	id,
	className,
	children,
	alignItems,
	justifyContent,
	gutterXs = "default",
	gutterSm = "default",
	gutterMd = "default",
	gutterLg = "default",
	gutterXl = "default",
	gutterXxl = "default",
	gutterXxxl = "default",
	theme = localTheme,
}) {
	return (
		<div
			css={rowStyles(
				theme,
				alignItems,
				justifyContent,
				gutterXs,
				gutterSm,
				gutterMd,
				gutterLg,
				gutterXl,
				gutterXxl,
				gutterXxxl,
			)}
			id={id}
			className={className}
			data-row
		>
			{children}
		</div>
	);
}

export { Row };
