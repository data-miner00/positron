import { motion } from "framer-motion";
import {
  AiFillInfoCircle,
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiFillExclamationCircle,
} from "react-icons/ai";

import { SnackbarProps } from "../models";

import "./Snackbar.css";

const Icons = {
  info: () => <AiFillInfoCircle />,
  success: () => <AiFillCheckCircle />,
  warning: () => <AiFillExclamationCircle />,
  error: () => <AiFillCloseCircle />,
};

function Snackbar({ message, type }: SnackbarProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`snackbar ${type}`}
    >
      <div className="icon">{Icons[type]()}</div>
      <div className="message">
        <p>{message}</p>
      </div>
    </motion.div>
  );
}

export default Snackbar;
