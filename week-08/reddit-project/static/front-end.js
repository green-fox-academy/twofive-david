'use strict'

const xhr = new XMLHttpRequest();

xhr.open('GET', 'http://localhost:8000/posts');
xhr.onload = () => {
  if(xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    const posts = response.posts;
    createPosts(posts);
  }
}
xhr.send();

const createPosts = (postsArr) => {
  const myArticles = document.querySelector('div.article-holder');
  postsArr.forEach(articleObj => {
    const newArticle = document.createElement('article');
    const scoreDiv = document.createElement('div');
    const upVoteImg = document.createElement('img');
    const downVoteImg = document.createElement('img');
    const voteCount = document.createElement('p');
    const contentDiv = document.createElement('div');
    const articleTitle = document.createElement('h2');
    const submittedText = document.createElement('p'); // to be modified
    const linksDiv = document.createElement('div');
    newArticle.setAttribute('class', 'flex-container');
    scoreDiv.setAttribute('class', 'score');
    upVoteImg.setAttribute('src', './static/images/upvote.png');
    upVoteImg.setAttribute('alt', 'upvote');
    downVoteImg.setAttribute('src', './static/images/downvote.png');
    downVoteImg.setAttribute('alt', 'downvote');
    voteCount.setAttribute('class', 'vote-count');
    contentDiv.setAttribute('class', 'content');
    submittedText.setAttribute('class', 'submitted-by');
    linksDiv.setAttribute('class', 'article-links');
    submittedText.innerHTML = 'submitted 1 year ago by <strong>anonymous</strong>';
    linksDiv.innerHTML = '<a href="#">Modify</a><a href="#">Remove</a>'
    voteCount.textContent = articleObj.score;
    articleTitle.textContent = articleObj.title;
    newArticle.appendChild(scoreDiv);
    scoreDiv.appendChild(upVoteImg);
    scoreDiv.appendChild(voteCount);
    scoreDiv.appendChild(downVoteImg);
    newArticle.appendChild(contentDiv);
    contentDiv.appendChild(articleTitle);
    contentDiv.appendChild(submittedText);
    contentDiv.appendChild(linksDiv);
    myArticles.appendChild(newArticle);
  });
}