import MetaTags from "@/components/meta-tags";
import { NotFoundStyle } from "@/styles/pages/not-found-page.style";
import ROUTE_PATH from "@/router/paths";
import { FullPageContent } from "@/styles/global-styles";
import { Button } from "antd";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <>
      <MetaTags title="404 NotFound" description="404" />
      <FullPageContent>
        <NotFoundStyle>
          <div className="error">404</div>

          <span className="info">Page not found</span>

          <Link to={ROUTE_PATH.home}>
            <Button size="large" type="primary">
              Back Home
            </Button>
          </Link>
        </NotFoundStyle>
      </FullPageContent>
    </>
  );
}
