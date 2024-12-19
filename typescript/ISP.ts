//ISP

// interface Printer {
//   print(document: Document): void;
// }

// interface Scanner {
//   scan(document: Document): void;
// }

// interface FaxMachine {
//   fax(document: Document): void;
// }

// class SimplePrinter implements Printer {
//   print(document: Document): void {
//     console.log("The machine is printing");
//   }
// }

// class MultiFunctionPrinter implements Printer, Scanner, FaxMachine {
//   print(document: Document): void {
//     console.log("The machine is printing");
//   }
//   scan(document: Document): void {
//     console.log("The machine is scanning");
//   }
//   fax(document: Document): void {
//     console.log("The machine is faxing");
//   }
// }

//ISP REAL LIFE

interface Post {
  title: string;
  description: string;
}

interface CreatePost {
  createPost(post: Post): void;
}

interface SharePost {
  sharePost(post: Post): void;
}

interface CommentPost {
  commentPost(post: Post): void;
}

class Admin implements CreatePost, SharePost, CommentPost {
  createPost(post: Post): void {
    console.log(`Title: ${post.title}, Description:${post.description} created`);
  }

  sharePost(post: Post): void {
    console.log(`${post} shared`);
  }

  commentPost(post: Post): void {
    console.log(`${post} commented`);
  }
}

class RegularUser implements SharePost, CommentPost {
  sharePost(post: Post): void {
    console.log(`${post} shared`);
  }

  commentPost(post: Post): void {
    console.log(`${post} commented`);
  }
}

let newAdmin = new Admin();
let post: Post = {
  title: "deneme",
  description: "description",
};

newAdmin.createPost(post);
