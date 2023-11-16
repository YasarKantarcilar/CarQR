import "./App.css";
import { motion } from "framer-motion";
import carBG from "./assets/car.jpg";

interface Item {
	title: string;
	value: string;
}

function App() {
	const data: Item[] = [
		{
			title: "ISIM",
			value: "Yaşar KANTARCILAR",
		},
		{
			title: "TELEFON",
			value: "553 889 49 20",
		},
		{
			title: "E-POSTA",
			value: "kantarcilaryasar@gmail.com",
		},
		{
			title: "INSTAGRAM",
			value: "https://www.instagram.com/yasar.kantarcilar/",
		},
	];
	return (
		<div className="flex min-w-screen min-h-screen justify-center items-center flex-col bg-gradient-to-l from-white gap-5 via-purple-200 to-black">
			<img className="fixed top-0 w-screen h-screen object-cover" src={carBG} />
			{data.map((info) => {
				return (
					<motion.div
						initial={{ opacity: 0, x: 200, y: -100 }}
						animate={{ opacity: 1, x: 0, y: 0 }}
						transition={{ duration: 1 }}
						className="w-[90%] min-w-[300px] flex-col sm:flex-col h-[90px] flex justify-center items-center bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border border-gray-100"
					>
						<p className="text-lg text-white font-mono">{info.title}</p>
						<p className="text-md text-center h-1/2 w-full h-full break-words text-white font-mono">
							{info.value}
						</p>
					</motion.div>
				);
			})}
		</div>
	);
}

export default App;
