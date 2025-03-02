import styled from "styled-components";
import { Typography } from "antd";
import ImdbIcon from "@/assets/icons/imdb-icon.svg";

const { Title } = Typography;

export const MovieGridItemWrapper = styled.div`
  width: 100%;
`;

export const MovieGridItemContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(28, 28, 28, 0.8);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s, visibility 0.3s;
  }

  &:hover {
    &::before {
      opacity: 1;
      visibility: visible;
    }
    .hover-info {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const MovieGridPoster = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
  aspect-ratio: 4 / 6;
`;

export const MovieGridHoveredInfo = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 100%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
  font-size: 18px;
  color: ${({ theme }) => theme.antd.token.colorTextBase};
`;

export const MovieGridIMDBIcon = styled(ImdbIcon)`
  fill: ${({ theme }) => theme.antd.token.colorTextBase};
  width: 32px;
`;

export const MovieGridTitle = styled(Title)`
  padding-top: 20px;
  font-size: 20px;
  font-weight: bold;
`;
