import React from "react";
import { toast } from "react-toastify";

export const NotificationPopup = (message, type) => {
  toast[type](message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    // progress: undefined,
  });
};
