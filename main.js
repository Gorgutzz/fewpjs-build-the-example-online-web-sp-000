// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const addLikeEvent = () => {
  const likeHearts = document.querySelectorAll('.like-glyph');
    likeHearts.forEach((heart) => {
      heart.addEventListener('click', () => {
        mimicServerCall()
        .then(resp => {
          let likeHeart = likeButton.children[0];
          if(likeHeart.innerHTML == EMPTY_HEART){
            likeHeart.innerHTML = FULL_HEART;
            likeHeart.className = 'activated-heart';
          } else {
            likeHeart.innerHTML = EMPTY_HEART;
            likeHeart.className = '';
          }
        })
        .catch(resp => {
          const errorModalDiv = document.getElementById('modal')
          errorModalDiv.className = ''
          const errorModal = document.getElementById('modal-message')
          errorModal.innerText = resp
          setTimeout(() => {errorModalDiv.className = 'hidden'}, 5000)
        });
      });
    });
}


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
