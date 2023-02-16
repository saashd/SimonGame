import "./App.css"
import {
    BrowserRouter as Router,
    Routes,
    Route, Navigate
} from "react-router-dom";
import {useSelector} from "react-redux";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Game from "./pages/Game";
import UserProfile from "./pages/UserProfile";

function App() {
    const user = useSelector((state) => state.game.currentUser);
    return (
        <Router>
            <Routes>
                <Route path="/" element={user ? <Home/> : <Login/>}/>
                <Route path="/login" element={user ? <Navigate to="/"/> : <Login/>}/>
                <Route path="/register" element={user ? <Navigate to="/"/> : <Register/>}/>
                <Route path="/game" element={user ? <Game/> : <Navigate to="/login"/>}/>
                <Route path="/user" element={user ? <UserProfile/> : <Login/>}/>
            </Routes>
        </Router>
    );
}

export default App;
