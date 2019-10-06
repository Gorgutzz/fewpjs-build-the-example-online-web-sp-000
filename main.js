// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeHearts = document.querySelectorAll('.like-glyph');
  likeHearts.forEach((heart) => {
    heart.addEventListener('click', () => {
      if heart.innerHTML == EMPTY_HEART){
      mimicServerCall()
      .then(resp => {
        heart.innerHTML = FULL_HEART;
        heart.className = "activated-heart";
      })
      .catch(error => {
        let errorModal = document.getElementById("modal");
        let errorMessage = document.getElementById("modal-message");
        errorModal.removeAttribute("class", "hidden");
        errorMessage.innerHTML = error;
        setTimeout(function () {
          errorModal.className = "hidden";
        }, 5000);
      });
    } else {
      heartElements[i].innerHTML = EMPTY_HEART;
      heartElements[i].removeAttribute("class", "activated-heart");
    }
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
