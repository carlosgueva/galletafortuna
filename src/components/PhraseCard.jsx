import React from 'react';

function PhraseCard({ phrase, author }) {
	return (
		<article>
			<q>{phrase}</q>
			<p>
				- <strong>{author}</strong>
			</p>
		</article>
	);
}

export default PhraseCard;
