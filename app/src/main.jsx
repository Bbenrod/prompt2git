import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
  );

export default function App() {
    return (
        <div className='dark:bg-black bg-gray-100 text-gray-800 dark:text-white font-sans transition-colors'>
            <div className='max-w-4xl mx-auto px-4'>
                <div className='flex flex-col items-center justify-center min-h-screen'>
                    <header className='flex flex-col sm:flex-row sm:justify-between w-full pt-4 pb-8 px-2'>
                        <a className='flex flex-col' href='/'>
                            <h1 className='font-mono sm:text-xl tracking-tight'>Prompt2Git</h1>
                            <p className='font-mono font-bold text-gray-600'>Convierte tus prompts a lenguaje Git</p>
                        </a>
                        <div className='flex items-center gap-3 pt-4'>
                            <a className='rounded-full text-gray-500 dark:text-gray-400' href=''>
                                <div className='flex items-center justify-center space-x-2 py-2 px-6 rounded-full light-button-w-gradient-border text-black dark:text-[#D8D8D8] text-sm font-medium'>
                                    <p>Star on Github</p>
                                </div>
                                <div className='flex items-center justify-center space-x-2 py-2 px-6 rounded-full light-button-w-gradient-border text-black text-sm font-medium transition'>
                                    <div className='group'>
                                        Cafecito
                                    </div>
                                </div>
                            </a>
                        </div>
                    </header>
                    <button className='absolute top-2.5 right-2.5 text-gray-500 dark:text-gray-400 focus:outline-none hover:scale-125 transition w-4 h-4'>
                        <i class='fi fi-rr-brightness text-blue-500'></i>
                    </button>
                    <div className='flex flex-col md:flex-row w-full gap-6 bg-[#EEEEEE] dark:text-white dark:bg-black dark:border dark:border-white/20 rounded-2xl p-2'>
                        <div className='w-full'>
                            <form className='rounded-xl bg-white dark:bg-custom-gray container-w-gradient-border dark:dark-container-w-gradient-border p-3 h-full w-full'>
                                <div className='flex flex-col h-full'>
                                    <label for='inputText' className='block font-medium mb-2 text-gray-700 dark:text-gray-200'>
                                        Lenguaje Humano
                                    </label>
                                    <textarea className='appearance-none border-0 rounded-lg w-full py-2 px-3 bg-custom-gray-bg dark:bg-custom-dark-gray text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline' id='inputText' rows={3} placeholder='Ingresa tu prompt'></textarea>
                                    <div className='flex items-center justify-between my-3 last:mb-0 space-x-10'>
                                        <button type='submit' className='cursor-pointer py-2 px-4 rounded-full blue-button-w-gradient-border [text-shadow:0_0_1px_rgba(0,0,0,0.25)] shadow-2xl flex flex-row items-center justify-start false'>
                                            <div className='relative text-sm font-semibold font-inter text-white text-center inline-block mx-auto'>Generar</div>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div>
                            <div className='flex items-center md:h-full'>
                                <button className='text-gray-700 dark:text-gray-200 cursor-pointer mx-auto'></button>
                                <img src="" alt='sWITCH' className='w-12 h-12 md:w-24 md:h-24' />
                            </div>
                        </div>
                        <div className='w-full'>
                        <form className='rounded-xl bg-white dark:bg-custom-gray container-w-gradient-border dark:dark-container-w-gradient-border p-3 h-full w-full'>
                                <div className='flex flex-col h-full'>
                                    <label for='inputText' className='block font-medium mb-2 text-gray-700 dark:text-gray-200'>
                                        Git
                                    </label>
                                    <textarea className='appearance-none border-0 rounded-lg w-full py-2 px-3 bg-custom-gray-bg dark:bg-custom-dark-gray text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline' id='inputText' rows={3} placeholder='Ingresa tu prompt'></textarea>
                                    <div className='flex items-center justify-between my-3 last:mb-0 space-x-10'>
                                        <button type='submit' className='cursor-pointer py-2 px-4 rounded-full blue-button-w-gradient-border [text-shadow:0_0_1px_rgba(0,0,0,0.25)] shadow-2xl flex flex-row items-center justify-start false'>
                                            <div className='relative text-sm font-semibold font-inter text-white text-center inline-block mx-auto'>Copiar</div>
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