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

- 📖 Page Pre Rendering [🔗](#-Page-Pre-Renderin)
- 📖 Api Route [🔗](#-Api-Route)
- 📖 SEO [🔗](#-SEO)
- 📖 Deployment [🔗](#-Deployment)

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

정리 안됨

### 📖 Page Pre Rendering

Two Forms of Pre-Rendering

- Static Generation(getStaticProps)

`npm run build` NextJS 사이트를 배포하기 전에 실행해야 하는 빌드 명령.
즉, 빌드 프로세스 중에 생성된 후 배포한다.

그런 다음 데이터베이스에 new-meetup 데이터를 더 추가하면 미리 생성된 이 페이지는 meetup에 대해 알지 못한다.

또한 클라이언트 측에서 데이터 가져오기를 추가하지 않으면(ex, update 버튼) 항상 구식의 meetup 데이터들만 볼 수 있게된다.

이러한 것들은 문제가 될 수 있다.

이제 데이터가 변경되면 언제든지 재구축(re-build)하고 재배포(re-deploy)할 수 있다.

개인 블로그와 같은 일부 웹사이트의 경우 훌륭한 대안일 수 있는게 그곳의 데이터는 너무 자주 변경되지 않기 때문이다.

하지만 데이터가 더 자주 변경되는 경우에는 반환된 객체에 추가할 수 있는 추가 속성이 있다. 그것은 `revalidate` 속성이다.

revalidate에 숫자를 대입하는데, 이때의 숫자는 넥스트JS가 이 페이지가 들어오는 요청에 대해 서버에서 이 페이지를 다시 생성할 때까지 대기하는 시간(초)를 말한다.

즉 update frequency, 정기적인 업데이트: 1시간: 3600(s), 시시각각 변한다면 1(s)

- Server-side Rendering(getServerSideProps)

정기적인 업데이트로도 충분하지 않을 수 있다. 들어오는 모든 요청에 대해 이 페이지를 다시 재생하고 싶을 때가 있다.

즉, 서버에서 배포한 이후에 페이지를 즉시 동적으로 미리 재생하는 것이다.

빌드 프로세스 동안이 아니라, 몇 초마다가 아니라 **모든 요청**에 대해서 말이다.

빌드 프로세스중에 실행되지 않고 대신 배포 후에 항상 서버에서 실행된다는 것

여기에 작성하는 모든 코드는 항상 서버에서 실행된다. Never client

오직 서버에서만 실행되기 때문에 사용자에게 노출되어서는 안 되는 자격 증명을 사용하는 작업을 수행할 수도 있다.

들어오는 모든 요청에 대해 어찌됐든 실행되므로 x초 마다 유효성을 다시 검사할 필요가 없다(revalidate가 필요 없다)

- getStaticPaths

페이지 구성 요소 파일로 내보내는데 필요한 함수이다.

다이나믹 페이지이고 getStaticProps를 사용하는 경우

getServerSideProps가 아니라 getStaticProps를 사용하면 필요한 것이다.

### 📖 Api Route

pages의 특수한 기능으로 api 라우트를 설정할 수 있다.

### 📖 SEO

Head 컴포넌트를 지원하기때문에 meta태그를 작성하여 검색엔진최적화를 보다 쉽게 적용할 수 있다.

### 📖 Deployment

Vercel은 next.js를 만든 회사이다. nextjs 기반으로 개발된 프로젝트의 배포에 대해서 최적화되어 있다.

진행중인 프로젝트를 깃헙에 올려주고 vercel에서 내 깃헙 레포와 연결한 뒤 쉽게 배포가 가능하다.

수정 사항에 대해서 새롭게 레포지토리에 커밋, 푸시하면 vercel이 변경사항을 읽고 자동으로 re-building 해준다.
