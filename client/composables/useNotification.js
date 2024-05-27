const notificationMessage = ref(null);

export function useNotification() {
  const setNotification = (message) => {
    notificationMessage.value = message;
    setTimeout(() => {
      notificationMessage.value = null;
    }, 10000);
  };

  const clearNotification = () => {
    notificationMessage.value = null;
  };

  return {
    notificationMessage,
    setNotification,
    clearNotification,
  };
}
