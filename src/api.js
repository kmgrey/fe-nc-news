import axios from 'axios';

const newsApi = axios.create({
	baseURL: 'https://nc-news-kdys.onrender.com/api',
});

export const fetchArticles = () => {
	return newsApi.get('/articles').then(({ data }) => {
		return data.articles;
	});
};

// export const fetchArticles = (topic) => {
// 	return newsApi.get('/articles', { params: { topic } }).then(({ data }) => {
// 		return data.items;
// 	});
// };