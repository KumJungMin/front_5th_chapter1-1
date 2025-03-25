var R=Object.defineProperty;var g=t=>{throw TypeError(t)};var j=(t,e,n)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var y=(t,e,n)=>j(t,typeof e!="symbol"?e+"":e,n),x=(t,e,n)=>e.has(t)||g("Cannot "+n);var i=(t,e,n)=>(x(t,e,"read from private field"),n?n.call(t):e.get(t)),p=(t,e,n)=>e.has(t)?g("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),b=(t,e,n,r)=>(x(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function I(t){const e=document.querySelector(t);return e?e.innerHTML="":document.body.innerHTML="<div id='root'></div>",document.querySelector(t)}class E{constructor(e,n){this.root=e,this.routes=n,this.guard=null,this.content=document.createElement("div"),this.root.appendChild(this.content)}getCurrentPath(){const e=window.location.pathname;return this.formatPath(e)}getRoute(e){const n=this.routes[e]??this.routes["*"];return n.redirect?this.getRoute(n.redirect):n}renderComponent(e,n){const{component:r}=e;if(typeof r!="object")throw new Error(`"${n}" 컴포넌트가 없습니다.`);window.history.pushState(null,"",n),this.content.innerHTML=r.template(),typeof r.domEvent=="function"&&r.domEvent({contentElement:this.content})}formatPath(e){throw new Error("formatPath 메서드는 상속 클래스에서 구현해야 합니다.")}renderRoute(e){const n=(r=e)=>{const o=this.formatPath(r),s=this.getRoute(o);this.renderComponent(s,o)};this.guard?this.guard(this.formatPath(e),n):n()}start(){throw new Error("start 메서드는 상속 클래스에서 구현해야 합니다.")}navigate(e){throw new Error("navigate 메서드는 상속 클래스에서 구현해야 합니다.")}beforeEach(e){return this.guard=e,this}}class O extends E{formatPath(e){return e.replace("#","")||"/"}getCurrentPath(){const e=window.location.hash;return this.formatPath(e)}start(){window.addEventListener("DOMContentLoaded",()=>{this.renderRoute(window.location.hash)}),window.addEventListener("hashchange",()=>{const e=window.location.hash;e&&this.renderRoute(e)})}navigate(e){window.location.hash=e}}class k extends E{formatPath(e){return e}start(){window.addEventListener("popstate",()=>{this.renderRoute(window.location.pathname)}),window.addEventListener("DOMContentLoaded",()=>{this.renderRoute(window.location.pathname),document.body.addEventListener("click",this.onLinkClick.bind(this))})}onLinkClick(e){const n=e.target.closest("#menu a");if(!n)return;e.preventDefault();const r=n.href.replace(window.location.origin,"");window.location.pathname!==r&&this.renderRoute(r)}navigate(e){this.renderRoute(e)}}function q(t,e,{mode:n}){switch(n){case"history":return new k(t,e);case"hash":return new O(t,e);default:throw new Error("올바른 라우터 타입이 아닙니다.")}}var a,m;const d=class d{constructor(){p(this,a,null);p(this,m,"user");if(d.instance)return d.instance;d.instance=this,b(this,a,JSON.parse(localStorage.getItem(i(this,m))||"null"))}setUserInfo(e){b(this,a,e),localStorage.setItem(i(this,m),JSON.stringify(e))}removeUserInfo(){b(this,a,null),localStorage.removeItem(i(this,m))}get userInfo(){return i(this,a)}get isAuthenticated(){return i(this,a)!==null}};a=new WeakMap,m=new WeakMap,y(d,"instance");let w=d;function h(){return new w}function c(t){const e={},n={};return Array.isArray(t.components)&&t.components.length>0&&t.components.forEach(o=>{let s;if(typeof o=="function")s=o();else if(typeof o=="object"&&o!==null)s=o;else{console.warn("컴포넌트가 함수도 객체도 아닙니다.",o);return}const l=s.name||o.name;l?(e[l]=(C={})=>s.template(C),n[l]=()=>{typeof s.domEvent=="function"&&s.domEvent()}):console.warn("컴포넌트에 이름이 없습니다.",o)}),{name:t.name,template:(o={})=>t.template({...o,children:e}),domEvent:()=>{typeof t.domEvent=="function"&&t.domEvent(),Object.values(n).forEach(o=>o())}}}var f;const u=class u{static provide(e,n){i(u,f)[e]=n}static inject(e){if(!(e in i(u,f)))throw new Error(`"${e}"에 대한 provider가 없습니다.`);return i(u,f)[e]}};f=new WeakMap,p(u,f,{});let v=u;const F=v.provide,P=v.inject,H={name:"Header",template:()=>{const t=h(),e=P("router");function n(r){return e.getCurrentPath()===r?"text-blue-600 font-bold":"text-gray-600"}return`
      <header class="bg-blue-600 text-white p-4 sticky top-0">
        <h1 class="text-2xl font-bold">항해플러스</h1>
      </header>

      <nav class="bg-white shadow-md p-2 sticky top-14">
        <ul class="flex justify-around" id="menu">
          <li><a href="/" data-link class="${n("/")}">홈</a></li>
          <li><a href="/profile" data-link class="${n("/profile")}">프로필</a></li>
          ${t.isAuthenticated?'<li><a href="/login" id="logout" data-link class="text-gray-600">로그아웃</a></li>':`<li><a href="/login" data-link class="${n("/login")}">로그인</a></li>`}
        </ul>
      </nav>
    `},domEvent:()=>{const t=h(),e=document.querySelector("#logout");e==null||e.addEventListener("click",n=>{n.preventDefault(),t.removeUserInfo()})}},L=c(H),T={name:"Footer",template:()=>`
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
  `},U=c(D),J={name:"NotFound",template:()=>`
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
    `},K=c(J),B={name:"Login",template:()=>`
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
    `,domEvent:()=>{const t=P("router"),e=h(),n=document.querySelector("#login-form");n==null||n.addEventListener("submit",r=>{r.preventDefault();const o=n.querySelector("#username").value;e.setUserInfo({username:o,email:"",bio:""}),t.navigate("/main")})}},z=c(B),G={name:"Profile",components:[L,S],template:({children:t})=>{const n=h().userInfo;return`
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
                  <input type="text" id="username" name="username" value="${n.username||""}" class="w-full p-2 border rounded" />
                </div>
                <div class="mb-4">
                  <label for="email" class="block text-gray-700 text-sm font-bold mb-2">이메일</label>
                  <input type="email" id="email" name="email" value="${n.email||""}" class="w-full p-2 border rounded" />
                </div>
                <div class="mb-6">
                  <label for="bio" class="block text-gray-700 text-sm font-bold mb-2">자기소개</label>
                  <textarea
                    id="bio"
                    name="bio"
                    rows="4"
                    class="w-full p-2 border rounded"
                  >${n.bio||""}</textarea>
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
  `},domEvent:()=>{const t=h(),e=document.querySelector("#profile-form");e.addEventListener("submit",n=>{n.preventDefault();const r=e.querySelector("#username").value,o=e.querySelector("#email").value,s=e.querySelector("#bio").value;t.setUserInfo({username:r,email:o,bio:s})})}},Q=c(G),V={"/":{redirect:"/main"},"/login":{component:z},"/main":{component:U},"/profile":{component:Q},"*":{component:K}},W=(t,e)=>{const n=h();!n.isAuthenticated&&t==="/profile"?e("/login"):n.isAuthenticated&&t==="/login"?e("/"):e()},X=I("#root"),$=q(X,V,{mode:"history"});F("router",$);$.beforeEach(W).start();
