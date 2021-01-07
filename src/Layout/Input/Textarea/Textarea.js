import React from "react";
import { localTheme } from "../../../theme";
import { Arrow } from "../../../svg/Arrow";
import { inputStyles } from "../Input.styles";

function Textarea({
	className,
	size = "default",
	error,
	success,
	theme = localTheme,
	...props
}) {
	return (
		<textarea
			className={className}
			css={inputStyles(
				theme,
				"text",
				size,
				props.disabled,
				success,
				error,
			)}
			{...props}
		/>
	);
}

export { Textarea };
