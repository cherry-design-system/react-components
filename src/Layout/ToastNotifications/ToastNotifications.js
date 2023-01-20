import { useContext, useRef, useState } from "react";
import { ToastNotificationsContext } from "./ToastNotificationsContext";
import * as styles from "./ToastNotifications.styles";
import { Close } from "../../svg/Close";
import { localTheme } from "../../theme";

function ToastNotifications({ theme = localTheme }) {
	const { notifications } = useContext(ToastNotificationsContext);

	return (
		<ul css={styles.notificationsStyles(theme)}>
			{notifications.map((notification, i) => (
				<NotificationItem key={i} {...notification} />
			))}
		</ul>
	);
}

function NotificationItem(notification) {
	const [localStatus, setLocalStatus] = useState(true);
	const elmRef = useRef();

	const removeNotification = (i) => {
		setLocalStatus(false);
	};

	if (notification.autoHide) {
		setTimeout(() => {
			removeNotification(notification);
		}, notification.autoHide);
	}

	return (
		<li
			className={`${localStatus ? notification.status : "hidden"} ${
				notification.color
			} ${!notification.autoHide && "static"}`}
		>
			<span className="item">
				<span>{notification.text}</span>
				<button
					className="close-button"
					onClick={() => {
						removeNotification(notification);
					}}
					ref={elmRef}
				>
					<Close />
				</button>
			</span>
		</li>
	);
}

export { ToastNotifications };
