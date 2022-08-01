import React from "react";
import ProductDetail from "../Pages/ProductDetail";
import Login from "../Pages/Login";
import { Navigate } from "react-router-dom";

function PrivateRoute({ authenticate }) {
	return authenticate === true ? <ProductDetail /> : <Navigate to={"/Login"} />;
}

export default PrivateRoute;
