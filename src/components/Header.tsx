import { Link } from "@modern-js/runtime/router";

const Header = () => (
    <>
        <header>
            <a href="/" className="logo">
                <img
                    src="https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/modern-js-logo.svg"
                    alt="Modern JS + Module federation"
                    style={{ height: "32px", verticalAlign: "middle" }}
                />
                <span style={{ marginLeft: "10px", color: "#fff", fontWeight: "bold", fontSize: "1.2rem" }}>

                </span>
            </a>
            <div className="header-links">
                <Link to="/login" className="link">Login</Link>
                <Link to="/login/register" className="link">Register</Link>
            </div>
        </header>
    </>
);

export default Header;
