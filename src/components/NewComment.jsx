import React from 'react';
import { postCommentToArticle } from '../api';
import { UserContext } from '../contexts/UserContext';

export const NewComment = () => {
	return (
		<form>
			<textarea rows="4" cols="50" placeholder="New comment..." />
			<button>Post Comment</button>
		</form>
	);
};
