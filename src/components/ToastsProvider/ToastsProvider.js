import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastsContext = React.createContext();

function ToastsProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function addToast(message, variant) {
    const id = crypto.randomUUID();
    const newToast = { message, variant, id };
    setToasts([...toasts, newToast]);
  }

  function removeToast(event) {
    // CHECK straying into the DOM here!!
    const buttonID = event.target.closest("button").dataset.id;
    const newToasts = toasts.filter((toast) => toast.id !== buttonID);
    setToasts(newToasts);
  }

  const handleEscape = React.useCallback(() => {
    setToasts([]);
  }, []);

  useEscapeKey(handleEscape);

  return (
    <ToastsContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastsContext.Provider>
  );
}

export default ToastsProvider;
