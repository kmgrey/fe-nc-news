import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './styles/Header.css';
import './styles/NavBar.css';
import './styles/ArticleCards.css';
import './styles/Article.css';
import './styles/Comments.css';
import "bootstrap-icons/font/bootstrap-icons.css"

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
