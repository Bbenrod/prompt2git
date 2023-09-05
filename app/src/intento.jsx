import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { translateTextToCommand } from "../api/dummy";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

export default function App() {
    const [input1Value, setInput1Value] = useState("");
    const [input2Value, setInput2Value] = useState("");
    const [areInputsSwapped, setAreInputsSwapped] = useState(false);

    const handleConvertClick = async () => {
        const inputValue = areInputsSwapped ? input2Value : input1Value;
        const request = await translateTextToCommand(inputValue);
        // const convertedText = inputValue.replace(/[aeiouAEIOU]/g, "x");
        console.log(request);
        const convertedText = "a";

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
        <div className="flex items-center justify-center min-h-screen bg-black">
            <div className="h-52 w-full max-w-4xl p-2 bg-gray-900 rounded-lg shadow-md flex items-center justify-between">
                <div className="flex flex-col h-full bg-gray-800 rounded p-2 w-5/12">
                    <label
                        for="inputText"
                        className="block font-medium dark:text-gray-200 mb-2"
                    >
                        Lenguaje humano
                    </label>
                    <textarea
                        className="w-full h-full py-2 px-3 rounded text-white bg-gray-600"
                        value={areInputsSwapped ? input2Value : input1Value}
                        onChange={(e) =>
                            areInputsSwapped
                                ? setInput2Value(e.target.value)
                                : setInput1Value(e.target.value)
                        }
                    />
                    <button
                        className="h-1/5 w-1/3 text-white bg-blue-500 rounded mt-2 self-end"
                        onClick={handleConvertClick}
                    >
                        Convert
                    </button>
                </div>

                <button
                    className="w-10 h-10 mx-2 text-white bg-blue-500 border border-blue-500 rounded-full flex items-center justify-center"
                    onClick={handleTurnClick}
                >
                    <span>➜</span>
                </button>

                <div className="flex flex-col h-full bg-gray-800 rounded p-2 w-5/12">
                    <label
                        for="inputText"
                        className="block font-medium dark:text-gray-200 mb-2"
                    >
                        Git prompt
                    </label>
                    <textarea
                        className="w-full h-full py-2 px-3 rounded text-white bg-gray-700"
                        value={areInputsSwapped ? input2Value : input1Value}
                        onChange={(e) =>
                            areInputsSwapped
                                ? setInput2Value(e.target.value)
                                : setInput1Value(e.target.value)
                        }
                    />
                    <button
                        className="h-1/5 w-1/3 text-white bg-blue-500 rounded mt-2"
                        onClick={handleConvertClick}
                    >
                        Copy
                    </button>
                </div>
            </div>
        </div>
    );
}
