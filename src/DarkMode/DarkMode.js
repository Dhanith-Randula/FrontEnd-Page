import React from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";


const DarkMode = () => {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme" , 'dark');
        localStorage.setItem('selectedtheme', 'dark');
    }
    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme" , 'light');
        localStorage.setItem('selectedtheme', 'light');
    }

    const initialTheme = localStorage.getItem('selectedtheme');
    if (initialTheme=== 'dark') {
        setDarkMode();
    }

    const toggleDarkMode = (e) => {
        if (e.target.checked) {
            setDarkMode();
        } else {
            setLightMode();
        }
    }


    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onClick={toggleDarkMode}
                defaultChecked={initialTheme === 'dark'}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
