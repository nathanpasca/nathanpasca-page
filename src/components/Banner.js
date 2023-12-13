import React from "react";

import Image from "../assets/1-removebg-preview.png";

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
									"Meme Retweeter",
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
							<div className=" w-full flex items-center justify-center">
								<a
									href="#_"
									className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
									<span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
									<span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
									<span className="relative text-white">Contact me</span>
								</a>
							</div>
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
