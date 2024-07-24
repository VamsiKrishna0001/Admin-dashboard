import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 


export const showSuccessToast = (message, isMobile) => {

  toast.success(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: {
      borderRadius: "10px",
      margin: isMobile ? "20px" : "0px",
      fontFamily: "Poppins, sans-serif",
    },
  });
};

export const showErrorToast = (message, isMobile) => {
  toast.error(message,{
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: {
      borderRadius: "10px",
      margin: isMobile ? "20px" : "0px",
      fontFamily: "Poppins, sans-serif",
    },
  });
};