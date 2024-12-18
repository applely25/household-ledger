/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Footer from "./footer";
import Header from "./header";

const PhoneLayout = ({ type, title, nowPage, children }) => {
  return (
    <>
      <Header type={type} title={title} />
      <main
        css={css({
          flex: 1,
          overflowY: "auto",
        })}
      >
        {children}
      </main>
      <Footer nowPage={nowPage} />
    </>
  );
};

export default PhoneLayout;
