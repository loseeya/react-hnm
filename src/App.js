import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import ProductAll from "./Pages/ProductAll";
import ProductDetail from "./Pages/ProductDetail";
import Login from "./Pages/Login";
import Navbar from "./Component/Navbar";
import PrivateRoute from "./Route/PrivateRoute";

import "bootstrap/dist/css/bootstrap.min.css";

// ----------------제작순서-----------------
// 1. 판들페이지들 => 전체상품페이지, 로그인페이지 , 상품디테일페이지
// 2. 전체상품페이지에서는 모든 상품을 볼 수 있다.
// 3. 로그인 버튼을 누르면 로그인 화면이 나온다
// 4. 상품디테일을 눌렀는데 로그인이 되어 있지 않으면 로그인 페이지가 나온다
// 5. 로그인이 되어 있을 경우 디테일 페이지로 이동한다
// 5. 로그아웃을 누르면 디테일 페이지로 갈수 없고 다시 로그인페이지로 이동한다
// 6. 로그인이 되어있으면 로그아웃이 나오게 한다 로그아웃이 되어 있으면 로그인이 나오게 한다
// 7. 상품을 검색 할수 있게 한다

function App() {
	const [ authenticate, setAuthticate ] = useState(false);

	useEffect(() => {}, [ authenticate ]);
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<ProductAll />} />
				<Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} />} />
				<Route path="login" element={<Login setAuthticate={setAuthticate} />} />
			</Routes>
		</div>
	);
}

export default App;
