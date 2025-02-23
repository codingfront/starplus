import MetaTags from "@/components/meta-tags";
import TitleSection from "@/components/title-section/title-section";
import { BackgroundBox, Container, PaddingBigContent } from "@/styles/global-styles";
import { Typography } from "antd";

const { Paragraph } = Typography;

export default function PrivacyPolicyPage() {
  return (
    <>
      <MetaTags
        title="Privacy Policy"
        description="Learn how StarPlus! collects, uses, and protects your personal data. Read our privacy policy for more details."
      />
      <Container>
        <PaddingBigContent>
          <BackgroundBox>
            <TitleSection level={1}>Privacy Policy</TitleSection>
            <Paragraph>
              Welcome to StarPlus. Your privacy is important to us. This Privacy Policy
              explains how we collect, use, and protect your information when you use our
              website and services.
            </Paragraph>
            <TitleSection position="start" level={4}>
              1. Information We Collect
            </TitleSection>
            <Paragraph>
              We do not require users to create an account or provide personal information
              to access our website. However, we may collect:
            </Paragraph>
            <ul>
              <li>
                Usage Data: Information about how you interact with our website, such as
                IP address, browser type, and pages visited.
              </li>
              <li>
                Cookies & Tracking Technologies: We may use cookies to enhance your
                browsing experience.
              </li>
            </ul>
            <TitleSection position="start" level={4}>
              2. How We Use Your Information
            </TitleSection>
            <Paragraph>We use collected data to:</Paragraph>
            <ul>
              <li>Improve our website and services.</li>
              <li>Analyze traffic and optimize performance.</li>
              <li>Ensure the security of our platform.</li>
            </ul>
            <TitleSection position="start" level={4}>
              3. Third-Party Services
            </TitleSection>
            <Paragraph>
              Our website fetches movie data from IMDb through our own web service. We do
              not claim ownership of IMDb data, and our service is provided for
              informational and entertainment purposes only.
            </Paragraph>
            <Paragraph>
              We may use third-party analytics services (e.g., Google Analytics) to track
              user interactions, but no personally identifiable information is shared.
            </Paragraph>
            <TitleSection position="start" level={4}>
              4. Data Security
            </TitleSection>
            <Paragraph>
              We take reasonable steps to protect your information from unauthorized
              access. However, no internet transmission is completely secure.
            </Paragraph>
            <TitleSection position="start" level={4}>
              5. Your Rights & Choices
            </TitleSection>

            <ul>
              <li>You can disable cookies in your browser settings.</li>
              <li>You can contact us if you have concerns about data usage.</li>
            </ul>
            <TitleSection position="start" level={4}>
              6. Changes to This Policy
            </TitleSection>
            <Paragraph>
              We may update this Privacy Policy at any time. Any changes will be posted on
              this page. For questions, contact us at info@codingfront.dev.
            </Paragraph>
          </BackgroundBox>
        </PaddingBigContent>
      </Container>
    </>
  );
}
