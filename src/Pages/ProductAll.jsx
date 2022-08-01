import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../Component/ProductCard";

function ProductAll() {
	const [ productList, setProductList ] = useState([]);
	const [ query, setQuery ] = useSearchParams();

	const getProducts = async () => {
		const searchQuery = query.get("q") || "";
		console.log(searchQuery);
		const url = ` https://my-json-server.typicode.com/loseeya/react-hnm/products/?q=${searchQuery}`;
		const response = await fetch(url);
		const data = await response.json();
		setProductList(data);
	};

	useEffect(
		() => {
			getProducts();
		},
		[ query ]
	);

	return (
		<div>
			<Container>
				<Row>
					{productList.map((item, id) => (
						<Col lg={3} md={4} key={id}>
							<ProductCard item={item} />
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
}

export default ProductAll;
