import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header
      style={{ backgroundColor: "rgb(252, 255, 89)" }}
      className="w-full h-20 flex items-center text-black font-bold px-10 border-b-2"
    >
      <nav className="w-full flex justify-between ">
        <Link to={"/"}>
          <div className="w-32">
            <img
              src="https://images.prismic.io/cuckoo-egg/a9ba79c9-aa03-46c5-9555-811affbaf7c3_cuckoo_logo_official.png?auto=compress,format&rect=0,0,1000,326&w=368&h=120"
              alt="logo"
            />
          </div>
        </Link>

        <ul className=" w-2/4 flex justify-end items-center gap-10 text-[19px] pr-5">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? `text-orange-600` : `text-black`
              }
            >
              Broadband
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive ? `text-orange-600` : `text-black`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive ? `text-orange-600` : `text-black`
              }
            >
              Support
            </NavLink>
          </li>
          <button>Login</button>
          <button>Sign up</button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
