/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PhoneLayout from "../layout/phoneLayout";
import { useState } from "react";
import MainLeft from "../components/mainLeft";
import MainRight from "../components/mainRight";
import MainList from "../components/mainList";
import { FloatButton } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const today = new Date();
const list = {
  2024: {
    11: [
      {
        date: 27,
        title: "커피",
        price: 213,
        type: "expen",
      },
      {
        date: 27,
        title: "용돈",
        price: 213123,
        type: "income",
      },
      {
        date: 27,
        title: "커피",
        price: 213,
        type: "expen",
      },
    ],
    12: [
      {
        date: 26,
        title: "커피",
        price: 213,
        type: "expen",
      },
      {
        date: 27,
        title: "용돈",
        price: 213123,
        type: "income",
      },
      {
        date: 27,
        title: "커피",
        price: 213,
        type: "expen",
      },
    ],
  },
};
const Main = () => {
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth() + 1);
  const nav = useNavigate();
  return (
    <PhoneLayout
      type="etc"
      nowPage="inex"
      left={
        <MainLeft
          year={year}
          month={month}
          setYear={setYear}
          setMonth={setMonth}
        />
      }
      right={<MainRight list={(list[year] && list[year][month]) || []} />}
    >
      <MainList list={(list[year] && list[year][month]) || []} />
      <FloatButton
        type="primary"
        icon={<PlusOutlined />}
        style={{ position: "absolute" }}
        onClick={() => nav("/edit")}
      />
    </PhoneLayout>
  );
};

export default Main;
