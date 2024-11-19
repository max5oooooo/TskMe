import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from './providers/Language.jsx';
import { Provider as ReduxProvider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import App from './App.jsx';
import store from './store/index.js';

import 'react-toastify/dist/ReactToastify.css';
import './index.css';

createRoot(document.getElementById('root')).render(
    <ReduxProvider store={store}>
        <LanguageProvider defaultLang="it">
            <BrowserRouter>
                <App />
            </BrowserRouter>
            <ToastContainer />
        </LanguageProvider>
    </ReduxProvider>
)
