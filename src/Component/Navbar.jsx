import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

function Navbar({ authenticate, setAuthenticate }) {
	const navList = [ "여성", "Divided", "남성", "신생아/유아", "아동", "H&M HOME", "Sale", "지속가능성" ];
	let [ width, setWidth ] = useState(0);

	const navigate = useNavigate();

	const search = (e) => {
		if (e.key === "Enter") {
			// console.log("엔터키가 눌러짐");
			let keyword = e.target.value;
			// console.log(keyword);

			navigate(`/?q=${keyword}`);
		}
	};

	return (
		<div>
			{/* 모바일 메뉴 */}
			<div className={styles.sideMenu} style={{ width: width }}>
				<button className={styles.closeBtn} onClick={() => setWidth(0)}>
					<FontAwesomeIcon icon={faXmark} />
				</button>
				<div className={styles.sideMenuList}>
					{navList.map((data, i) => {
						return <button key={i}>{data}</button>;
					})}
				</div>
			</div>

			<div>
				<button className={styles.bugerBtn} onClick={() => setWidth(250)}>
					<FontAwesomeIcon icon={faBars} />
				</button>
			</div>

			<div>
				{authenticate ? (
					<div className={styles.loginBtn}>
						<FontAwesomeIcon icon={faUser} style={{ padding: "5px" }} />
						<p onClick={() => setAuthenticate(false)}>로그아웃</p>
					</div>
				) : (
					<div className={styles.loginBtn}>
						<FontAwesomeIcon icon={faUser} style={{ padding: "5px" }} />
						<p
							onClick={() => {
								navigate("/login");
							}}
						>
							로그인
						</p>
					</div>
				)}
			</div>

			<div className={styles.logo}>
				<img
					src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-700x394.png"
					alt="H&M logo"
					onClick={() => {
						navigate("/");
					}}
				/>
			</div>

			<div>
				<div className={styles.nav}>
					<ul>
						{navList.map((data, i) => {
							return <li key={i}>{data}</li>;
						})}
					</ul>
					<div />

					<div className={styles.navsearch}>
						<FontAwesomeIcon icon={faSearch} />
						<input type="text" onKeyPress={(e) => search(e)} placeholder="검색어를 입력하세요" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
