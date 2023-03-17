import React, { useRef, useState } from "react";
import { localTheme } from "../../theme";
import * as styles from "./Accordion.styles";

function Accordion({ title, children, theme = localTheme }) {
	const [isActive, setIsActive] = useState(false);
	const childrenRef = useRef(null);

	return (
		<>
			<div
				onClick={() => setIsActive(!isActive)}
				css={styles.accordionStyles(theme, isActive)}
			>
				<button>
					<strong className="title">{title}</strong>
					<span className="indicator" />
				</button>
			</div>
			<div
				css={styles.accordionContentStyles(
					theme,
					isActive,
					childrenRef?.current?.offsetHeight,
				)}
			>
				<div
					className="inner-accordion-content"
					ref={childrenRef}
					css={styles.introTextStyles(theme)}
				>
					{children}
				</div>
			</div>
		</>
	);
}

export { Accordion };
