/** @jsxImportSource @emotion/react */
import { RightOutlined } from "@ant-design/icons";
import { css } from "@emotion/react";

import { Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { formatNumber } from "../util/formatNumber";

const AccItem = ({ id, name, price }) => {
  const nav = useNavigate();
  return (
    <li
      key={id}
      css={css({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        borderBottom: "1px solid #E6F4FF",
      })}
    >
      <Typography.Text
        css={css({
          color: "#001D66",
        })}
      >
        {name}
      </Typography.Text>
      <div
        css={css({
          verticalAlign: "center",
        })}
      >
        <Typography.Text
          css={css({
            color: "#001D66",
          })}
        >
          {formatNumber(price)}원
        </Typography.Text>
        <Button
          icon={<RightOutlined />}
          type="text"
          style={{
            color: "#001D66",
          }}
          onClick={() => {
            nav(`/acc/${id}`);
          }}
        />
      </div>
    </li>
  );
};

export default AccItem;
