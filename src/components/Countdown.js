// src/components/Countdown.js
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Countdown = () => {
	const second = 1000,
		minute = second * 60,
		hour = minute * 60,
		day = hour * 24;

	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		const today = new Date();
		const dayMonth = "02/11"; // Set the birthday month and day to 11 February
		const yyyy = 2025; // Set the birthday year to 2025

		const countDown = new Date(`${dayMonth}/${yyyy}`).getTime();

		const interval = setInterval(() => {
			const now = new Date().getTime();
			const distance = countDown - now;

			setTimeLeft({
				days: Math.floor(distance / day),
				hours: Math.floor((distance % day) / hour),
				minutes: Math.floor((distance % hour) / minute),
				seconds: Math.floor((distance % minute) / second),
			});

			// do something later when date is reached
			if (distance < 0) {
				clearInterval(interval);
			}
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	console.log(timeLeft);

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
