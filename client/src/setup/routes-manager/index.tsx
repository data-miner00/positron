import { Route, Routes } from "react-router-dom";

import HomePage from "../../pages/home"

const Routing = () =>
    <Routes>
        <Route path="/" element={<HomePage />} />
    </Routes>

export default Routing;