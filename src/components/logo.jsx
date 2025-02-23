import ROUTE_PATH from "@/router/paths";
import { Link } from "react-router";

export default function Logo() {
  return (
    <Link to={ROUTE_PATH.home}>
      <img src="/logo.svg" />
    </Link>
  );
}
