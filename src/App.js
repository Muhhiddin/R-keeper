import './App.css';
import Login from "./pages/Login";
import Home from "./pages/Home";
import {useNavigate, useRoutes} from "react-router-dom";
import {useEffect} from "react";
import Categories from "./pages/Categories";
import Call from "./pages/Call";
import Products from "./pages/Products";
import Delivery from "./pages/Delivery";
import CreateOrder from "./pages/CreateOrder";

function App() {

    let navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            return navigate("/login");
        }
    }, []);

    const routes = useRoutes([
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/categories",
            element: <Categories/>
        },
        {
            path: "/Delivery",
            element: <Delivery/>
        },
        {
            path: "/categories/:categoryId/products",
            element: <Products/>
        },
        {
            path: "/orders",
            element: <CreateOrder/>
        },
        {
            path: "/call",
            element: <Call/>
        },
        {
            path: '/login',
            element: <Login/>
        },
    ]);

    return (
        <div className="App">
            {routes}
        </div>
    );
}

export default App;
