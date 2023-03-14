import '../scss/components/_header.scss';
import Canvas from "./three";
import WebvalueLogo from "../images/webvalue__bals.png";

export default function Header() {
    return (
        <div className="header">
            <Canvas/>
            <div className="container">
                <div className="header__content">
                    Hallo, Ik ben een <br/>
                    <span>Front-end developer</span>
                </div>
            </div>
        </div>
    );
}