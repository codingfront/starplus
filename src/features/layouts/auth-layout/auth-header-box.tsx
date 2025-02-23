import { Flex } from "antd";
import styled from "styled-components";
import { Typography } from "antd";

const { Title: AntTitle, Paragraph: AntParagraph } = Typography;

const Title = styled(AntTitle)`
  &.ant-typography {
    margin: 0;
  }
  text-align: center;
  span {
    color: ${({ theme }) => theme.antd.token.colorPrimary};
    font-weight: bold;
  }
`;
const Paragraph = styled(AntParagraph)`
  text-align: center;
  color: ${({ theme }) => theme.antd.token.colorTextPlaceholder};
`;

export default function AuthHeaderBox() {
  return (
    <Flex vertical gap="small">
      <Title level={2}>
        Welcome back, Star<span>plus</span>
      </Title>
      <Paragraph>Welcome back! Please enter your details.</Paragraph>
    </Flex>
  );
}
