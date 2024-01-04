console.log("Seeing Posts.js")

const createPostBtnEl = document.getElementById('create-post-button')
const currentPostsEl = document.getElementById('current-posts')
const newPostEl = document.getElementById('new-post')
const newPostFormEl = document.getElementsByClassName('new-post-form')
const newPostSubmitBtn = document.getElementById('new-post-submit-btn')


function hideElement(eL) {
   eL.classList.add('hidden')
}

function showElement(eL) {
    eL.classList.remove('hidden')
 }

function newPost(){
    if(currentPostsEl) {
        hideElement(currentPostsEl);
    }
    hideElement(createPostBtnEl);
    showElement(newPostEl)
}

const createNewPost = async (event) => {
    console.log("New Post")
    console.log("BUTTON PUSHED")
    event.preventDefault();
    console.log("BUTTON PUSHED")
    const title = document.querySelector('#new-post-title').value.trim();
    const body = document.querySelector('#new-post-content').value;
    const user_id = document.querySelector('#user').value;

    console.log(title, body, user_id)

    if (title && body && user_id) {
        const response = await fetch('/api/posts/', {
            method: 'POST',
            body: JSON.stringify({ title, body, user_id }),
            headers: { 'Content-Type': 'application/json' },
          });
    
          if (response.ok) {
            hideElement(newPostEl);
            showElement(createPostBtnEl);
            document.location.replace(`/dashboard`);
          } else {
            alert('Failed to post comment');
          }
        }

  };
  
if(newPostEl){
    newPostEl.addEventListener('submit', createNewPost)
}

if(createPostBtnEl){
    createPostBtnEl.addEventListener('click', newPost)
}
