import { App, Button, Form, Input } from "antd";
import { LoginDataTypes, RedirectStatus } from "@/types/auth";
import { Link, useSearchParams } from "react-router";
import { AuthPageStyle } from "../styles/pages/auth-page.style";
import ROUTE_PATH from "@/router/paths";
import useRequestLogin from "@/features/auth/hooks/services/use-request-login";
import MetaTags from "@/components/meta-tags";
import { useEffect } from "react";

const { Item } = Form;

export default function LoginPage() {
  const [form] = Form.useForm();
  const { message } = App.useApp();
  const [searchParams, setSearchParams] = useSearchParams();
  const { loading, execute } = useRequestLogin();

  const redirectStatus = searchParams.get("status") as RedirectStatus | null;

  useEffect(() => {
    if (redirectStatus === "token_expired") {
      message.info("Your session has expired. Please log in again.");
      setSearchParams(undefined);
    }
  }, [redirectStatus]);

  const submitLoginForm = async (formData: LoginDataTypes) => {
    await execute(formData);
  };

  return (
    <>
      <MetaTags
        title="Sign in"
        description="Sign in to StarPlus! and explore the top 250 IMDb movies. Enjoy a seamless experience and track your favorite films."
      />
      <AuthPageStyle>
        <Form form={form} onFinish={submitLoginForm}>
          <Item name="grant_type" noStyle initialValue="password">
            <Input type="hidden" />
          </Item>
          <Item
            name="username"
            rules={[
              { required: true },
              { type: "email", message: "Please enter a valid email." },
            ]}
          >
            <Input type="email" size="large" placeholder="username@exmaple.com" />
          </Item>
          <Item
            name="password"
            rules={[
              { required: true },
              { min: 6, message: "The password must be at least 6 characters" },
            ]}
          >
            <Input.Password size="large" placeholder="password" />
          </Item>
          <Item rules={[{ required: true }]}>
            <Button loading={loading} type="primary" block size="large" htmlType="submit">
              Log In
            </Button>
          </Item>
        </Form>
        <p className="guide-text">
          Don’t have an account? <Link to={ROUTE_PATH.register}>Sign up for free</Link>
        </p>
      </AuthPageStyle>
    </>
  );
}
