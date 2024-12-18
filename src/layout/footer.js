/** @jsxImportSource @emotion/react */
import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import { css } from "@emotion/react";
import { Button, Menu } from "antd";
import { useNavigate } from "react-router-dom";

const Footer = ({ type, title, nowPage }) => {
  const nav = useNavigate();
  return (
    <footer
      css={css({
        height: "56px",
        display: "flex",
        marginBottom: "1px",
      })}
    >
      <button
        onClick={() => nav("/")}
        css={css(
          {
            width: "100%",
            background: "none",
            border: "none",
            cursor: "pointer",
          },
          nowPage === "inex" && {
            borderBottom: "2px solid #1677FF",
            color: "#1677FF",
          }
        )}
      >
        수입/지출 관리
      </button>
      <button
        onClick={() => nav("/acc")}
        css={css(
          {
            width: "100%",
            background: "none",
            border: "none",
            cursor: "pointer",
          },
          nowPage === "acc" && {
            borderBottom: "2px solid #1677FF",
            color: "#1677FF",
          }
        )}
      >
        계좌/예산 관리
      </button>
      <button
        onClick={() => nav("/anal")}
        css={css(
          {
            width: "100%",
            background: "none",
            border: "none",
            cursor: "pointer",
          },
          nowPage === "anal" && {
            borderBottom: "2px solid #1677FF",
            color: "#1677FF",
          }
        )}
      >
        분석
      </button>
    </footer>
  );
};

export default Footer;
