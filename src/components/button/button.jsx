import "./Button.css";

const Button = (props) => {

    const {children, clickFunction} = props;
    return <button onClick={clickFunction} className="btn">{children}</button>

}

export default Button;