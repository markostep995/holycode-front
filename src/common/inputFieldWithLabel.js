import Style from "./inputFieldWithLabel.module.css";

const InputFieldWithLabel = (props) => {
  return (
    <div className="form-group" style={props.style}>
      <div className={Style.input__label}>
        {props.label}
        {/* <hr className={Style.input__hr} /> */}
      </div>
      <div>
        <input
          type={props.type ? props.type : "text"}
          className={Style.textStyleInput}
          style={props.inputStyle}
          disabled={props.disabled}
          {...props.register(props.registerName)}
          required={props.required}
          name={props.name}
          defaultValue={props.defaultValue}
          pattern={props.pattern}
          autoComplete={props.autoComplete}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
};

export default InputFieldWithLabel;
