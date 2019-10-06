// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeHearts = document.querySelectorAll(".like-glyph");
  ikeHearts.forEach((heart) => {
    likeHearts.addEventListener("click", function(e){
      if (likeHearts.innerHTML == EMPTY_HEART){
        mimicServerCall()
        .then(resp => {
          likeHearts.innerHTML = FULL_HEART;
          likeHearts.className = "activated-heart";
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
        likeHearts.innerHTML = EMPTY_HEART;
        likeHearts.removeAttribute("class", "activated-heart");
      }
    });
  }

  const main = () => {
    document.addEventListener('DOMContentLoaded', () => {
      addLikeEvent();
    })
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
