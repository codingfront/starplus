import HeroHeader from "@/components/hero-header/hero-header";
import { useAuth } from "@/features/auth/contexts/auth.context";
import { useUser } from "@/features/auth/hooks/data/use-auth";
import ROUTE_PATH from "@/router/paths";
import { BackgroundBox, PaddingContent } from "@/styles/global-styles";
import { Descriptions, Button, App, Popconfirm, Typography } from "antd";
import { useNavigate } from "react-router";
import heroUserAccount from "@/assets/images/hero-user-profile.jpg";
import LogoutOutlined from "@ant-design/icons/LogoutOutlined";
import { UserAccountPageStyle } from "../styles/pages/user-account-page.style";
import { timeFormatter } from "@/utils/dates";
import PageWithSidebar from "@/components/page-with-sidebar/page-with-sidebar";
import MetaTags from "@/components/meta-tags";
import SubmitMovieForm from "@/features/movies/components/submit-movie-form/submit-movie-form";
import useGetUserAccount from "@/features/auth/hooks/services/use-get-user-account";
import FullScreenLoading from "@/components/full-screen-loading";
import { useMemo } from "react";

const { Title } = Typography;

export default function UserAccountPage() {
  const { email, created_at, name } = useUser() || {};
  const { logout } = useAuth();
  const { loading } = useGetUserAccount();
  const navigate = useNavigate();
  const { message } = App.useApp();

  const items = useMemo(
    () => [
      {
        key: "1",
        label: "email",
        children: email,
      },
      {
        key: "2",
        label: "joined at",
        children: timeFormatter(created_at, "dddd, MMMM D, YYYY"),
      },
    ],
    [email, created_at],
  );

  const onLogout = () => {
    logout();
    message.success("You have successfully logged out!");
    navigate(ROUTE_PATH.home);
  };

  return (
    <>
      <MetaTags title="My Account" description="My Account" />
      <HeroHeader title="My Account" $backgroundUrl={heroUserAccount} />
      <FullScreenLoading spinning={loading} />
      <PageWithSidebar>
        <UserAccountPageStyle>
          <BackgroundBox>
            <Descriptions
              extra={
                <Popconfirm
                  title="Logout"
                  description="Are you sure you want to log out?"
                  onConfirm={onLogout}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button
                    iconPosition="end"
                    type="primary"
                    size="large"
                    icon={<LogoutOutlined />}
                  >
                    Logout
                  </Button>
                </Popconfirm>
              }
              layout="vertical"
              bordered
              title={<Title level={2}>{name}</Title>}
              items={items}
            />
          </BackgroundBox>
          <PaddingContent>
            <BackgroundBox>
              <SubmitMovieForm />
            </BackgroundBox>
          </PaddingContent>
        </UserAccountPageStyle>
      </PageWithSidebar>
    </>
  );
}
