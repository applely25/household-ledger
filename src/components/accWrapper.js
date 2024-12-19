/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Typography } from "antd";
import { Storage } from "../util/storage";
import { useEffect, useState } from "react";
import { formatNumber } from "../util/formatNumber";

const AccWrapper = () => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const list = JSON.parse(Storage.getItem("acc") || "[]");
    if (list) {
      const totalPrice = list.reduce((p, n) => p + n.price, 0);
      setTotal(totalPrice);
    }
  }, []);

  return (
    <section
      css={css({
        background: "#E6F4FF",
        marginBottom: "10px",
        padding: "10px",
        borderRadius: "8px",
      })}
    >
      <AccWapper>
        <Typography.Text
          css={css({
            fontSize: "20px",
            color: "#001D66",
          })}
        >
          자산
        </Typography.Text>
        <Typography.Text
          css={css({
            fontSize: "20px",
            color: "#001D66",
          })}
        >
          {formatNumber(total)}원
        </Typography.Text>
      </AccWapper>
      <AccWapper>
        <Typography.Text
          css={css({
            fontSize: "20px",
            color: "#001D66",
          })}
        >
          이번 달 예산
        </Typography.Text>
        <Typography.Text
          css={css({
            fontSize: "20px",
            color: "#001D66",
          })}
        >
          19,999,999원
        </Typography.Text>
      </AccWapper>
    </section>
  );
};

const AccWapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default AccWrapper;
