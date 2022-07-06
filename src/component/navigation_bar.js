import React from "react";
import "./navigation_bar.css";

class NavigationBar extends React.Component {
	render() {
		return (
			<div className="navigation-bar">
				<div className="start-panel">
					<div className="brand">Snake</div>
					<div className="nav-link">Team</div>
					<div className="nav-link">Projects</div>
					<div className="nav-link">Calendars</div>
				</div>
				<div className="end-panel">
					<div className="item">
						<div className="icon">a</div>
					</div>
					<div className="item">
						<div className="icon">a</div>
					</div>
					<div className="item">
						<div className="icon">a</div>
					</div>
				</div>
			</div>
		);
	}
}

export default NavigationBar;

