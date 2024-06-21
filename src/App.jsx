import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { Articles } from "./components/Articles";
import { Article } from "./components/Article";
import { Users } from "./components/Users";
import { UserProvider } from "./contexts/UserContext";
import { Error } from "./components/Error";

function App() {
	return (
		<UserProvider>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Articles />} />
					<Route path="/articles" element={<Articles />} />
					<Route path="/articles/:article_id" element={<Article />} />
					<Route path="/users" element={<Users />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</BrowserRouter>
		</UserProvider>
	);
}

export default App;
