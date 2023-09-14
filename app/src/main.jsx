import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
    translateCommandToText,
    translateTextToCommand,
} from "../api/apiFunctions";

import sunIcon from "./assets/sun.svg";
import moonIcon from "./assets/moon.svg";
import coffeeIcon from "./assets/coffee.svg";
import coffeeDarkIcon from "./assets/coffeeDark.svg";
import githubIcon from "./assets/github.svg";
import githubDarkIcon from "./assets/githubDark.svg";
import switchIcon from "./assets/switch.svg";
import copyIcon from "./assets/copy.svg";

function openUrl(url) {
    window.open(url, "_blank"); // Abre la URL en una nueva ventana o pestaña
}

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
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isSwitched, setSwitch] = useState(false);
    const [inputConvert, setInputConvert] = useState();
    const [inputResult, setInputResult] = useState();

    const pressTTC = async () => {
        const convert = inputConvert;

        try {
            const translatedCommand = await translateTextToCommand(convert);
            setInputResult(translatedCommand);
            inputGit.value = translatedCommand;
        } catch (error) {
            console.log("ERROR INNESPERADO");
        }
    };

    const pressCTT = async () => {
        const convert = inputConvert;

        try {
            const translatedCommand = await translateCommandToText(convert);
            setInputResult(translatedCommand);
            inputGit.value = translatedCommand;
        } catch (error) {
            console.log("ERROR INNESPERADO");
        }
    };

    const handleVersionChange = () => {
        // Cambia el estado de dark mode
        setIsDarkMode(!isDarkMode);

        // Llama a la función para cambiar el estilo y la clase
        toggleDarkMode();
    };

    const switchInputs = () => {
        setInputConvert("");
        inputGit.value = "";
        //Cambia el estado del switch
        setSwitch(!isSwitched);
    };

    const copyToClipboard = () => {
        const inputGit = document.getElementById("inputGit");

        // Deshabilita la edición del textarea temporalmente
        inputGit.readOnly = true;

        // Selecciona el contenido del textarea
        inputGit.select();
        inputGit.setSelectionRange(0, 99999); // Para dispositivos móviles

        // Copia el texto al portapapeles
        document.execCommand("copy");

        // Deselecciona el textarea
        inputGit.setSelectionRange(0, 0);
    };

    return (
        <div
            className={`font-sans transition-colors ${isDarkMode
                    ? "bg-git-brown-90 text-git-brown"
                    : "bg-git-white text-git-white"
                } 
            }`}
        >
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex flex-col items-center justify-center min-h-screen">
                    <header
                        className={`flex flex-col sm:flex-row sm:justify-center w-full pt-4 pb-8 px-2 text-${isDarkMode ? "git-white" : "git-brown"
                            }`}
                    >
                        <a className="flex flex-col" href="/">
                            <h1 className="flex font-sans font-bold sm:text-xl tracking-tight justify-center">
                                Prompt2Git
                            </h1>
                            <p className="flex font-sans font-bold justify-center">
                                Turn your prompts to git command
                            </p>
                        </a>
                    </header>
                    <div>
                        <button
                            className={`flex items-center justify-center absolute top-2.5 right-4 text-gray-500 focus:outline-none hover:scale-125 transition w-8 h-8 rounded-full ${isDarkMode ? "bg-git-white" : "bg-git-orange"
                                }`}
                            id="btn_version"
                            onClick={handleVersionChange}
                        >
                            <img
                                className="w-4 h-4"
                                src={`${isDarkMode ? sunIcon : moonIcon}`}
                                id="iconMode"
                                alt={isDarkMode ? "Light" : "Dark"}
                            />
                        </button>
                        <button
                            className={`flex items-center justify-center absolute top-2.5 right-16 text-gray-500 focus:outline-none hover:scale-125 transition w-8 h-8 rounded-full ${isDarkMode ? "bg-git-white" : "bg-git-orange"
                                }`}
                            id="btn_coffee"
                            onClick={() =>
                                openUrl("https://www.buymeacoffee.com/imista")
                            }
                        >
                            <img
                                className="w-4 h-4"
                                src={`${isDarkMode ? coffeeDarkIcon : coffeeIcon
                                    }`}
                                id="iconCoffee"
                                alt="Coffee"
                            />
                        </button>
                        <button
                            className={`flex items-center justify-center absolute top-2.5 right-28 text-gray-500 focus:outline-none hover:scale-125 transition w-8 h-8 rounded-full ${isDarkMode ? "bg-git-white" : "bg-git-orange"
                                }`}
                            id="btn_github"
                            onClick={() =>
                                openUrl("https://github.com/Imista/prompt2git")
                            }
                        >
                            <img
                                className="w-4 h-4"
                                src={`${isDarkMode ? githubDarkIcon : githubIcon
                                    }`}
                                id="iconGit"
                                alt="GitHub"
                            />
                        </button>
                    </div>
                    <div
                        className={`flex flex-col md:flex-row w-full gap-6  rounded-2xl p-2 ${isDarkMode
                                ? "bg-git-brown-d10 border-git-white border"
                                : "bg-git-white-10"
                            }`}
                    >
                        <div className="w-full">
                            <form
                                className={`rounded-xl container-w-gradient-border p-3 h-full w-full shadow-md ${isDarkMode
                                        ? "bg-git-brown-d20"
                                        : "bg-git-white-20"
                                    }`}
                            >
                                <div className="flex flex-col h-full">
                                    <label
                                        htmlFor="inputText"
                                        className={`block font-medium mb-2 ${isDarkMode
                                                ? "text-git-white-10"
                                                : "text-gray-700"
                                            }`}
                                    >
                                        {isSwitched ? "Git" : "Prompt"}
                                    </label>
                                    <textarea
                                        className={`border-0 rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline resize-none ${isDarkMode
                                                ? "placeholder-git-white-10 bg-git-brown-d30 text-git-white-20"
                                                : "appearance-none text-gray-700"
                                            }`}
                                        id="inputPrompt"
                                        rows={3}
                                        placeholder={
                                            isSwitched
                                                ? "Add your git command"
                                                : "Add your prompt"
                                        }
                                        value={inputConvert}
                                        onChange={(e) =>
                                            setInputConvert(e.target.value)
                                        }
                                    />
                                    <div className="flex items-center justify-end my-3 last:mb-0 space-x-10">
                                        <button
                                            type="button"
                                            className={`cursor-pointer py-2 px-4 rounded-full shadow-2xl flex flex-row ${isDarkMode
                                                    ? "bg-git-orange-2"
                                                    : "bg-git-brown"
                                                }`}
                                            onClick={
                                                isSwitched ? pressCTT : pressTTC
                                            }
                                        >
                                            <div className="relative text-sm font-semibold font-inter text-white text-center inline-block mx-auto">
                                                Translate
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div>
                            <div className="flex items-center md:h-full">
                                <button
                                    className={`flex items-center justify-center rounded-full cursor-pointer mx-auto h-8 w-8 ${isDarkMode
                                            ? "bg-git-orange-2"
                                            : "bg-git-brown"
                                        }`}
                                    id="btn_switch"
                                    onClick={switchInputs}
                                >
                                    <img
                                        src={switchIcon}
                                        alt="Switch"
                                        className="w-4 h-4 md:w-4 md:h-4"
                                        id="iconSwitch"
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="w-full">
                            <form
                                className={`rounded-xl container-w-gradient-border p-3 h-full w-full shadow-md ${isDarkMode
                                        ? "bg-git-brown-d20"
                                        : "bg-git-white-20"
                                    }`}
                            >
                                <div className="flex flex-col h-full">
                                    <label
                                        htmlFor="inputText"
                                        className={`block font-medium mb-2 ${isDarkMode
                                                ? "text-git-white-10"
                                                : "text-gray-700"
                                            }`}
                                    >
                                        {isSwitched ? "Prompt" : "Git"}
                                    </label>
                                    <textarea
                                        className={`border-0 rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline pointer-events-none resize-none ${isDarkMode
                                                ? "placeholder-git-white-10 bg-git-brown-d30 text-git-white-20"
                                                : "appearance-none text-gray-700"
                                            }`}
                                        id="inputGit"
                                        rows={3}
                                        placeholder={
                                            isSwitched
                                                ? "What does this command means?"
                                                : "Your prompt translated into git command"
                                        }
                                    />
                                    <div className="flex items-center justify-between my-3 last:mb-0 space-x-10">
                                        <button
                                            type="button"
                                            className={`cursor-pointer py-2 px-4 ${isDarkMode
                                                    ? "bg-git-white-10"
                                                    : "bg-gray-100"
                                                } rounded-full shadow-2xl flex flex-row`}
                                            onClick={copyToClipboard}
                                        >
                                            <div className="relative text-sm font-semibold font-inter text-white text-center inline-block mx-auto">
                                                <img
                                                    className="h-5 w-5"
                                                    src={copyIcon}
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
