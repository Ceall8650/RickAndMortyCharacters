import { NavLink } from "react-router-dom";
import { ROUTER_PATHNAME } from "router";

type Props = React.HTMLAttributes<HTMLDivElement>

function SideBar(props: Props) {
  return (
    <div {...props}>
      <h1 className="text-2xl">Rick and Morty</h1>
      <NavLink to={ROUTER_PATHNAME.CONTACT}>
        Contact
      </NavLink>
    </div>
  );
}

export default SideBar;
