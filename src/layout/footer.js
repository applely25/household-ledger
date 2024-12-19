/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
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
      <NavButton
        onClick={() => nav("/")}
        css={css(
          nowPage === "inex" && {
            borderBottom: "2px solid #1677FF",
            color: "#1677FF",
          }
        )}
      >
        수입/지출 관리
      </NavButton>
      <NavButton
        onClick={() => nav("/acc")}
        css={css(
          nowPage === "acc" && {
            borderBottom: "2px solid #1677FF",
            color: "#1677FF",
          }
        )}
      >
        계좌/예산 관리
      </NavButton>
      <NavButton
        onClick={() => nav("/anal")}
        css={css(
          nowPage === "anal" && {
            borderBottom: "2px solid #1677FF",
            color: "#1677FF",
          }
        )}
      >
        분석
      </NavButton>
    </footer>
  );
};

export default Footer;

const NavButton = styled.button`
  width: 100%;
  background: none;
  border: none;
  cursor: pointer;
`;
