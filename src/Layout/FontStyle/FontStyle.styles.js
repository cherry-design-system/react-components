import { css } from "@emotion/react";
import {
	eyebrowFontStyles,
	subTitleFontStyles,
	buttonBigFontStyles,
	buttonFontStyles,
	leadFontStyles,
	inputBigFontStyles,
	inputFontStyles,
} from "../../helperStyles";

export const fontStyles = (theme, variant) => css`
	${variant === "eyebrow" && eyebrowFontStyles(theme)};
	${variant === "subtitle" && subTitleFontStyles(theme)};
	${variant === "button" && buttonFontStyles(theme)};
	${variant === "buttonBig" && buttonBigFontStyles(theme)};
	${variant === "lead" && leadFontStyles(theme)};
	${variant === "input" && inputFontStyles(theme)};
	${variant === "inputBig" && inputBigFontStyles(theme)};
`;
