import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import NavBar from "./NavBar.jsx";
import Jumbotron from "./Jumbotron.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<NavBar />
			<div className="container">

			<Jumbotron />
			</div>
		</>
	);
};

export default Home;
