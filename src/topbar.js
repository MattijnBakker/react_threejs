import './scss/components/_topbar.scss';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbar__logo__wrapper">
                <a href='/' className="topbar__logo">
                    Mattijn Bakker
                </a>
            </div>

            <div className="topbar__right">
                <a href='/over' className='topbar__link'>
                    Over
                </a>
                <a href='/' className='topbar__link'>
                    Projecten
                </a>
                <a href='/' className="topbar__button btn btn--primary">
                    Contact
                </a>
            </div>
        </div>
    );
}