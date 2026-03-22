import { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

const initialAlertFields = {
  type: "info",
  icon: "info-circle",
  text: "Default Alert",
};

const NotificationContextProvider = ({ children }) => {
  const [notificationShow, setNotificationShow] = useState(false);
  const [alertFields, setAlertFields] = useState(initialAlertFields);

  const value = { notificationShow, setNotificationShow, alertFields, setAlertFields };

  return <NotificationContext.Provider value={value}>{children}</NotificationContext.Provider>;
};

const useNotificationContext = () => useContext(NotificationContext);

export { useNotificationContext, NotificationContextProvider };
