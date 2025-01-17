document.addEventListener("DOMContentLoaded", () => {
    const posts = [];
    const postForm = document.getElementById("post-form");
    const postsList = document.getElementById("posts");

    postForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const content = document.getElementById("post-content").value;
        if (content) {
            const postId = posts.length + 1;
            posts.push({ id: postId, content });
            renderPosts();
        }
    });

    function renderPosts() {
        postsList.innerHTML = "";
        posts.slice().reverse().forEach((post) => {
            const li = document.createElement("li");
            li.textContent = post.content;
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.addEventListener("click", () => {
                const index = posts.findIndex((p) => p.id === post.id);
                if (index !== -1) posts.splice(index, 1);
                renderPosts();
            });
            li.appendChild(deleteBtn);
            postsList.appendChild(li);
        });
    }
});
