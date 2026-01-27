import Principal from "components/Principal";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Router() {
  retun(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />}>
            <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
