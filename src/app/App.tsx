import './styles/index.scss';
import {Route, Routes, Link} from "react-router-dom";
import {Suspense} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {AppRouter} from "app/providers/router";


const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Link to={'/'}>Главная</Link>
                <Link to={'/about'}>О нас</Link>
                <AppRouter />
            </Suspense>
        </div>
    );
};

export default App;