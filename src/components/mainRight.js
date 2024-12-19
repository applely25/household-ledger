/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography } from "antd";
import { useEffect, useState } from "react";
import { formatNumber } from "./../util/formatNumber";

const MainRight = ({ list }) => {
  const [income, setIncome] = useState(0);
  const [expen, setExpen] = useState(0);
  useEffect(() => {
    const totalIncomePrice = list.reduce((p, n) => {
      if (n.type === "income") return p + n.price;
      else return p;
    }, 0);
    setIncome(totalIncomePrice);
    const totalExpenPrice = list.reduce((p, n) => {
      if (n.type === "expen") return p + n.price;
      else return p;
    }, 0);
    setExpen(totalExpenPrice);
  }, [list]);

  return (
    <div>
      <Typography.Text
        css={css({
          color: "white",
          marginRight: "16px",
        })}
      >
        지출 | {formatNumber(expen)}원
      </Typography.Text>
      <Typography.Text
        css={css({
          color: "white",
        })}
      >
        수입 | {formatNumber(income)}원
      </Typography.Text>
    </div>
  );
};
export default MainRight;
