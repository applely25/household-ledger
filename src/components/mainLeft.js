/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";

const MainLeft = ({ year, month, setYear, setMonth }) => {
  const prevMonth = () => {
    if (month <= 1) {
      setMonth(12);
      setYear(year - 1);
    } else setMonth(month - 1);
  };
  const nexMonth = () => {
    if (month >= 12) {
      setMonth(1);
      setYear(year + 1);
    } else setMonth(month + 1);
  };
  return (
    <div
      css={css({
        display: "flex",
        alignItems: "center",
      })}
    >
      <Button
        icon={<LeftOutlined />}
        type="text"
        style={{
          color: "white",
        }}
        onClick={prevMonth}
      />
      <Typography.Title level={4} style={{ margin: 0, color: "white" }}>
        {year}년 {month}월
      </Typography.Title>
      <Button
        icon={<RightOutlined />}
        type="text"
        style={{
          color: "white",
        }}
        onClick={nexMonth}
      />
    </div>
  );
};

export default MainLeft;
