document.body.style.backgroundColor = 'rgb(199, 199, 199)'

document.getElementById('post-comment-btn').addEventListener('click', function () {
    // console.log('post btn click'); //check this--
    const commentTextBox = document.getElementById('comment-text-box');

    const commentContainer = document.getElementById('comment-container');

    const commentElement = document.createElement('p');
    commentElement.classList.add('comment');
    
    commentElement.innerText = commentTextBox.value;

    commentContainer.appendChild(commentElement);

    commentTextBox.value = '';
});