import style from '../../LayoutAuth/style.module.css'

const InputFormAuth = (props) => {
  return (
    <>
      <div className="mb-3">
        <label className={`form-label ${style.formLabel}`}>
          {props.title}
        </label>
        <div className={style.controlStyle}>
        <input type={props.type} value={props.value} className={`form-control ${style.formControl}`}  name={props.name} placeholder={props.title} />
        </div>
      </div>
    </>
  );
};

export default InputFormAuth;
