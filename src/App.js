import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Layout from "./layout";
import Anal from "./pages/anal";
import Acc from "./pages/acc";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/anal" element={<Anal />} />
          <Route path="/acc" element={<Acc />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
