import style from "./NavbarComponent.module.css";

const NavbarComponent = () => {
  return (
    <>
        <nav className={style.navbar}>
            <div className={style.logo}>
                <h2>LOGO</h2>
            </div>
            <ul className={style["navbar-items"]}>
                <li>
                    <a style={{borderBottom: "2px solid white", color: "Green"}}>Home</a>
                </li>
                <li>
                    <a style={{borderBottom: "2px solid white", color: "Green"}}>Contact</a>
                </li>
                <li>
                    <a style={{borderBottom: "2px solid white", color: "Green"}}>About</a>
                </li>
            </ul>
        </nav>
    </>
  );
}

export default NavbarComponent
