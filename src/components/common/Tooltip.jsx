import { node, string } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

function Tooltip({ text }) {
  return (
    <div className="absolute -translate-y-10 p-2 w-full">
      <div className="w-2/3 mx-auto border text-center">
        <span className="mr-1">{text}</span>
        <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#39c651" }} />
      </div>
    </div>
  );
}
Tooltip.propTypes = {
  children: node,
  text: string,
};
export default Tooltip;
