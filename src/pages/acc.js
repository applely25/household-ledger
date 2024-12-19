/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PhoneLayout from "../layout/phoneLayout";
import AccWrapper from "../components/accWrapper";
import AccTab from "../components/accTab";

const Acc = () => {
  return (
    <PhoneLayout type="text" title="계좌/예산 관리" nowPage="acc">
      <div
        css={css({
          padding: "24px",
          height: "100%",
        })}
      >
        <AccWrapper />
        <AccTab />
      </div>
    </PhoneLayout>
  );
};

export default Acc;
