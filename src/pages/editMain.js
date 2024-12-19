/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Storage } from "../util/storage";
import PhoneLayout from "../layout/phoneLayout";
import {
  Button,
  DatePicker,
  Dropdown,
  Input,
  Menu,
  Space,
  Typography,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
const typeItems = [
  { label: "지출", key: "1" },
  { label: "수입", key: "2" },
];

const EditMain = () => {
  const [type, setType] = useState("지출");
  const [acc, setAcc] = useState("");
  const [accList, setAccList] = useState([]);
  const [leftPrice, setLeftPrice] = useState(0);

  useEffect(() => {
    const list = JSON.parse(Storage.getItem("acc") || "[]").map((v) => {
      return {
        label: v.name,
        key: String(v.id),
        value: v.price,
      };
    });
    if (list) {
      setAccList(list);
      setAcc(list[0].label);
      setLeftPrice(list[0].value);
    }
  }, []);

  const handleTypeClick = (e) => {
    const selected = typeItems.find((item) => item?.key === e.key)?.label || "";
    setType(selected);
  };
  const handleAccClick = (e) => {
    const selected = accList.find((item) => item?.key === e.key);
    setAcc(selected.label || "");
    setLeftPrice(selected.value || 0);
  };

  return (
    <PhoneLayout type="back" title="입출금 내역 추가" nowPage="inex" href="/">
      <div>
        <div
          css={{
            padding: "24px",
          }}
        >
          <div
            css={css({
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "4px",
            })}
          >
            <div css={css({ display: "flex", gap: "8px" })}>
              <Dropdown
                menu={{ items: typeItems, onClick: handleTypeClick }}
                trigger={["click"]}
              >
                <Button>
                  {type}
                  <DownOutlined />
                </Button>
              </Dropdown>
              <Dropdown
                menu={{ items: accList, onClick: handleAccClick }}
                trigger={["click"]}
              >
                <Button>
                  {acc}
                  <DownOutlined />
                </Button>
              </Dropdown>
            </div>
            <Typography.Text>계좌 잔액 : {leftPrice}원</Typography.Text>
          </div>
          <DatePicker />
        </div>
        <Input
          size="large"
          prefix="금액 : "
          placeholder="0"
          type="number"
          suffix="원"
        />
        <Button type="primary" size="large">
          계좌 추가하기
        </Button>
      </div>
    </PhoneLayout>
  );
};

export default EditMain;
