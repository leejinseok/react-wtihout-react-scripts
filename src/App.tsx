import { Route, Routes } from "react-router-dom";
import { Intro } from "./page/intro";
import { Main } from "./page/main";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/main" element={<Main />} />
        </Routes>
    )
}
