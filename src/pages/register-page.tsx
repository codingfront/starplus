import { Button, Form, Input } from "antd";
import { RegisterDataTypes } from "@/types/auth";
import usePostRegistration from "@/features/auth/hooks/services/use-post-registration";
import { AuthPageStyle } from "../styles/pages/auth-page.style";
import { Link } from "react-router";
import ROUTE_PATH from "@/router/paths";
import MetaTags from "@/components/meta-tags";
const { Item } = Form;

export default function RegisterPage() {
  const [form] = Form.useForm();
  const { loading, execute } = usePostRegistration();
  const submitRegisterForm = async (formData: RegisterDataTypes) => {
    await execute(formData);
  };
  return (
    <>
      <MetaTags
        title="Create an Account"
        description="Join StarPlus! today and explore the top 250 IMDb movies. Sign up for free and enhance your movie discovery experience."
      />
      <AuthPageStyle>
        <Form form={form} onFinish={submitRegisterForm}>
          <Item
            name="name"
            rules={[{ required: true, message: "Please enter your full name." }]}
          >
            <Input size="large" placeholder="Enter Your Full Name" />
          </Item>
          <Item
            name="email"
            rules={[
              { required: true },
              { type: "email", message: "Please enter a valid email." },
            ]}
          >
            <Input type="email" size="large" placeholder="Email Address" />
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
              Sign up
            </Button>
          </Item>
        </Form>
        <p className="guide-text">
          Do you already have an account? <Link to={ROUTE_PATH.login}>Login</Link>
        </p>
      </AuthPageStyle>
    </>
  );
}
