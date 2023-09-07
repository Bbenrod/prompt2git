import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { translateCommandToText, translateTextToCommand } from "../api/dummy";

function toggleDarkMode() {
    // Obtén el elemento <html> actual
    const htmlElement = document.querySelector("html");

    // Cambia la clase de 'light' a 'dark' o viceversa
    if (htmlElement.classList.contains("light")) {
        htmlElement.classList.remove("light");
        htmlElement.classList.add("dark");
    } else {
        htmlElement.classList.remove("dark");
        htmlElement.classList.add("light");
    }
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

export default function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isSwitched, setSwitch] = useState(false);
    const inputConvert = document.getElementById("inputPrompt");
    var inputResult = document.getElementById('inputGit');

    const pressTTC = () => {
        const convert = inputConvert.value;
        console.log(convert)
        
    }

    const handleVersionChange = () => {
        // Cambia el estado de dark mode
        setIsDarkMode(!isDarkMode);

        // Llama a la función para cambiar el estilo y la clase
        toggleDarkMode();
    };

    const switchInputs = () => {
        inputPrompt.value = '';
        inputGit.value = '';
        //Cambia el estado del switch
        setSwitch(!isSwitched);
    };

    return (
        <div
            className={`font-sans transition-colors ${
                isDarkMode ? "bg-git-brown-90 text-git-brown" : "bg-git-white text-git-white"} 
            }`}
        >
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex flex-col items-center justify-center min-h-screen">
                    <header className={`flex flex-col sm:flex-row sm:justify-center w-full pt-4 pb-8 px-2 text-${isDarkMode ? "git-white" : "git-brown"}`}>
                        <a className="flex flex-col" href="/">
                            <h1 className="flex font-sans font-bold sm:text-xl tracking-tight justify-center">
                                Prompt2Git
                            </h1>
                            <p className="flex font-sans font-bold justify-center">
                                Convierte tus prompts a git
                            </p>
                        </a>
                    </header>
                    <div>
                        <button
                            className={`flex items-center justify-center absolute top-2.5 right-4 text-gray-500 focus:outline-none hover:scale-125 transition w-8 h-8 rounded-full ${
                                isDarkMode ? "bg-git-white" : "bg-git-orange"
                            }`}
                            id="btn_version"
                            onClick={handleVersionChange}
                        >
                            <img
                                className="w-4 h-4"
                                src={`${
                                    isDarkMode
                                        ? "public/sun.svg"
                                        : "public/moon.svg"
                                }`}
                                id="iconMode"
                                alt={isDarkMode ? "Light" : "Dark"}
                            />
                        </button>
                        <button
                            className={`flex items-center justify-center absolute top-2.5 right-16 text-gray-500 focus:outline-none hover:scale-125 transition w-8 h-8 rounded-full ${
                               isDarkMode ? "bg-git-white" : "bg-git-orange"
                            }`}
                            id="btn_coffee"
                        >
                            <img
                                className="w-4 h-4"
                                src={`${
                                    isDarkMode
                                        ? "public/coffeeDark.svg"
                                        : "public/coffee.svg"
                                }`}
                                id="iconCoffee"
                                alt="Coffee"
                            />
                        </button>
                        <button
                            className={`flex items-center justify-center absolute top-2.5 right-28 text-gray-500 focus:outline-none hover:scale-125 transition w-8 h-8 rounded-full ${
                                isDarkMode ? "bg-git-white" : "bg-git-orange"
                             }`}
                            id="btn_github"
                        >
                            <img
                                className="w-4 h-4"
                                src={`${
                                    isDarkMode
                                        ? "public/githubDark.svg"
                                        : "public/github.svg"
                                }`}
                                id="iconGit"
                                alt="GitHub"
                            />
                        </button>
                    </div>
                    <div
                        className={`flex flex-col md:flex-row w-full gap-6  rounded-2xl p-2 ${
                            isDarkMode ? "bg-git-brown-d10 border-git-white border" : "bg-git-white-10"
                        }`}
                    >
                        <div className="w-full">
                            <form className={`rounded-xl container-w-gradient-border p-3 h-full w-full shadow-md ${
                                isDarkMode ? "bg-git-brown-d20" : "bg-git-white-20"
                            }`}>
                                <div className="flex flex-col h-full">
                                    <label
                                        htmlFor="inputText"
                                        className={`block font-medium mb-2 ${
                                            isDarkMode ? "text-git-white-10" : "text-gray-700"}`}
                                    >
                                        {isSwitched ? "Git" : "Prompt"}
                                    </label>
                                    <textarea
                                        className={`border-0 rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
                                            isDarkMode ? "placeholder-git-white-10 bg-git-brown-d30 text-git-white-20" : "appearance-none text-gray-700"
                                        }`}
                                        id="inputPrompt"
                                        rows={3}
                                        placeholder={isSwitched ? "Ingresa el comando en git" : "Ingresa tu prompt"}
                                    />
                                    <div className="flex items-center justify-end my-3 last:mb-0 space-x-10">
                                        <button
                                            type="button"
                                            className={`cursor-pointer py-2 px-4 rounded-full shadow-2xl flex flex-row ${
                                                isDarkMode ? "bg-git-orange-2" : "bg-git-brown"
                                            }`}
                                            onClick={pressTTC}
                                        >
                                            <div className="relative text-sm font-semibold font-inter text-white text-center inline-block mx-auto">
                                                Generar
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div>
                            <div className="flex items-center md:h-full">
                                <button
                                    className={`flex items-center justify-center rounded-full cursor-pointer mx-auto h-8 w-8 ${
                                        isDarkMode ? "bg-git-orange-2" : "bg-git-brown"
                                    }`}
                                    id="btn_switch"
                                    onClick={switchInputs}
                                >
                                    <img
                                        src="public/switch.svg"
                                        alt="Switch"
                                        className="w-4 h-4 md:w-4 md:h-4"
                                        id="iconSwitch"
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="w-full">
                            <form className={`rounded-xl container-w-gradient-border p-3 h-full w-full shadow-md ${
                                isDarkMode ? "bg-git-brown-d20" : "bg-git-white-20"
                            }`}>
                                <div className="flex flex-col h-full">
                                    <label
                                        htmlFor="inputText"
                                        className={`block font-medium mb-2 ${
                                            isDarkMode ? "text-git-white-10" : "text-gray-700"}`}
                                    >
                                        {isSwitched ? "Prompt" : "Git"}
                                    </label>
                                    <textarea
                                        className={`border-0 rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline pointer-events-none ${
                                            isDarkMode ? "placeholder-git-white-10 bg-git-brown-d30 text-git-white-20" : "appearance-none text-gray-700"
                                        }`}
                                        id="inputGit"
                                        rows={3}
                                        placeholder={isSwitched ? "¿Qué significa ese comando?" : "Tu prompt convertido a comando"}
                                    />
                                    <div className="flex items-center justify-between my-3 last:mb-0 space-x-10">
                                        <button
                                            type="button"
                                            className={`cursor-pointer py-2 px-4 ${
                                                isDarkMode ? "bg-git-white-10" : "bg-gray-100"} rounded-full shadow-2xl flex flex-row`}
                                        >
                                            <div className="relative text-sm font-semibold font-inter text-white text-center inline-block mx-auto">
                                                <img
                                                    className="h-5 w-5"
                                                    src="public/copy.svg"
                                                    alt="Copy"
                                                    id="iconCopy"
                                                />
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
