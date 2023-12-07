let feedGridElement = document.getElementById('feedGrid');
let likedPosts = [];
let likedPostsNewFeed = [];

let jsonDatabase = [
  {
    "id": 1,
    "username": "cats4lyfe",
    "imagePost": "https://media4.giphy.com/media/YRtLgsajXrz1FNJ6oy/giphy.gif",
    "caption": "All you need is love and a cat.",
    "likedByUser": false
  },
  {
    "id": 2,
    "username": "foodie_fairy",
    "imagePost": "https://i.ytimg.com/vi/KiyDGq8ipJg/maxresdefault.jpg",
    "caption": "In the mood for food. 😋",
    "likedByUser": false
  },
  {
    "id": 3,
    "username": "biggest.swiftie.ever1989",
    "imagePost": "https://media1.giphy.com/media/OiU4E2Y8tSU0/giphy.gif?cid=6c09b952wnzebvzo0zvzjq8vc1zryew56wgbvhdrzh3h0rrb&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "caption": "taylor swift is my idol 😍",
    "likedByUser": false
  },
  {
    "id": 4,
    "username": "everyday.memes247",
    "imagePost": "https://i.pinimg.com/originals/a5/d2/bc/a5d2bca6c55f33d5abb0203f608b0244.gif",
    "caption": "how it's going atm...",
    "likedByUser": false
  },
  {
    "id": 5,
    "username": "b4sk3tb4ll.f4n",
    "imagePost": "https://image.cnbcfm.com/api/v1/image/107050453-1650652599883-gettyimages-1392882502-0g2a1869_bd5361b6-4b1d-4ed3-8094-d141fd074523.jpeg?v=1650652661&w=1920&h=1080",
    "caption": "steph gonna steph! 🔥",
    "likedByUser": false
  }  
];


let staticImages = {
  "cats4lyfe": [
    {
      "username": "iheartcats",
      "imagePost": "https://i.natgeofe.com/n/4cebbf38-5df4-4ed0-864a-4ebeb64d33a4/NationalGeographic_1468962_4x3.jpg",
      "caption": "Not all angels have wings. Sometimes they have whiskers!",
      "likedByUser": false
    },
    {
      "username": "kittykitty085",
      "imagePost": "https://www.rd.com/wp-content/uploads/2023/04/Hilarious-Cat-Memes-5.jpg?fit=700%2C700",
      "caption": "Never underestimate the power of a purr.",
      "likedByUser": false
    },
    {
      "username": "c4tluv3r",
      "imagePost": "https://www.icegif.com/wp-content/uploads/2023/06/icegif-953.gif",
      "caption": "The more people I meet, the more I love my cat.",
      "likedByUser": false
    },
    {
      "username": "sanjida.cats",
      "imagePost": "https://i1.sndcdn.com/artworks-zyYqA8D0BdfuyH28-WeeHrw-t500x500.jpg",
      "caption": "You know you’ve done something right if you’ve been loved by a cat.",
      "likedByUser": false
    },
    {
      "username": "meowhouse11",
      "imagePost": "https://www.gannett-cdn.com/authoring/2015/07/09/NTEG/ghows-WT-19f93d7c-ae87-793b-e053-0100007f4ff3-1f4e7d8c.jpeg?width=660&height=880&fit=crop&format=pjpg&auto=webp",
      "caption": "The purr-fect cat-urday with my feline friend.",
      "likedByUser": false
    }
  ],
  "foodie_fairy": [
    {
      "username": "ramen_noodz",
      "imagePost": "https://media3.giphy.com/media/l4FGjIfMXEtJ5YMxO/giphy.gif",
      "caption": "Every day is ramen day in my world.",
      "likedByUser": false
    },
    {
      "username": "c4ndyc4ne_s0dap0p",
      "imagePost": "https://www.honolulumagazine.com/content/uploads/2021/09/m/h/little-vessels-box-maria-burke.jpg",
      "caption": "In moments of doubt, trust your gut, hug your dog, and eat a donut.",
      "likedByUser": false
    },
    {
      "username": "coffee.addiction33",
      "imagePost": "https://i.pinimg.com/originals/db/fa/6e/dbfa6e9c3d1c71a27c48030fbbf6f8fc.jpg",
      "caption": "Isn't this coffee just absolutely brew-tiful?",
      "likedByUser": false
    },
    {
      "username": "veggieluver0",
      "imagePost": "https://cdn.loveandlemons.com/wp-content/uploads/2020/12/roasted-vegetables-1.jpg",
      "caption": "Veggies are the highlight of my plate",
      "likedByUser": false
    },
    {
      "username": "junk_food_yum",
      "imagePost": "https://www.fodors.com/wp-content/uploads/2019/03/HERO_Worlds_Best_Soda_Bundaberg_shutterstock_679079920.jpg",
      "caption": "Everyday is a soft drink day. 🥤",
      "likedByUser": false
    }
  ],
  "biggest.swiftie.ever1989": [
    {
      "username": "hunger_games_champion",
      "imagePost": "https://i.pinimg.com/originals/22/78/4c/22784c7a382063f46d47ae9ea8ef5135.gif",
      "caption": "Drop dead gorgeous! #hungergames",
      "likedByUser": false
    },
    {
      "username": "oceaneyes123",
      "imagePost": "https://media.tenor.com/9cb1RNG53f4AAAAd/billie-billie-eilish.gif",
      "caption": '"For the debt I owe, gotta sell my soul" - bury a friend',
      "likedByUser": false
    },
    {
      "username": "girliepopstar",
      "imagePost": "the squad 😘",
      "caption": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "likedByUser": false
    },
    {
      "username": "primadonna_girl68",
      "imagePost": "https://64.media.tumblr.com/e1359441000a55ad2f50d7347a168132/8492ddcb2ae30438-61/s540x810/aac435a8f33d8a9a450c9eb8cd24295d7c8bfbc4.gif",
      "caption": "Pick a personality for free when you feel like nobody.",
      "likedByUser": false
    },
    {
      "username": "wildest_dreams_fr",
      "imagePost": "https://media.glamourmagazine.co.uk/photos/6138b454573794386521922e/master/w_1600%2Cc_limit/taylor-swift_glamour_7sep15_insta_b.jpg",
      "caption": " We're happy, free, confused, and lonely at the same time.",
      "likedByUser": false
    }
  ],
  "everyday.memes247": [
    {
      "username": "squ4re_p4nts",
      "imagePost": "https://media.tenor.com/55It1q2xglUAAAAC/spongebob-silly-face.gif",
      "caption": "LOL! Spongebob is so crazy!",
      "likedByUser": false
    },
    {
      "username": "memez.hilarious",
      "imagePost": "https://i.imgflip.com/4rr22s.jpg",
      "caption": "Buddy the elf is my spirit animal 🎄",
      "likedByUser": false
    },
    {
      "username": "funny.punny.bunny",
      "imagePost": "https://www.intentionalhomeschooling.com/wp-content/uploads/2019/10/pun10.jpg",
      "caption": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "likedByUser": false
    },
    {
      "username": "dad_joke_central",
      "imagePost": "https://i.imgflip.com/810dxm.jpg",
      "caption": "That's a knee slapper! Ba dum tsss 🥁",
      "likedByUser": false
    },
    {
      "username": "daily_cheesy_jokes",
      "imagePost": "https://i.pinimg.com/736x/a7/a2/8b/a7a28b325f531ef56ee6f1053f254f27.jpg",
      "caption": "Good one dad 😂😂😂",
      "likedByUser": false
    }
  ],
  "b4sk3tb4ll.f4n": [
    {
      "username": "w4rriors_offici4l_f4n",
      "imagePost": "https://i.gifer.com/G2WK.gif",
      "caption": "Get dunked on! YASSS ⛹️",
      "likedByUser": false
    },
    {
      "username": "bballer30",
      "imagePost": "https://i.pinimg.com/originals/3e/ed/4e/3eed4e2dd4ae9f4a522e4bddd80c8f9c.gif",
      "caption": "Swooooosh 🔥🔥",
      "likedByUser": false
    },
    {
      "username": "basketball.lyfeforever",
      "imagePost": "https://miro.medium.com/v2/resize:fit:1200/1*YnfIO8Z8Z6zB6GeIfYu4WA.gif",
      "caption": "CHAMPIONS 4L 😤💪",
      "likedByUser": false
    },
    {
      "username": "buckets.n.beauty",
      "imagePost": "https://64.media.tumblr.com/ccfd6bacec0d1c10c4d9211b1b672aa0/tumblr_mnikikZaPa1rvn2ylo2_400.gifv",
      "caption": "Feeling like a champ with every dunk. 🏆",
      "likedByUser": false
    },
    {
      "username": "n0thingbutn3t",
      "imagePost": "https://noguiltlife.com/wp-content/uploads/2022/10/Best-Basketball-Instagram-Captions-Quotes.png",
      "caption": "Basketball all day, every day 💯💯💯",
      "likedByUser": false
    }
  ]
};

randomArray(jsonDatabase);

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
  likeButton.addEventListener("click", () => toggleLike(incomingJSON, likeButton));
  newContentElement.appendChild(likeButton);

  let newCaption = document.createElement("P");
  newCaption.classList.add('contentCaption');
  newCaption.innerText = incomingJSON['caption'];
  newContentElement.appendChild(newCaption);

  feedGridElement.appendChild(newContentElement);
}




function toggleLike(post, button) {
  post.likedByUser = !post.likedByUser;

  button.classList.toggle("outline", !post.likedByUser);
  button.classList.toggle("solid", post.likedByUser);

  button.innerText = post.likedByUser ? "Unlike" : "Like";

  let staticImagesForUser = staticImages[post.username];
  if (staticImagesForUser) {
    let likedImage = staticImagesForUser.find(image => image.id === post.id);
    if (likedImage) {
      likedImage.likedByUser = post.likedByUser;
    }
  }

  if (post.likedByUser) {
    likedPosts.push(post.id);
    likedPostsNewFeed.push(post.id);
  } else {
    likedPosts = likedPosts.filter(id => id !== post.id);
    likedPostsNewFeed = likedPostsNewFeed.filter(id => id !== post.id);
  }
  console.log("Liked Posts: ", likedPosts);
  console.log("Liked Posts New Feed: ", likedPostsNewFeed);
}





function randomArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let refreshButton = document.getElementById('refreshButton');
let isFirstClick = true;

refreshButton.addEventListener('click', function () {
  if (isFirstClick) {
    refreshFeed();
    isFirstClick = false;
  } else {
    refreshFeedNew();
  }
});


function refreshFeed() {
  feedGridElement.innerHTML = "";

  let staticImagesToShow = likedPosts.length > 0 ? getStaticImagesForLikedPosts() : jsonDatabase;

  randomArray(staticImagesToShow);

  let postsToShow = staticImagesToShow.slice(0, 5);

  for (let i = 0; i < postsToShow.length; i++) {
    createElementProper(postsToShow[i]);
  }

  document.documentElement.scrollTop = 0; 
}



function getStaticImagesForLikedPosts() {
  let imagesToShow = [];
  let nextImagesToShow = [];

  likedPosts.forEach(postId => {
    let likedPost = jsonDatabase.find(post => post.id === postId);
    if (likedPost) {
      let staticImagesForUser = staticImages[likedPost.username];
      if (staticImagesForUser) {
        imagesToShow = imagesToShow.concat(staticImagesForUser);
      }
    }
  });

  randomArray(imagesToShow);

  return imagesToShow;
}



function refreshFeedNew() {
  console.log("Refreshing new feed...");

  feedGridElement.innerHTML = "";

  // Filter liked posts from the second feed
  let likedPostsFromSecondFeed = likedPostsNewFeed.filter(postId => likedPosts.includes(postId));

  let staticImagesToShowNewFeed = likedPostsFromSecondFeed.length > 0 ? getNewStaticImagesForLikedPosts(likedPostsFromSecondFeed) : [];

  console.log("Static images for new feed:", staticImagesToShowNewFeed);

  randomArray(staticImagesToShowNewFeed);

  let postsToShowNewFeed = staticImagesToShowNewFeed.slice(0, 5);

  console.log("Posts to show in new feed:", postsToShowNewFeed);

  for (let i = 0; i < postsToShowNewFeed.length; i++) {
    createElementProper(postsToShowNewFeed[i]);
  }

  document.documentElement.scrollTop = 0;
}



function getNewStaticImagesForLikedPosts(likedPostsArray) {
  let imagesToShow = [];

  likedPostsArray.forEach(postId => {
    let likedPost = jsonDatabase.find(post => post.id === postId);
    if (likedPost) {
      let staticImagesForUser = staticImages[likedPost.username];
      if (staticImagesForUser) {
        imagesToShow = imagesToShow.concat(staticImagesForUser);
      }
    }
  });

  randomArray(imagesToShow);

  return imagesToShow;
}




let suggestedAds = [];





