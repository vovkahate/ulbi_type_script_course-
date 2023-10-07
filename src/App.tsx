import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import UsersPages from "./components/UsersPages";
import TodosPage from "./components/TodosPage";
import UserPage from "./components/UserPage";
import TodoPage from "./components/TodoPage";

function App() {
    return (
        <BrowserRouter>
            <div>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/todos">Todos</NavLink>
            </div>
            <Routes>
                <Route path="/users" element={<UsersPages />} />
                <Route path="/todos" element={<TodosPage />} />
                <Route path="/users/:id" element={<UserPage />} />
                <Route path="/todos/:id" element={<TodoPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
