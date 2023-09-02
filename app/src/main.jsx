import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
    	<App />
  	</React.StrictMode>
);

export default function App() {
  	const [input1Value, setInput1Value] = useState('');
  	const [input2Value, setInput2Value] = useState('');
  	const [areInputsSwapped, setAreInputsSwapped] = useState(false);

	const handleConvertClick = () => {
		const inputValue = areInputsSwapped ? input2Value : input1Value;
		const convertedText = inputValue.replace(/[aeiouAEIOU]/g, 'x');
    
		if (areInputsSwapped) {
			setInput1Value(convertedText);
		} else {
			setInput2Value(convertedText);
		}
  	};

  	const handleTurnClick = () => {
		setAreInputsSwapped(!areInputsSwapped);
  	};

	return (
		<div className='flex items-center justify-center min-h-screen bg-black'>
			<div className='w-full max-w-4xl max-h-52 p-1 bg-white rounded-lg shadow-md flex items-center'>
				<div className='relative flex-grow'>
					<input type="text" className='w-full h-12 pr-12 pl-3 border border-gray-700 rounded text-white bg-gray-900'	value={areInputsSwapped ? input2Value : input1Value}
						onChange={(e) =>
							areInputsSwapped
								? setInput2Value(e.target.value)
								: setInput1Value(e.target.value)
						}/>
					<button	className='absolute top-0 right-0 h-full px-4 text-white bg-blue-500 border-l border-blue-500 rounded-r' onClick={handleConvertClick}>
						Convert
					</button>
				</div>

				<button	className='w-12 h-12 mx-2 text-white bg-blue-500 border border-blue-500 rounded-full flex items-center justify-center' onClick={handleTurnClick}>
					<span className="transform rotate-90">➜</span>
				</button>

				<div className='relative flex-grow'>
					<input type="text" className='w-full h-12 pr-12 pl-3 border border-gray-700 rounded text-white bg-gray-900'	value={areInputsSwapped ? input1Value : input2Value}
						onChange={(e) =>
							areInputsSwapped
								? setInput1Value(e.target.value)
								: setInput2Value(e.target.value)
						}/>
					<button	className='absolute top-0 right-0 h-full px-4 text-white bg-blue-500 border-l border-blue-500 rounded-r'onClick={handleConvertClick}>
						Convert
					</button>
				</div>
			</div>
		</div>
  	);
}