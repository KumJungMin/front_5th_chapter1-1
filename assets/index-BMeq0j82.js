var S=Object.defineProperty;var w=e=>{throw TypeError(e)};var R=(e,t,n)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var v=(e,t,n)=>R(e,typeof t!="symbol"?t+"":t,n),x=(e,t,n)=>t.has(e)||w("Cannot "+n);var a=(e,t,n)=>(x(e,t,"read from private field"),n?n.call(e):t.get(e)),f=(e,t,n)=>t.has(e)?w("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),d=(e,t,n,r)=>(x(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function C(e){const t=y(e);return t?t.innerHTML="":document.body.innerHTML=`<div id='${e}'></div>`,t}function y(e){try{return typeof e=="string"?document.querySelector(e):e}catch(t){throw new Error("올바른 셀렉터를 입력해주세요.",t)}}const h=[];function O(e){return{render(t){h.length=0;const n=e(),r=y(t);r.innerHTML=n,h.length>0&&h.forEach(o=>o())}}}function g(e){h.push(e)}class E{constructor(t,n,r){this.root=t,this.routes=n,this.guard=null,this.basePath=r.basePath??"/",this.content=document.createElement("div"),this.root.appendChild(this.content)}getCurrentPath(){const n=window.location.pathname.replace(this.basePath,"/");return this.formatPath(n)}getRoute(t){const n=this.routes[t]??this.routes["*"];return n.redirect?this.getRoute(n.redirect):n}renderComponent(t,n){const r=this.basePath+n.replace(/^\/+/,""),{component:o}=t;if(typeof o!="function")throw new Error(`"${n}" 컴포넌트가 없습니다.`);window.history.pushState(null,"",r),O(o).render(this.root)}formatPath(t){throw new Error("formatPath 메서드는 상속 클래스에서 구현해야 합니다.")}renderRoute(t){const n=(r=t)=>{const o=this.formatPath(r),s=this.getRoute(o);this.renderComponent(s,o)};this.guard?this.guard(this.formatPath(t),n):n()}start(){throw new Error("start 메서드는 상속 클래스에서 구현해야 합니다.")}navigate(t){throw new Error("navigate 메서드는 상속 클래스에서 구현해야 합니다.")}beforeEach(t){return this.guard=t,this}}class T extends E{formatPath(t){return t.replace("#","")||"/"}getCurrentPath(){const t=window.location.hash;return this.formatPath(t)}start(){this.renderRoute(window.location.hash),window.addEventListener("hashchange",()=>{const t=window.location.hash;t&&this.renderRoute(t)})}navigate(t){window.location.hash=t}}class j extends E{formatPath(t){return t.replace(this.basePath,"/")}start(){this.renderRoute(window.location.pathname),window.addEventListener("popstate",()=>{this.renderRoute(window.location.pathname)}),window.addEventListener("DOMContentLoaded",()=>{document.body.addEventListener("click",this.onLinkClick.bind(this))})}onLinkClick(t){const n=t.target.closest("a");if(!n)return;t.preventDefault();const r=n.href.replace(window.location.origin,"");window.location.pathname!==r&&this.renderRoute(r)}navigate(t){this.renderRoute(t)}}function M(e,t,{mode:n}){const r="/front_5th_chapter1-1/";switch(n){case"history":return new j(e,t,{basePath:r});case"hash":return new T(e,t,{basePath:r});default:throw new Error("올바른 라우터 타입이 아닙니다.")}}var i,c;const l=class l{constructor(){f(this,i,null);f(this,c,"user");if(l.instance)return l.instance;l.instance=this,d(this,i,JSON.parse(localStorage.getItem(a(this,c))||"null"))}setUserInfo(t){d(this,i,t),localStorage.setItem(a(this,c),JSON.stringify(t))}removeUserInfo(){d(this,i,null),localStorage.removeItem(a(this,c))}get userInfo(){return a(this,i)}get isAuthenticated(){return a(this,i)!==null}};i=new WeakMap,c=new WeakMap,v(l,"instance");let p=l;function m(){return new p}const b=new Map;function A(e,t){b.set(e,t)}function P(e){if(!b.has(e))throw new Error(`"${e}"에 대한 provider가 없습니다.`);return b.get(e)}function L(){const e=m(),t=P("router");function n(o){return t.getCurrentPath()===o}function r(o){return o?"text-blue-600 font-bold":"text-gray-600"}return g(()=>{const o=document.getElementById("logout");o==null||o.addEventListener("click",s=>{s.preventDefault(),e.removeUserInfo()})}),`
      <header class="bg-blue-600 text-white p-4 sticky top-0">
        <h1 class="text-2xl font-bold">항해플러스</h1>
      </header>

      <nav class="bg-white shadow-md p-2 sticky top-14">
        <ul class="flex justify-around" id="menu">
          <li><a href="/" class="${r(n("/")||n("/main"))}">홈</a></li>
          ${e.isAuthenticated?`<li><a href="/profile" class="${r(n("/profile"))}">프로필</a></li>
                <li><a href="/login" id="logout"  class="text-gray-600">로그아웃</a></li>`:`<li><a href="/login" class="${r(n("/login"))}">로그인</a></li>`}
        </ul>
      </nav>
    `}function $(){return`
    <footer class="bg-gray-200 p-4 text-center">
      <p>&copy; 2024 항해플러스. All rights reserved.</p>
    </footer>
  `}const k=[{name:"홍길동",postTime:"5분 전",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!"},{name:"김철수",postTime:"15분 전",content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!"},{name:"이영희",postTime:"30분 전",content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?"},{name:"박민수",postTime:"1시간 전",content:"주말에 등산 가실 분 계신가요? 함께 가요!"},{name:"정수연",postTime:"2시간 전",content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?"}];function q(e){const{post:t}=e;return`
    <div class="bg-white rounded-lg shadow p-4">
      <div class="flex items-center mb-2">
        <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
        <div>
          <p class="font-bold">${(t==null?void 0:t.name)||""}</p>
          <p class="text-sm text-gray-500">${(t==null?void 0:t.postTime)||""}</p>
        </div>
      </div>
      <p>${(t==null?void 0:t.content)||""}</p>
      <div class="mt-2 flex justify-between text-gray-500">
        <button>좋아요</button>
        <button>댓글</button>
        <button>공유</button>
      </div>
    </div>
    `}function H(){return`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${L()}
        <main class="p-4">
          <div class="mb-4 bg-white rounded-lg shadow p-4">
            <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
            <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
          </div>

          <div class="space-y-4">
            ${k.map(e=>q({post:e})).join("")}
          </div>
        </main>
        ${$()}
      </div>
    </div>
  `}function N(){return`
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
    `}function B(){const e=P("router"),t=m();return g(()=>{const n=document.getElementById("login-form");n.addEventListener("submit",r=>{r.preventDefault();const o=n.querySelector("#username").value;t.setUserInfo({username:o,email:"",bio:""}),e.navigate("/main")})}),`
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
    `}function D(){const e=m(),t=e.userInfo;return g(()=>{const n=document.getElementById("profile-form");n.addEventListener("submit",r=>{r.preventDefault();const o=n.querySelector("#username").value,s=n.querySelector("#email").value,u=n.querySelector("#bio").value;e.setUserInfo({username:o,email:s,bio:u})})}),`
    <div id="root">
      <div class="bg-gray-100 min-h-screen flex justify-center">
        <div class="max-w-md w-full">
          ${L()}
          <main class="p-4">
            <div class="bg-white p-8 rounded-lg shadow-md">
              <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
                내 프로필
              </h2>
              <form id="profile-form">
                <div class="mb-4">
                  <label for="username" class="block text-gray-700 text-sm font-bold mb-2">사용자 이름</label>
                  <input type="text" id="username" name="username" value="${t.username||""}" class="w-full p-2 border rounded" />
                </div>
                <div class="mb-4">
                  <label for="email" class="block text-gray-700 text-sm font-bold mb-2">이메일</label>
                  <input type="email" id="email" name="email" value="${t.email||""}" class="w-full p-2 border rounded" />
                </div>
                <div class="mb-6">
                  <label for="bio" class="block text-gray-700 text-sm font-bold mb-2">자기소개</label>
                  <textarea
                    id="bio"
                    name="bio"
                    rows="4"
                    class="w-full p-2 border rounded"
                  >${t.bio||""}</textarea>
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
          ${$()}
        </div>
      </div>
    </div>
  `}const F={"/":{redirect:"/main"},"/login":{component:B},"/main":{component:H},"/profile":{component:D},"*":{component:N}},U=(e,t)=>{const n=m();!n.isAuthenticated&&e==="/profile"?t("/login"):n.isAuthenticated&&e==="/login"?t("/"):t()},J=C("#root"),I=M(J,F,{mode:"history"});A("router",I);I.beforeEach(U).start();
