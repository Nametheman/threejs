/* eslint-disable react/prop-types */
import state from "../store";
import { useSnapshot } from "valtio";

const CustomButton = ({ type, title, handleClick, customStyles }) => {
  const snap = useSnapshot(state);
  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: "#fff",
      };
    }
  };
  return (
    <buton
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles} cursor-pointer`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </buton>
  );
};

export default CustomButton;
