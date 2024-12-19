import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Layout from "./layout";
import Anal from "./pages/anal";
import Acc from "./pages/acc";
import EditAcc from "./pages/editAcc";
import EditMain from "./pages/editMain";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/anal" element={<Anal />} />
          <Route path="/acc" element={<Acc />} />
          <Route path="/edit/acc" element={<EditAcc />} />
          <Route path="/edit" element={<EditMain />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
