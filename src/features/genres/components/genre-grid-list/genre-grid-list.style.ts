import styled from "styled-components";

export const GenreGridListStyle = styled.div`
  .ant-list:has(.ant-list-item:hover) .ant-list-item:not(:hover) {
    filter: blur(3px);
  }
  .ant-skeleton.ant-skeleton-element {
    display: block;
    width: 100%;
  }
  .ant-list-grid .ant-col > .ant-list-item {
    margin-block-end: 0;
  }
  .genre-content {
    position: relative;
    transition: all 150ms ease-in-out;
    a {
      &:after {
        position: absolute;
        content: "";
        inset: 0;
        width: 100%;
        height: 100%;
        background: rgba(28, 28, 28, 0.6);
      }
      img {
        width: 100%;
        height: auto;
        aspect-ratio: 16 / 9;
      }
      .ant-typography {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-family: ${({ theme }) => theme.antd.token.secondFontFamily};
        z-index: 1;
      }
    }
  }
`;
