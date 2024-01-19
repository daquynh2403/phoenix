import { bool, node, number, string } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

function Notification({ children, text, show, indexItem, clickItem }) {
  return (
    <div className="relative inline-block">
      {children}
      <div
        className="w-fit px-2 py-3 bg-slate-800 text-white font-thin rounded absolute items-center h-full ml-2 max-md:-translate-y-10  max-md:-translate-x-40"
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
