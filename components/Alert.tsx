import { FC } from "react";
import { motion } from "framer-motion";
type AlertProps = {
  type: string;
};

const Alert: FC<AlertProps> = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 150, delay: 0.5 }}
      className={`fixed w-96 top-6 right-6 rounded-lg py-5 px-6 mb-3 text-base inline-flex items-center ${
        props.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
      }`}
      role="alert"
    >
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="check-circle"
        className="w-4 h-4 mr-2 fill-current"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
        ></path>
      </svg>
      {props.type === "success"
        ? "Email sent - I'll get back to you shortly!"
        : "Sending failed - Give it another try 🥲"}
    </motion.div>
  );
};
export default Alert;
