import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
	return (
		<div className="mt-24">
			<div>
				<motion.h1
					variants={fadeIn("up", 0.4)}
					initial="hidden"
					whileInView={"show"}
					viewport={{ once: false, amount: 0.7 }}
					className="text-[55px] font-bold leading-[0.8] lg:text-[110px] text-white text-center">
					WORK IN <span className="text-accent">PROGRESS</span>
				</motion.h1>
			</div>
		</div>
	);
};

export default About;
