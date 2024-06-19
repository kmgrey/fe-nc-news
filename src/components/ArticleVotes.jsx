import React, { useState } from 'react';
import { updateVotesByArticle } from '../api';

export const ArticleVotes = ({ article_id, initialVotes }) => {
	const [votes, setVotes] = useState(initialVotes);
	const [isVoting, setIsVoting] = useState(false);

	const handleVote = (voteChange) => {
		setIsVoting(true);
		setVotes((prevVotes) => prevVotes + voteChange);
		updateVotesByArticle(article_id, voteChange)
			.then(() => setIsVoting(false))
			.catch((error) => {
				console.error('Error updating votes :(', error);
				setVotes((prevVotes) => prevVotes - voteChange);
			});
	};

	return (
		<div>
			<p>Votes: {votes}</p>
			<button onClick={() => handleVote(1)} disabled={isVoting}>
				<i className="bi bi-hand-thumbs-up"></i>
			</button>
			<button onClick={() => handleVote(-1)} disabled={isVoting}>
				<i className="bi bi-hand-thumbs-down"></i>
			</button>
		</div>
	);
};
