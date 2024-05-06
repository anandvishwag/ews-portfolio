import { toast } from 'react-toastify';
const alertMessage = async (message, position, type ) => {
  try {

    switch (type) {
        case 'success':
            toast.success(message || 'Hi.. This is notify !', {
                position: position || 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
                });
          break;
        case 'warn':
            toast.warn(message || 'Hi.. This is notify !', {
                position: position || 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
                });
          break;
          case 'error':
            toast.error(message || 'Hi.. This is notify !', {
                position: position || 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
                });
          break;
          
        default:
            toast.info(message || 'Hi.. This is notify !', {
                position: position || 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
                });
            break;
      }

   
    
  } catch (error) {
    return null;
  }
}
const exportedObject = {
    alertMessage
};
export default exportedObject;