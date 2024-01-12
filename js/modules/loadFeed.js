const posts = [
  {
    author: "HIDEO_KOJIMA",
    img: "/assets/post_image.png",
    text: "With Al Pacino san.",
  },
  {
    author: "HIDEO_KOJIMA",
    img: "/assets/post_image2.png",
    text: "With Norman.",
  },
  {
    author: "HIDEO_KOJIMA",
    img: "/assets/post_image3.png",
    text: "Our Keanu visited Kojima Productions",
  },
];

const createFeed = (author, img, text) => {
  const container = document.createElement("div");
  container.innerHTML = `
    <div class="author">
        <a href="#" class="profile_pic">
            <img src="/assets/profile_pic.png" alt="go to author profile" />
        </a>
        <h3 class="author">${author}</h3>
    </div>
    <div class="content">
        <div class="image">
            <img src="${img}" alt="Image posted by ${author}"/>
        </div>
        <div class="post_interactions">
            <span>
                <img class="button" src="/assets/like.svg" alt="like post"/>
                <img class="button" src="/assets/comment.svg" alt="comment post" />
            </span>
            <img class="button" src="/assets/favorite.svg" alt="favorite post" />
        </div>
        <p class="text">${text}</p>
    </div>
    `;

  container.classList.add("post");

  return container;
};

const loadFeed = () => {
  const feed = document.querySelector(".feed");

  posts.forEach((post) => {
    const { author, img, text } = post;
    const newPost = createFeed(author, img, text);
    feed.appendChild(newPost);
  });
};

export default loadFeed;
