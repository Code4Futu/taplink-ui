import '@rainbow-me/rainbowkit/styles.css';
import '@unocss/reset/normalize.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'uno.css';
import App from './App';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
