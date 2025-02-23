import styled from "styled-components";
import { Typography } from "antd";
const { Title: AntdTitle } = Typography;

interface ScoreItemProps {
  rotten?: boolean;
}

export const MoviePageWrapper = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.antd.token.colorText};
  position: relative;
`;

export const CoverWrapper = styled.div`
  position: absolute;
  width: 100%;
  overflow: hidden;
  height: 80vh;
  min-height: 692px;
  z-index: -1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(to top, black, rgba(0, 0, 0, 0));
    z-index: 0;
  }
`;

export const CoverImage = styled.img`
  position: absolute;
  width: 100%;
  height: 80vh;
  min-height: 692px;
  object-fit: cover;
`;

export const DetailsSection = styled.section`
  position: relative;
  z-index: 10;
  padding-top: 150px;
  text-transform: capitalize;
`;

export const DetailLabel = styled.span`
  color: ${({ theme }) => theme.antd.token.colorTextBase};
  font-weight: bold;
  font-family: ${({ theme }) => theme.antd.token.secondFontFamily};
`;

export const MovieTitle = styled(AntdTitle)`
  &.ant-typography {
    margin-bottom: 0;
  }
`;

export const MetaRuntimeIcon = styled.div`
  svg {
    font-size: 22px;
  }
`;

export const MoreInfoSection = styled.div`
  padding-top: 40px;
`;

export const ScoresSection = styled.div``;

export const ScoresList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ScoreItem = styled.li.withConfig({
  shouldForwardProp: prop => prop !== "rotten",
})<ScoreItemProps>`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    width: 32px;
    height: 32px;
    vertical-align: middle;
    fill: ${({ rotten }) => (rotten ? "#fa320a" : "inherit")};
  }

  span {
    line-height: 1;
    font-size: 1em;
    font-family: ${({ theme }) => theme.antd.token.secondFontFamily};
    font-weight: 600;
  }
`;

export const GenresSection = styled.div`
  padding-top: 20px;
`;

export const GenreItem = styled.li`
  a {
    .ant-tag {
      font-size: 16px;
      border-radius: 15px;
      padding: 5px 15px;
    }
  }
`;

export const OtherInfoSection = styled.div``;

export const OtherInfoImage = styled.img`
  margin: 0 auto;
`;
