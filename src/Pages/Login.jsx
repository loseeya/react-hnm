import React from "react";
import styles from "./Login.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function Loing(props) {
	const navigate = useNavigate();

	const loginUser = (e) => {
		e.preventDefault();
		// alert("로그인 성공");
		{
			Form.Control === "" ? alert("아이디와 비밀번호를 입력해주세요") : props.setAuthticate(true);
		}
		navigate("/");
	};
	return (
		<Form
			className={styles.loginForm}
			onSubmit={(e) => {
				loginUser(e);
			}}
		>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Email</Form.Label>
				<Form.Control type="email" placeholder="Enter email" />
				<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" placeholder="Password" />
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicCheckbox">
				<Form.Check type="checkbox" label="Check me out" />
			</Form.Group>
			<Button variant="primary" type="submit">
				로그인
			</Button>
		</Form>
	);
}

export default Loing;
