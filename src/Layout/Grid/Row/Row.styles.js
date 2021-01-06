import { css } from "@emotion/react";
import { mq, Breakpoints } from "../../../mq";

const row = css`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

export const rowStyles = (
	theme,
	alignItems,
	justifyContent,
	gutterXs,
	gutterSm,
	gutterMd,
	gutterLg,
	gutterXl,
	gutterXxl,
	gutterXxxl,
) => css`
	${row}
	${alignItems === "stretch" &&
	css`
		align-items: stretch;
	`}

	${alignItems === "center" &&
	css`
		align-items: center;
	`}

	${alignItems === "flex-start" &&
	css`
		align-items: flex-start;
	`}

	${alignItems === "flex-end" &&
	css`
		align-items: flex-end;
	`}

	${alignItems === "baseline" &&
	css`
		align-items: baseline;
	`}

	${alignItems === "initial" &&
	css`
		align-items: initial;
	`}

	${justifyContent === "flex-start" &&
	css`
		justify-content: flex-start;
	`}

	${justifyContent === "flex-end" &&
	css`
		justify-content: flex-end;
	`}

	${justifyContent === "center" &&
	css`
		justify-content: center;
	`}

	${justifyContent === "space-between" &&
	css`
		justify-content: space-between;
	`}

	${justifyContent === "space-around" &&
	css`
		justify-content: space-around;
	`}

	${justifyContent === "initial" &&
	css`
		justify-content: initial;
	`}

	${mq(Breakpoints.xs)} {
		${gutterXs === "default" &&
		css`
			margin-right: ${theme.spacing.marginRow.default};
			margin-left: ${theme.spacing.marginRow.default};

			& [data-col],
			& > * {
				padding-right: ${theme.spacing.gutterCol.default};
				padding-left: ${theme.spacing.gutterCol.default};
			}
		`}

		${gutterXs === "medium" &&
		css`
			margin-right: ${theme.spacing.marginRow.medium};
			margin-left: ${theme.spacing.marginRow.medium};

			& [data-col],
			& > * {
				padding-right: ${theme.spacing.gutterCol.medium};
				padding-left: ${theme.spacing.gutterCol.medium};
			}
		`}

		${gutterXs === "big" &&
		css`
			margin-right: ${theme.spacing.marginRow.big};
			margin-left: ${theme.spacing.marginRow.big};

			& [data-col],
			& > * {
				padding-right: ${theme.spacing.gutterCol.big};
				padding-left: ${theme.spacing.gutterCol.big};
			}
		`}
	}

	${mq(Breakpoints.sm)} {
		${gutterSm === "default" &&
		css`
			margin-right: ${theme.spacing.marginRow.default};
			margin-left: ${theme.spacing.marginRow.default};

			& [data-col],
			& > * {
				padding-right: ${theme.spacing.gutterCol.default};
				padding-left: ${theme.spacing.gutterCol.default};
			}
		`}

		${gutterSm === "medium" &&
		css`
			margin-right: ${theme.spacing.marginRow.medium};
			margin-left: ${theme.spacing.marginRow.medium};

			& [data-col],
			& > * {
				padding-right: ${theme.spacing.gutterCol.medium};
				padding-left: ${theme.spacing.gutterCol.medium};
			}
		`}

		${gutterSm === "big" &&
		css`
			margin-right: ${theme.spacing.marginRow.big};
			margin-left: ${theme.spacing.marginRow.big};

			& [data-col],
			& > * {
				padding-right: ${theme.spacing.gutterCol.big};
				padding-left: ${theme.spacing.gutterCol.big};
			}
		`}
	}

	${mq(Breakpoints.md)} {
		${gutterMd === "default" &&
		css`
			margin-right: ${theme.spacing.marginRow.default};
			margin-left: ${theme.spacing.marginRow.default};

			& [data-col],
			& > * {
				padding-right: ${theme.spacing.gutterCol.default};
				padding-left: ${theme.spacing.gutterCol.default};
			}
		`}

		${gutterMd === "medium" &&
		css`
			margin-right: ${theme.spacing.marginRow.medium};
			margin-left: ${theme.spacing.marginRow.medium};

			& [data-col],
			& > * {
				padding-right: ${theme.spacing.gutterCol.medium};
				padding-left: ${theme.spacing.gutterCol.medium};
			}
		`}

		${gutterMd === "big" &&
		css`
			margin-right: ${theme.spacing.marginRow.big};
			margin-left: ${theme.spacing.marginRow.big};

			& [data-col],
			& > * {
				padding-right: ${theme.spacing.gutterCol.big};
				padding-left: ${theme.spacing.gutterCol.big};
			}
		`}
	}

	${mq(Breakpoints.lg)} {
		${gutterLg === "default" &&
		css`
			margin-right: ${theme.spacing.marginRow.default};
			margin-left: ${theme.spacing.marginRow.default};

			& [data-col],
			& > * {
				padding-right: ${theme.spacing.gutterCol.default};
				padding-left: ${theme.spacing.gutterCol.default};
			}
		`}

		${gutterLg === "medium" &&
		css`
			margin-right: ${theme.spacing.marginRow.medium};
			margin-left: ${theme.spacing.marginRow.medium};

			& [data-col],
			& > * {
				padding-right: ${theme.spacing.gutterCol.medium};
				padding-left: ${theme.spacing.gutterCol.medium};
			}
		`}

		${gutterLg === "big" &&
		css`
			margin-right: ${theme.spacing.marginRow.big};
			margin-left: ${theme.spacing.marginRow.big};

			& [data-col],
			& > * {
				padding-right: ${theme.spacing.gutterCol.big};
				padding-left: ${theme.spacing.gutterCol.big};
			}
		`}
	}

	${mq(Breakpoints.xl)} {
		${gutterXl === "default" &&
		css`
			margin-right: ${theme.spacing.marginRow.default};
			margin-left: ${theme.spacing.marginRow.default};

			& [data-col],
			& > * {
				padding-right: ${theme.spacing.gutterCol.default};
				padding-left: ${theme.spacing.gutterCol.default};
			}
		`}

		${gutterXl === "medium" &&
		css`
			margin-right: ${theme.spacing.marginRow.medium};
			margin-left: ${theme.spacing.marginRow.medium};

			& [data-col],
			& > * {
				padding-right: ${theme.spacing.gutterCol.medium};
				padding-left: ${theme.spacing.gutterCol.medium};
			}
		`}

		${gutterXl === "big" &&
		css`
			margin-right: ${theme.spacing.marginRow.big};
			margin-left: ${theme.spacing.marginRow.big};

			& [data-col],
			& > * {
				padding-right: ${theme.spacing.gutterCol.big};
				padding-left: ${theme.spacing.gutterCol.big};
			}
		`}
	}

	${mq(Breakpoints.xxl)} {
		${gutterXxl === "default" &&
		css`
			margin-right: ${theme.spacing.marginRow.default};
			margin-left: ${theme.spacing.marginRow.default};

			& [data-col],
			& > * {
				padding-right: ${theme.spacing.gutterCol.default};
				padding-left: ${theme.spacing.gutterCol.default};
			}
		`}

		${gutterXxl === "medium" &&
		css`
			margin-right: ${theme.spacing.marginRow.medium};
			margin-left: ${theme.spacing.marginRow.medium};

			& [data-col],
			& > * {
				padding-right: ${theme.spacing.gutterCol.medium};
				padding-left: ${theme.spacing.gutterCol.medium};
			}
		`}

		${gutterXxl === "big" &&
		css`
			margin-right: ${theme.spacing.marginRow.big};
			margin-left: ${theme.spacing.marginRow.big};

			& [data-col],
			& > * {
				padding-right: ${theme.spacing.gutterCol.big};
				padding-left: ${theme.spacing.gutterCol.big};
			}
		`}
	}

	${mq(Breakpoints.xxxl)} {
		${gutterXxxl === "default" &&
		css`
			margin-right: ${theme.spacing.marginRow.default};
			margin-left: ${theme.spacing.marginRow.default};

			& [data-col],
			& > * {
				padding-right: ${theme.spacing.gutterCol.default};
				padding-left: ${theme.spacing.gutterCol.default};
			}
		`}

		${gutterXxxl === "medium" &&
		css`
			margin-right: ${theme.spacing.marginRow.medium};
			margin-left: ${theme.spacing.marginRow.medium};

			& [data-col],
			& > * {
				padding-right: ${theme.spacing.gutterCol.medium};
				padding-left: ${theme.spacing.gutterCol.medium};
			}
		`}

		${gutterXxxl === "big" &&
		css`
			margin-right: ${theme.spacing.marginRow.big};
			margin-left: ${theme.spacing.marginRow.big};

			& [data-col],
			& > * {
				padding-right: ${theme.spacing.gutterCol.big};
				padding-left: ${theme.spacing.gutterCol.big};
			}
		`}
	}
`;
