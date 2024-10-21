let counter = document.getElementById('counter');
let count = 0;
let isPaused = false;

let timer = setInterval(() => {
  if (!isPaused) {
    count++;
    counter.textContent = count;
  }
}, 1000);

const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');

plusButton.addEventListener('click', () => {
  count++;
  counter.textContent = count;
});

minusButton.addEventListener('click', () => {
  count--;
  counter.textContent = count;
});

const heartButton = document.getElementById('heart');
const likesList = document.querySelector('.likes');
const likes = {};

heartButton.addEventListener('click', () => {
  if (likes[count]) {
    likes[count]++;
  } else {
    likes[count] = 1;
  }
  
  const li = document.querySelector(`[data-num="${count}"]`);
  if (li) {
    li.textContent = `${count} has been liked ${likes[count]} times`;
  } else {
    const newLike = document.createElement('li');
    newLike.dataset.num = count;
    newLike.textContent = `${count} has been liked 1 time`;
    likesList.appendChild(newLike);
  }
});

const pauseButton = document.getElementById('pause');

pauseButton.addEventListener('click', () => {
  if (!isPaused) {
    isPaused = true;
    pauseButton.textContent = 'resume';
    plusButton.disabled = true;
    minusButton.disabled = true;
    heartButton.disabled = true;
  } else {
    isPaused = false;
    pauseButton.textContent = 'pause';
    plusButton.disabled = false;
    minusButton.disabled = false;
    heartButton.disabled = false;
  }
});

const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentsSection = document.createElement('ul');
commentForm.appendChild(commentsSection);

commentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const commentText = commentInput.value;
  if (commentText !== '') {
    const comment = document.createElement('li');
    comment.textContent = commentText;
    commentsSection.appendChild(comment);
    commentInput.value = '';
  }
});
