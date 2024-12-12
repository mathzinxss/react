import React from 'react'
import LightButton from '../../assets/website/light-mode-button.png'
import DarkButton from '../../assets/website/dark-mode-button.png'

const DarkMode = () => {
    const [theme, setTheme] = React.useState(
        localStorage.getItem("theme")? localStorage.getItem("theme") : "light");

        const element = document.documentElement; // Elemento em html

        React.useEffect(() => {
            if (theme == "dark") {
                element.classList.add("dark");
                localStorage.setItem("theme", "dark");
            } else {
                element.classList.remove("dark");
                localStorage.setItem("theme", "light");
            }
        }, [theme])
        

    return (
        <div className='relative'>
            <img
                src={LightButton}
                alt=""
                onClick={() => setTheme(theme == "light" ? "dark" : "light")}
                className={`w-6 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0, 0, 0, 0.1)] transition-all duration-300 absolute right-0 z-10 ${theme == "dark" ? "opacity-0" : "opacity-100"}` } />

            <img 
                src={DarkButton} 
                alt=""
                onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
                className= {`w-5 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0, 0, 0, 0.1)] transition-all duration-300 ${theme == "light" ? "opacity-0" : "opacity-100"} `} />
        </div>
    )
}

export default DarkMode
