import React from "react";

// components
import Banner from "./components/Banner";
import Header from "./components/Header";
import About from "./components/About";

const App = () => {
	return (
		<div className="bg-site bg-no-repeat bg-cover overflow-hidden">
			<Header />
			<Banner />
			<About />
			<div className="h-[4000px]"></div>
		</div>
	);
};

export default App;
