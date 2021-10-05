import React from "react";
import { Container, Array, Card, Col, Row, CardGroup } from "react-bootstrap";
import marketIMG from "../../img/ventajas-marketplace.jpg";
import { CardMarketplace } from "../component/cardMarketplace";
import "../../styles/marketplace.scss";

export const Marketplace = () => {
	return (
		<div>
			<h1 className="Marketplaceheader">Marketplace</h1>
			<CardGroup className="containermarket row">
				<CardMarketplace />
				<CardMarketplace />
				<CardMarketplace />
				<CardMarketplace />
				<CardMarketplace />
				<CardMarketplace />
				<CardMarketplace />
				<CardMarketplace />
				<CardMarketplace />
			</CardGroup>
		</div>
	);
};
