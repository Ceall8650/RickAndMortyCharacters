import { NavLink } from "react-router-dom";
import { ROUTER_PATHNAME } from "router";

type Props = React.HTMLAttributes<HTMLDivElement>

function SideBar(props: Props) {
  return (
    <div className="border-r border-gray-300 px-2 pt-2"  {...props}>
      <h1 className="text-2xl mb-2">Rick and Morty</h1>
      <NavLink to={ROUTER_PATHNAME.CONTACT}>
        Contact
      </NavLink>
    </div>
  );
}

export default SideBar;
