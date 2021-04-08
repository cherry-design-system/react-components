import React from "react";
import { localTheme } from "../../../theme";
import { colStyles } from "./Col.styles";

function Col({
	id,
	className,
	children,
	textAlign,
	xs,
	sm,
	md,
	lg,
	xl,
	xxl,
	xxxl,
	first,
	firstXs,
	firstSm,
	firstMd,
	firstLg,
	firstXl,
	firstXxl,
	firstXxxl,
	last,
	lastXs,
	lastSm,
	lastMd,
	lastLg,
	lastXl,
	lastXxl,
	lastXxxl,
	display,
	fullScreen,
	sticky,
	theme = localTheme,
}) {
	return (
		<div
			css={colStyles(
				theme,
				textAlign,
				xs,
				sm,
				md,
				lg,
				xl,
				xxl,
				xxxl,
				first,
				firstXs,
				firstSm,
				firstMd,
				firstLg,
				firstXl,
				firstXxl,
				firstXxxl,
				last,
				lastXs,
				lastSm,
				lastMd,
				lastLg,
				lastXl,
				lastXxl,
				lastXxxl,
				display,
				fullScreen,
				sticky,
			)}
			className={className ? `col ${className}` : "col"}
			id={id}
			data-col
		>
			{children}
		</div>
	);
}

export { Col };
