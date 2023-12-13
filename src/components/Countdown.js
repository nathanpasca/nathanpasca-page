// src/components/Countdown.js
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Countdown = () => {
	const calculateTimeLeft = () => {
		const oneYearFromNow = new Date();
		oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);

		const difference = oneYearFromNow - new Date();
		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor(
					(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
				),
				minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
				seconds: Math.floor((difference % (1000 * 60)) / 1000),
			};
		}

		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState({});

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearInterval(timer);
	}, []); // Empty dependency array to run only once when the component mounts

	if (
		!timeLeft.days &&
		!timeLeft.hours &&
		!timeLeft.minutes &&
		!timeLeft.seconds
	) {
		return null; // Don't render if countdown is complete
	}

	return (
		<motion.div
			variants={fadeIn("up", 0.5)}
			initial="hidden"
			whileInView={"show"}
			viewport={{ once: false, amount: 0.7 }}
			className="flex flex-col items-center text-2xl font-bold text-white mt-8 sm:flex-row sm:justify-center">
			<div className="text-center mx-4 mb-4 sm:mb-0">
				<span className="text-4xl text-accent">{timeLeft.days} </span>
				<span className="text-md uppercase">Days</span>
			</div>
			<div className="text-center mx-4 mb-4 sm:mb-0">
				<span className="text-4xl text-accent">{timeLeft.hours} </span>
				<span className="text-md uppercase">Hours</span>
			</div>
			<div className="text-center mx-4 mb-4 sm:mb-0">
				<span className="text-4xl text-accent">{timeLeft.minutes} </span>
				<span className="text-md uppercase">Minutes</span>
			</div>
			<div className="text-center mx-4">
				<span className="text-4xl text-accent">{timeLeft.seconds} </span>
				<span className="text-md uppercase">Seconds</span>
			</div>
		</motion.div>
	);
};

export default Countdown;
