let feedGridElement = document.getElementById('feedGrid');
let likedPosts = [];

let jsonDatabase = [
  {
    "id": 1,
    "username": "trustme.n3ws",
    "imagePost": "https://i.kinja-img.com/image/upload/c_fit,q_60,w_1315/89f59c92cea3cdc65155d874482410a1.jpg",
    "caption": "Weird Roommate Binge Eats Entire Bunch Of Bananas",
    "likedByUser": false
  },
  {
    "id": 2,
    "username": "news.news.news123",
    "imagePost": "https://i.kinja-img.com/image/upload/c_fit,q_60,w_1315/ac1bca72db5daef07574e218e173c940.jpg",
    "caption": "Study: Average American Has At Least 3 People Plotting To Kill Them At All Times.",
    "likedByUser": false
  },
  {
    "id": 3,
    "username": "onetwothree_news",
    "imagePost": "https://i.kinja-img.com/image/upload/c_fit,q_60,w_1315/dac1075678d47d4eaa9d13d608b5d05a.jpg",
    "caption": "Mother Treats Herself To Throwing Away Few Pieces Of Kids’ Art",
    "likedByUser": false
  },
  {
    "id": 4,
    "username": "super_real_news",
    "imagePost": "https://i.kinja-img.com/image/upload/c_fit,q_60,w_1315/5dea69ddf02fdf977971e9c246b4606d.jpg",
    "caption": "Breaking News: Scientists Successfully Teach Mice To Hate Women",
    "likedByUser": false
  },
  {
    "id": 5,
    "username": "qwerty.n3ws",
    "imagePost": "https://i.kinja-img.com/image/upload/c_fit,q_60,w_1315/9b74a023350986949f531bd9a7d6f1a5.jpg",
    "caption": "Baby At Age Where It Can Be Left On Floor",
    "likedByUser": false
  }  
];


let staticImages = {
  "trustme.n3ws": [
    {
      "username": "trustme.n3ws",
      "imagePost": "https://i.kinja-img.com/image/upload/c_fit,q_60,w_1315/a553244ff17dab824d763f9dfd78c655.jpg",
      "caption": "Beefy Boy On Electric Scooter Weaves Through Traffic Like Graceful Gazelle",
      "likedByUser": false
    },
    {
      "username": "trustme.n3ws",
      "imagePost": "https://i.kinja-img.com/image/upload/c_fit,q_60,w_1600/0715b13539452edc1d34b2df516c8e72.jpg",
      "caption": "Biggest Red Flags On Men’s Tinder Profiles",
      "likedByUser": false
    }
  ],
  "news.news.news123": [
    {
      "username": "news.news.news123",
      "imagePost": "https://d3i6fh83elv35t.cloudfront.net/static/2023/10/social-1024x683.jpg",
      "caption": "Supreme Court Rules Anyone Who Had Abortion Under Roe Must Be Re-Impregnated",
      "likedByUser": false
    },
    {
      "username": "news.news.news123",
      "imagePost": "https://i.kinja-img.com/image/upload/c_fit,q_60,w_1600/252b2530c81369c5f3653c8fac4b4bf8.jpg",
      "caption": "Men’s Rights Activists Explain How They Increase Their Sperm Count",
      "likedByUser": false
    }
  ],
  "onetwothree_news": [
    {
      "username": "onetwothree_news",
      "imagePost": "https://i.kinja-img.com/image/upload/c_fit,q_60,w_1315/53a5a1b7fa7528a7324ba3d530783084.jpg",
      "caption": "Dad Really Letting Newfound Fame From Nextdoor Coyote Post Go To His Head",
      "likedByUser": false
    },
    {
      "username": "onetwothree_news",
      "imagePost": "https://i.kinja-img.com/image/upload/c_fit,q_60,w_1315/08c3698b48817e81501b8ccfc86b9213.jpg",
      "caption": "Disappointed Woman Wonders Why Boyfriend Never Showers Her With Roses While Shouting ‘Brava!’",
      "likedByUser": false
    }
  ],
  "super_real_news": [
    {
      "username": "super_real_news",
      "imagePost": "https://i.kinja-img.com/image/upload/c_fit,q_60,w_1315/1ddb2596ed617ceb157eb4b6ea5e1fe4.jpg",
      "caption": "Archaeologists Celebrate After Uncovering Ancient Certificate Congratulating Them For Finding All the Stuff",
      "likedByUser": false
    },
    {
      "username": "super_real_news",
      "imagePost": "https://i.kinja-img.com/image/upload/c_fit,q_60,w_1315/70dc615a9723edeed05c3a78d631ecca.jpg",
      "caption": "Panicking Climate Scientists Warn That Earth About To Go Off Huge Waterfall",
      "likedByUser": false
    }
  ],
  "qwerty.n3ws": [
    {
      "username": "qwerty.n3ws",
      "imagePost": "https://i.kinja-img.com/image/upload/c_fit,q_60,w_1315/8b3cba2874c89e159d6ef8112a5d2586.jpg",
      "caption": "Report: Rest Of Family Doing Turkey Trot If You’re Done With Your Little Pity Party",
      "likedByUser": false
    },
    {
      "username": "qwerty.n3ws",
      "imagePost": "https://i.kinja-img.com/image/upload/c_fit,q_60,w_1315/43b97ed3e5ce7d547b1084b7a0d1f875.jpg",
      "caption": "Dog Allowed To Eat Whatever He Wants Off The Sidewalk On His Birthday",
      "likedByUser": false
    }
  ]
};

shuffleArray(jsonDatabase);

for (let i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}



function createElementProper(incomingJSON) {
  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('contentItem');

  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentUsername');
  newContentHeading.innerText = incomingJSON['username'];
  newContentElement.appendChild(newContentHeading);

  let newImage = document.createElement("IMG");
  newImage.classList.add("postImage");
  newImage.src = incomingJSON['imagePost'];
  newContentElement.appendChild(newImage);

  let likeButton = document.createElement("BUTTON");
  likeButton.classList.add("likeButton");
  likeButton.classList.toggle("outline", !incomingJSON.likedByUser);
  likeButton.classList.toggle("solid", incomingJSON.likedByUser);
  likeButton.innerText = incomingJSON.likedByUser ? "Unlike" : "Like";
  likeButton.addEventListener("click", () => handleLike(incomingJSON, likeButton));
  newContentElement.appendChild(likeButton);

  let newCaption = document.createElement("P");
  newCaption.classList.add('contentCaption');
  newCaption.innerText = incomingJSON['caption'];
  newContentElement.appendChild(newCaption);

  // Add the item to the page
  feedGridElement.appendChild(newContentElement);
}



function handleLike(post, button) {
  post.likedByUser = !post.likedByUser;

  button.classList.toggle("outline", !post.likedByUser);
  button.classList.toggle("solid", post.likedByUser);

  button.innerText = post.likedByUser ? "Unlike" : "Like";

  if (post.likedByUser) {
    likedPosts.push(post.id);
  } else {
    likedPosts = likedPosts.filter(id => id !== post.id);
  }
}


function handleLikeNewFeed(post, button) {
  post.likedByUser = !post.likedByUser;

  button.classList.toggle("outline", !post.likedByUser);
  button.classList.toggle("solid", post.likedByUser);

  button.innerText = post.likedByUser ? "Unlike" : "Like";

  if (post.likedByUser) {
    likedPostsNewFeed.push(post.id);
  } else {
    likedPostsNewFeed = likedPostsNewFeed.filter(id => id !== post.id);
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function refreshFeed() {
  feedGridElement.innerHTML = "";

  let staticImagesToShow = likedPosts.length > 0 ? getStaticImagesForLikedPosts() : jsonDatabase;

  shuffleArray(staticImagesToShow);

  let postsToShow = staticImagesToShow.slice(0, 5);

  for (let i = 0; i < postsToShow.length; i++) {
    createElementProper(postsToShow[i]);
  }

  document.documentElement.scrollTop = 0; 
}

let likedPostsNewFeed = [];


function refreshFeedNew() {
  feedGridElement.innerHTML = "";

  let staticImagesToShowNewFeed = likedPostsNewFeed.length > 0 ? getStaticImagesForLikedPostsNewFeed() : jsonDatabase;

  shuffleArray(staticImagesToShowNewFeed);

  let postsToShowNewFeed = staticImagesToShowNewFeed.slice(0, 5);

  for (let i = 0; i < postsToShowNewFeed.length; i++) {
    createElementProper(postsToShowNewFeed[i]);
  }

  document.documentElement.scrollTop = 0; 
}



function getStaticImagesForLikedPosts() {
  let imagesToShow = [];

  likedPosts.forEach(postId => {
    let likedPost = jsonDatabase.find(post => post.id === postId);
    if (likedPost) {
      let staticImagesForUser = staticImages[likedPost.username];
      if (staticImagesForUser) {
        imagesToShow = imagesToShow.concat(staticImagesForUser);
      }
    }
  });

  shuffleArray(imagesToShow);

  return imagesToShow;
}

function getStaticImagesForLikedPostsNewFeed() {
  let imagesToShowNewFeed = [];

  likedPostsNewFeed.forEach(postId => {
    let likedPost = jsonDatabase.find(post => post.id === postId);
    if (likedPost) {
      let staticImagesForUser = staticImages[likedPost.username];
      if (staticImagesForUser) {
        imagesToShowNewFeed = imagesToShowNewFeed.concat(staticImagesForUser);
      }
    }
  });

  shuffleArray(imagesToShowNewFeed);

  return imagesToShowNewFeed;
}
