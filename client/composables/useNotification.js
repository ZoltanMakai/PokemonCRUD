export function useNotification() {
  const notificationMessage = useState("notificationMessage", () => null);
  const visible = useState("notificationVisible", () => true);

  const notify = (message) => {
    notificationMessage.value = message;
    visible.value = true;
    setTimeout(() => {
      visible.value = false;
    }, 5000);
  };

  const closeNotification = () => {
    visible.value = false;
  };

  return {
    notificationMessage,
    visible,
    notify,
    closeNotification,
  };
}
