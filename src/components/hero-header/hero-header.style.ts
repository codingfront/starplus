import styled from "styled-components";

type Props = {
  $backgroundUrl: string;
};

export const Cover = styled.div<Props>`
  position: relative;
  height: 60vh;
  min-height: 500px;
  &:before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    inset: 0;
    background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.1) 0%,
        rgba(0, 0, 0, 0.5) 30%
      ),
      linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 1) 100%),
      url(${props => props.$backgroundUrl});
    background-size: cover;
    background-position: top center;
  }

  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-transform: capitalize;
    text-align: center;
  }
`;
