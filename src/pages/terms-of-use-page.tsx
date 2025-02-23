import MetaTags from "@/components/meta-tags";
import TitleSection from "@/components/title-section/title-section";
import { BackgroundBox, Container, PaddingBigContent } from "@/styles/global-styles";
import { Typography } from "antd";

const { Paragraph } = Typography;

export default function TermsOfUsePage() {
  return (
    <>
      <MetaTags
        title="Terms of Use"
        description="Read the terms and conditions for using StarPlus!. Understand your rights and responsibilities when accessing our movie database."
      />
      <Container>
        <PaddingBigContent>
          <BackgroundBox>
            <TitleSection level={1}>Terms of Use</TitleSection>
            <Paragraph>
              By accessing and using StarPlus ("the website"), you agree to the following
              terms.
            </Paragraph>

            <TitleSection position="start" level={4}>
              1. Use of Our Service
            </TitleSection>
            <Paragraph>
              Our website provides free access to movie data retrieved from IMDb via our
              own web service. This service is intended for personal, non-commercial use
              only.
            </Paragraph>
            <ul>
              <li>
                We do not store or distribute copyrighted content such as movie files or
                streams.
              </li>
              <li>Users may not use our service for illegal or unauthorized purposes.</li>
            </ul>

            <TitleSection position="start" level={4}>
              2. Intellectual Property
            </TitleSection>
            <Paragraph>
              IMDb is a trademark of its respective owners. We are not affiliated with or
              endorsed by IMDb.
            </Paragraph>
            <Paragraph>
              The design, layout, and original content of this website are the property of
              StarPlus and may not be copied or redistributed without permission.
            </Paragraph>

            <TitleSection position="start" level={4}>
              3. Limitation of Liability
            </TitleSection>
            <Paragraph>
              Our service is provided "as is" without any guarantees of availability or
              accuracy. We are not responsible for third-party content or external links.
            </Paragraph>

            <TitleSection position="start" level={4}>
              4. Changes to These Terms
            </TitleSection>
            <Paragraph>
              We reserve the right to update these Terms of Use at any time. Continued use
              of our service constitutes acceptance of the updated terms.
            </Paragraph>
            <Paragraph>For inquiries, contact us at info@codingfront.dev.</Paragraph>
          </BackgroundBox>
        </PaddingBigContent>
      </Container>
    </>
  );
}
