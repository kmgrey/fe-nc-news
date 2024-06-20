import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://nc-news-kdys.onrender.com/api",
});

export const fetchUsers = () => {
    return newsApi.get(`/users`).then(({ data }) => {
        return data.users;
    });
};

export const fetchArticles = () => {
    return newsApi.get("/articles").then(({ data }) => {
        return data.articles;
    });
};

export const fetchArticleById = (article_id) => {
    return newsApi.get(`/articles/${article_id}`).then(({ data }) => {
        return data.article;
    });
};

export const fetchCommentsByArticle = (article_id) => {
    return newsApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
        return data.comments;
    });
};

export const updateVotesByArticle = (article_id, incVotes) => {
    return newsApi
        .patch(`/articles/${article_id}`, { inc_votes: incVotes })
        .then(({ data }) => {
            return data.article;
        });
};

export const postCommentToArticle = (article_id, { body, username }) => {
    return newsApi
        .post(`/articles/${article_id}/comments`, { body, username })
        .then(({ data }) => {
            return data.comments;
        });
};

// export const fetchArticles = (topic) => {
// 	return newsApi.get('/articles', { params: { topic } }).then(({ data }) => {
// 		return data.items;
// 	});
// };
