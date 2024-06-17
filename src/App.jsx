import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Articles } from './components/Articles';

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Articles />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
