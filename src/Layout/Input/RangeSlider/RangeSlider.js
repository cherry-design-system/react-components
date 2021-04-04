import React from "react";
import { localTheme } from "../../../theme";
import { Label } from "../../Label/Label";
import { inputStyles } from "../Input.styles";

function RangeSlider({
	className,
	size = "default",
	theme = localTheme,
	...props
}) {
	return (
		<input
			type="range"
			className={className}
			css={inputStyles(
				theme,
				"range",
				size,
				props.disabled,
				false,
				false,
				false,
			)}
			{...props}
		/>
	);
}

export { RangeSlider };
