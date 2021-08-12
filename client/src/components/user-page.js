import React, { useState } from "react";
import { Col, Container, Row, Card, Image, Fade } from "react-bootstrap";

import { Loader } from "./helpers";

import cpuImage from "../assets/cpu-image.png";

function User(props) {
	const [isLoading, isLoadingHandler] = useState(true);
	const [fadeAnimation, fadeAnimationHandler] = useState(false);
	
	setTimeout(() => {
		isLoadingHandler(false);
		fadeAnimationHandler(true)
	}, 750);

	if (isLoading) {
		return <Loader />;
	}

	return (
		<Fade in={fadeAnimation} appear={true}>
			<Container className="mt-5">
				<Row>
					<Col>
						<h1>Hi there, first last name!</h1>
						<Card className="mt-3" style={{ width: "100%" }}>
							<Card.Header as="h5">Saved Address</Card.Header>
							<Card.Body>
								<Card.Text>
									221-B, Baker's street, London,
									England-609234 content.
								</Card.Text>
								<Card.Link href="#">Edit Address</Card.Link>
							</Card.Body>
						</Card>
						<Card className="mt-3" style={{ width: "100%" }}>
							<Card.Header as="h5">
								Previous Purchases
							</Card.Header>
							<Card.Body md={2}>
								<Row className="p-3 g-5 align-items-center">
									<Col xs={12} md={2}>
										<Image src={cpuImage} rounded />
									</Col>
									<Col xs={12} md={8}>
										<Card.Title>CPU</Card.Title>
										<Card.Text>
											Ryzen 5 5600X 4GHz Turbo 5.1GHz
										</Card.Text>
										<Card.Text>Rs. 28,000</Card.Text>
										<pre className="text-secondary">
											Delivered To:
										</pre>
										<Card.Text> 
											221-B, Baker's street, London,
											England-609234
										</Card.Text>
									</Col>
								</Row>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</Fade>
	);
}

export default User;
