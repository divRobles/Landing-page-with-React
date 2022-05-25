import React from "react";
import "../../styles/NavBar.css";

const NavBar = () => {
	return (
		<>
			<div className="row">
				<nav class="navbar navbar-light bg-light">
					<div class="container-fluid">
						<div className="col-8">
							<h5>Welcome</h5>
						</div>

						<div className="col-4">
							<div className="container-enlaces-navbar">
								<a class="navbar-brand" href="#">
									Home
								</a>
								<a class="navbar-brand" href="#">
									About
								</a>
								<a class="navbar-brand" href="#">
									Services
								</a>
								<a class="navbar-brand" href="#">
									Contact
								</a>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</>
	);
};

export default NavBar;
