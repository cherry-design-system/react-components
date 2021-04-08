import React from "react";
import { localTheme } from "../../../theme";
import { Label } from "../../Label";
import { radioCheckWrapperStyles } from "../Input.styles";
import { toggleInputStyles } from "./ToggleInput.styles";

function ToggleInput({
	className,
	size = "default",
	success,
	error,
	label,
	type = "checkbox",
	fullWidth,
	variant = "secondary",
	theme = localTheme,
	...props
}) {
	return (
		<div
			css={radioCheckWrapperStyles(
				theme,
				"toggle-input",
				size,
				fullWidth,
				variant,
			)}
		>
			<div
				css={toggleInputStyles(theme, size, variant)}
				className="toggle-input-inner"
			>
				<input type="checkbox" className={className} {...props} />
				<div className="toggle-input-slider" />
			</div>
			{label && (
				<Label
					htmlFor={props.id}
					error={error}
					success={success}
					theme={theme}
				>
					{label}
				</Label>
			)}
		</div>
	);
}

export { ToggleInput };
