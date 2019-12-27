import React, { useState } from "react";
import { createPortal } from "react-dom";

import ToastContext from "./ToastContext";
import Toast from "./Toast";

const generateUEID = () => {
  let first = (Math.random() * 46656) | 0;
  let second = (Math.random() * 46656) | 0;
  first = ("000" + first.toString(36)).slice(-3);
  second = ("000" + second.toString(36)).slice(-3);

  return first + second;
};

const withToastProvider = Component => {
  const WithToastProvider = props => {
    const [toasts, setToasts] = useState([]);
    const add = content => {
      const id = generateUEID();
      setToasts([...toasts, { id, content }]);
    };

    const remove = id => setToasts(toasts.filter(t => t.id !== id));

    return (
      <ToastContext.Provider value={{ add, remove }}>
        <Component {...props} />
        {createPortal(
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              right: "20px"
            }}
          >
            {toasts.map(t => (
              <Toast key={t.id} remove={() => remove(t.id)}>
                {t.content}
              </Toast>
            ))}
          </div>,
          document.body
        )}
      </ToastContext.Provider>
    );
  };

  return WithToastProvider;
};

export default withToastProvider;
