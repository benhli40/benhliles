// load_blog.js

document.addEventListener("DOMContentLoaded", () => {
    const blogListContainer = document.getElementById("blog-list");
    const teaserContainer = document.getElementById("blog-teasers"); // For index.html teasers
    
    if (blogListContainer) {
        loadBlogPosts(blogListContainer, blogPosts);
    }
    
    if (teaserContainer) {
        loadBlogTeasers(teaserContainer, blogPosts);
    }
});

function loadBlogPosts(container, posts) {
    posts.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("blog-post");

        const img = document.createElement("img");
        img.src = post.image;
        img.alt = post.title;
        img.classList.add("blog-post-image");

        const title = document.createElement("h3");
        title.textContent = post.title;

        const snippet = document.createElement("p");
        snippet.textContent = post.snippet;

        const readMore = document.createElement("a");
        readMore.href = "#";
        readMore.textContent = "Read more";
        readMore.classList.add("read-more");

        postDiv.appendChild(img);
        postDiv.appendChild(title);
        postDiv.appendChild(snippet);
        postDiv.appendChild(readMore);

        container.appendChild(postDiv);
    });
}

function loadBlogTeasers(container, posts) {
    const teasers = posts.slice(0, 3); // Show only the first three posts as teasers
    teasers.forEach(post => {
        const teaserDiv = document.createElement("div");
        teaserDiv.classList.add("blog-teaser");

        const title = document.createElement("h4");
        title.textContent = post.title;

        const snippet = document.createElement("p");
        snippet.textContent = post.snippet;

        teaserDiv.appendChild(title);
        teaserDiv.appendChild(snippet);

        container.appendChild(teaserDiv);
    });
}