function listAllPosts() {
    const postContainer = document.getElementById("post-container");

    fetch("http://localhost:8080/posts")
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                // Create post card
                const postCard = document.createElement("div");
                postCard.classList.add("post", "card", "mb-4", "box-shadow");

                // Create card body
                postCard.innerHTML = `
            <div class="card-body">
              <div class="user">
                <img src="/assets/images/user.png" alt="User" />
                <span class="card-text">${post.owner}</span>
              </div>
              <h5 class="title">${post.title}</h5>
              <p class="card-text">${post.description}</p>

              <div class="img">
                <img class="card-img-top" src="${post.imageUrl}" alt="${post.title}" style="height: 60dvh; width: 100%; margin-bottom: 2dvh;" />
              </div>

              <!-- Code link -->
              <span class="card-text"> Link de acesso ao código: </span>
              <span class="link">
                <a href="${post.repositoryUrl}" target="_blank">${post.repositoryUrl}</a>
              </span>

              <!-- Actions -->
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group actions">
                  <div class="action">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3dvh"
                    height="3dvh"
                    fill="currentColor"
                    class="bi bi-hand-thumbs-up"
                    viewBox="0 0 16 16"
                    >
                    <path
                        d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"
                    />
                    </svg>
                    <span class="info">Like</span>
                  </div>

                  <div class="action">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3dvh"
                    height="3dvh"
                    fill="currentColor"
                    class="bi bi-share"
                    viewBox="0 0 16 16"
                    >
                    <path
                        d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
                    />
                    </svg>
                    <span class="info">Share</span>
                  </div>

                  <div class="action">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3dvh"
                    height="3dvh"
                    fill="currentColor"
                    class="bi bi-card-checklist"
                    viewBox="0 0 16 16"
                    >
                    <path
                        d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"
                    />
                    <path
                        d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0"
                    />
                    </svg>
                    <span class="info">Review</span>
                  </div>
                </div>
              </div>
            </div>
          `;

                postContainer.appendChild(postCard);
            });
        })
        .catch(error => {
            console.error("Error fetching posts:", error);
            postContainer.innerHTML = "<p>Failed to load posts.</p>";
        });
}

// Attach form submission handler
document.getElementById("create-post-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const postData = {
        owner: document.getElementById("owner").value,
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        imageUrl: document.getElementById("imageUrl").value,
        repositoryUrl: document.getElementById("repositoryUrl").value
    };

    createPost(postData);
});

function createPost(postData) {
    return fetch("http://localhost:8080/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to create post");
        }
        return response.json();
    })
    .then(data => {
        alert("Post created successfully!");
    })
    .catch(error => {
        console.error("Error creating post:", error);
        alert("Error creating post:", error);
    });
}
