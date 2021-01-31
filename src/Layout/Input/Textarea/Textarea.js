import React from "react";
import { localTheme } from "../../../theme";
import { Label } from "../../Label";
import { inputStyles } from "../Input.styles";

function Textarea({
	className,
	size = "default",
	error,
	success,
	label,
	theme = localTheme,
	...props
}) {
	return (
		<>
			{label && (
				<Label htmlFor={props.id} error={error} success={success}>
					{label}
				</Label>
			)}
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
		</>
	);
}

export { Textarea };
