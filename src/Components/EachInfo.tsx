import React from "react";
import { motion } from "framer-motion";

interface Info {
	title: string;
	value: string;
}

const EachInfo: React.FC<Info> = ({ title, value }) => {
	return (
		<motion.a
			href={title === "INSTAGRAM" ? value : undefined}
			initial={{ opacity: 0, x: 200, y: -100 }}
			animate={{ opacity: 1, x: 0, y: 0 }}
			transition={{ duration: 1 }}
			className="w-[90%] min-w-[300px] duration-500 flex-col sm:flex-col h-[90px] flex justify-center items-center bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border border-gray-100"
		>
			<p className="text-lg text-white font-mono">{title}</p>
			<p className="text-md text-center h-1/2 w-full break-words text-white font-mono">{value}</p>
		</motion.a>
	);
};

export default EachInfo;
