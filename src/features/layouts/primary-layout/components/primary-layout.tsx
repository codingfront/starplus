import PrimaryFooter from "./primary-footer";
import PrimaryHeader from "./primary-header";
import { Outlet } from "react-router";

export default function PrimaryLayout() {
  return (
    <>
      <PrimaryHeader />
      <Outlet />
      <PrimaryFooter />
    </>
  );
}
