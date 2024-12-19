//SRP - Single Responsibility Principle

class BlogPost {
  title: string;
  content: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }

  //Methods related to content management
  createPost(blog: BlogPost): void {}

  updatePost() {}

  deletePost() {}
}

class BlogPostDisplay {
  constructor(public blogPost: BlogPost) {}

  // Method related to display
  displayHTML() {
    return `<h1>${this.blogPost.title}</h1></p>${this.blogPost.content}</p>`;
  }
}
