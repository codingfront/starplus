import { Divider } from "antd";
import styled from "styled-components";
import ImdbIcon from "@/assets/icons/imdb-icon.svg?react";

export const MovieCardWrapper = styled.div`
  width: 100%;
  position: relative;
  background: ${({ theme }) => theme.antd.token.colorBgContainer};
  padding: 20px;
  border-radius: ${({ theme }) => theme.antd.token.customBorderRadius};
`;

export const MoviePoster = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 2/3;
`;

export const ImdbRatingSection = styled.div`
  display: flex;
  align-items: center;
`;

export const ImdbRating = styled.span`
  color: ${({ theme }) => theme.antd.token.colorPrimary};
  font-family: ${({ theme }) => theme.antd.token.secondFontFamily};
  font-weight: 500;
  font-size: 18px;
`;

export const ImdbRatingIcon = styled(ImdbIcon)`
  fill: ${({ theme }) => theme.antd.token.colorPrimary};
  width: 50px;
`;

export const RatingDivider = styled(Divider)`
  margin: 0;
`;

export const MovieInformation = styled.div`
  display: flex;
  align-items: center;
  .anticon,
  svg {
    color: ${({ theme }) => theme.antd.token.colorPrimary};
    fill: ${({ theme }) => theme.antd.token.colorPrimary};
    font-size: 18px;
  }
`;
