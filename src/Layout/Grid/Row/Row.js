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
	gutterSm,
	gutterMd,
	gutterLg,
	gutterXl,
	gutterXxl,
	gutterXxxl,
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
