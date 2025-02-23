import { Button, Form, Input } from "antd";
import { LoginDataTypes } from "@/types/auth";
import { Link } from "react-router";
import { AuthPageStyle } from "../styles/pages/auth-page.style";
import ROUTE_PATH from "@/router/paths";
import useRequestLogin from "@/features/auth/hooks/services/use-request-login";
import MetaTags from "@/components/meta-tags";

const { Item } = Form;

export default function LoginPage() {
  const [form] = Form.useForm();
  const { loading, execute } = useRequestLogin();
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
