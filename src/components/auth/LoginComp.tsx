import { Link } from "react-router-dom";
import "../../styles/loginComp.css";

const LoginComp: React.FC = () => {
  return (
    <div className="login">
      <div className="login__contents">
        <h1 className="login__title">Sign in</h1>
        <h2 className="login__subtitle">to continue to vancedTube</h2>
        <input className="login__input" type="text" placeholder="username" />
        <input className="login__input" type="text" placeholder="password" />
        <button className="login__btn">Sign in</button>
        <h1 className="login__title">or</h1>
        <input className="login__input" type="text" placeholder="username" />
        <input className="login__input" type="text" placeholder="email" />
        <input className="login__input" type="text" placeholder="password" />
        <button className="login__btn">Sign up</button>
      </div>
      <div className="login__extra">
        english(USA)
        <div className="login__extra_links">
          <span>terms & conditions</span>
          <span>help</span>
          <span>report</span>
        </div>
      </div>
    </div>
  );
};

export default LoginComp;
