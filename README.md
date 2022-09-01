# Product feedback rewrite

I want rewrite that uses serverless functions on AWS & Dynamo DB as the database layer on the backend. Probably play around with Docker and Terraform for deployments & some CI & CD with Github Actions. Would probably be easier to rewrite it with Next.js & Typescript with Next.js serverless functions, but where's the fun in that?. Would also want some redis action in there, idk.

The whole application would be managed in a mono repo with Turbo Repo.

## Backend

- [x] Nest JS
- [x] AWS services: Lambda, S3, Dynamo DB
- [x] Serverless Framework
- [x] Docker
- [x] **GraphQL
- [x] Github Actions
- [x] Test's for the backend ?

## Frontend

- [x] ~~Static Front end using Astro~~
- [x] App with Next Js & Typescript
- [x] Authentication with Next Auth
- [x] Forms: React hook Form
- [x] Styling: Stitches
- [x] Components: Radix
- [x] Relay or Apollo as a GQL client ?


## Application Spec & Features

Users should be able to:

- [x] View the optimal layout for the app depending on their device's screen size
- [x] See hover states for all interactive elements on the page
- [x] Create, read, update, and delete product feedback requests
- [x] Receive form validations when trying to create/edit feedback requests
- [x] Sort suggestions by most/least upvotes and most/least comments
- [x] Filter suggestions by category
- [x] Add comments and replies to a product feedback request
- [x] Upvote product feedback requestså