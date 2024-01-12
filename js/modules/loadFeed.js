const posts = [
  {
    author: "HIDEO_KOJIMA",
    img: "/assets/post_image.png",
    text: "With Al Pacino san.",
  },
  {
    author: "HIDEO_KOJIMA",
    img: "/assets/post_image.png",
    text: "With Al Pacino san.",
  },
  {
    author: "HIDEO_KOJIMA",
    img: "/assets/post_image.png",
    text: "With Al Pacino san.",
  },
];

const createFeed = (author, img, text) => {
  const container = document.createElement("div");
  container.innerHTML = `
    <h3>${author}</h3>
    <img src="${img}" alt="Image posted by ${author}"/>
    <p>${text}</p>
    `;

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
