import "./TextComponent.css";

const TextComponent = (props) => {
  return (
    <div className="text-content">
      <p>{props.text}</p>
    </div>
  );
};

export default TextComponent;
