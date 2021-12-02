# 📚 Learn NextJS

<details>
<summary>Index</summary>

📗 What is NextJS [🔗](#-What-is-Nextjs)

📗 Key Features and Benefits [🔗](#-Key-Features-and-Benefits)

- 📖 Server Side Rendering [🔗](#-Server-Side-Rendering)
- 📖 File based Routing [🔗](#-File-based-Routing)
- 📖 Fullstack Capabilities [🔗](#-Fullstack-Capabilities)

📗 New Project [🔗](#-New-Project)

- 📖 Set Up [🔗](#-Set-Up)
- 📖 Directories [🔗](#-Directories)

📗 Bigger Project [🔗](#-Bigger-Project)

</details>

## 📗 What is NextJS

**React**

- A **Javascript\*** **library\*** for building **user interfaces\***.
- components, state, props.

**NextJS**

- The **React\*** **Framework\*** for **Production\***
- NextJS solves common problems and makes building React apps easier.
- **Framework\*:** Lots of built-in features(e.g routing) that help you solve common problems & clear guidance on how to use those features.
- **React\*:** You still write React code, you still build React components and use React features(props, state, context, etc.). NextJS just enhances your React apps and adds more features.
- **Production\*:** There are certain problems which you will need to solve for almost all production-ready React apps: NextJS solves those for you.

## 📗 Key Features and Benefits

### 📖 Server Side Rendering

- Automatic page pre-rendering: Great for SEO and initial load.
- Blending client-side and server-side: Fetch data on the server and render finished pages.

### 📖 File based Routing

- Define pages and routes with files and folders instead of code.
- Less code, less work, highly understandable.

### 📖 Fullstack Capabilities

- Easily add backend(server-side) code to your Next/React apps.
- Storing data, getting data, authentication etc. can be added to your React projects.

## 📗 New project

### 📖 Set Up

```shell
$ npx create-next-app
# or
$ yarn create next-app
```

```shell
Need to install the following packages:
  create-next-app
Ok to proceed? (y) y
? What is your project named? > my-app
...
Success! Created my-app
```

### 📖 directories

- public: public resouces(images). index.html is not required(pre-rendering)
- styles: css files
- pages: file-based routing

```javascript
// our-domian.com/

function HomePage() {
  return <h1>The Home Page</h1>;
}

export default HomePage;
```

```javascript
// pages > news > index.js
// our-domian.com/news
// a tag: reload
// Link: SPA
import Link from "next/link";
import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>;
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            NextJs Is A Great Framework
          </Link>
        </li>
        <li>Something Else</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
```

```javascript
// pages > news > [newsId].js
// our-domian.com/news/[newsId]
import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  // send a request to the backend API
  // to fetch the news item with newsId

  return <h1>The Detail Page</h1>;
}

export default DetailPage;
```

## 📗 Bigger Project
