'use strict'

const xhr = new XMLHttpRequest();

xhr.open('GET', 'http://localhost:8000/posts');

xhr.onload = () => {
  if (xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    createPosts(response);
    getClick();
  }
}
xhr.send();

//create list of posts

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
    const submittedText = document.createElement('p');
    const linksDiv = document.createElement('div');
    const modifyLink = document.createElement('a');
    const removeLink = document.createElement('a');
    newArticle.setAttribute('class', 'flex-container');
    newArticle.setAttribute('id', articleObj.id);
    // newArticle.setAttribute('score', articleObj.score);
    scoreDiv.setAttribute('class', 'score');
    upVoteImg.setAttribute('src', './static/images/upvote.png');
    upVoteImg.setAttribute('alt', 'upvote');
    downVoteImg.setAttribute('src', './static/images/downvote.png');
    downVoteImg.setAttribute('alt', 'downvote');
    voteCount.setAttribute('class', 'vote-count');
    contentDiv.setAttribute('class', 'content');
    submittedText.setAttribute('class', 'submitted-by');
    linksDiv.setAttribute('class', 'article-links');
    modifyLink.setAttribute('href', '#');
    removeLink.setAttribute('href', '#');
    submittedText.innerHTML = 'submitted 1 year ago by <strong>anonymous</strong>';
    voteCount.textContent = articleObj.score;
    articleTitle.textContent = articleObj.title;
    modifyLink.textContent = 'Modify';
    removeLink.textContent = ' Remove';
    newArticle.appendChild(scoreDiv);
    scoreDiv.appendChild(upVoteImg);
    scoreDiv.appendChild(voteCount);
    scoreDiv.appendChild(downVoteImg);
    newArticle.appendChild(contentDiv);
    contentDiv.appendChild(articleTitle);
    contentDiv.appendChild(submittedText);
    linksDiv.appendChild(modifyLink);
    linksDiv.appendChild(removeLink);
    contentDiv.appendChild(linksDiv);
    myArticles.appendChild(newArticle);
  });
}

const getClick = () => {
  const articles = document.querySelectorAll('article');

  articles.forEach(article => {
    article.addEventListener('click', function (e) {
      if (e.target.alt === 'upvote') {
        let counter = this.querySelector('.vote-count');
        let counterValue = Number(this.querySelector('.vote-count').textContent);
        counterValue += 1;
        counter.textContent = counterValue;
        vote(article);
      }
      if (e.target.alt === 'downvote') {
        let counter = this.querySelector('.vote-count');
        let counterValue = Number(this.querySelector('.vote-count').textContent);
        counterValue -= 1;
        counter.textContent = counterValue;
        vote(article);
      }
    })
  })
}

//navigate to the addpost site

const addPostButton = document.querySelector('div.add-post');

addPostButton.addEventListener('click', () => {

  window.location.href = '/add-posts';

})

//send votes to DB -itt nem baj, hogy felul van meghivva, egy onload kereten belul amit meg anno egy "GET"-re irtam?

const vote = (article) => {
  const sqlQuery = {
    id: article.id,
    score: Number(article.querySelector('.vote-count').textContent)
  };
  xhr.open('POST', '/vote');
  xhr.setRequestHeader('Content-type', 'Application/JSON');
  xhr.onload = () => {
    if(xhr.status === 200) {
      console.log('ok');
    }
  }
  xhr.send(JSON.stringify(sqlQuery));
}
