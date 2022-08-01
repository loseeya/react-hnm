import React from "react";
import styles from './ProductCard.module.css'
import { useNavigate } from 'react-router-dom';

function ProdutCard({item}) {
	const navigate = useNavigate();
	const showDetail = () => {
		navigate(`product/${item.id}`)
	}
	
	return (
		<div className={styles.cardform} onClick={showDetail}>
			<div>
				<img
					src={item?.img}
					alt=""
				/>
			</div>
			<p>{item.choice === true ? 'Conscious choice' : ''}</p>
			<p>{item?.title}</p>
			<p>₩{item?.price}</p>
			<span>{item.new === true ? '신제품' : ''}</span>
		</div>
	);
}

export default ProdutCard;
