const newFormHandler = async (event) => {
  event.preventDefault();


    const postId = document.querySelector('input[name="post-id"]').value;
  
    const response = await fetch(`/api/Blogposts/${post.id}`, {
      method: 'PUT',
      body: JSON.stringify({ postId, postMessage }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }



const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
}
//add route to create user/ signup handlebars/ signup.js

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);
