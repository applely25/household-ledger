/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PhoneLayout from "../layout/phoneLayout";
import Input from "antd/es/input/Input";
import { Button } from "antd";
import { useState } from "react";
import { Storage } from "../util/storage";
import { useNavigate } from "react-router-dom";

const EditAcc = () => {
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const submit = () => {
    if (name && price !== null) {
      const nowList = JSON.parse(Storage.getItem("acc") || "[]");
      const maxId = Math.max(...nowList.map((item) => item.id), 0);
      const newList = [
        ...nowList,
        {
          id: maxId + 1,
          name,
          price: Number(price),
        },
      ];
      Storage.setItem("acc", JSON.stringify(newList));
      nav("/acc");
    }
  };

  return (
    <PhoneLayout type="back" title="계좌 생성" nowPage="acc" href="/acc">
      <div
        css={css({
          padding: "24px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          justifyContent: "center",
        })}
      >
        <Input
          size="large"
          prefix="계좌명 : "
          placeholder="토스 통장"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          size="large"
          prefix="금액 : "
          placeholder="0"
          type="number"
          suffix="원"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Button type="primary" size="large" onClick={submit}>
          계좌 추가하기
        </Button>
      </div>
    </PhoneLayout>
  );
};

export default EditAcc;
