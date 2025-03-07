import { Link } from "react-router-dom";

const Buttons = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
      }}
    >
      <Link
        to="/contact"
        style={{
          textDecoration: "none",
          color: "white",
          backgroundColor: "black",
          padding: 10,
          borderRadius: 10,
          margin: 10,
        }}
      >
        Contact me
      </Link>

      <Link to="/projects" style={link_button_style}>
        Projects
      </Link>
    </div>
  );
};

export default Buttons;

const link_button_style = {
  textDecoration: "none",
  color: "white",
  backgroundColor: "black",
  padding: 10,
  borderRadius: 10,
  margin: 10,

  hover: {
    backgroundColor: "white",
    color: "black",
  },
};
