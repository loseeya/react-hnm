import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import { useParams } from "react-router-dom";

import styles from './ProductDetail.module.css';

function ProductDetail() {
	const [ product, setProduct ] = useState(null);

	const { id } = useParams();
	const getProductDetail = async () => {
		const url = `https://my-json-server.typicode.com/loseeya/react-hnm/products/${id}`;
		const response = await fetch(url);
		const data = await response.json();
		setProduct(data);
	};

	useEffect(() => {
		getProductDetail();
	}, []);
	return (
		<Container>
			<Row>
				<Col lg={5} md={5}>
					<div>
						<img src={product?.img} alt="" />
					</div>
				</Col>

				<Col lg={7} md={7}>
					<div className="mt-3">
						<h3>{product?.title}</h3>
						<p>₩{product?.price}</p>
						<p>{product?.choice === true ? 'Conscious choice' : ''}</p>
						<Dropdown>
      				<Dropdown.Toggle variant="" id="dropdown-basic" className={styles.dropDown}>
								사이즈 선택
      				</Dropdown.Toggle>

      				<Dropdown.Menu>
      				  <Dropdown.Item href="#/action-1">S</Dropdown.Item>
      				  <Dropdown.Item href="#/action-2">M</Dropdown.Item>
      				  <Dropdown.Item href="#/action-3">L</Dropdown.Item>
      				</Dropdown.Menu>
   				 	</Dropdown>
						<Button className={styles.addBtn} variant="dark">추가</Button>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default ProductDetail;
