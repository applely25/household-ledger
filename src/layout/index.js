/** @jsxImportSource @emotion/react */
import { blue } from "@ant-design/colors";
import { SketchOutlined } from "@ant-design/icons";
import { css } from "@emotion/react";
import { Button, Typography } from "antd";

import { Outlet } from "react-router-dom";
import copyToClipboard from "./../util/copyToClipboard";

const { Title } = Typography;

const Layout = () => {
  return (
    <div
      css={css({
        width: "100vw",
        height: "100vh",
        background: "#F0F0F0",
        display: "flex",
      })}
    >
      <article
        css={css({
          width: "380px",
          height: "100vh",
          marginLeft: "auto",
          marginRight: "142px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        })}
      >
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
      </article>
      <article
        css={css({
          width: "500px",
          height: "100%",
          background: "white",
          marginRight: "auto",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          borderRadius: "8px",
        })}
      >
        <Outlet />
      </article>
    </div>
  );
};

export default Layout;
