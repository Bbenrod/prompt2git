import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function toggleDarkMode() {
    // Obtén el elemento <html> actual
    const htmlElement = document.querySelector('html');
  
    // Cambia la clase de 'light' a 'dark' o viceversa
    if (htmlElement.classList.contains('light')) {
        htmlElement.classList.remove('light');
        htmlElement.classList.add('dark');
    } else {
        htmlElement.classList.remove('dark');
        htmlElement.classList.add('light');
    }
}

export const translateTextToCommand = async (text) => {
    return text.replace(/[aeiouAEIOU]/g, "x");
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

export default function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isInputGitEditable, setIsInputGitEditable] = useState(false);
    const [inputPromptText, setInputPromptText] = useState('');
    const [inputGitText, setInputGitText] = useState('');

    const handleVersionChange = () => {
        // Cambia el estado de dark mode
        setIsDarkMode(!isDarkMode);

        // Llama a la función para cambiar el estilo y la clase
        toggleDarkMode();
    };

    const handleGenerateClick = async () => {
        // Realiza la traducción del texto del inputPrompt al inputGit
        const translatedText = await translateTextToCommand(inputPromptText);
        setInputGitText(translatedText);
        setIsInputGitEditable(true);
    };

    return (
        <div className={`bg-${isDarkMode ? 'git-brown' : 'git-white'} text-${isDarkMode ? 'white' : 'git-brown'} font-sans transition-colors`}>
            <div className='max-w-4xl mx-auto px-4'>
                <div className='flex flex-col items-center justify-center min-h-screen'>
                    <header className='flex flex-col sm:flex-row sm:justify-center w-full pt-4 pb-8 px-2'>
                        <a className='flex flex-col' href='/'>
                            <h1 className='flex font-sans font-bold sm:text-xl tracking-tight justify-center'>Prompt2Git</h1>
                            <p className='flex font-sans font-bold justify-center'>Convierte tus prompts a git</p>
                        </a>
                    </header>
                    <div>
                        <button className={`flex items-center justify-center absolute top-2.5 right-4 text-gray-500 focus:outline-none hover:scale-125 transition w-8 h-8 bg-${isDarkMode ? 'git-white' : 'git-orange'} rounded-full`} id='btn_version' onClick={handleVersionChange}>
                            <img className='w-4 h-4' src={`${isDarkMode ? 'public/sun.svg' : 'public/moon.svg'}`} id='iconMode' alt={isDarkMode ? 'Light' : 'Dark'} />
                        </button>
                        <button className='flex items-center justify-center absolute top-2.5 right-16 text-gray-500 focus:outline-none hover:scale-125 transition w-8 h-8 bg-git-orange rounded-full' id='btn_coffee'>
                            <img className='w-4 h-4' src='public/coffee.svg' id='iconCoffee' alt='Coffee' />
                        </button>
                        <button className='flex items-center justify-center absolute top-2.5 right-28 text-gray-500 focus:outline-none hover:scale-125 transition w-8 h-8 bg-git-orange rounded-full' id='btn_github'>
                            <img className='w-4 h-4' src='public/github.svg' id='iconGit' alt='GitHub' />
                        </button>
                    </div>
                    <div className={`flex flex-col md:flex-row w-full gap-6 bg-${isDarkMode ? 'git-orange' : 'git-white-20'} rounded-2xl p-2`}>
                        <div className='w-full'>
                            <form className='rounded-xl bg-white container-w-gradient-border p-3 h-full w-full shadow-md'>
                                <div className='flex flex-col h-full'>
                                    <label htmlFor='inputText' className='block font-medium mb-2 text-gray-700'>
                                        Lenguaje Humano
                                    </label>
                                    <textarea className='appearance-none border-0 rounded-lg w-full py-2 px-3 bg-gray-50 text-gray-700 leading-tight focus:outline-none focus:shadow-outline shadow-md' id='inputPrompt' rows={3} placeholder='Ingresa tu prompt' value={inputPromptText} onChange={(e) => setInputPromptText(e.target.value)} readOnly={isInputGitEditable} />
                                    <div className='flex items-center justify-end my-3 last:mb-0 space-x-10'>
                                        <button type='button' className='cursor-pointer py-2 px-4 bg-git-orange rounded-full shadow-2xl flex flex-row' onClick={handleGenerateClick} disabled={isInputGitEditable}>
                                            <div className='relative text-sm font-semibold font-inter text-white text-center inline-block mx-auto'>Generar</div>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div>
                            <div className='flex items-center md:h-full'>
                                <button className='flex items-center justify-center  bg-git-orange rounded-full cursor-pointer mx-auto h-8 w-8' id='btn_switch'>
                                    <img src='public/switch.svg' alt='Switch' className='w-4 h-4 md:w-4 md:h-4' id='iconSwitch' />
                                </button>
                            </div>
                        </div>
                        <div className='w-full'>
                            <form className='rounded-xl bg-white container-w-gradient-border p-3 h-full w-full shadow-md'>
                                <div className='flex flex-col h-full'>
                                    <label htmlFor='inputText' className='block font-medium mb-2 text-gray-700'>
                                        Git
                                    </label>
                                    <textarea className='appearance-none border-0 rounded-lg w-full py-2 px-3 bg-gray-50 text-gray-700 leading-tight focus:outline-none focus:shadow-outline shadow-md' id='inputGit' rows={3} placeholder='Tu prompt en git' value={inputGitText} readOnly={!isInputGitEditable} />
                                    <div className='flex items-center justify-between my-3 last:mb-0 space-x-10'>
                                        <button type='button' className='cursor-pointer py-2 px-4 bg-gray-100 rounded-full shadow-2xl flex flex-row'>
                                            <div className='relative text-sm font-semibold font-inter text-white text-center inline-block mx-auto'>
                                                <img className='h-5 w-5' src='public/copy.svg' alt='Copy' id='iconCopy' />
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