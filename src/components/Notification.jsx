import { bool, node, number, string } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

function Notification({ children, text, show, indexItem, clickItem }) {
  return (
    <div className="relative inline-block">
      {children}
      <div
        className="w-fit p-2 bg-slate-600 text-white text-center rounded absolute items-center h-full transition-all duration-500 ml-2"
        style={{
          display: show && clickItem === indexItem ? "inline-flex" : "none",
        }}
      >
        <span className="mr-1">{text}</span>
        <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#39c651" }} />
      </div>
    </div>
  );
}
Notification.propTypes = {
  children: node,
  text: string,
  show: bool,
  indexItem: number,
  clickItem: number,
};
export default Notification;
