import { useEffect } from "react";
import { Outlet, NavLink, useNavigation } from "react-router-dom";

const Layout = () => {
  const navigation = useNavigation();

  useEffect(() => {
    console.log("navigation", navigation);
  }, [navigation]);

  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to={"/react-vite"}>react-vite</NavLink>
        </li>
      </ul>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
