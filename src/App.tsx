import "./App.css";
import carBG from "./assets/car.jpg";
import EachInfo from "./Components/EachInfo";

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
			{data.map((info) => (
				<EachInfo {...info} />
			))}
		</div>
	);
}

export default App;
