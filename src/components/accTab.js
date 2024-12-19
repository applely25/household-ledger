/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import AccItem from "./accItem";
import { FloatButton } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Storage } from "../util/storage";
import { useNavigate } from "react-router-dom";

const AccTab = () => {
  const nav = useNavigate();
  const [type, setType] = useState("acc");
  const [accList, setAccList] = useState([]);

  useEffect(() => {
    const list = JSON.parse(Storage.getItem("acc") || "[]");
    if (list) setAccList(list);
  }, []);

  return (
    <section
      css={{
        flex: 1,
      }}
    >
      <div
        css={css({
          display: "flex",
          marginBottom: "1px",
          position: "sticky",
          background: "white",
          top: 0,
          zIndex: 1,
        })}
      >
        <NavButton
          onClick={() => setType("acc")}
          css={css(
            type === "acc" && {
              borderBottom: "2px solid #1677FF",
              color: "#1677FF",
            }
          )}
        >
          계좌 관리
        </NavButton>
        <NavButton
          onClick={() => setType("bud")}
          css={css(
            type === "bud" && {
              borderBottom: "2px solid #1677FF",
              color: "#1677FF",
            }
          )}
        >
          예산 관리
        </NavButton>
      </div>
      {type === "acc" && (
        <>
          <ul
            css={css({
              height: "100%",
            })}
          >
            {accList.map((i) => (
              <AccItem {...i} />
            ))}
          </ul>
          <FloatButton
            type="primary"
            icon={<PlusOutlined />}
            style={{ position: "absolute" }}
            onClick={() => nav("/edit/acc")}
          />
        </>
      )}
    </section>
  );
};

export default AccTab;

const NavButton = styled.button`
  width: 100%;
  height: 64px;
  background: none;
  border: none;
  cursor: pointer;
`;
