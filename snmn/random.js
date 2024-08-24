var posts=["posts/63d6a691.html","posts/8c53d709.html","posts/4a17b156.html","posts/9f3081ce.html","posts/9f3089ce.html","posts/b15d8e56.html","posts/9d0b4d7.html","posts/55dccea6.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };