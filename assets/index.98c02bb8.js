(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function f(){}function k(t){return t()}function v(){return Object.create(null)}function h(t){t.forEach(k)}function D(t){return typeof t=="function"}function L(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function N(t){return Object.keys(t).length===0}function I(t,e,n){t.insertBefore(e,n||null)}function O(t){t.parentNode&&t.parentNode.removeChild(t)}function P(t){return document.createElement(t)}function S(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function M(t){return Array.from(t.childNodes)}let A;function l(t){A=t}const E=[],x=[],d=[],w=[],F=Promise.resolve();let m=!1;function H(){m||(m=!0,F.then(j))}function g(t){d.push(t)}const p=new Set;let B=0;function j(){if(B!==0)return;const t=A;do{try{for(;B<E.length;){const e=E[B];B++,l(e),T(e.$$)}}catch(e){throw E.length=0,B=0,e}for(l(null),E.length=0,B=0;x.length;)x.pop()();for(let e=0;e<d.length;e+=1){const n=d[e];p.has(n)||(p.add(n),n())}d.length=0}while(E.length);for(;w.length;)w.pop()();m=!1,p.clear(),l(t)}function T(t){if(t.fragment!==null){t.update(),h(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(g)}}const q=new Set;function z(t,e){t&&t.i&&(q.delete(t),t.i(e))}function K(t,e,n,s){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),s||g(()=>{const c=t.$$.on_mount.map(k).filter(D);t.$$.on_destroy?t.$$.on_destroy.push(...c):h(c),t.$$.on_mount=[]}),o.forEach(g)}function W(t,e){const n=t.$$;n.fragment!==null&&(h(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function G(t,e){t.$$.dirty[0]===-1&&(E.push(t),H(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function J(t,e,n,s,r,o,c,C=[-1]){const u=A;l(t);const a=t.$$={fragment:null,ctx:[],props:o,update:f,not_equal:r,bound:v(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:v(),dirty:C,skip_bound:!1,root:e.target||u.$$.root};c&&c(a.root);let y=!1;if(a.ctx=n?n(t,e.props||{},(i,_,...b)=>{const $=b.length?b[0]:_;return a.ctx&&r(a.ctx[i],a.ctx[i]=$)&&(!a.skip_bound&&a.bound[i]&&a.bound[i]($),y&&G(t,i)),_}):[],a.update(),y=!0,h(a.before_update),a.fragment=s?s(a.ctx):!1,e.target){if(e.hydrate){const i=M(e.target);a.fragment&&a.fragment.l(i),i.forEach(O)}else a.fragment&&a.fragment.c();e.intro&&z(t.$$.fragment),K(t,e.target,e.anchor,e.customElement),j()}l(u)}class Q{$destroy(){W(this,1),this.$destroy=f}$on(e,n){if(!D(n))return f;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!N(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function R(t){let e;return{c(){e=P("div"),e.innerHTML=`<div class="flex justify-between text-lg md:text-xl"><a href="/" class="">Chayapatr | \u0E0A\u0E22\u0E20\u0E31\u0E17\u0E23</a> 
    <div class="hidden md:flex gap-4"><a href="https://fb.me/chayapatr" class="hover:underline hover:bg-white">Facebook</a> 
      <a href="https://twitter.com/rtapayahc" class="hover:underline hover:bg-white">Twitter</a> 
      <a href="mailto:pub@creatorsgarten.org" class="hover:underline hover:bg-white">Email</a></div></div> 

  <div class="text-huge">Hi, my name is Pub</div> 
  <div class="text-huge">I do <a href="https://spaceth.co/author/chayapatr">\u{1FA90} stuff</a>,
    <a href="https://podcasts.apple.com/th/podcast/starstuff-%E0%B9%80%E0%B8%A3-%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%A5-%E0%B8%B2%E0%B8%88%E0%B8%B2%E0%B8%81%E0%B8%94%E0%B8%A7%E0%B8%87%E0%B8%94%E0%B8%B2%E0%B8%A7/id1588669089">\u{1F399}\uFE0F a podcast</a>,
    <a href="https://creatorsgarten.org">\u{1F984} events &amp; communities</a>,
    <a href="https://github.com/chayapatr">\u{1F4BB} codes</a>,
    <a href="https://facebook.com/chayapatr">\u{1F47E} projects</a>,
    <a href="https://instagram.com/chayapatr">\u{1F4F8} (sometimes)</a>,
    <a href="https://chayapatr.medium.com">and \u270F\uFE0F about things</a>.</div> 
  <div class="text-huge">I once <a href="https://spaceth.co/messe">\u{1F680} a \u{1F9EC} storage to space</a>,
    <a href="https://chayapatr.medium.com/%E0%B9%84%E0%B8%A1%E0%B9%88-forgotten-%E0%B9%83%E0%B8%99%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%97%E0%B8%A3%E0%B8%87%E0%B8%88%E0%B8%B3%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81%E0%B8%A1%E0%B8%B1%E0%B8%98%E0%B8%A2%E0%B8%A1%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%A5%E0%B8%B0%E0%B8%84%E0%B8%A3%E0%B9%80%E0%B8%A7%E0%B8%97%E0%B8%B5-87c9a7af2fb4">\u{1FA84} a theatrical play</a>, <a href="https://matichonbook.com/p/4291/chasing-new-horizons-%E0%B8%A0%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%9E%E0%B8%B4%E0%B8%8A%E0%B8%B4%E0%B8%95%E0%B8%94%E0%B8%B2%E0%B8%A7%E0%B8%9E%E0%B8%A5%E0%B8%B9%E0%B9%82%E0%B8%95.html">translated a \u{1F4D6}</a>,
    <a href="https://chayapatr.medium.com/cat-t-shirt-6-%E0%B8%84%E0%B8%AD%E0%B8%A1%E0%B8%9E%E0%B8%B4%E0%B8%A7%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%82%E0%B8%AD%E0%B8%A5%E0%B8%B4%E0%B8%A1%E0%B8%9B%E0%B8%B4%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%94%E0%B8%B1%E0%B8%9A%E0%B8%8A%E0%B8%B2%E0%B8%95%E0%B8%B4-toi15-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%88%E0%B8%B1%E0%B8%94%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%84%E0%B8%AD%E0%B8%99%E0%B8%A1%E0%B8%B2%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%AD%E0%B8%B7%E0%B9%88%E0%B8%99-%E0%B9%86-c9edfda1de63">\u{1F949} a national computer olympiad</a>, and won \u270A\u270B\u270C\uFE0F for 30 rounds straight.</div> 

  <div class="text-huge"><a href="https://creatorsgarten.org/ring">\u2B55\uFE0F Creatorsgarten&#39;s Webring</a></div>`,S(e,"class","container pb-container")},m(n,s){I(n,e,s)},p:f,i:f,o:f,d(n){n&&O(e)}}}class U extends Q{constructor(e){super(),J(this,e,null,R,L,{})}}new U({target:document.getElementById("app")});