import React from "react";

import Image from "../assets/1-removebg-preview.png";

import { FaGithub, FaYoutube, FaDribble } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
	return (
		<div className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
			<div className="container mx-auto">
				<div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
					{/* {text} */}
					<div className="flex-1 text-center font-secondary lg:text-left">
						<motion.h1
							variants={fadeIn("up", 0.3)}
							initial="hidden"
							whileInView={"show"}
							viewport={{ once: false, amount: 0.7 }}
							className="text-[55px] font-bold leading-[0.8] lg:text-[110px] text-white">
							NATHAN <span>PASCA</span>
						</motion.h1>
						<motion.div
							variants={fadeIn("up", 0.4)}
							initial="hidden"
							whileInView={"show"}
							viewport={{ once: false, amount: 0.7 }}
							className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
							<span className="text-white mr-4">I am a</span>
							<TypeAnimation
								sequence={[
									"Web Developer",
									2000,
									"Shitposter",
									2000,
									"Cat Lover",
									2000,
								]}
								speed={50}
								className="text-accent"
								wrapper="span"
								repeat={Infinity}
							/>
						</motion.div>
						<motion.div
							variants={fadeIn("up", 0.5)}
							initial="hidden"
							whileInView={"show"}
							viewport={{ once: false, amount: 0.7 }}
							className="flex flex-1 max-w-[320px] lg:hidden items-center justify-center">
							<img src={Image} alt="image" style={{ maxWidth: "100%" }} />
						</motion.div>
						<motion.p
							variants={fadeIn("up", 0.6)}
							initial="hidden"
							whileInView={"show"}
							viewport={{ once: false, amount: 0.7 }}
							className="mb-8 max-w-lg mx-auto lg:mx-0 text-white">
							Aliqua in tempor cupidatat incididunt deserunt. Exercitation
							occaecat esse occaecat anim velit ullamco aliqua sint duis dolor
							ex labore ex duis.
						</motion.p>
						<div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
							<button className="btn btn-lg">Message me</button>
						</div>
					</div>
					<div className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]">
						<img src={Image} alt="image" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
