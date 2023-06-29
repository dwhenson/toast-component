import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import styles from "./Toast.module.css";

import { ToastsContext } from "../ToastsProvider";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ variant, id, children }) {
  const { removeToast } = React.useContext(ToastsContext);
  const Icon = ICONS_BY_VARIANT[variant];

  return (
    <div data-id={id} className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>{children}</p>
      <div className="visually-hidden">{variant}</div>
      <button
        data-id={id}
        className={styles.closeButton}
        onClick={(event) => removeToast(event)}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
