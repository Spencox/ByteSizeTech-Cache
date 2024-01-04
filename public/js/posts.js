console.log("Seeing Posts.js")

// DOM elements to create new post
const createPostBtnEl = document.getElementById('create-post-button');
const currentPostsEl = document.getElementById('current-posts');
const newPostEl = document.getElementById('new-post');
const newPostFormEl = document.getElementsByClassName('new-post-form');
const newPostSubmitBtn = document.getElementById('new-post-submit-btn');

// DOM elements to update post
const updatePostBtnEl = document.getElementById('update-post-btn');
const deletePostBtnEl = document.getElementById('delete-post-btn');

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

// create new post call to api endpoint
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
  

// edit post call to api endpoint
const editPost = async (event) => {
    console.log("EDIT Post")
  
    event.preventDefault();

    const title = document.querySelector('#update-post-title').value.trim();
    const body = document.querySelector('#update-post-content').value;
    const post_id = document.querySelector('#post').value;

    console.log(title, body, post_id)

    if (title && body && post_id) {
        const response = await fetch(`/api/posts/${post_id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, body}),
            headers: { 'Content-Type': 'application/json' },
          });
    
          if (response.ok) {
            document.location.replace(`/dashboard`);
          } else {
            alert('Failed to update post');
          }
        }

  };

  const deletePost = async (event) => {
    console.log("Delete Post")
  
    const post_id = document.querySelector('#post').value;
    
    event.preventDefault();

    if (post_id) {
        const response = await fetch(`/api/posts/${post_id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
          });
    
          if (response.ok) {
            document.location.replace(`/dashboard`);
          } else {
            alert('Failed to delete post');
          }
        }

  };

// event listeners for creating new post
if(newPostEl){
    newPostEl.addEventListener('submit', createNewPost)
}

if(createPostBtnEl){
    createPostBtnEl.addEventListener('click', newPost)
}

// event listeners for editing existing post
updatePostBtnEl.addEventListener('click', editPost);
deletePostBtnEl.addEventListener('click', deletePost);