# React with APIs (Serverless - Vercel)

## Getting Started

1. Download repository as a zip or clone it and remove the `.git` folder
2. Create a new remote repository under your profile and push this repo to it
3. Open [vercel](vercel.com) and import this project
4. In your terminal type `now`
5. Follow the instructions and link your local project
6. run `npm run dev`

Step 5 is important that you can later use `now dev` to test your apis locally.

> Your hot-reloading react app lives at: localhost:3001

## Tasks

1. Take a look around, this is quite some boilerplate code. Try to make your self familiar with what is going on.
2. Refactor `api/posts/index.js` and `api/posts/[postId].js`, extract the logic in the switch cases into the `posts.js` controller
3. We need a seed script checkout `seed.js` such empty. Implement the logic to seed 20 Posts
4. Create a Comment model comments have a `message`, `createdAt`, `userName`
5. Update Post model to have a one to many reference to comments (One post many comments)
6. Create comments api endpoints just like we did for posts
7. Update the post endpoints
