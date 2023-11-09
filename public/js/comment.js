const newFormHandler = async (event) => {
  event.preventDefault();

  const postId = document.querySelector('input[name="post-id"]').value; //this reaches out to the handlebars file and grabs the value of the input with the name of post-id
  if  {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
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
};


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

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);
