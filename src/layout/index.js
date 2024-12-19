/** @jsxImportSource @emotion/react */
import { blue } from "@ant-design/colors";
import { SketchOutlined } from "@ant-design/icons";
import { css } from "@emotion/react";
import { Button, Typography } from "antd";

import { Outlet } from "react-router-dom";
import copyToClipboard from "./../util/copyToClipboard";
import styled from "@emotion/styled";

const { Title } = Typography;

const Layout = () => {
  return (
    <Container>
      <Explain>
        <Title level={1}>
          <span css={css({ color: blue.primary })}>지출/수입 관리</span> 가계부
          000에서 똑똑하게!
        </Title>
        <Button
          type="primary"
          size="large"
          icon={<SketchOutlined />}
          onClick={() => copyToClipboard("하나은행 524-910400-21607 김규하")}
        >
          개발자에게 후원하기
        </Button>
      </Explain>
      <article
        css={css({
          width: "500px",
          height: "100%",
          background: "white",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          borderRadius: "8px",
          position: "relative",
        })}
      >
        <Outlet />
      </article>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f0f0f0;
  display: flex;
  justify-content: center;
`;

const Explain = styled.article`
  width: 380px;
  height: 100vh;
  margin-right: 142px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
