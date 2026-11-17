if(window.ScrollTrigger)ScrollTrigger.config({ignoreMobileResize:true});
const __P=s=>s.split(',').map(x=>'.mc7 '+x.trim()).join(',');const __q=s=>document.querySelector(__P(s)),__Q=s=>document.querySelectorAll(__P(s));

(()=>{
const RM=false;
const $=s=>__q(s),$$=s=>[...__Q(s)];
// 흐르는 띠
const ms=$$('.mq .tr').map(t=>{t.innerHTML+=t.innerHTML+t.innerHTML;return{t,d:+t.dataset.dir,x:0}});
let ly=scrollY,vel=0;
// 글자 쪼개기
function split(el){let i=0;const walk=n=>{[...n.childNodes].forEach(c=>{if(c.nodeType===3){const f=document.createDocumentFragment();for(const ch of c.textContent){if(ch===' '||ch==='\n'){f.appendChild(document.createTextNode(ch));continue}const s=document.createElement('span');s.className='ch';s.style.setProperty('--i',i++);s.textContent=ch;f.appendChild(s)}c.replaceWith(f)}else if(c.nodeType===1&&c.tagName!=='BR')walk(c)})};walk(el);el.classList.add('split')}
if(!RM)$$('h2.serif,.done .ttl,.sg h3').forEach(split);
// 슬롯머신 숫자
function mkReel(el,val){el.textContent='';const cols=[];for(const d of String(val)){const r=document.createElement('span');r.className='reel';const c=document.createElement('span');for(let k=0;k<3;k++)for(let n=0;n<10;n++){const x=document.createElement('span');x.textContent=n;c.appendChild(x)}r.appendChild(c);el.appendChild(r);cols.push({c,d:+d})}
 return()=>cols.forEach((o,i)=>{o.c.style.transition='none';o.c.style.transform='translateY(0)';void o.c.offsetWidth;o.c.style.transition=`transform ${1.4+i*.35}s cubic-bezier(.15,.85,.2,1)`;o.c.style.transform=`translateY(-${(20+o.d)*1.25}em)`})}
const reels=new Map();if(!RM)$$('[data-count]').forEach(el=>reels.set(el,mkReel(el,el.dataset.count)));
// 한자 뒤섞임
const POOL='米串林羊肉炭火香港夜市龍福喜樂味道燒烤麵醬鍋包紅綠光壹貳參肆伍陸';
function scr(el){const t=el._o;let f=0;clearInterval(el._t);el._t=setInterval(()=>{f++;el.textContent=[...t].map((c,i)=>f>i*2+6?c:POOL[Math.random()*POOL.length|0]).join('');if(f>t.length*2+8){clearInterval(el._t);el.textContent=t}},45)}
const scrEls=$$('.wc .ic,.stl .han,.hanbig,.chars i,.emb .top');scrEls.forEach(e=>e._o=e.textContent);
// 들어올 때마다 다시
const anim=$$('.rv,.split,.zoom,[data-count]');
const io=new IntersectionObserver(es=>{for(const e of es){const el=e.target;
 if(e.isIntersecting){el.classList.remove('pre');if(reels.has(el))reels.get(el)()}
 else if(e.boundingClientRect.top>innerHeight&&!RM&&!el.dataset.count)el.classList.add('pre')}},{threshold:.12});
anim.forEach(el=>{if(!RM&&!el.dataset.count&&el.getBoundingClientRect().top>innerHeight)el.classList.add('pre');io.observe(el)});
const sio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting&&!RM)scr(e.target)}),{threshold:.5});scrEls.forEach(e=>sio.observe(e));
$$('.wc,.cg>div,.flow>div,.stat>div').forEach((el,i)=>el.style.setProperty('--d',i%6));
// 문장 한 단어씩
const wps=$$('.intro .ps,.why .lead,.fire .l p,.story .left p,.yt p,.store p');
if(!RM)wps.forEach(p=>{const walk=n=>{[...n.childNodes].forEach(c=>{if(c.nodeType===3){const f=document.createDocumentFragment();c.textContent.split(/(\s+)/).forEach(w=>{if(!w)return;if(/^\s+$/.test(w)){f.appendChild(document.createTextNode(w));return}const s=document.createElement('span');s.className='wd';s.textContent=w;f.appendChild(s)});c.replaceWith(f)}else if(c.nodeType===1&&!c.classList.contains('ex'))walk(c)})};walk(p);p._w=[...p.querySelectorAll('.wd')]});
const prog=$('#prog'),qb=$('#qbar'),hbg=$('#hbg'),par=$('#par'),sgi=$('#sgi'),flow=$('#flow'),fl=$('#fline'),fs=flow?[...flow.children]:[],dishes=$$('.dish .p'),medal=$('.medal');
function tick(){const y=scrollY,vh=innerHeight,H=document.documentElement.scrollHeight-vh;
 prog.style.transform=`scaleX(${H>0?y/H:0})`;qb.classList.toggle('show',y>vh*.7);
 if(!RM){
  const dy=y-ly;ly=y;vel=vel*.9+dy*.1;
  for(const m of ms){const w=m.t.scrollWidth/3;m.x-=(.7+Math.abs(vel)*.3)*m.d;if(m.x<-w)m.x+=w;if(m.x>0)m.x-=w;m.t.style.transform=`translateX(${m.x}px)`}
  if(y<vh*1.2)hbg.style.transform=`translateY(${y*.25}px) scale(${1+y/4000})`;
  const pr=par.getBoundingClientRect();if(pr.bottom>0&&pr.top<vh)par.style.backgroundPosition=`center ${50+((pr.top+pr.height/2-vh/2)/vh)*30}%`;
  if(sgi){const r=sgi.getBoundingClientRect();sgi.style.scale=String(.9+Math.min(1,Math.max(0,1-r.top/vh))*.1)}
  if(medal){const r=medal.getBoundingClientRect();if(r.bottom>0&&r.top<vh)medal.style.rotate=`${((r.top+r.height/2-vh/2)/vh)*-10}deg`}
  dishes.forEach((d,i)=>{const r=d.getBoundingClientRect();if(r.bottom<0||r.top>vh||!d.offsetParent)return;d.style.rotate=`${((r.top-vh/2)/vh)*(i%2?20:-20)}deg`});
  wps.forEach(p=>{if(!p._w)return;const r=p.getBoundingClientRect();if(r.bottom<-50||r.top>vh+50)return;const q=Math.min(1,Math.max(0,(vh*.88-r.top)/(r.height+vh*.3)));const n=Math.round(q*p._w.length);p._w.forEach((w,i)=>w.classList.toggle('lit',i<n))});
  if(flow){const r=flow.getBoundingClientRect(),q=Math.min(1,Math.max(0,(vh*.85-r.top)/(r.height+vh*.3)));fl.style.width=q*100+'%';fs.forEach((s,i)=>s.classList.toggle('lit',q>=(i+.5)/fs.length))}
 }
 requestAnimationFrame(tick)}
tick();
// 메뉴 탭
$$('.tabs button').forEach(b=>b.onclick=()=>{$$('.tabs button').forEach(x=>x.setAttribute('aria-selected',x===b));$$('.pane').forEach(p=>p.hidden=p.id!==b.dataset.p)});
if(!RM){const tb=$$('.tabs button');let ti=0,auto;const go=()=>{clearInterval(auto);auto=setInterval(()=>{const m=$('#menu').getBoundingClientRect();if(m.top<innerHeight&&m.bottom>0){ti=(ti+1)%tb.length;tb[ti].click()}},4500)};tb.forEach((b,i)=>b.addEventListener('click',()=>{ti=i;go()}));go()}
const pick={};
function sum(){if(!$('#sum'))return;$$('.chk .opts').forEach(o=>{const b=o.querySelector('[aria-pressed=true]');pick[o.dataset.k]=b?b.textContent:''});
 $('#sum').innerHTML=`<b>準備</b> ${pick.shop} · ${pick.size} · 외식업 ${pick.exp}<br>이 조건에 맞춰 상권, 매장 구성, 교육 순서를 담당자가 안내해 드립니다.`}
$$('.chk .opts').forEach(o=>o.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;o.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',x===b));sum()}));sum();




})();
// 마작 패: 보이면 차례로 뒤집기, 누르면 다시 뒤집기
(()=>{const tiles=[...__Q('#mj .tile')];
 const RM=false;
 if(RM){tiles.forEach(t=>t.classList.add('open'));}
 else new IntersectionObserver(es=>es.forEach(e=>{tiles.forEach(t=>t.classList.toggle('open',e.isIntersecting))}),{threshold:.35}).observe(document.getElementById('mj'));
 tiles.forEach(t=>t.addEventListener('click',()=>t.classList.toggle('open')));
})();


(()=>{const G=window.gsap,ST=window.ScrollTrigger;
if(!G||!ST||false)return;
G.registerPlugin(ST);
const $=s=>__q(s),$$=s=>[...__Q(s)];
// 기존 단순 등장 효과는 끄고 GSAP로 대신
$$('.rv,.zoom,.split').forEach(e=>e.classList.remove('rv','zoom','split','pre','fl','fr2'));
const TA={toggleActions:'play none none reverse'};
const rnd=(a,b)=>a+Math.random()*(b-a);

// 큰 영문 외곽선 글자: 칸마다 스크롤 따라 좌우로 흐름
[['#intro','MAHJONG · 米串林','top'],['#live','REAL STORE','bot'],['#why','HONG KONG NIGHT','top'],['#menu','LAMB SKEWERS','bot'],['#story','MI CHUAN LIN','bot'],['#yt','STORY','top'],['#guide','FRANCHISE','bot'],['#steps','START NOW','top'],['#contact',"LET'S GRILL",'bot']].forEach(([sel,t,pos],i)=>{const sec=$(sel);if(!sec)return;
 const g=document.createElement('div');g.className='giant '+pos;g.setAttribute('aria-hidden','true');g.textContent=(t+' · ').repeat(3);sec.prepend(g);
 if(!['#yt','#story','#intro'].includes(sel))G.fromTo(g,{xPercent:i%2?-30:0},{xPercent:i%2?0:-30,ease:'none',scrollTrigger:{trigger:sec,start:'top bottom',end:'bottom top',scrub:true}})});

// 첫 화면: 들어올 때 순서대로 + 내리면 위로 빠지며 흐려짐
// 20261117f 첫 화면 글자(2-1 흑금): 붓글씨 글꼴이 준비되면 움직임 시작(늦어도 1.8초 뒤 시작)
const emb=$('.hs');
if(emb){const go=()=>emb.classList.add('go');try{document.fonts.load('400 100px "Yuji Boku"','米串林').then(go,go)}catch(e){go()}setTimeout(go,1800)}
G.from(__P('.vsign.l'),{x:-160,opacity:0,duration:1,delay:.4,ease:'power4.out'});
G.from(__P('.vsign:not(.l)'),{x:160,opacity:0,duration:1,delay:.5,ease:'power4.out'});
G.from(__P('.hero .ctas .btn'),{y:40,opacity:0,stagger:.12,duration:.7,delay:1,ease:'back.out(2)'});
G.to(emb,{y:-60,scale:.94,opacity:.15,ease:'none',scrollTrigger:{trigger:__P('.hero'),start:'top top',end:'bottom top',scrub:true}});
G.to(__P('.vsign.l'),{y:-160,ease:'none',scrollTrigger:{trigger:__P('.hero'),start:'top top',end:'bottom top',scrub:true}});
G.to(__P('.vsign:not(.l)'),{y:200,ease:'none',scrollTrigger:{trigger:__P('.hero'),start:'top top',end:'bottom top',scrub:true}});

// 제목 글자: 칸마다 다른 방식(아래에서·옆에서 거꾸로·무작위로 튀어나옴)
$$('h2.serif,.done .ttl,.sg h3').forEach((h,i)=>{const cs=h.querySelectorAll('.ch');if(!cs.length)return;const m=i%3;
 G.from(cs,{yPercent:m===0?120:(m===2?-80:0),xPercent:m===1?-80:0,scale:m===2?0:1,rotate:m===0?10:(m===1?-14:30),opacity:0,duration:.8,ease:m===2?'elastic.out(1,.6)':'back.out(1.8)',stagger:{each:.035,from:m===1?'end':(m===2?'random':'start')},scrollTrigger:{trigger:h,start:'top 88%',...TA}})});

// 덩어리들: 방향을 섞어서 변칙적으로 슬라이드
const dirs=[{x:-140},{x:140},{y:110},{y:-90,rotate:-6},{scale:.55,rotate:8},{x:-100,rotate:-10},{x:100,rotate:10},{y:80,scale:.85}];
$$('.mj-hd .lbl,.mj-hd .ps,.chg,.vs .a,.vs .b,.panel-g,.photo-g,.done p,.why .lead,.wc,.vt,.fire .l p,.fire .bigh .k,.menu .hd>div,.tabs,.mnote,.story .left p,.receipt,.yt .g2>div,.store .sg-img,.store .g2>div:last-child,.guide .head p,.cg>div,.ai .lbl,.panel,.steps .s,.flow>div,.contact .lbl,.telb,.fm,.mj-tip').forEach((el,i)=>{const d=dirs[(i*3)%dirs.length];
 G.from(el,{...d,opacity:0,duration:rnd(.7,1.15),ease:i%2?'power4.out':'back.out(1.5)',delay:(i%3)*.07,scrollTrigger:{trigger:el,start:'top 92%',...TA}})});

// 숫자 두루마리: 두루마리가 펼쳐지고 숫자칸이 튀어나옴
G.fromTo(__P('.scroll'),{clipPath:'inset(-60px 50% -40px 50%)'},{clipPath:'inset(-60px -40px -40px -40px)',duration:1.1,ease:'power3.inOut',scrollTrigger:{trigger:__P('.scroll'),start:'top 85%',...TA}});
G.from(__P('.stat>div'),{y:60,rotate:i=>[-8,6,-5,7][i],opacity:0,stagger:.12,duration:.8,delay:.5,ease:'back.out(2)',scrollTrigger:{trigger:__P('.scroll'),start:'top 85%',...TA}});

// 마작 패: 위에서 떨어지며 튀기
G.from(__P('.tile'),{y:-220,rotate:i=>[-25,12,28][i],opacity:0,stagger:.14,duration:1.2,ease:'bounce.out',scrollTrigger:{trigger:__P('#mj'),start:'top 88%',...TA}});

// VS 글자: 크게 쾅
G.from(__P('.vs .v'),{scale:3.5,rotate:-25,opacity:0,duration:.9,ease:'expo.out',scrollTrigger:{trigger:__P('.vs'),start:'top 85%',...TA}});
// 매장 목록 한 줄씩 옆에서
G.from(__P('.stl>div'),{x:i=>i%2?120:-120,opacity:0,stagger:.09,duration:.7,ease:'power3.out',scrollTrigger:{trigger:__P('.stl'),start:'top 88%',...TA}});

// 큰 한자(炭·串·米): 스크롤 따라 커지며 돌아옴
$$('.story .bigh .c,.menu .hd .c').forEach(c=>G.fromTo(c,{scale:.4,rotate:-25,opacity:0},{scale:1,rotate:0,opacity:1,ease:'none',scrollTrigger:{trigger:c,start:'top 95%',end:'center 55%',scrub:true}}));
// 숯불 사진 띠: 사진이 엇갈려 올라오고 스크롤 따라 흐름
(()=>{const s=document.querySelector('.mc7 .strip');if(!s)return;const tr=document.createElement('div');tr.className='st-tr';[...s.children].forEach(c=>tr.appendChild(c));tr.innerHTML+=tr.innerHTML;s.appendChild(tr);G.from(tr,{y:60,opacity:0,duration:.8,ease:'power3.out',scrollTrigger:{trigger:s,start:'top 95%',...TA}})})();

// 경쟁력 갈색 원: 스크롤 따라 회전
G.to(__P('.why .wheel'),{rotate:200,ease:'none',scrollTrigger:{trigger:__P('.why'),start:'top bottom',end:'bottom top',scrub:true}});

// 메뉴 접시: 탭 바뀔 때마다 굴러 들어옴
function dishIn(p){G.fromTo(p.querySelectorAll('.dish'),{x:i=>[-160,0,160][i%3],y:i=>[0,120,0][i%3],rotate:i=>[-120,0,120][i%3],opacity:0},{x:0,y:0,rotate:0,opacity:1,stagger:.035,duration:.9,ease:'back.out(1.4)'})}
ST.create({trigger:__P('.mg'),start:'top 85%',onEnter:()=>dishIn($('.pane:not([hidden])')),onEnterBack:()=>dishIn($('.pane:not([hidden])'))});
$$('.tabs button').forEach(b=>b.addEventListener('click',()=>setTimeout(()=>dishIn($('.pane:not([hidden])')),0)));

// 유튜브 큰 화면: 화면이 열리듯
G.fromTo(__P('.yc'),{clipPath:'inset(12% 18% 12% 18%)'},{clipPath:'inset(0% 0% 0% 0%)',ease:'none',scrollTrigger:{trigger:__P('.yc'),start:'top 95%',end:'center 60%',scrub:true}});
// 간판 그림: 스크롤 따라 기울었다 펴짐
G.fromTo(__P('.store .sg-img'),{rotate:-6,scale:.85},{rotate:0,scale:1,ease:'none',scrollTrigger:{trigger:__P('.store'),start:'top bottom',end:'center center',scrub:true}});
// NEXT WHO? 칸: 통통 튀기
G.to(__P('.cg .next'),{scale:1.06,repeat:-1,yoyo:true,duration:.6,ease:'sine.inOut'});
// 상담 번호: 숫자가 옆으로 촤라락
const tb=$('.telb');if(tb){const n=tb.lastChild;if(n&&n.nodeType===3){const sp=document.createElement('span');sp.style.display='inline-block';[...n.textContent].forEach(ch=>{const c=document.createElement('span');c.textContent=ch;c.style.display='inline-block';sp.appendChild(c)});n.replaceWith(sp);G.from(sp.children,{y:i=>i%2?-60:60,opacity:0,stagger:.05,duration:.6,ease:'back.out(2)',scrollTrigger:{trigger:tb,start:'top 90%',...TA}})}}
addEventListener('load',()=>ST.refresh());
})();


(function(){var vs=document.querySelectorAll('#reels video');
function play(v){var p=v.play();if(p&&p.catch)p.catch(function(){})}
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){if(e.target.preload==='none'){e.target.preload='auto'}play(e.target)}else{e.target.pause()}})},{threshold:.25});vs.forEach(function(v){io.observe(v)})}else{vs.forEach(play)}
document.querySelectorAll('#reels .mr-snd').forEach(function(b){b.addEventListener('click',function(){var v=b.parentNode.querySelector('video');v.muted=!v.muted;b.textContent=v.muted?'🔇':'🔊';b.setAttribute('aria-label',v.muted?'소리 켜기':'소리 끄기');play(v)})});
})();


(function(){var tr=document.querySelector('#photos .ms-tr');if(!tr)return;var N=tr.children.length,hold=0;
[].slice.call(tr.children).forEach(function(c){var k=c.cloneNode(true);k.setAttribute('aria-hidden','true');tr.appendChild(k)});
function P(){var a=tr.children[0],b=tr.children[N];return(a&&b)?b.offsetLeft-a.offsetLeft:tr.scrollWidth/2}
var pos=0,last=0;function wrap(){var p=P();if(p>0){while(pos>=p)pos-=p;while(pos<0)pos+=p}}
['pointerdown','touchstart','wheel'].forEach(function(e){tr.addEventListener(e,function(){hold=Date.now()},{passive:true})});
tr.addEventListener('scroll',function(){if(Date.now()-hold<1500){pos=tr.scrollLeft;wrap()}},{passive:true});
function loop(t){var dt=last?Math.min(64,t-last):16;last=t;if(Date.now()-hold>1200){pos+=(innerWidth<=760?80:130)*dt/1000;wrap();tr.scrollLeft=pos}requestAnimationFrame(loop)}
requestAnimationFrame(loop);})();

// 20261117 순서 변경 + 더 역동적으로: 릴스·틱톡·유튜브·후기·조감도 칸 움직임 추가
(()=>{const G=window.gsap,ST=window.ScrollTrigger;if(!G||!ST)return;
const P=s=>document.querySelector('.mc7 '+s),A=s=>[...document.querySelectorAll('.mc7 '+s)];
const TA={toggleActions:'play none none reverse'};
[['#reels','REELS','top'],['#tiktok','TIKTOK','bot'],['#reviews','REVIEW','top']].forEach(([q,t,pos],i)=>{const sec=P(q);if(!sec||sec.querySelector(':scope>.giant'))return;const g=document.createElement('div');g.className='giant '+pos;g.setAttribute('aria-hidden','true');g.textContent=(t+' · ').repeat(4);sec.prepend(g);
 if(!['#tiktok','#reviews'].includes(q))G.fromTo(g,{xPercent:i%2?-30:0},{xPercent:i%2?0:-30,ease:'none',scrollTrigger:{trigger:sec,start:'top bottom',end:'bottom top',scrub:true}})});
if(P('#reels .mr-list'))G.from(A('#reels .mr-it'),{y:160,rotate:i=>[-12,10,-8,12][i%4],scale:.8,opacity:0,stagger:.12,duration:1,ease:'back.out(1.6)',scrollTrigger:{trigger:P('#reels .mr-list'),start:'top 88%',...TA}});
if(P('#tiktok')){
 G.from(P('#tiktok .tkhd .cursive'),{x:-120,rotate:-20,opacity:0,duration:.9,ease:'back.out(2)',scrollTrigger:{trigger:P('#tiktok'),start:'top 80%',...TA}});
 G.from(P('#tiktok .tkhd p'),{x:120,opacity:0,duration:.9,ease:'power3.out',scrollTrigger:{trigger:P('#tiktok'),start:'top 80%',...TA}});
 G.from(A('#tiktok .tk'),{y:200,x:i=>[-80,0,80][i%3],rotate:i=>[-14,0,14][i%3],opacity:0,stagger:.15,duration:1.1,ease:'back.out(1.5)',scrollTrigger:{trigger:P('#tiktok .tkg'),start:'top 90%',...TA}});}
if(P('#yt .yc')){
 G.from(P('#yt .yc'),{scale:.7,rotate:-4,opacity:0,duration:1,ease:'expo.out',scrollTrigger:{trigger:P('#yt .yc'),start:'top 88%',...TA}});
 G.from(A('#yt .ytmini a'),{y:80,x:i=>i?80:-80,opacity:0,stagger:.12,duration:.8,ease:'back.out(1.6)',scrollTrigger:{trigger:P('#yt .ytmini'),start:'top 92%',...TA}});}
A('#reels .head,#reviews .head,#photos .head,#plan .head').forEach((h,i)=>G.from(h,{x:i%2?140:-140,opacity:0,duration:.9,ease:'power4.out',scrollTrigger:{trigger:h,start:'top 90%',...TA}}));
A('#reviews .mv-row').forEach((r,i)=>G.from(r,{x:i?300:-300,rotate:i?3:-3,opacity:0,duration:1.1,ease:'power3.out',scrollTrigger:{trigger:r,start:'top 92%',...TA}}));
if(P('#plan .mp-all'))G.from(A('#plan .mp-one'),{y:120,scale:.85,opacity:0,stagger:.12,duration:.9,ease:'back.out(1.5)',scrollTrigger:{trigger:P('#plan .mp-all'),start:'top 88%',...TA}});
// 사진 칸: 스크롤 따라 살짝 확대(살아 있는 느낌)
A('#yt .yc,.fire .r').forEach(e=>G.fromTo(e,{backgroundSize:'110%'},{backgroundSize:'130%',ease:'none',scrollTrigger:{trigger:e,start:'top bottom',end:'bottom top',scrub:true}}));
A('.tabs button').forEach(b=>b.addEventListener('click',()=>{const pn=P('.pane:not([hidden])');if(pn)G.fromTo(pn,{xPercent:18,opacity:0},{xPercent:0,opacity:1,duration:.7,ease:'power3.out'})}));
if(P('.hreel')){G.from(A('.hreel .hr-c'),{y:240,opacity:0,stagger:{each:.1,from:'center'},duration:1.1,delay:.6,ease:'back.out(1.4)',clearProps:'all'});}

// 20261117c 숯불 칸 炭: 오른쪽에서 왼쪽으로 빠르게 쓱(잔상)
(()=>{const c=document.querySelector('.mc7 .fire .bigh .c');if(!c)return;const bh=c.parentElement;bh.style.position='relative';
 const gs=[.55,.32,.16].map(o=>{const g=c.cloneNode(true);g.classList.remove('flick');g.classList.add('gh');g.setAttribute('aria-hidden','true');g.style.cssText='position:absolute;left:0;top:0;margin:0;pointer-events:none;opacity:0';bh.appendChild(g);return [g,o]});
 const far=()=>innerWidth*.95;
 const play=()=>{const d=far(),tl=G.timeline();
  tl.fromTo(c,{x:d,skewX:-24,scaleX:1.3},{x:0,skewX:0,scaleX:1,duration:1.4,ease:'power2.out',overwrite:true},0);
  gs.forEach(([g,o],i)=>tl.fromTo(g,{x:d,skewX:-24,scaleX:1.3,opacity:o},{x:(i+1)*30,skewX:-10,scaleX:1.08,opacity:0,duration:1.3+.15*i,ease:'power2.out',overwrite:true},.1*(i+1)));};
 G.set(c,{x:far()});
 ST.create({trigger:c,start:'top 75%',onEnter:play,onEnterBack:play});
})();
// 20261117c 브랜드 이야기 칸: 이름 카드·영수증·한자 움직임
(()=>{const st=document.querySelector('.mc7 .story');if(!st)return;
 const nm=st.querySelector('.nmx'),rc=st.querySelector('.receipt'),ul=st.querySelector('.receipt ul');
 if(nm)G.from(nm.querySelectorAll('.nt'),{y:70,rotate:i=>[-14,0,14][i%3],opacity:0,stagger:.12,duration:.9,ease:'back.out(2)',scrollTrigger:{trigger:nm,start:'top 92%',...TA}});
 if(rc)G.fromTo(rc,{clipPath:'inset(0% 0% 100% 0%)'},{clipPath:'inset(0% 0% 0% 0%)',duration:1.1,ease:'power2.out',scrollTrigger:{trigger:rc,start:'top 85%',...TA}});
 if(ul){G.from(ul.querySelectorAll('li'),{x:60,opacity:0,stagger:.12,duration:.7,ease:'power3.out',scrollTrigger:{trigger:ul,start:'top 95%',...TA}});
  G.from(ul.querySelectorAll('li b'),{scale:0,rotate:-30,stagger:.12,duration:.6,delay:.25,ease:'back.out(3)',scrollTrigger:{trigger:ul,start:'top 95%',...TA}});}
 st.querySelectorAll('.st-fl').forEach((f,i)=>G.to(f,{yPercent:i%2?-45:45,ease:'none',scrollTrigger:{trigger:st,start:'top bottom',end:'bottom top',scrub:true}}));
})();
setTimeout(()=>ST.refresh(),300);})();

// 20261117 첫 화면 손님 영상: 소리 없이 계속 재생, 화면 밖이면 멈춤, 누르면 원본을 소리와 함께 크게
(()=>{const hr=document.querySelector('.mc7 .hreel');if(!hr)return;
const vids=[...hr.querySelectorAll('video')];
const playAll=()=>vids.forEach(v=>{v.muted=true;const p=v.play();if(p&&p.catch)p.catch(()=>{})});
playAll();
if('IntersectionObserver' in window)new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)playAll();else vids.forEach(v=>v.pause())}),{threshold:.05}).observe(hr);
hr.querySelectorAll('.hr-c').forEach(b=>b.addEventListener('click',()=>{
 const lb=document.createElement('div');lb.className='mc7lb';lb.setAttribute('role','dialog');lb.setAttribute('aria-label','손님이 찍은 미촨랭 영상');
 lb.innerHTML='<video playsinline controls></video><button type="button" aria-label="닫기">✕</button>';
 const v=lb.querySelector('video');v.poster=b.querySelector('video').poster;v.src=b.dataset.full;
 let esc;const close=()=>{v.pause();lb.remove();document.removeEventListener('keydown',esc)};
 esc=e=>{if(e.key==='Escape')close()};
 lb.addEventListener('click',e=>{if(e.target===lb)close()});lb.querySelector('button').addEventListener('click',close);document.addEventListener('keydown',esc);
 document.body.appendChild(lb);requestAnimationFrame(()=>lb.classList.add('on'));
 v.muted=false;const p=v.play();if(p&&p.catch)p.catch(()=>{v.muted=true;v.play().catch(()=>{})});
}));
})();
