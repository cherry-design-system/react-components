import { createContext, useState } from "react";

const ToastNotificationsContext = createContext({
	notifications: [],
	addNotification: () => null,
});

const color = (config) => config?.color || "info";
const autoHide = (config) => config?.autoHide || 0;

function ToastNotificationsProvider({ children }) {
	const [notifications, setToastNotifications] = useState([]);

	const addNotification = (text, config) => {
		setToastNotifications((prevState) => [
			...prevState,
			{
				text,
				status: "hidden",
				color: color(config),
				autoHide: autoHide(config),
			},
		]);
		setTimeout(() => {
			setToastNotifications([
				...notifications,
				{
					text,
					status: "visible",
					color: color(config),
					autoHide: autoHide(config),
				},
			]);
		}, 100);
	};

	return (
		<ToastNotificationsContext.Provider
			value={{ notifications, addNotification }}
		>
			{children}
		</ToastNotificationsContext.Provider>
	);
}

export { ToastNotificationsContext, ToastNotificationsProvider };
