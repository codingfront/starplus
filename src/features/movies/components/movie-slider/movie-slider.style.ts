import styled, { css } from "styled-components";
import { Typography } from "antd";

const { Title, Text } = Typography;

const titleStyles = css`
  &.ant-typography {
    margin: 0;
  }
`;

const sliderHeight = css`
  height: 85vh;
  min-height: 850px;
`;

export const MovieSliderItem = styled.div<{ $posterAddress: string }>`
  position: relative;
  z-index: 2;
  ${sliderHeight}
  color: #fff;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.5) 30%),
    linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 1) 100%),
    url(${props => props.$posterAddress});
  background-position: center center;
  padding-bottom: 40px;
  background-size: cover;
  background-repeat: no-repeat;
  outline: 0;
`;

export const MovieSliderContent = styled.div`
  padding-top: 180px;
  max-width: 600px;
`;

export const MovieSliderTitle = styled(Title)`
  ${titleStyles};
`;

export const MovieSliderSubTitle = styled(Title)`
  ${titleStyles};
`;

export const MovieSliderPropertyText = styled(Text)`
  color: ${({ theme }) => theme.antd.token.colorText};
`;

export const MovieSliderStyle = styled.div`
  margin-bottom: -100px;
  ${sliderHeight}
`;

export const AntCarousel = styled.div`
  .ant-carousel {
    .slick-prev,
    .slick-next {
      transform: translateY(0);
      top: auto;
      bottom: 150px;
      width: 40px;
      height: 40px;
      background: rgba(255, 255, 255, 0.4);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      &:after {
        position: absolute;
        left: 50%;
        top: 50%;
        transform-origin: center;
      }
    }

    .slick-next {
      right: 40px;
      &:after {
        transform: translate(-50%, -50%) rotate(135deg) translate(2px, 2px);
      }
    }

    .slick-prev {
      left: auto;
      right: 95px;
      &:after {
        transform: translate(-50%, -50%) rotate(-45deg) translate(2px, 2px);
      }
    }
  }
`;
