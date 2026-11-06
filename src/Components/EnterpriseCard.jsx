import {useState} from 'react';
import {Button} from './Button';
export function EnterpriseCard(){
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleTheme =()=>{
        setIsDarkMode(!isDarkMode);
    }
    return (
        <div className= {`${isDarkMode? "dark": ""} bg-bg-neutral-secondary rounded-2xl p-4 drop-shadow-md w-fit`}>
            {/* <button
            onClick = {toggleTheme}
            >Toggle {isDarkMode? "Light": "Dark"} Mode</button> */}
            <span
                className='text-text-secondary'
            >23948492</span>
            <p
                className='text-text-primary text-lg'
            >TD EVERY DAY CHEQUING ACCOUNT</p>
            <p
                className='text-text-primary text-3xl font-bold pb-8 py-4'
            >$6,839.03</p>
            <Button label="Transfer"/>
        </div>
    );
}