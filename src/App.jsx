import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Articles } from './components/Articles';
import { Article } from './components/Article';

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Articles />} />
					<Route path="/articles/:article_id" element={<Article />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
