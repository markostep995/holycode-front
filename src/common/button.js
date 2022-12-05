import Style from "./button.module.css";

const Button = (props) => {
  return (
    <div className={Style.ticketNextButton} style={props.style}>
      <button
        type="submit"
        className={
          props.disabled
            ? `${Style.buttonDisabled} ${Style.buttonText}`
            : `${Style.button} ${Style.buttonText}`
        }
        style={props.buttonStyle}
        disabled={props.disabled}
        onClick={props.onClick}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
