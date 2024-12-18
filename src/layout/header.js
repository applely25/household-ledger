/** @jsxImportSource @emotion/react */
import { blue } from "@ant-design/colors";
import { LeftOutlined } from "@ant-design/icons";
import { css } from "@emotion/react";
import { Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";
/*

      <Header title={title} />
      <Header type="back" title={title} />
      <Header
        type="etc"
        title={title}
        left={<p>left</p>}
        right={<p>right</p>}
      />

*/
const Header = ({ type, title, left, right }) => {
  const nav = useNavigate();
  return (
    <header
      css={css({
        background: blue.primary,
        padding: "12px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "8px",
        height: "56px",
      })}
    >
      {type === "etc" ? (
        <>
          {left}
          {right}
        </>
      ) : (
        <>
          <div
            css={css({
              display: "flex",
              alignItems: "center",
              gap: "4px",
            })}
          >
            {type === "back" && (
              <Button
                icon={<LeftOutlined />}
                type="text"
                style={{
                  color: "white",
                }}
                onClick={() => {
                  nav(-1);
                }}
              />
            )}
            <Typography.Title level={4} style={{ color: "white", margin: 0 }}>
              {title}
            </Typography.Title>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
