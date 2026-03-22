import { useNotificationContext } from "../../contexts/NotificationContext";

export default function NotificationAlert() {
  const { alertFields } = useNotificationContext();

  return (
    <div className="notification-container d-flex justify-content-center">
      <div
        className={`alert alert-${alertFields.type} fade show d-flex align-items-center`}
        role="alert"
      >
        <span className="alert-icon ms-2 me-3">
          <i className={`bi bi-${alertFields.icon}`}></i>
        </span>
        <div>{alertFields.text}</div>
        <button
          type="button"
          className="btn-close ms-auto"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
}
