import '../scss/components/_header.scss';
import Scene from "./three";


export default function Header() {
    return (
        <div className="header">
            <Scene/>
            <div className="container">
                <div className="header__content">
                    Hallo, Ik ben een <br/>
                    <span>Front-end developer</span>
                </div>
            </div>
        </div>
    );
}