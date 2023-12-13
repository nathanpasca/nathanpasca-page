import React from "react";

// components
import Banner from "./components/Banner";
import Header from "./components/Header";
import About from "./components/About";
import Countdown from "./components/Countdown";

const App = () => {
	return (
		<div className="bg-site bg-no-repeat bg-cover overflow-hidden">
			<Header />
			<Banner />
			<About />
			<Countdown />
			<div className="h-[4000px]"></div>
		</div>
	);
};

export default App;
