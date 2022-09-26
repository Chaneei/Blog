# Chan Blog

<p align='center'>
<img width="80%" alt="nweet_main" src="https://chan-portfolio-site.web.app/static/media/portfolio4.0688620350c372cafda3.PNG">
</p>

<p align='center'>
    <a href="https://blog-chani.herokuapp.com/">Go to Website</a>
</p>

## 🛠 Using Skill

<p align='center'>
    <img src="https://img.shields.io/badge/React-blue?logo=React"/>
    <img src="https://img.shields.io/badge/react_dom-blueviolet?logo=ReactOS"/>
    <img src="https://img.shields.io/badge/react_router_dom-critical?logo=React Table"/>
    <img src="https://img.shields.io/badge/node.js-green?logo=Node.js"/>
    <img src="https://img.shields.io/badge/mongoDB-green?logo=MongoDB"/>
    <img src="https://img.shields.io/badge/express.js-black?logo=express"/>
</p>

## 🔥 Introducing Project
#### 🗨 나만의 블로그 만들기!!!
🔓 DB관리는 mongoDB로, 백은 node.js와 express.js로!

#### 🔎 나만의 글을 써보자
최초 화면에서 계정생성 후 로그인하여 다른 사람들이 작성한 글들과 함께 나만의 글을 작성할 수 있는 사이트를 만들어보았습니다. 
<br/>
글 작성 후 내가 작성한 글만 수정하고 삭제할 수 있게 설정하였고 설정화면에서 나의 프로필 사진과 비밀번호를 바꿀 수 있습니다.

## 📁 폴더 구조
- client : FrontEnd로 화면 구성을 위해 pages, 공통 components, 상태관리를 위한 context 로 구성되어있습니다.
- api : BackEnd로 index.js 와 model, route로 구성되어있습니다.

## 💎 How To Use?

#### start

```
//Back
/cd api
npm install
npm start

//Front
/cd client
npm install
npm start
```

#### build

```
/cd client
npm run build
```

#### deploy
herokuapp을 사용했습니다
```
heroku login
git init
heroku git:remote -a <app-name>
git add .
git commit -am "my first commit"
git push heroku master
```
