import React from "react";
import { localTheme } from "../../theme";
import { inputStyles, radioCheckWrapperStyles } from "./Input.styles";
import { Check } from "../../svg/Check";
import { Label } from "../Label";

function Input({
	className,
	children,
	size = "default",
	type = "text",
	success,
	error,
	label,
	fullWidth,
	theme = localTheme,
	...props
}) {
	if ((type === "checkbox") | (type === "radio")) {
		return (
			<div css={radioCheckWrapperStyles(theme, type, size, fullWidth)}>
				<input
					type={type}
					className={className}
					css={inputStyles(
						theme,
						type,
						size,
						props.disabled,
						success,
						error,
						fullWidth,
					)}
					{...props}
				/>
				{type === "checkbox" ? <Check /> : <em />}
				{label && (
					<Label htmlFor={props.id} error={error} success={success}>
						{label}
					</Label>
				)}
			</div>
		);
	}

	return (
		<>
			{label && (
				<Label htmlFor={props.id} error={error} success={success}>
					{label}
				</Label>
			)}
			<input
				type={type}
				className={className}
				css={inputStyles(
					theme,
					type,
					size,
					props.disabled,
					success,
					error,
					fullWidth,
				)}
				{...props}
			/>
		</>
	);
}

export { Input };
