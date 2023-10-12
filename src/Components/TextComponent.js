import "./TextComponent.css";

const TextComponent = (props) => {
  return (
    <div className="text-content-01">
      <p>{props.text}</p>
    </div>
  );
};

export default TextComponent;
