import React from 'react'
import { Link } from 'react-router'

class Welcome extends React.Component {
	render() {
		return(
			<div className="welcomeContainer">
				<div className="introBox">
					<img src="freshStartYoga.png" />
					<Link to="/8minuteYoga">
						<img className="introImage" src="pose3.png" />
					</Link>
					<img className="enterText" src="enter.png" />
				</div>
			</div>

			)
	}
}
export default Welcome;
