import TransactionsPage from "pages/transactions";
import { Route, Routes } from "react-router-dom";

import HomePage from "../../pages/home";

const Routing = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/transactions" element={<TransactionsPage />} />
  </Routes>
);

export default Routing;
