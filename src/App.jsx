import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout';
import Home from './pages/Home';
// import Login from './pages/Login';
import About from './pages/About';
import Instructions from './pages/Instructions';
import LeadersBoard from './pages/LeadersBoard';
import Login from './pages/Login';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/tenzies-game">
                    <Route
                        path=""
                        element={
                            <ProtectedRoute>
                                <SharedLayout />
                            </ProtectedRoute>
                        }
                    >
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="instructions" element={<Instructions />} />
                        <Route
                            path="leaders-board"
                            element={<LeadersBoard />}
                        />
                    </Route>
                    <Route path="/tenzies-game/login" element={<Login />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

{
    /* <ProtectedRoute>
<SharedLayout />
</ProtectedRoute> */
}
