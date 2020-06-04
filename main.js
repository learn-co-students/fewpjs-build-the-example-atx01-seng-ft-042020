// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

function eid(id) { //helper
  return document.getElementById(id);
}

const errorModal = eid("modal")
errorModal.classList.add('hidden');

const likes = document.querySelectorAll('.like-glyph');
likes.forEach(like => {
  like.addEventListener('click', e => {
    mimicServerCall()
      .then(res => {
        handleSuccess(like)
      })
      .catch(err => handleError(err));
  });
});

function handleSuccess(like) {
  if (like.innerText == FULL_HEART) {
    like.innerText = EMPTY_HEART;
    like.classList.remove('activated-heart');
  } else {
    like.innerText = FULL_HEART;
    like.classList.add('activated-heart');
  }
}

function handleError(err) {
  errorModal.classList.remove('hidden');
  eid("modal-message").innerText = err;
  setTimeout(() => {
    errorModal.classList.add('hidden');
  }, 5000);
}
//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
