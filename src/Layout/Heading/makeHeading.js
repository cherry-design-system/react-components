import React from "react";
import { makeHeadingStyles } from "./makeHeading.styles";
import {localTheme} from "../../theme";

function makeHeading(h) {
	return ({ children, size, className, id, theme = localTheme}) => {
		if (h === 1) {
			return (
				<h1
					css={makeHeadingStyles(theme, size, h)}
					className={className}
					id={id}
				>
					{children}
				</h1>
			);
		}
		if (h === 2) {
			return (
				<h2
					css={makeHeadingStyles(theme, size, h)}
					className={className}
					id={id}
				>
					{children}
				</h2>
			);
		}
		if (h === 3) {
			return (
				<h3
					css={makeHeadingStyles(theme, size, h)}
					className={className}
					id={id}
				>
					{children}
				</h3>
			);
		}
		if (h === 4) {
			return (
				<h4
					css={makeHeadingStyles(theme, size, h)}
					className={className}
					id={id}
				>
					{children}
				</h4>
			);
		}
		if (h === 5) {
			return (
				<h5
					css={makeHeadingStyles(theme, size, h)}
					className={className}
					id={id}
				>
					{children}
				</h5>
			);
		}
		if (h === 6) {
			return (
				<h6
					css={makeHeadingStyles(theme, size, h)}
					className={className}
					id={id}
				>
					{children}
				</h6>
			);
		}
	};
}

export { makeHeading };
