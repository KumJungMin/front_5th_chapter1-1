var R=Object.defineProperty;var g=t=>{throw TypeError(t)};var j=(t,e,o)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var y=(t,e,o)=>j(t,typeof e!="symbol"?e+"":e,o),x=(t,e,o)=>e.has(t)||g("Cannot "+o);var i=(t,e,o)=>(x(t,e,"read from private field"),o?o.call(t):e.get(t)),p=(t,e,o)=>e.has(t)?g("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),b=(t,e,o,r)=>(x(t,e,"write to private field"),r?r.call(t,o):e.set(t,o),o);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();function I(t){const e=document.querySelector(t);return e?e.innerHTML="":document.body.innerHTML="<div id='root'></div>",document.querySelector(t)}class P{constructor(e,o,r){this.root=e,this.routes=o,this.guard=null,this.basePath=r.basePath??"/",this.content=document.createElement("div"),this.root.appendChild(this.content)}getCurrentPath(){const e=window.location.pathname;return this.formatPath(e)}getRoute(e){const o=this.routes[e]??this.routes["*"];return o.redirect?this.getRoute(o.redirect):o}renderComponent(e,o){const r=this.basePath+o.replace(/^\/+/,""),{component:n}=e;if(typeof n!="object")throw new Error(`"${o}" 컴포넌트가 없습니다.`);window.history.pushState(null,"",r),this.content.innerHTML=n.template(),typeof n.domEvent=="function"&&n.domEvent({contentElement:this.content})}formatPath(e){throw new Error("formatPath 메서드는 상속 클래스에서 구현해야 합니다.")}renderRoute(e){const o=(r=e)=>{const n=r.replace(this.basePath,"/"),s=this.formatPath(n),a=this.getRoute(s);this.renderComponent(a,s)};this.guard?this.guard(this.formatPath(e),o):o()}start(){throw new Error("start 메서드는 상속 클래스에서 구현해야 합니다.")}navigate(e){throw new Error("navigate 메서드는 상속 클래스에서 구현해야 합니다.")}beforeEach(e){return this.guard=e,this}}class O extends P{formatPath(e){return e.replace("#","")||"/"}getCurrentPath(){const e=window.location.hash;return this.formatPath(e)}start(){window.addEventListener("DOMContentLoaded",()=>{this.renderRoute(window.location.hash)}),window.addEventListener("hashchange",()=>{const e=window.location.hash;e&&this.renderRoute(e)})}navigate(e){window.location.hash=e}}class k extends P{formatPath(e){return e}start(){window.addEventListener("popstate",()=>{this.renderRoute(window.location.pathname)}),window.addEventListener("DOMContentLoaded",()=>{this.renderRoute(window.location.pathname),document.body.addEventListener("click",this.onLinkClick.bind(this))})}onLinkClick(e){const o=e.target.closest("#menu a");if(!o)return;e.preventDefault();const r=o.href.replace(window.location.origin,"");window.location.pathname!==r&&this.renderRoute(r)}navigate(e){this.renderRoute(e)}}function q(t,e,{mode:o}){const r="/front_5th_chapter1-1/";switch(o){case"history":return new k(t,e,{basePath:r});case"hash":return new O(t,e,{basePath:r});default:throw new Error("올바른 라우터 타입이 아닙니다.")}}var l,m;const d=class d{constructor(){p(this,l,null);p(this,m,"user");if(d.instance)return d.instance;d.instance=this,b(this,l,JSON.parse(localStorage.getItem(i(this,m))||"null"))}setUserInfo(e){b(this,l,e),localStorage.setItem(i(this,m),JSON.stringify(e))}removeUserInfo(){b(this,l,null),localStorage.removeItem(i(this,m))}get userInfo(){return i(this,l)}get isAuthenticated(){return i(this,l)!==null}};l=new WeakMap,m=new WeakMap,y(d,"instance");let w=d;function f(){return new w}function c(t){const e={},o={};return Array.isArray(t.components)&&t.components.length>0&&t.components.forEach(n=>{let s;if(typeof n=="function")s=n();else if(typeof n=="object"&&n!==null)s=n;else{console.warn("컴포넌트가 함수도 객체도 아닙니다.",n);return}const a=s.name||n.name;a?(e[a]=(C={})=>s.template(C),o[a]=()=>{typeof s.domEvent=="function"&&s.domEvent()}):console.warn("컴포넌트에 이름이 없습니다.",n)}),{name:t.name,template:(n={})=>t.template({...n,children:e}),domEvent:()=>{typeof t.domEvent=="function"&&t.domEvent(),Object.values(o).forEach(n=>n())}}}var h;const u=class u{static provide(e,o){i(u,h)[e]=o}static inject(e){if(!(e in i(u,h)))throw new Error(`"${e}"에 대한 provider가 없습니다.`);return i(u,h)[e]}};h=new WeakMap,p(u,h,{});let v=u;const F=v.provide,E=v.inject,H={name:"Header",template:()=>{const t=f(),e=E("router");function o(r){return e.getCurrentPath()===r?"text-blue-600 font-bold":"text-gray-600"}return`
      <header class="bg-blue-600 text-white p-4 sticky top-0">
        <h1 class="text-2xl font-bold">항해플러스</h1>
      </header>

      <nav class="bg-white shadow-md p-2 sticky top-14">
        <ul class="flex justify-around" id="menu">
          <li><a href="/" data-link class="${o("/")}">홈</a></li>
          <li><a href="/profile" data-link class="${o("/profile")}">프로필</a></li>
          ${t.isAuthenticated?'<li><a href="/login" id="logout" data-link class="text-gray-600">로그아웃</a></li>':`<li><a href="/login" data-link class="${o("/login")}">로그인</a></li>`}
        </ul>
      </nav>
    `},domEvent:()=>{const t=f(),e=document.querySelector("#logout");e==null||e.addEventListener("click",o=>{o.preventDefault(),t.removeUserInfo()})}},L=c(H),T={name:"Footer",template:()=>`
      <footer class="bg-gray-200 p-4 text-center">
        <p>&copy; 2024 항해플러스. All rights reserved.</p>
      </footer>
    `},S=c(T),A=[{name:"홍길동",postTime:"5분 전",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!"},{name:"김철수",postTime:"15분 전",content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!"},{name:"이영희",postTime:"30분 전",content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?"},{name:"박민수",postTime:"1시간 전",content:"주말에 등산 가실 분 계신가요? 함께 가요!"},{name:"정수연",postTime:"2시간 전",content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?"}],M={name:"PostCard",template:({post:t}={})=>`
    <div class="bg-white rounded-lg shadow p-4">
      <div class="flex items-center mb-2">
        <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
        <div>
          <p class="font-bold">${t.name}</p>
          <p class="text-sm text-gray-500">${t.postTime}</p>
        </div>
      </div>
      <p>${t.content}</p>
      <div class="mt-2 flex justify-between text-gray-500">
        <button>좋아요</button>
        <button>댓글</button>
        <button>공유</button>
      </div>
    </div>
    `},N=c(M),D={name:"Main",components:[L,S,N],template:({children:t})=>`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${t.Header()}
        <main class="p-4">
          <div class="mb-4 bg-white rounded-lg shadow p-4">
            <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
            <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
          </div>

          <div class="space-y-4">
            ${A.map(e=>t.PostCard({post:e})).join("")}
          </div>
        </main>
        ${t.Footer()}
      </div>
    </div>
  `},U=c(D),B={name:"NotFound",template:()=>`
      <main class="bg-gray-100 flex items-center justify-center min-h-screen">
        <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
          <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
          <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
          <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
          <p class="text-gray-600 mb-8">
            요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
          </p>
          <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
            홈으로 돌아가기
          </a>
        </div>
      </main>
    `},J=c(B),K={name:"Login",template:()=>`
      <main class="bg-gray-100 flex items-center justify-center min-h-screen">
        <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
          <form id="login-form">
            <div class="mb-4">
              <input id="username" type="text" placeholder="사용자 이름" class="w-full p-2 border rounded">
            </div>
            <div class="mb-6">
              <input type="password" placeholder="비밀번호" class="w-full p-2 border rounded">
            </div>
            <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
          </form>
          <div class="mt-4 text-center">
            <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
          </div>
          <hr class="my-6">
          <div class="text-center">
            <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
          </div>
        </div>
      </main>
    `,domEvent:()=>{const t=E("router"),e=f(),o=document.querySelector("#login-form");o==null||o.addEventListener("submit",r=>{r.preventDefault();const n=o.querySelector("#username").value;e.setUserInfo({username:n,email:"",bio:""}),t.navigate("/main")})}},W=c(K),z={name:"Profile",components:[L,S],template:({children:t})=>{const o=f().userInfo;return`
    <div id="root">
      <div class="bg-gray-100 min-h-screen flex justify-center">
        <div class="max-w-md w-full">
          ${t.Header()}
          <main class="p-4">
            <div class="bg-white p-8 rounded-lg shadow-md">
              <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
                내 프로필
              </h2>
              <form id="profile-form">
                <div class="mb-4">
                  <label for="username" class="block text-gray-700 text-sm font-bold mb-2">사용자 이름</label>
                  <input type="text" id="username" name="username" value="${o.username||""}" class="w-full p-2 border rounded" />
                </div>
                <div class="mb-4">
                  <label for="email" class="block text-gray-700 text-sm font-bold mb-2">이메일</label>
                  <input type="email" id="email" name="email" value="${o.email||""}" class="w-full p-2 border rounded" />
                </div>
                <div class="mb-6">
                  <label for="bio" class="block text-gray-700 text-sm font-bold mb-2">자기소개</label>
                  <textarea
                    id="bio"
                    name="bio"
                    rows="4"
                    class="w-full p-2 border rounded"
                  >${o.bio||""}</textarea>
                </div>
                <button
                  type="submit"
                  class="w-full bg-blue-600 text-white p-2 rounded font-bold"
                >
                  프로필 업데이트
                </button>
              </form>
            </div>
          </main>
          ${t.Footer()}
        </div>
      </div>
    </div>
  `},domEvent:()=>{const t=f(),e=document.querySelector("#profile-form");e.addEventListener("submit",o=>{o.preventDefault();const r=e.querySelector("#username").value,n=e.querySelector("#email").value,s=e.querySelector("#bio").value;t.setUserInfo({username:r,email:n,bio:s})})}},G=c(z),Q={"/":{redirect:"/main"},"/login":{component:W},"/main":{component:U},"/profile":{component:G},"*":{component:J}},V=(t,e)=>{const o=f();!o.isAuthenticated&&t==="/profile"?e("/login"):o.isAuthenticated&&t==="/login"?e("/"):e()},X=I("#root"),$=q(X,Q,{mode:"history"});F("router",$);$.beforeEach(V).start();
