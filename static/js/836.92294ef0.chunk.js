"use strict";(self.webpackChunkreact_hw_05_movies_ts=self.webpackChunkreact_hw_05_movies_ts||[]).push([[836],{856:(e,a,t)=>{t.d(a,{A:()=>n});const s={message:"InformationMessage_message__2XMt6",animMessage:"InformationMessage_animMessage__Zgqpm"};var i=t(579);function n(){return(0,i.jsx)("p",{className:s.message,children:"Unfortunately the requested information is not available."})}},291:(e,a,t)=>{t.d(a,{MM:()=>c,RZ:()=>n,Z$:()=>m,c3:()=>r,kr:()=>o});const s={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzJjNjgwZTU1OGJkMmM2YjkwMmM4MGIyZDVlMDc3ZCIsIm5iZiI6MTczMDQ3NDM2NC43MzMxNzE1LCJzdWIiOiI2NDgxY2M5Y2UyNzI2MDAwZThiZjRlYjQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.5dCuWIPkc-FoQqtFcC5mms7ke4vYd9VzbOaT7ZD_h1c"}};async function i(e){const a=await fetch(`https://api.themoviedb.org/3/${e}`,s);return await a.json()}async function n(){return await i("trending/movie/day?language=en-US")}async function c(e){return await i(`search/movie?query=${e}&include_adult=false&language=en-US&page=1`)}async function r(e){return await i(`movie/${e}?language=en-US`)}async function o(e){return await i(`movie/${e}/credits?language=en-US`)}async function m(e){return await i(`movie/${e}/reviews?language=en-US&page=1`)}},836:(e,a,t)=>{t.r(a),t.d(a,{default:()=>u});var s=t(216),i=t(291);const n={cast:"CastView_cast__FjmnN",castItem:"CastView_castItem__FYx54",profileImg:"CastView_profileImg__kYaH8",name:"CastView_name__N4RI7"};var c=t(856),r=t(298),o=t(11),m=t(579);const l="https://images.unsplash.com/photo-1601027847350-0285867c31f7?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";function u(){const{movieId:e}=(0,s.g)(),{data:a,isPending:t,isError:u}=(0,o.I)({queryKey:["movieCast",e],queryFn:()=>async function(e){const{cast:a}=await(0,i.kr)(e);return a}(Number(e)),refetchOnWindowFocus:!1});return(0,m.jsxs)(m.Fragment,{children:[t&&(0,m.jsx)(r.A,{}),u&&(0,m.jsx)(c.A,{}),a&&0!==a.length?(0,m.jsx)("ul",{className:n.cast,children:a.map((e=>{let{cast_id:a,character:t,name:s,profile_path:i}=e;return(0,m.jsxs)("li",{className:n.castItem,children:[(0,m.jsx)("img",{src:i?`https://image.tmdb.org/t/p/w300${i}`:l,alt:s,width:100,className:n.profileImg}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h3",{className:n.name,children:s}),(0,m.jsx)("p",{children:t})]})]},a)}))}):(0,m.jsx)(c.A,{})]})}}}]);
//# sourceMappingURL=836.92294ef0.chunk.js.map