import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './index.css';
import { Counter } from './Counter';
import { GUI } from 'dat.gui';
import { DistrictType, ProvinceType, guiConfig, provinceSymbols } from './data';

function generateLicensePlate() {
	const randomNumber = Math.floor(Math.random() * 100000);
	const formattedNumber = randomNumber.toString().padStart(5, '0');
	return Number(formattedNumber);
}

function sleep(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function cls(classNames: string[]): string {
	return classNames.join(' ');
}

const App = () => {
	const [plateNumber, setPlateNumber] = useState(0);
	const [province, setProvince] = useState<ProvinceType>('Ha Noi');
	const [symbol, setSymbol] = useState('29 - B1');
	const plateRef = useRef<HTMLDivElement>(null);
	const provinceController = useRef<any>(null);
	const districtController = useRef<any>(null);

	const generate = async () => {
		await sleep(300);
		setPlateNumber(generateLicensePlate())
	};

	useLayoutEffect(() => {
		const setHeightHalfOfWidth = () => {
			if (plateRef.current) {
				const width = plateRef.current.offsetWidth;
				plateRef.current.style.height = `${width / 2}px`;
			}
		};

		setHeightHalfOfWidth();

		const handleResize = () => {
			setHeightHalfOfWidth();
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
  }, []);

	useEffect(() => {
		const gui = new GUI({ width: 320 });
		const configFolder = gui.addFolder('Config');
		provinceController.current =
			configFolder
				.add(guiConfig, 'province', Object.keys(provinceSymbols))
				.name('Province').onChange((val: ProvinceType) => {
					setProvince(val);
				});
		districtController.current =
			configFolder
				.add(guiConfig, 'district', Object.keys(provinceSymbols[province]))
				.name('District')
				.onChange((val) => {
					setSymbol(provinceSymbols[province][val as DistrictType]);
				})

		configFolder.open();

		gui.add({ generate }, 'generate').name('Get your license plate 🎲');

		return () => {
			gui.destroy()
		}
	}, [province])

	return (
		<div className="grid place-items-center h-screen">
			<div
				ref={plateRef}
				style={{ width: "min(700px, 100vw - 1rem)" }}
				className={cls([
					'grid grid-rows-2 justify-center text-center',
					'text-[140px] font-extrabold leading-none',
					'p-6',
					'border-8 border-gray-900',
					'rounded-2xl'
				])}
			>
				<div>{Array.from(symbol).map((i, index) => <span key={index}>{i}</span>)}</div>
				<Counter value={plateNumber} />
			</div>
		</div>
	);
};

export default App;
