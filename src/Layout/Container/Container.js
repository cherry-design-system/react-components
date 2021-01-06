import React from "react";
import { localTheme } from "../../theme";
import { containerStyles } from "./Container.styles";

export class Container extends React.Component {
	render() {
		const {
			id,
			className,
			children,
			fluid = false,
			textAlign,
			theme = localTheme,
		} = this.props;
		return (
			<div
				css={containerStyles(theme, fluid, textAlign)}
				className={className}
				data-container
				id={id}
			>
				{children}
			</div>
		);
	}
}

export default Container;
