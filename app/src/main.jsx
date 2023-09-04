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

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
  );

export default function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    const handleVersionChange = () => {
        // Cambia el estado de dark mode
        setIsDarkMode(!isDarkMode);
    
        // Llama a la función para cambiar el estilo y la clase
        toggleDarkMode();
    };

    return (
        <div className={`bg-${isDarkMode ? 'black' : 'gray-100'} text-${isDarkMode ? 'white' : 'gray-800'} font-sans transition-colors`}>
            <div className='max-w-4xl mx-auto px-4'>
                <div className='flex flex-col items-center justify-center min-h-screen'>
                    <header className='flex flex-col sm:flex-row sm:justify-between w-full pt-4 pb-8 px-2'>
                        <a className='flex flex-col' href='/'>
                            <h1 className='font-mono sm:text-xl tracking-tight'>Prompt2Git</h1>
                            <p className='font-mono font-bold text-gray-600'>Convierte tus prompts a lenguaje Git</p>
                        </a>
                        <div className='flex items-center gap-3 pt-4'>
                            <a className='rounded-full text-gray-500' href=''>
                                <div className='flex items-center justify-center space-x-2 py-2 px-6 rounded-full bg-gray-50 text-black shadow-xl text-sm font-medium'>
                                    <img src='public/github.svg' alt='Git' className='w-5 h-5' id='iconGit'/>
                                    <p>Star on Github</p>
                                </div>
                            </a>
                            <a className='flex items-center justify-center space-x-2 py-2 px-6 rounded-full text-black text-sm font-medium transition bg-gray-50 shadow-xl' href=''>
                                <div className='group'>
                                    <img src='public/coffee.svg' alt='Coffee' className='w-4 h-4'/>
                                </div>
                            </a>
                        </div>
                    </header>
                    <button className='absolute top-2.5 right-2.5 text-gray-500 focus:outline-none hover:scale-125 transition w-4 h-4' id='btn_version' onClick={handleVersionChange}>
                        <img class='w-4 h-4' src='public/moon.svg' id='iconDark'></img>
                    </button>
                    <div className='flex flex-col md:flex-row w-full gap-6 bg-[#EEEEEE] rounded-2xl p-2'>
                        <div className='w-full'>
                            <form className='rounded-xl bg-white container-w-gradient-border p-3 h-full w-full shadow-md'>
                                <div className='flex flex-col h-full'>
                                    <label for='inputText' className='block font-medium mb-2 text-gray-700'>
                                        Lenguaje Humano
                                    </label>
                                    <textarea className='appearance-none border-0 rounded-lg w-full py-2 px-3 bg-gray-50 text-gray-700 leading-tight focus:outline-none focus:shadow-outline shadow-md' id='inputPrompt' rows={3} placeholder='Ingresa tu prompt'></textarea>
                                    <div className='flex items-center justify-end my-3 last:mb-0 space-x-10'>
                                        <button type='submit' className='cursor-pointer py-2 px-4 bg-blue-500 rounded-full shadow-2xl flex flex-row'>
                                            <div className='relative text-sm font-semibold font-inter text-white text-center inline-block mx-auto'>Generar</div>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div>
                            <div className='flex items-center md:h-full'>
                                <button className='text-gray-700 cursor-pointer mx-auto'>
                                    <img src='public/refresh.svg' alt='Switch' className='w-8 h-8 md:w-16 md:h-16' id='iconSwitch'></img>
                                </button>
                            </div>
                        </div>
                        <div className='w-full'>
                            <form className='rounded-xl bg-white container-w-gradient-border p-3 h-full w-full shadow-md'>
                                    <div className='flex flex-col h-full'>
                                        <label for='inputText' className='block font-medium mb-2 text-gray-700'>
                                            Git
                                        </label>
                                        <textarea className='appearance-none border-0 rounded-lg w-full py-2 px-3 bg-gray-50 text-gray-700 leading-tight focus:outline-none focus:shadow-outline shadow-md' id='inputGit' rows={3} placeholder='Tu prompt en lenguaje Git'></textarea>
                                        <div className='flex items-center justify-between my-3 last:mb-0 space-x-10'>
                                            <button type='submit' className='cursor-pointer py-2 px-4 bg-gray-100 rounded-full shadow-2xl flex flex-row'>
                                                <div className='relative text-sm font-semibold font-inter text-white text-center inline-block mx-auto'>
                                                    <img className='h-5 w-5' src='public/copy.svg' alt='Copy' id='iconCopy'/>
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
    )
}