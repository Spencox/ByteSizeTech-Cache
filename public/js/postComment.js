const postCommentFormHandler = async (event) => {
    event.preventDefault();
  
    console.log("BUTTON PUSHED FOR COMMENT")
    const comment = document.querySelector('#comment').value.trim();
    
    const post_id = document.querySelector('#post').value;

    const user_id = document.querySelector('#user').value;

    console.log(comment, post_id, user_id)

    if (comment && post_id && user_id) {
    console.log("MADE TO IF")  
    const response = await fetch('/api/comments/', {
        method: 'POST',
        body: JSON.stringify({ comment, post_id, user_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace(`/api/comments/${post_id}`);
      } else {
        alert('Failed to post comment');
      }
    }
  };
  
  document
    .querySelector('.comment-form')
    .addEventListener('submit', postCommentFormHandler);
  