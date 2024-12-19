/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography } from "antd";

const MainList = ({ list }) => {
  const groupedData = Object.values(
    list.reduce((acc, curr) => {
      if (!acc[curr.date]) {
        acc[curr.date] = [];
      }
      acc[curr.date].push(curr);
      return acc;
    }, {})
  ).sort((a, b) => a[0].date - b[0].date);

  return (
    <ul>
      {groupedData.map((v) => {
        const dayExpen = v.reduce((p, n) => {
          if (n.type === "expen") return p + n.price;
          else return p;
        }, 0);
        const dayIncome = v.reduce((p, n) => {
          if (n.type === "income") return p + n.price;
          else return p;
        }, 0);

        return (
          <li>
            <div
              css={css({
                background: "#E6F4FF",
                padding: "0px 15px",
                display: "flex",
                justifyContent: "space-between",
              })}
            >
              <Typography.Text>{v[0].date}일</Typography.Text>
              <Typography.Text>
                수입 : {dayIncome ? dayIncome : 0}원 지출 :{" "}
                {dayExpen ? dayExpen : 0}원
              </Typography.Text>
            </div>
            <ul>
              {v.map((i) => (
                <li>
                  <p>{i.title}</p>
                  <p>
                    {i.type === "expen" && "-"}
                    {i.price}
                  </p>
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default MainList;
