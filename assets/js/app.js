"use strict";
/* ================= icons ================= */
const P={
  cockpit:"M4 3h5a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM15 3h5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM15 12h5a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1zM4 17h5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z",grid:"M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z",rows:"M4 7h16M4 12h16M4 17h16",square:"M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z",filt:"M4 6h16M7 12h10M10 18h4",sort:"M7 4v16M4 7l3-3 3 3M17 20V4M14 17l3 3 3-3",
  events:"M22 12h-6l-2 3h-4l-2-3H2M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
  monitoring:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0-18 0M12 12m-4.5 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0M12 12l6.5-6.5",
  pulse:"M22 12h-4l-3 9L9 3l-3 9H2",
  briefings:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M8 13h8M8 17h6",
  lab:"M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3",
  switch:"M7 15l5 5 5-5M7 9l5-5 5 5",
  chevd:"m6 9 6 6 6-6",srcico:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",shield:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4",rss:"M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16M5 19h.01",globe:"M12 12m-9.5 0a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0M2.5 12h19M12 2.5a14 14 0 0 1 0 19a14 14 0 0 1 0-19",mail:"M3 5h18v14H3zM3 6l9 7 9-7",bot:"M5 9h14v10H5zM12 5v4M9 13h.01M15 13h.01M3 13v3M21 13v3",chat:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",folder:"M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",more:"M5 12h.01M12 12h.01M19 12h.01",branch:"M6 3v12M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 9a9 9 0 0 1-9 9",results:"M3 3v18h18M8 16v-3M13 16V9M18 16V6",book:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14zM20 17v4H6.5",plug:"M9 2v6M15 2v6M6 8h12v4a6 6 0 0 1-12 0zM12 18v4",team:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11m-4 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",cal:"M4 5h16v16H4zM16 3v4M8 3v4M4 10h16",quarter:"M12 3a9 9 0 1 0 9 9h-9z",gear:"M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z",user:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11m-4 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0",bell:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.94 1.94 0 0 0 3.4 0",out:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9",layers:"M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  spark:"M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z",
  x:"M18 6 6 18M6 6l12 12", chev:"m9 18 6-6-6-6", chevl:"m15 18-6-6 6-6", plus:"M12 5v14M5 12h14", minus:"M5 12h14",
  info:"M12 12m-9.5 0a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0M12 16v-4M12 8h.01",
  search:"M11 11m-7.5 0a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0M21 21l-4.3-4.3",
  check:"M20 6 9 17l-5-5", send:"M22 2 11 13M22 2l-7 20-4-9-9-4z",
  alert:"M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z",
  ok:"M22 11.1V12a10 10 0 1 1-5.9-9.1M22 4 12 14l-3-3",
  fitview:"M3 8V5a2 2 0 0 1 2-2h3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M8 21H5a2 2 0 0 1-2-2v-3M8 9h8v6H8z",grow:"M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7",
  upload:"M12 15V4M7 9l5-5 5 5M4 15v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4",doc:"M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h6",pen:"M4 20h4L19 9l-4-4L4 16zM13.5 6.5l4 4",pause:"M9 5v14M15 5v14",play:"M7 4.5v15l12-7.5z",pin:"M12 17v5M9 10.8a2 2 0 0 1-1.1 1.8l-1.8.9A2 2 0 0 0 5 15.2V17h14v-1.8a2 2 0 0 0-1.1-1.8l-1.8-.9a2 2 0 0 1-1.1-1.8V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",
  expandall:"M12 22v-6M12 8V2M4 12H2M10 12H8M16 12h-2M22 12h-2M15 19l-3 3-3-3M15 5l-3-3-3 3",collapseall:"M12 22v-6M12 8V2M4 12H2M10 12H8M16 12h-2M22 12h-2M15 19l-3-3-3 3M15 5l-3 3-3-3",
  shrink:"M4 14h6v6M20 10h-6V4M14 10l7-7M3 21l7-7",
  max:"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3",
  clock:"M12 12m-9.5 0a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0M12 7v5l3 2",
  undo:"M3 7v6h6M21 17a9 9 0 0 0-15-6.7L3 13",
  min:"M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"
};
const ic=(n,c="")=>`<svg class="${c}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${P[n]}"/></svg>`;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const $=s=>document.querySelector(s);

/* ================= data ================= */
const PF=[
  {id:"active",name:"Active nutrition and healthy ageing",short:"Active nutrition",products:["boost-opt","bgc"]},
  {id:"medical",name:"Medical nutrition",short:"Medical nutrition",products:["peptamen","compleat"]},
  {id:"dysphagia",name:"Dysphagia management",short:"Dysphagia",products:["thickenup"]}
];
const PROD={
  "boost-opt":{name:"BOOST Optimum",pf:"active",job:"Maintain muscle strength and daily nutrition as I age, so I stay independent.",comps:["Ensure Gold","Anlene Gold","Sure Prevent Gold","Värna Complete"],bad:39,ev4:41,delta:+6,status:"attention",trend:[24,26,25,28,27,30,29,31,33,32,36,39],chatScope:84,price:"VND 925,000 · 850 g",strategy:"Defend pharmacy share; own the muscle-health claim for 50+.",target:"Pharmacy value share 31% by Q2 2027"},
  "bgc":{name:"BOOST Glucose Control",pf:"active",job:"Keep my blood sugar steady without giving up the foods I enjoy.",comps:["Glucerna","Sure Diecerna","Nutifood Diabet Care","Gluvita"],bad:32,ev4:22,delta:-1,status:"look",trend:[30,31,33,32,34,33,35,34,33,33,32,32],chatScope:46,price:"VND 780,000 · 850 g",strategy:"Grow through endocrinologist recommendation.",target:"Hospital pharmacy listing in 40 sites"},
  "peptamen":{name:"Peptamen",pf:"medical",job:"Tolerate feeding well during recovery so I can get home sooner.",comps:["Nutrison Peptisorb","Vital 1.5","Pediasure Peptide","Survimed OPD"],bad:58,ev4:6,delta:+21,status:"attention",trend:[30,32,31,35,38,37,41,44,47,50,54,58],chatScope:31,price:"Tender priced",strategy:"Win ICU tenders on tolerance evidence.",target:"12 hospital tenders in 2027"},
  "compleat":{name:"Compleat",pf:"medical",job:"Get real-food nutrition through a tube without extra preparation.",comps:["Nutrison Multi Fibre","Jevity","Fresubin Original"],bad:50,ev4:3,delta:+12,status:"look",trend:[34,33,36,35,38,37,40,42,41,45,48,50],chatScope:18,price:"Tender priced",strategy:"Lead home enteral feeding.",target:"Home-care partners in 3 cities"},
  "thickenup":{name:"ThickenUp Clear",pf:"dysphagia",job:"Drink safely and enjoy what I drink while living with swallowing difficulty.",comps:["Resource Thicken Up","Nutilis Clear","Thick-It"],bad:50,ev4:10,delta:+8,status:"look",trend:[36,38,37,40,41,39,42,44,43,46,48,50],chatScope:27,price:"VND 610,000 · 125 g",strategy:"Set the standard of care with speech therapists.",target:"Training in 25 rehab centres"}
};
const MEAN={bad:"Bad for us",good:"Good for us",mixed:"Mixed",unsure:"Unsure, keep watching"};
const SHORT={bad:"Bad",good:"Good",mixed:"Mixed",unsure:"Unsure"};

const W45=[
 {id:"e1",kind:"Promotion",actor:"Ensure Gold",org:"Abbott",src:"Store listing",date:"Sun 8 Nov",d:8,group:"competitors",title:"Ensure Gold starts buy 2 get 1 in the pharmacy chain",products:["boost-opt"],ai:"bad",
  cap:{before:{d:"1 Nov",l:["850 g tin at single list price","No promotion badge"]},after:{d:"8 Nov",l:["850 g tin: buy 2 get 1","Badge: valid to 30 Nov"]}},
  srcLine:"Ensure Gold official e-store",check:"Undercuts our priority-channel offer by about 30%. First promotion event from Ensure Gold in 12 weeks, and unusual for them: a multi-buy this deep has not been seen in 18 months.",ctx:["Direct rivals"],an:{impact:"High",urgency:"High",team:"Sales",step:"Brief pharmacy key accounts this week"},means:"Undercuts our pharmacy offer by about 30%."},
 {id:"e2",kind:"Launch",actor:"Sure Prevent Gold",org:"Vinamilk",src:"Store listing",date:"Sat 7 Nov",d:7,group:"competitors",title:"Sure Prevent Gold opens a flagship store on TikTok Shop",products:["boost-opt"],ai:"bad",
  cap:{detail:["New verified store: Sure Prevent Gold Official","12 listings, live shopping every Friday at 20:00"]},srcLine:"TikTok Shop",check:"Opens a channel where we have no official store. Their second channel move in a month.",ctx:["Direct rivals"],an:{impact:"Medium",urgency:"Medium",team:"Sales",step:"Size TikTok Shop for adult nutrition"},means:"Takes a channel where we are absent."},
 {id:"e3",kind:"Policy",actor:"Vietnam Food Administration",org:"",src:"Government site",date:"Fri 6 Nov",d:6,group:"environment",title:"Draft rule on nutrition-claim advertising opens for consultation",products:["boost-opt","bgc","peptamen"],ai:"good",
  cap:{detail:["Draft circular published for 60-day consultation","Claims of effect within a stated time need clinical substantiation"]},srcLine:"Vietnam Food Administration news feed",check:"Restricts rival claims such as ‘results in 4 weeks’. Our claims are already substantiated.",ctx:["Policy and regulation"],an:{impact:"Medium",urgency:"Low",team:"Management",step:"Legal to brief Marketing"},means:"Restricts rival claims more than ours."},
 {id:"e4",kind:"Campaign",actor:"Anlene Gold",org:"Fonterra",src:"Social post",date:"Fri 6 Nov",d:6,group:"competitors",title:"Anlene Gold sponsors a national walking challenge",products:["boost-opt"],ai:"unsure",
  cap:{detail:["Facebook post, 1.2k shares in 24 hours","10,000 steps a day for 30 days, prizes from Anlene Gold"]},srcLine:"Anlene Vietnam Facebook page",check:"Consistent with their bone-health positioning. Reach is still unclear.",ctx:["Direct rivals"],an:{impact:"Low",urgency:"Low",team:"Marketing",step:"Track reach for two weeks"},means:"Raises their share of voice."},
 {id:"e5",kind:"Supply",actor:"Our whey protein supplier",org:"",src:"Supplier notice",date:"Thu 5 Nov",d:5,group:"supply",title:"Supplier notifies a 6% price rise from next quarter",products:[],ai:"bad",
  cap:{detail:["Whey protein concentrate 80%: +6% from 1 Jan 2027","Reason given: dairy commodity prices"]},srcLine:"Supplier notices inbox",check:"Applies to every powder in the portfolio. Not yet mapped to a product.",ctx:["Supply chain"],an:{impact:"Medium",urgency:"Medium",team:"Finance",step:"Seek a second quote"},means:"Raises our cost of goods."},
 {id:"e6",kind:"Launch",actor:"Ensure Gold",org:"Abbott",src:"Store listing",date:"Thu 5 Nov",d:5,group:"competitors",title:"Ensure Gold adds a 1.7 kg family tin on Lazada",products:["boost-opt"],ai:"bad",
  cap:{before:{d:"29 Oct",l:["400 g and 850 g tins"]},after:{d:"5 Nov",l:["New 1.7 kg tin at 12% lower price per gram"]}},srcLine:"Ensure Gold LazMall store",check:"A larger pack lowers their price per gram below ours.",ctx:["Direct rivals"],an:{impact:"Medium",urgency:"Medium",team:"Finance",step:"Model a value pack"},means:"Lowers their price per gram."},
 {id:"e7",kind:"Launch",actor:"Sure Prevent Gold",org:"Vinamilk",src:"Press release",date:"Wed 4 Nov",d:4,group:"competitors",title:"Sure Prevent Gold announces a high-protein variant",products:["boost-opt"],ai:"bad",
  cap:{detail:["Sure Prevent Gold Protein+: 18 g protein per serving","Launch in pharmacies from December"]},srcLine:"Vinamilk press room",check:"Moves directly onto our protein claim.",ctx:["Direct rivals"],an:{impact:"High",urgency:"Medium",team:"Marketing",step:"Compare formulations"},means:"Moves onto our protein claim."},
 {id:"e8",kind:"Market",actor:"WHO Vietnam",org:"",src:"Report",date:"Wed 4 Nov",d:4,group:"environment",title:"WHO Vietnam publishes guidance on safe swallowing care",products:["thickenup"],ai:"good",
  cap:{detail:["Guidance for care homes on texture-modified drinks","References the IDDSI framework"]},srcLine:"WHO Vietnam publications",check:"Supports the standard our product is built around.",ctx:["Policy and regulation"],an:{impact:"Medium",urgency:"Low",team:"Marketing",step:"Share with speech therapists"},means:"Supports our standard of care."},
 {id:"e9",kind:"Price",actor:"Ensure Gold",org:"Abbott",src:"Store listing",date:"Tue 3 Nov",d:3,group:"competitors",title:"Ensure Gold runs a Shopee flash sale at 15% off",products:["boost-opt"],ai:"mixed",
  cap:{before:{d:"2 Nov",l:["400 g tin at list price"]},after:{d:"3 Nov",l:["400 g tin 15% off, 24 hours only"]}},srcLine:"Ensure Gold Shopee Mall",check:"Short and online only. Typical for 11.11 season.",ctx:["Direct rivals"],an:{impact:"Low",urgency:"Low",team:"Sales",step:"No action"},means:"Short, seasonal price move."},
 {id:"e10",kind:"Launch",actor:"Glucerna",org:"Abbott",src:"Social post",date:"Tue 3 Nov",d:3,group:"competitors",title:"Glucerna teases a new vanilla flavour",products:["bgc"],ai:"unsure",
  cap:{detail:["Instagram teaser: ‘Something new, coming soon’"]},srcLine:"Glucerna Vietnam Instagram",check:"No launch date yet.",ctx:["Direct rivals"],an:{impact:"Low",urgency:"Low",team:"Marketing",step:"Watch for listing"},means:"Possible new flavour."},
 {id:"e11",kind:"Channels",actor:"VnExpress",org:"",src:"News",date:"Mon 2 Nov",d:2,group:"environment",title:"Pharmacy chains ask suppliers for higher listing fees",products:[],ai:"bad",
  cap:{detail:["Long Châu and Pharmacity to review listing terms in Q1"]},srcLine:"VnExpress Business",check:"Three pharmacy chains control most of our shelf space.",ctx:["Buyers and channels"],an:{impact:"Medium",urgency:"Medium",team:"Sales",step:"Raise at the next joint business review"},means:"Raises the cost of shelf space."}
].map(e=>Object.assign(e,{status:"review",week:45}));

const C=[
 {id:"c1",kind:"Campaign",actor:"Ensure Gold",src:"Social post",date:"Sat 7 Nov",d:7,week:45,group:"competitors",title:"Ensure Gold re-shares its 2025 Tet gift-box advert",products:["boost-opt"],meaning:"unsure",cap:{detail:["Advert re-posted with new caption"]},srcLine:"Ensure Gold Facebook page",check:"Early Tet signal; no new offer yet.",ctx:["Direct rivals"],an:{impact:"Low",urgency:"Low",team:"Marketing",step:"Watch"},means:"Early Tet signal.",inPulse:false},
 {id:"c2",kind:"Campaign",actor:"Värna Complete",src:"Ad library",date:"Thu 5 Nov",d:5,week:45,group:"competitors",title:"Värna Complete starts a doctor-led campaign",products:["boost-opt"],meaning:"unsure",cap:{detail:["14 new Facebook ads featuring a geriatrician","TV spot on VTV3"]},srcLine:"Meta ad library",check:"Raises share of voice; authority-led like ours.",ctx:["Substitutes"],an:{impact:"Medium",urgency:"Low",team:"Marketing",step:"Track reach for two weeks"},means:"Raises their share of voice."},
 {id:"c3",kind:"Price",actor:"Ensure Gold",src:"Store listing",date:"Wed 4 Nov",d:4,week:45,group:"competitors",title:"Ensure Gold cuts its 400 g price by 6%",products:["boost-opt"],meaning:"bad",cap:{before:{d:"28 Oct",l:["400 g at VND 465,000"]},after:{d:"4 Nov",l:["400 g at VND 437,000"]}},srcLine:"Ensure Gold official e-store",check:"Widens the price gap at entry size.",ctx:["Direct rivals"],an:{impact:"Medium",urgency:"Medium",team:"Finance",step:"Track whether the cut holds"},means:"Widens the price gap."},
 {id:"c4",kind:"Launch",actor:"Sure Prevent Gold",src:"Store listing",date:"Tue 3 Nov",d:3,week:45,group:"competitors",title:"Sure Prevent Gold lists a 110 ml ready-to-drink pack",products:["boost-opt"],meaning:"bad",cap:{before:{d:"27 Oct",l:["Powder only"]},after:{d:"3 Nov",l:["110 ml ready-to-drink, 4-pack"]}},srcLine:"Sure Prevent Gold Shopee store",check:"Opens a convenience format we do not sell in Vietnam.",ctx:["Direct rivals"],an:{impact:"High",urgency:"Medium",team:"Marketing",step:"Size the format by month end",decision:"Investigate"},means:"Opens a format we do not sell."},
 {id:"c5",kind:"Claim",actor:"Anlene Gold",src:"Social post",date:"Mon 2 Nov",d:2,week:45,group:"competitors",title:"Anlene Gold claims muscle and bone support in 4 weeks",products:["boost-opt"],meaning:"unsure",cap:{detail:["‘Stronger muscles and bones in 4 weeks’ on new pack shot"]},srcLine:"Anlene Vietnam Facebook page",check:"Moves into our territory. Substantiation unclear.",ctx:["Direct rivals"],an:{impact:"Medium",urgency:"Medium",team:"Marketing",step:"Check substantiation"},means:"Moves into our territory."},
 {id:"c6",kind:"Policy",actor:"Ministry of Health",src:"Government site",date:"Mon 2 Nov",d:2,week:45,group:"environment",title:"Ministry of Health proposes higher fines for misleading food advertising",products:["boost-opt","bgc"],meaning:"good",cap:{detail:["Fines up to VND 200 million proposed"]},srcLine:"Ministry of Health portal",check:"Raises the cost of unsupported claims.",ctx:["Policy and regulation"],an:{impact:"Medium",urgency:"Low",team:"Management",step:"Legal to brief Marketing"},means:"Restricts rival claims more."},
 {id:"c7",kind:"Promotion",actor:"Sure Prevent Gold",src:"Store listing",date:"Fri 30 Oct",d:-1,week:44,group:"competitors",title:"Sure Prevent Gold gift with purchase in Long Châu",products:["boost-opt"],meaning:"bad",cap:{detail:["Free shaker with every 900 g tin"]},srcLine:"Long Châu online",check:"Normal for them once a quarter.",ctx:["Direct rivals"],an:{impact:"Low",urgency:"Medium",team:"Sales",step:"Watch"},means:"Usual quarterly promotion."},
 {id:"c8",kind:"Price",actor:"Anlene Gold",src:"Store listing",date:"Wed 28 Oct",d:-3,week:44,group:"competitors",title:"Anlene Gold raises list price by 3%",products:["boost-opt"],meaning:"good",cap:{before:{d:"21 Oct",l:["800 g at VND 520,000"]},after:{d:"28 Oct",l:["800 g at VND 536,000"]}},srcLine:"Anlene LazMall store",check:"Narrows the gap to us.",ctx:["Direct rivals"],an:{impact:"Low",urgency:"Low",team:"Finance",step:"No action"},means:"Narrows the gap to us."},
 {id:"c9",kind:"Campaign",actor:"Ensure Gold",src:"Ad library",date:"Thu 22 Oct",d:-9,week:43,group:"competitors",title:"Ensure Gold starts a doctor-recommended TV campaign",products:["boost-opt"],meaning:"bad",cap:{detail:["30-second spot on VTV1 and HTV7"]},srcLine:"Meta ad library",check:"Their usual Q4 burst, larger than last year.",ctx:["Direct rivals"],an:{impact:"Medium",urgency:"Medium",team:"Marketing",step:"Compare share of voice"},means:"Bigger Q4 burst than last year."},
 {id:"c10",kind:"Supply",actor:"Global Dairy Trade",src:"Report",date:"Tue 20 Oct",d:-11,week:43,group:"supply",title:"Whole milk powder index rises 4.2%",products:["boost-opt","bgc"],meaning:"mixed",cap:{detail:["GDT auction 20 Oct: +4.2%"]},srcLine:"GDT auction results",check:"Hits every powder maker, including rivals.",ctx:["Supply chain"],an:{impact:"Medium",urgency:"Low",team:"Finance",step:"Update cost forecast"},means:"Raises costs for everyone."},
 {id:"c11",kind:"Campaign",actor:"Anlene Gold",src:"Social post",date:"Thu 15 Oct",d:-16,week:42,group:"competitors",title:"Anlene Gold opens pop-up stands in Aeon Mall",products:["boost-opt"],meaning:"unsure",cap:{detail:["Bone density tests at 6 malls"]},srcLine:"Anlene Vietnam Facebook page",check:"Sampling at scale; first time in malls.",ctx:["Direct rivals"],an:{impact:"Low",urgency:"Low",team:"Marketing",step:"Watch"},means:"First mall sampling."},
 {id:"c12",kind:"Policy",actor:"Ministry of Health",src:"Government site",date:"Mon 5 Oct",d:-26,week:41,group:"environment",title:"Draft decree on health supplement labelling",products:["boost-opt","bgc"],meaning:"good",cap:{detail:["Front-of-pack protein and sugar disclosure"]},srcLine:"Ministry of Health portal",check:"Rewards our formulation transparency.",ctx:["Policy and regulation"],an:{impact:"Medium",urgency:"Low",team:"Management",step:"Prepare comments"},means:"Rewards transparency."}
].map(e=>Object.assign(e,{status:"confirmed",chosen:[...e.products],inPulse:e.inPulse!==false,decided:"earlier"}));

const N=[
 {id:"n1",kind:"Social",actor:"Ensure Gold",src:"Social post",date:"Fri 6 Nov",d:6,week:45,group:"competitors",title:"Ensure Gold posts a World Smile Day greeting",products:[],cap:{detail:["Brand greeting, no offer"]},srcLine:"Ensure Gold Facebook page",check:"No commercial content.",ctx:[],an:{impact:"Low",urgency:"Low",team:"Marketing",step:"None"},means:""},
 {id:"n2",kind:"Social",actor:"Anlene Gold",src:"Social post",date:"Sat 31 Oct",d:0,week:44,group:"competitors",title:"Anlene Gold shares a recipe video",products:[],cap:{detail:["Recipe content"]},srcLine:"Anlene Vietnam Facebook page",check:"Routine content.",ctx:[],an:{impact:"Low",urgency:"Low",team:"Marketing",step:"None"},means:""}
].map(e=>Object.assign(e,{status:"noise"}));

const EV={};[...W45,...C,...N].forEach(e=>{e.chosen=e.chosen||[...e.products];e.meaning=e.meaning||e.ai;e.note=e.note||"";EV[e.id]=e;});
const PULSE_POS={c4:[2,1],c3:[1,1],c5:[1,1],c6:[1,0],c2:[1,0],c7:[0,1],c8:[0,0],c9:[1,1],c10:[1,0],c11:[0,0],c12:[1,0]};
const DEC={c4:"Investigate",c3:"Watch",c5:"Watch",c6:"Watch",c2:"Watch",c7:"Watch",c8:"Ignore",c9:"Watch",c10:"Watch",c11:"Ignore",c12:"Act"};
const LV={Low:0,Medium:1,High:2}, LVN=["Low","Medium","High"];

/* monitoring tree */
const MON0={
  env:{name:"External Factors",kind:"group",shared:true,open:false,know:"Regulators and media that shape what every product can say and charge.",sources:[
    {id:"s-vfa",name:"Food Administration news",type:"RSS feed",status:"current",ev:9},{id:"s-moh",name:"Ministry of Health portal",type:"Web crawl",status:"current",ev:5},
    {id:"s-vnx",name:"VnExpress Business",type:"RSS feed",status:"current",ev:12},{id:"s-gso",name:"General Statistics Office",type:"Web crawl",status:"delayed",ev:1,since:"late by 9 days"},{id:"s-who",name:"WHO Vietnam publications",type:"Web crawl",status:"current",ev:2}]},
  sup:{name:"Supply Chain",kind:"group",shared:true,open:false,know:"Our input costs and the suppliers behind them.",sources:[
    {id:"s-whey",name:"Whey supplier notices",type:"Email feed",status:"current",ev:3},{id:"s-gdt",name:"Global Dairy Trade results",type:"Web crawl",status:"delayed",ev:2,since:"late by 5 days"},
    {id:"s-frt",name:"Asia freight index",type:"Web crawl",status:"current",ev:1},{id:"s-pkg",name:"Packaging supplier portal",type:"Web crawl",status:"current",ev:0}]},
  comp:{name:"Competitors",kind:"group",open:true,know:"Rival products that compete with BOOST Optimum.",items:[
    {id:"k-ens",name:"Ensure Gold",org:"Abbott",how:"Direct",idx:104,open:true,normal:"One pharmacy promotion per quarter, usually a gift with purchase. A multi-buy this deep has not been seen in 18 months.",
      sources:[{id:"s1",name:"Official e-store",type:"Store listing",status:"current",ev:6,cad:"Daily"},{id:"s2",name:"Facebook page",type:"Social post",status:"current",ev:4,cad:"Daily"},{id:"s3",name:"Ad library",type:"Ad library",status:"paused",ev:0,cad:"Weekly",since:"paused since 1 Nov"},{id:"s4",name:"Shopee Mall store",type:"Store listing",status:"current",ev:3,cad:"Daily"},{id:"s5",name:"Abbott press room",type:"Press release",status:"current",ev:1,cad:"Weekly"}]},
    {id:"k-anl",name:"Anlene Gold",org:"Fonterra",how:"Direct",idx:58,open:false,normal:"Bone-health first; frequent social campaigns, rare price moves.",
      sources:[{id:"s6",name:"LazMall store",type:"Store listing",status:"current",ev:2},{id:"s7",name:"Facebook page",type:"Social post",status:"current",ev:5},{id:"s8",name:"YouTube channel",type:"Social post",status:"current",ev:1},{id:"s9",name:"Fonterra newsroom",type:"Press release",status:"current",ev:0},{id:"s10",name:"Ad library",type:"Ad library",status:"current",ev:2}]},
    {id:"k-spg",name:"Sure Prevent Gold",org:"Vinamilk",how:"Direct",idx:82,open:false,normal:"Price-led; a gift with purchase each quarter in Long Châu.",
      sources:[{id:"s11",name:"TikTok Shop",type:"Store listing",status:"current",ev:1},{id:"s12",name:"Shopee store",type:"Store listing",status:"current",ev:3},{id:"s13",name:"Facebook page",type:"Social post",status:"current",ev:2},{id:"s14",name:"Vinamilk press room",type:"Press release",status:"current",ev:2},{id:"s15",name:"Website",type:"Web crawl",status:"current",ev:0}]},
    {id:"k-var",name:"Värna Complete",org:"Nutricia",how:"Substitute",idx:96,open:false,normal:"Authority-led advertising with doctors; few promotions.",
      sources:[{id:"s16",name:"Facebook page",type:"Social post",status:"current",ev:1},{id:"s17",name:"Ad library",type:"Ad library",status:"current",ev:2},{id:"s18",name:"Website",type:"Web crawl",status:"current",ev:0},{id:"s19",name:"Shopee store",type:"Store listing",status:"current",ev:1},{id:"s20",name:"Nutricia news",type:"Press release",status:"current",ev:0}]}
  ]}
};

/* one tree per product: portfolio groups are shared, competitors belong to the product */
const ORG={"Glucerna":"Abbott","Sure Diecerna":"Vinamilk","Nutifood Diabet Care":"Nutifood","Gluvita":"Vitadairy","Nutrison Peptisorb":"Nutricia","Vital 1.5":"Abbott","Pediasure Peptide":"Abbott","Survimed OPD":"Fresenius Kabi","Nutrison Multi Fibre":"Nutricia","Jevity":"Abbott","Fresubin Original":"Fresenius Kabi","Resource Thicken Up":"Nestlé Health Science","Nutilis Clear":"Nutricia","Thick-It":"Kent Precision Foods"};
const PFG={active:{env:MON0.env,sup:MON0.sup},
  medical:{env:{name:"External Factors",kind:"group",shared:true,open:false,know:"Hospital procurement, clinical guidance and regulators that shape tube and sip feeds.",sources:[
    {id:"m-ten",name:"Hospital tender portal",type:"Web crawl",status:"current",ev:6},{id:"m-moh",name:"Ministry of Health portal",type:"Web crawl",status:"current",ev:3},{id:"m-vns",name:"Vietnam Society of Clinical Nutrition",type:"Web crawl",status:"delayed",ev:1,since:"late by 12 days"},{id:"m-vnx",name:"VnExpress Health",type:"RSS feed",status:"current",ev:4}]},
    sup:{name:"Supply Chain",kind:"group",shared:true,open:false,know:"Pouch, tubing and protein suppliers for enteral feeds.",sources:[{id:"m-pch",name:"Enteral pouch supplier notices",type:"Email feed",status:"current",ev:2},{id:"m-gdt",name:"Global Dairy Trade results",type:"Web crawl",status:"current",ev:2},{id:"m-frt",name:"Cold-chain freight index",type:"Web crawl",status:"current",ev:0}]}},
  dysphagia:{env:{name:"External Factors",kind:"group",shared:true,open:false,know:"Care homes, speech therapists and safety guidance.",sources:[
    {id:"d-who",name:"WHO Vietnam publications",type:"Web crawl",status:"current",ev:2},{id:"d-iddsi",name:"IDDSI news",type:"RSS feed",status:"current",ev:1},{id:"d-care",name:"Care-home association bulletin",type:"Web crawl",status:"paused",ev:0,since:"paused since 20 Oct"}]},
    sup:{name:"Supply Chain",kind:"group",shared:true,open:false,know:"Xanthan gum and sachet suppliers.",sources:[{id:"d-xg",name:"Xanthan gum supplier notices",type:"Email feed",status:"current",ev:1},{id:"d-sch",name:"Sachet packaging portal",type:"Web crawl",status:"current",ev:0}]}}};
const KTYPES=[["Official store","Store listing"],["Facebook page","Social post"],["Press room","Press release"],["Ad library","Ad library"]];
const TREES={};
Object.keys(PROD).forEach((pid,pi)=>{const p=PROD[pid],g=PFG[p.pf];
  if(pid==="boost-opt"){TREES[pid]={env:g.env,sup:g.sup,comp:MON0.comp};return;}
  TREES[pid]={env:g.env,sup:g.sup,comp:{name:"Competitors",kind:"group",open:true,know:"Rival products that compete with "+p.name+".",items:p.comps.map((c,ci)=>({id:"k-"+pid+"-"+ci,name:c,org:ORG[c]||"",how:ci===p.comps.length-1?"Substitute":"Direct",idx:[96,88,104,79][ci%4],open:ci===0,
    normal:ci===0?"The most active rival: one price or tender move most months, mostly through hospital and pharmacy channels.":"Quiet most months; moves cluster around tenders and Tet.",
    sources:KTYPES.slice(0,3+((ci+pi)%2)).map(([n,t],si)=>({id:"s-"+pid+ci+si,name:n,type:t,status:(ci===1&&si===2&&pi%2===0)?"paused":"current",since:(ci===1&&si===2&&pi%2===0)?"paused since 3 Nov":undefined,ev:(5-si+ci)%5,cad:si<2?"Daily":"Weekly"}))}))}};
});
let MON=TREES["boost-opt"];
const monPid=()=>{if(S.scope.level==="prod")return S.scope.id;const ok=S.scope.level==="pf"?PF.find(p=>p.id===S.scope.id).products:Object.keys(PROD);return ok.includes(S.mon.pid)?S.mon.pid:ok[0];};
const monProd=()=>PROD[monPid()];
function allSources(){monExt();const a=[...MON.env.sources,...MON.sup.sources,...MON.own.sources];MON.comp.items.forEach(k=>a.push(...k.sources,...Object.values(k.sc).flat(),...Object.values(k.ef).flat()));return a;}
function gapCount(list){return list.filter(s=>s.status==="paused"||s.status==="delayed").length;}

/* ================= people and roles ================= */
const ROLES={
  owner:{name:"Kay",ini:"K",role:"Radar owner",team:"All",desc:"Reviews events, sets up sources, approves the weekly analysis",can:["review","sources","approve"]},
  admin:{name:"Minh Tran",ini:"MT",role:"Administrator",team:"All",desc:"Sets up sources and keeps the map current",can:["sources"]},
  marketing:{name:"Huy Le",ini:"HL",role:"Marketing team",team:"Marketing",desc:"Reads the analysis and acts on Marketing items",can:[]},
  mgmt:{name:"Lan Pham",ini:"LP",role:"Management",team:"Management",desc:"Reads briefings and the weekly analysis",can:[]}
};
const me=()=>ROLES[S.role];const can=x=>me().can.includes(x);
/* ================= state ================= */
const S={home:{q:"",status:"all",sort:"urgent",view:"cards"},role:"owner",route:"cockpit",scope:{level:"all",id:null},ev:{status:"review",group:"all",q:"",sel:null},chat:false,chatLog:[],week:45,sent:{44:"Fri 6 Nov",43:"Fri 30 Oct",42:"Fri 23 Oct",41:"Fri 16 Oct"},team:"All",hl:null,
  mon:{view:"canvas",gaps:false,z:.9,x:20,y:10},brief:{mode:"monthly",pf:"medical"},story:0};

const scopeName=()=>S.scope.level==="all"?"All portfolios":S.scope.level==="pf"?PF.find(p=>p.id===S.scope.id).name:PROD[S.scope.id].name;
const scopeProducts=()=>S.scope.level==="all"?Object.keys(PROD):S.scope.level==="pf"?PF.find(p=>p.id===S.scope.id).products:[S.scope.id];
const inScope=e=>S.scope.level==="all"||e.chosen.length===0||e.chosen.some(p=>scopeProducts().includes(p));
const prodsOf=(l,id)=>l==="all"?Object.keys(PROD):l==="pf"?PF.find(p=>p.id===id).products:[id];
const waitIn=(l,id)=>waiting().filter(e=>l==="all"||e.chosen.length===0||e.chosen.some(p=>prodsOf(l,id).includes(p))).length;
const waiting=()=>Object.values(EV).filter(e=>e.status==="review");
const waitingFor=pid=>waiting().filter(e=>e.chosen.includes(pid));

/* ================= small helpers ================= */
let toastT;
function toast(msg,undo){const t=$("#toast");t.innerHTML=ic("check")+esc(msg)+(undo?`<button class="t-undo" data-act="undo">Undo</button>`:"");t.classList.add("show");clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove("show"),undo?6000:3200);}
const WEEKS=[34,35,36,37,38,39,40,41,42,43,44,45];
function weekLabel(w){const end=new Date(2026,10,8-(45-w)*7),st=new Date(end);st.setDate(end.getDate()-6);
  const f=d=>d.getDate()+" "+["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][d.getMonth()];return `Week ${w} (${f(st)}–${f(end)})`;}
function spark(vals,w=260,h=44,color="#7E1352",fill=true,fmt=v=>v+"%",what=""){
  const mn=Math.min(...vals)-3,mx=Math.max(...vals)+3,step=w/(vals.length-1);
  const pts=vals.map((v,i)=>[i*step,h-(v-mn)/(mx-mn)*h]);
  const d=pts.map((p,i)=>(i?"L":"M")+p[0].toFixed(1)+" "+p[1].toFixed(1)).join(" ");
  const last=pts[pts.length-1];const lbl=WEEKS.slice(-vals.length);
  const hov=pts.map((p,i)=>{const x0=Math.max(0,p[0]-step/2),x1=Math.min(w,p[0]+step/2);
    return `<g class="hp" data-tip="${weekLabel(lbl[i])}" data-val="${what?what+": ":""}${fmt(vals[i])}"><rect x="${x0}" y="-6" width="${x1-x0}" height="${h+12}" fill="transparent"/><line x1="${p[0]}" x2="${p[0]}" y1="0" y2="${h}" stroke="${color}" stroke-width="1" vector-effect="non-scaling-stroke" stroke-dasharray="2 2"/></g>`;}).join("");
  return `<svg class="chart-h" viewBox="0 -6 ${w} ${h+12}" preserveAspectRatio="none" style="width:100%;height:${h}px;overflow:visible" aria-hidden="true">
   ${fill?`<path d="${d} L${w} ${h} L0 ${h}Z" fill="${color}" opacity=".07"/>`:""}<path d="${d}" fill="none" stroke="${color}" stroke-width="1.6" vector-effect="non-scaling-stroke"/>
   <circle cx="${last[0]}" cy="${last[1]}" r="3" fill="${color}"/>${hov}</svg>`;
}
function bars(vals,h=30,color="#DAD5D0",hi="#017CBA",fmt=v=>v,what=""){
  const w=100/vals.length,mx=Math.max(...vals);const lbl=WEEKS.slice(-vals.length);
  return `<svg class="chart-h" viewBox="0 0 100 ${h}" preserveAspectRatio="none" aria-hidden="true">${vals.map((v,i)=>`<g class="hb" data-tip="${weekLabel(lbl[i])}" data-val="${what?what+": ":""}${fmt(v)}"><rect x="${i*w}" y="0" width="${w}" height="${h}" fill="transparent"/><rect class="bar" x="${i*w+w*.18}" y="${h-v/mx*h}" width="${w*.64}" height="${v/mx*h}" rx=".8" fill="${i===vals.length-1?hi:color}"/></g>`).join("")}</svg>`;
}
const tag=m=>`<span class="tag ${m}">${MEAN[m]}</span>`;
const tagShort=m=>`<span class="tag ${m}">${m==="unsure"?"Watching":SHORT[m]}</span>`;
/* ================= shell ================= */
const ROUTES={cockpit:"Dashboard",events:"Events Review",monitoring:"Radar Setup",pulse:"Weekly Analysis",monthly:"Monthly Analysis",quarterly:"Quarterly Analysis",briefings:"Monthly Analysis",strategy:"Decision",decision:"Decision",results:"Results",lessons:"Lessons Learned",integration:"Integration",areview:"Report Setup",team:"Team & Access",settings:"Settings",profile:"Profile"};
const HASH={cockpit:"dashboard",events:"events-review",monitoring:"radar-setup",pulse:"weekly-analysis",monthly:"monthly-analysis",quarterly:"quarterly-analysis",briefings:"monthly-analysis",strategy:"decision",decision:"decision",results:"results",lessons:"lessons-learned",integration:"integration",areview:"report-setup",team:"team-access",settings:"workspace-settings",profile:"profile"};
const UNHASH=Object.assign({"monitoring-review":"monitoring","analysis-review":"areview","analysis-integration":"areview",cockpit:"cockpit",home:"cockpit",events:"events",monitoring:"monitoring","weekly-pulse":"pulse","weekly-summary":"pulse",briefings:"monthly","strategy-lab":"decision"},Object.fromEntries(Object.entries(HASH).map(([k,v])=>[v,k])));

function renderNav(){
  $("#demoRole").innerHTML=`<button class="demo-role" data-act="rolemenu" aria-haspopup="menu" aria-expanded="false" title="Demo only: see the radar as another role"><span class="av av-${S.role}">${me().ini}</span><span class="grow"><small>Demo · viewing as</small><b>${me().name}, ${me().role}</b></span>${ic("switch","dr-ic")}</button>`;
  const n=waiting().filter(inScope).length;
  const a=(r,icon,extra="")=>`<a href="#${HASH[r]}" data-act="nav" data-r="${r}" ${S.route===r?'aria-current="page"':""}>${ic(icon)}<span>${ROUTES[r]}</span>${extra}</a>`;
  const soon=`<span class="soon">Soon</span>`;
  const G=[["event","Event Hub",[["cockpit","cockpit"],["events","events",n?`<span class=\"count num\" aria-label=\"${n} waiting\">${n}</span>`:""],["monitoring","monitoring"],["integration","plug"]]],
    ["analysis","Analysis Hub",[["pulse","pulse"],["monthly","cal"],["quarterly","quarter"],["areview","shield"]]],
    ["strategy","Strategy Hub",[["decision","branch",soon],["results","results",soon],["lessons","book",soon]]],
    ["workspace","Workspace",[["team","team"],["settings","gear"]]]];
  $("#nav").innerHTML=G.map(([id,label,items],gi)=>{const closed=!!NAVC[id],hasCur=items.some(([r])=>r===S.route);
    return `<div class="nav-sec ${closed?"closed":""}"><button class="nav-group nav-tog ${gi===0?"first":""} ${closed&&hasCur?"has-cur":""}" data-act="navgrp" data-g="${id}" aria-expanded="${!closed}" aria-controls="ng-${id}"><span>${label}</span>${ic("chevd","ng-cv")}</button><div class="nav-items" id="ng-${id}" ${closed?"hidden":""}>${items.map(([r,i,x])=>a(r,i,x||"")).join("")}</div></div>`;}).join("");
}
function renderTop(){
  const sc=S.scope;const path=[];let cur="All portfolios";
  if(sc.level!=="all"){const pf=sc.level==="pf"?sc.id:PROD[sc.id].pf;const p=PF.find(x=>x.id===pf);path.push("All portfolios");
    if(sc.level==="pf")cur=p.name;else{path.push(p.short);cur=PROD[sc.id].name;}}
  const kind={all:"Everything watched",pf:"Portfolio",prod:"Product"}[sc.level];
  const scopeBtn=`<button class="scope" data-act="switch" aria-haspopup="menu" aria-expanded="false" title="Change the portfolio or product you are viewing">
    <span class="scope-ic">${ic("layers")}</span><span class="scope-t"><small>${path.length?path.join(" › "):kind}</small><b>${cur}</b></span>${ic("chevd","scope-cv")}</button>`;
  let right="";
  const Q={cockpit:S.scope.level==="prod"?["What it means for N&H"]:["What changed"],events:["What changed","What it means for N&H"],monitoring:["What changed"],pulse:["What to watch or do"],briefings:["What to watch or do"]}[S.route];
  right+=`<button class="notif" data-act="notif" aria-haspopup="menu" aria-label="Notifications, ${NOTIF.filter(x=>!x.read).length} unread">${ic("bell")}${NOTIF.some(x=>!x.read)?`<span class="nb-dot num">${NOTIF.filter(x=>!x.read).length}</span>`:""}</button>`;
  right+=`<button class="acct" data-act="nav" data-r="profile" ${S.route==="profile"?'aria-current="page"':""} aria-label="Your profile: ${me().name}, ${me().role}"><span class="av av-${S.role}">${me().ini}</span><span class="acct-t"><b>${me().name}</b><small>${me().role}</small></span></button>`;
  $("#top").innerHTML=`<h1>${ROUTES[S.route]}</h1>${["strategy","decision","results","lessons","integration","team","settings","profile"].includes(S.route)?"":`<span class="top-div" aria-hidden="true"></span>${scopeBtn}`}<div class="top-right">${right}</div>`;
}
function weekRange(w){return {46:"9–15 Nov 2026",45:"2–8 Nov 2026",44:"26 Oct–1 Nov",43:"19–25 Oct",42:"12–18 Oct",41:"5–11 Oct"}[w];}
function renderPop(){
  const sc=S.scope,q=(S.popq||"").trim().toLowerCase(),wn=pid=>waitIn("prod",pid);
  const cur=(l,id)=>sc.level===l&&(sc.id||null)===(id||null);
  const pfW=p=>waitIn("pf",p.id);
  const pins=S.pins||[],pinned=(l,id)=>pins.includes(l+":"+id);
  const hl=t=>q?esc(t).replace(new RegExp("("+q.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")","ig"),"<mark>$1</mark>"):esc(t);
  const star=(l,id,nm)=>`<button class="sp-star ${pinned(l,id)?"on":""}" data-act="pop-pin" data-l="${l}" data-id="${id}" aria-pressed="${pinned(l,id)}" aria-label="${pinned(l,id)?"Unpin":"Pin"} ${esc(nm)}" title="${pinned(l,id)?"Unpin":"Pin to top"}">${ic("pin")}</button>`;
  const opt=(l,id,label,sub,k,cls="",tip="")=>`<button role="option" class="sp-opt ${cls}" data-act="scope" data-l="${l}" ${id?`data-id="${id}"`:""} aria-selected="${cur(l,id)}" ${tip?`title="${esc(tip)}"`:""}><span class="grow"><b>${label}</b>${sub?`<small>${sub}</small>`:""}</span>${k?`<span class="sp-k">${k}</span>`:""}${cur(l,id)?ic("check","rc"):""}</button>`;
  const row=(l,id,nm,inner)=>`<div class="sp-row">${inner}${star(l,id,nm)}</div>`;
  const byAttn=(l,w,nm)=>(a,b)=>(pinned(l,b)-pinned(l,a))||(w(b)-w(a))||nm(a).localeCompare(nm(b),undefined,{numeric:true});
  const more=(k,shown,total)=>shown<total?`<button class="sp-more" data-act="pop-more" data-k="${k}">Show ${Math.min(50,total-shown)} more <span>(${shown} of ${total})</span></button>`:"";
  const prodRow=(pid,sub)=>{const p=PROD[pid];return row("prod",pid,p.name,opt("prod",pid,q?hl(p.name):esc(p.name),sub,wn(pid)?wn(pid)+" waiting":"","",p.name));};
  let body="";
  if(q){
    const pfL=PF.filter(p=>p.name.toLowerCase().includes(q)).sort((a,b)=>(pinned("pf",b.id)-pinned("pf",a.id))||(pfW(b)-pfW(a))||a.name.localeCompare(b.name,undefined,{numeric:true}));
    const prL=Object.keys(PROD).filter(pid=>(PROD[pid].name+" "+PROD[pid].comps.join(" ")).toLowerCase().includes(q)).sort(byAttn("prod",wn,pid=>PROD[pid].name));
    const all=S.popAll||{},capPf=all.pf?100:8,capPr=all.prod?100:8;
    const n=pfL.length+prL.length;
    const capNote=(k,len,cap,lbl)=>len>cap?(all[k]?`<p class="sp-note">Showing ${cap} of ${len.toLocaleString()}. Type more to narrow it down.</p>`:`<button class="sp-more" data-act="pop-all" data-k="${k}">Show all ${len.toLocaleString()} ${lbl}</button>`):"";
    body=n?`<div class="sp-res">${pfL.length?`<div class="sp-lbl">Portfolios <span>${pfL.length}</span></div>${pfL.slice(0,capPf).map(p=>row("pf",p.id,p.name,opt("pf",p.id,hl(p.name),p.products.length+" products",pfW(p)?pfW(p)+" waiting":"","",p.name))).join("")}${capNote("pf",pfL.length,capPf,"portfolios")}`:""}
      ${prL.length?`<div class="sp-lbl">Products <span>${prL.length.toLocaleString()}</span></div>${prL.slice(0,capPr).map(pid=>{const p=PROD[pid],pf=PF.find(x=>x.id===p.pf);const viaComp=!p.name.toLowerCase().includes(q);return prodRow(pid,esc(pf.short)+(viaComp?", competitor: "+hl(p.comps.find(c=>c.toLowerCase().includes(q))):""));}).join("")}${capNote("prod",prL.length,capPr,"products")}`:""}</div>`
      :`<div class="sp-empty">No portfolio or product matches “${esc(S.popq)}”. Try a product, competitor or portfolio name.</div>`;
  }else{
    const selPf=S.popPf||(sc.level==="pf"?sc.id:sc.level==="prod"?PROD[sc.id].pf:PF[0].id),P=PF.find(x=>x.id===selPf);
    const lim=S.popLim||{pf:50,prod:50},fq=(S.popPq||"").trim().toLowerCase();
    const pfL=PF.slice().sort((a,b)=>(pinned("pf",b.id)-pinned("pf",a.id))||(pfW(b)-pfW(a))||a.name.localeCompare(b.name,undefined,{numeric:true}));
    const prAll=P.products.slice().sort(byAttn("prod",wn,pid=>PROD[pid].name)),prL=fq?prAll.filter(pid=>(PROD[pid].name+" "+PROD[pid].comps.join(" ")).toLowerCase().includes(fq)):prAll;
    const chip=([l,id])=>`<button class="sp-chip" data-act="scope" data-l="${l}" data-id="${id}">${l==="pf"?esc(PF.find(x=>x.id===id).short):esc(PROD[id].name)}</button>`;
    const pinL=pins.map(k=>k.split(":")).filter(([l,id])=>l==="pf"?PF.find(x=>x.id===id):PROD[id]);
    const rec=(S.recent||[]).filter(r=>!cur(r[0],r[1])&&!pinned(r[0],r[1])).slice(0,3);
    body=`${opt("all",null,"All portfolios","Everything watched",waiting().length+" waiting","sp-all")}
     ${pinL.length?`<div class="sp-rec"><span class="sp-lbl">${ic("pin")}Pinned</span>${pinL.map(chip).join("")}</div>`:""}
     ${rec.length?`<div class="sp-rec"><span class="sp-lbl">${ic("clock")}Recent</span>${rec.map(chip).join("")}</div>`:""}
     <div class="sp-cols"><div class="sp-col" role="listbox" aria-label="Portfolios"><div class="sp-lbl sp-sticky">Portfolios <span>${PF.length}</span></div>${pfL.slice(0,lim.pf).map(p=>row("pf",p.id,p.name,`<button class="sp-pf ${p.id===selPf?"on":""}" data-act="pop-pf" data-v="${p.id}" aria-expanded="${p.id===selPf}" title="${esc(p.name)}"><span class="grow"><b>${esc(p.name)}</b><small>${p.products.length} product${p.products.length>1?"s":""}${pfW(p)?`, ${pfW(p)} waiting`:""}</small></span>${ic("chev")}</button>`)).join("")}${more("pf",Math.min(lim.pf,pfL.length),pfL.length)}</div>
     <div class="sp-col" role="listbox" aria-label="Products in ${esc(P.name)}"><div class="sp-sticky"><div class="sp-lbl">Products <span>${P.products.length}</span></div>${P.products.length>15?`<label class="sp-fq">${ic("search")}<input id="popfq" placeholder="Filter ${P.products.length} products" value="${esc(S.popPq||"")}" autocomplete="off" aria-label="Filter products in ${esc(P.short)}"></label>`:""}</div>${fq?"":opt("pf",P.id,"All of "+esc(P.short),"The whole portfolio",pfW(P)?pfW(P)+" waiting":"","sp-whole")}${prL.slice(0,lim.prod).map(pid=>prodRow(pid,PROD[pid].comps.length+" competitors")).join("")}${prL.length?more("prod",Math.min(lim.prod,prL.length),prL.length):`<div class="sp-empty">No product in ${esc(P.short)} matches “${esc(S.popPq)}”.</div>`}</div></div>`;
  }
  $("#pop").innerHTML=`<div class="sp-search">${ic("search")}<input id="popq" placeholder="Search portfolios, products or competitors" value="${esc(S.popq||"")}" autocomplete="off" aria-label="Search portfolios, products or competitors"><kbd>Esc</kbd></div>${body}<div class="sp-foot">Type to search · ↑ ↓ to move · Enter to choose · ${ic("pin")} to pin</div>`;
}

document.addEventListener("keydown",ev=>{const p=$("#pop");if(!p.classList.contains("open")||p.dataset.m!=="scope")return;
  const opts=[...p.querySelectorAll(".sp-opt,.sp-pf,.sp-chip")];if(!opts.length)return;const i=opts.indexOf(document.activeElement);
  if(ev.key==="ArrowDown"){ev.preventDefault();(opts[i+1]||opts[0]).focus();}
  else if(ev.key==="ArrowUp"){ev.preventDefault();if(i<=0){$("#popq").focus();}else opts[i-1].focus();}
  else if(ev.key==="Enter"&&ev.target.id==="popq"){ev.preventDefault();const f=p.querySelector(".sp-res .sp-opt")||p.querySelector(".sp-opt[aria-selected=true]");f&&f.click();}
  else if(ev.key==="ArrowRight"&&document.activeElement.classList.contains("sp-pf")){ev.preventDefault();document.activeElement.click();setTimeout(()=>p.querySelector(".sp-whole")?.focus(),0);}});
const STORY=[
 {t:"The problem",s:"News arrives through many channels and nobody owns the full picture. Three questions fix that.",go:()=>openIntro()},
 {t:"What we watch",s:"Portfolio, then product, then competitor. Every source has a type and a link.",go:()=>{setScope("prod","boost-opt");nav("monitoring");}},
 {t:"Every morning",s:"Events need you today. One card per product shows how it is doing.",go:()=>{setScope("all");nav("cockpit");}},
 {t:"One product",s:"Seven events wait, each with a date, a source and the AI's suggestion.",go:()=>{setScope("prod","boost-opt");nav("cockpit");}},
 {t:"The whole human job",s:"Review the Ensure Gold promotion: pick the product, say what it means, confirm.",go:()=>{setScope("prod","boost-opt");nav("cockpit");openSheet({type:"event",id:"e1"});}},
 {t:"Not only competitors",s:"A draft advertising rule is good for us. A supplier price rise is bad.",go:()=>{setScope("all");Object.assign(S.ev,{status:"review",group:"all",q:"",sel:"e3"});nav("events");}},
 {t:"Friday",s:"What changed, what it means, what to do. Approve and send.",go:()=>{setScope("prod","boost-opt");S.week=45;nav("pulse");}},
 {t:"Ask it",s:"Answers cite their events. Ask something it has no evidence for and it says so.",go:()=>{setScope("prod","boost-opt");nav("cockpit");openChat(true);ask("What is bad for us right now?");}},
 {t:"For the organisation",s:"Monthly and quarterly: where pressure came from and what to tell people.",go:()=>{setScope("all");nav("monthly");}},
 {t:"Next",s:"Test our move against their likely reply. To scale, add a portfolio.",go:()=>nav("decision")}
];
function renderStory(){
  const i=S.story;
  if(i<0){$("#story").innerHTML=`<div class="story-top"><span>Demo story</span><span>10 steps</span></div><h4>Competitor Radar in ten minutes</h4><p>One product, one event, every screen.</p><div class="story-ctl" style="margin-top:10px"><button class="go" data-act="story" data-d="1">Start the story</button></div>`;return;}
  const st=STORY[i];
  $("#story").innerHTML=`<div class="story-top"><span>Demo story</span><span class="num">${i+1} of 10</span></div><h4>${st.t}</h4><p>${st.s}</p><div class="story-dots">${STORY.map((_,k)=>`<i class="${k<=i?"on":""}"></i>`).join("")}</div><div class="story-ctl"><button data-act="story" data-d="-1" ${i===0?"disabled":""}>Back</button><button class="go" data-act="story" data-d="1">${i===9?"Finish":"Next"}</button></div>`;
}
function openIntro(){
  const Qs=[["What changed","Events captured from watched sources: prices, launches, campaigns, policy, supply.","Dashboard, Events Review, Radar Setup"],["What it means for N&H","Each event is mapped to our products and marked bad, good, mixed or unsure by its owner.","Product view, Events"],["What to watch or do","Confirmed events are ranked by impact and urgency and given an action and a team.","Weekly Summary, Briefings"]];
  const flow=[["Sources","Web pages, stores, social posts, government sites, market data"],["Events","One captured change, always tied to its source"],["Owner review","Map to products and say what it means for us"],["Product record","Confirmed events build up on each product"]];
  $("#intro").innerHTML=`<div class="intro-card wide"><span class="k">Why Competitor Radar</span><h2>Every screen answers one of three questions</h2><p>Competitor, regulator and supplier news arrives through many channels, and nobody owns the full picture. The radar turns it into one weekly read for N&amp;H.</p>
   <div class="q3">${Qs.map(([t,d,s],i)=>`<div><span class="qn">${i+1}</span><h3>${t}</h3><p>${d}</p><small>${s}</small></div>`).join("")}</div>
   <div class="flow">${flow.map(([t,d],i)=>`<div class="${i===2?"hum":""}"><b>${t}</b><span>${d}</span></div>`).join(`<i aria-hidden="true">${ic("chev")}</i>`)}</div>
   <p class="layer">Weekly Summary, Briefings and Ask sit on top, built only from confirmed events.</p>
   <div class="acts intro-acts"><button class="btn intro-close" data-act="intro-close">Close</button><button class="btn primary" data-act="story" data-d="1">See What We Watch</button></div></div>`;
  $("#intro").classList.add("open");setTimeout(()=>$("#intro .btn.primary").focus(),30);
}
function setScope(l,id=null){S.scope={level:l,id};}
function nav(r){if(S.mon)S.mon.full=false;S.route=r;if(location.hash!=="#"+HASH[r])history.replaceState(null,"","#"+HASH[r]);render();$("#view").scrollTop=0;}

function render(){
  MON=TREES[monPid()];
  document.body.className=me().can.map(c=>"can-"+c).join(" ");
  renderNav();renderTop();renderStory();
  const v=$("#view");const fn={cockpit:S.scope.level==="prod"?viewProduct:viewCockpit,events:viewEvents,monitoring:viewMonitoring,pulse:viewPulse,briefings:()=>{S.brief.mode="monthly";return viewBriefings();},monthly:()=>{S.brief.mode="monthly";return viewBriefings();},quarterly:()=>{S.brief.mode="quarterly";return viewBriefings();},strategy:()=>viewHub("decision"),decision:()=>viewHub("decision"),results:()=>viewHub("results"),lessons:()=>viewHub("lessons"),integration:viewIntegration,areview:viewAReview,team:viewTeam,settings:viewSettings,profile:viewProfile}[S.route];
  v.innerHTML=`<div class="wrap">${fn()}</div>`;
  if(S.route==="monitoring")mountCanvas();
  if(S.route==="pulse")mountPulse();
  if(S.route==="cockpit"&&S.scope.level!=="prod")requestAnimationFrame(()=>{const r=$(".ring .val");if(r)r.style.strokeDashoffset=r.dataset.to;});
  $("#body").classList.toggle("chat-open",S.chat);
  if(S.chat)renderChat();else $("#chat").innerHTML="";
}

/* ================= cockpit ================= */
function weekStats(){const w=Object.values(EV).filter(e=>e.week===45&&inScope(e));const done=w.filter(e=>e.status!=="review").length;return {done,total:w.length};}
function viewCockpit(){
  const wt=waiting().filter(inScope),noProd=wt.filter(e=>e.chosen.length===0).length,mapped=wt.length-noProd;
  const ws=weekStats(),pct=ws.total?Math.round(ws.done/ws.total*100):100,C2=2*Math.PI*64;
  const prods=scopeProducts();
  const all=S.scope.level==="all";const pfAgg={active:[63,37,17],medical:[9,56,11],dysphagia:[10,50,20]};
  const agg=all?[136,36,18]:pfAgg[S.scope.id];
  const srcs=allSources(),gaps=gapCount(srcs)+(all?1:0),tot=srcs.length+(all?33:0);
  const heroH=wt.length?`${wt.length} event${wt.length>1?"s":""} need you today`:"Nothing is waiting for you";
  const heroP=wt.length?`${mapped} ${mapped===1?"was":"were"} mapped to a product by the AI and only need their meaning confirmed.${noProd?` ${noProd} need${noProd===1?"s":""} a product.`:""}`:"Every event captured this week has been reviewed. New captures arrive at 09:10 tomorrow.";
  return `<section class="hero" aria-label="Today">
    <div><div class="meta">Friday 13 November 2026 · last capture 09:10</div><h2>${heroH}</h2><p>${heroP}</p>
      <div class="acts"><button class="btn on-dark" data-act="review-all" ${wt.length?"":"disabled"}>Review ${wt.length||""} events</button><button class="btn out-dark" data-act="nav" data-r="monitoring">See what is watched</button></div></div>
    <div class="ring ${pct===100?"done":""}"><div class="ring-g"><svg viewBox="0 0 150 150"><circle class="track" cx="75" cy="75" r="64" fill="none" stroke-width="8"/><circle class="val" cx="75" cy="75" r="64" fill="none" stroke-width="8" stroke-dasharray="${C2}" stroke-dashoffset="${C2}" data-to="${C2*(1-pct/100)}"/></svg><div class="pct"><span class="num">${pct}%</span><em>reviewed</em></div></div><div class="cap"><b class="num">${ws.done} of ${ws.total}</b><span>events from week 45 confirmed</span></div></div>
  </section>
  <div class="tiles">
    <div class="tile"><div class="t">Events captured</div><div class="v num">${agg[0]}</div><div class="s">Last 12 weeks</div>${bars([8,9,11,10,12,9,13,11,12,14,13,14],30,"#DAD5D0","#017CBA",v=>v+" events","Captured")}</div>
    <div class="tile"><div class="t">Bad for us</div><div class="v num">${agg[1]}%</div><div class="s">of confirmed events, last 4 weeks</div>${spark([29,30,31,30,32,33,34,33,35,34,35,agg[1]],200,30,"#7E1352",false,v=>v+"%","Bad for us")}</div>
    <div class="tile"><div class="t">Good for us</div><div class="v num">${agg[2]}%</div><div class="s">of confirmed events, last 4 weeks</div>${spark([20,19,21,20,18,19,17,18,19,18,17,agg[2]],200,30,"#34682A",false,v=>v+"%","Good for us")}</div>
    <button class="tile" style="text-align:left" data-act="nav" data-r="monitoring"><div class="t">Sources current</div><div class="v num">${tot-gaps}</div><div class="s">of ${tot} watched · <span style="color:var(--bad)">${gaps} with a gap</span></div><div class="meter" aria-hidden="true">${Array.from({length:20},(_,i)=>`<i class="${i>=20-Math.ceil(gaps/tot*20)?"g":""}"></i>`).join("")}</div></button>
  </div>
  ${prodToolbar()}<div id="prodArea">${prodArea()}</div>
  <div class="sec-h"><h2>Latest confirmed events</h2><button class="link" data-act="events-confirmed">See all ${ic("chev")}</button></div>
  <div class="panel rows">${Object.values(EV).filter(e=>e.status==="confirmed"&&inScope(e)).sort((a,b)=>b.d-a.d).slice(0,4).map(e=>`
    <button class="row" data-act="open-ev" data-id="${e.id}"><span class="d">${e.date}</span><span class="ti">${esc(e.title)}<small>${e.actor} · ${e.src}</small></span><span class="tag plain">${e.kind}</span>${tag(e.meaning)}${ic("chev","chev")}</button>`).join("")}</div>`;
}
const pStatus=pid=>{const p=PROD[pid];return waitingFor(pid).length===0&&p.status!=="attention"?"calm":p.status;};
const ST_NAME={attention:"Needs attention",look:"Worth a look",calm:"Steady"};
const SORTS={urgent:["Most urgent job","Ranked by their most urgent job"],bad:["Most bad for us","Ranked by bad-for-us share, highest first"],rise:["Biggest rise","Ranked by change in bad-for-us, last 4 weeks"],name:["Name A–Z","In alphabetical order"]};
const rank={attention:0,look:1,calm:2};
function prodList(){const H=S.home,q=H.q.trim().toLowerCase();
  const l=scopeProducts().filter(pid=>{const p=PROD[pid];
    if(H.status!=="all"&&pStatus(pid)!==H.status)return false;
    if(q&&!(p.name+" "+p.comps.join(" ")+" "+PF.find(x=>x.id===p.pf).name).toLowerCase().includes(q))return false;return true;});
  const c={urgent:(a,b)=>rank[pStatus(a)]-rank[pStatus(b)]||waitingFor(b).length-waitingFor(a).length||PROD[b].bad-PROD[a].bad,
    bad:(a,b)=>PROD[b].bad-PROD[a].bad,rise:(a,b)=>PROD[b].delta-PROD[a].delta,name:(a,b)=>PROD[a].name.localeCompare(PROD[b].name)}[H.sort];
  return l.sort(c);}
function prodToolbar(){const H=S.home;const cnt=s=>scopeProducts().filter(pid=>s==="all"||pStatus(pid)===s).length;
  return `<div class="ph-row"><div class="ph-t"><h2>Products</h2><p id="prodSub">${SORTS[H.sort][1]}</p></div>
   <div class="ph-tools">
    <label class="pill pill-search">${ic("search")}<input id="prodq" placeholder="Search products" value="${esc(H.q)}" aria-label="Search products"></label>
    <label class="pill pill-sel">${ic("filt")}<select data-act-change="home-st" aria-label="Status">${[["all","All statuses"],["attention","Needs attention"],["look","Worth a look"],["calm","Steady"]].map(([k,l])=>`<option value="${k}" ${H.status===k?"selected":""}>${l}${k==="all"?"":` (${cnt(k)})`}</option>`).join("")}</select>${ic("chevd","pcv")}</label>
    <label class="pill pill-sel">${ic("sort")}<select data-act-change="home-sort" aria-label="Sort">${Object.entries(SORTS).map(([k,[l]])=>`<option value="${k}" ${H.sort===k?"selected":""}>${l}</option>`).join("")}</select>${ic("chevd","pcv")}</label>
    <div class="vtog" role="group" aria-label="View"><button aria-pressed="${H.view==="cards"}" data-act="home-view" data-v="cards" title="Card view" aria-label="Card view">${ic("square")}</button><button aria-pressed="${H.view==="table"}" data-act="home-view" data-v="table" title="Table view" aria-label="Table view">${ic("rows")}</button></div>
   </div></div>`;}
function prodArea(){const list=prodList();
  if(!list.length)return `<div class="panel empty">No products match. Clear the search or choose another filter. <button class="link" data-act="home-clear">Clear filters</button></div>`;
  if(S.home.view==="cards")return `<div class="prod-grid">${list.map(prodCard).join("")}</div>`;
  return `<div class="ptable" role="table" aria-label="Products"><div class="pt-h" role="row"><span>Product</span><span>Status</span><span>To review</span><span>Bad for us</span><span>Last 12 weeks</span><span>Events, 4 weeks</span><span></span></div>${list.map(prodRow).join("")}</div>`;}
function prodRow(pid){const p=PROD[pid],w=waitingFor(pid).length,st=pStatus(pid);
  return `<button class="pt-r" role="row" data-act="open-prod" data-id="${pid}">
   <span class="pn"><b>${p.name}</b><small>${PF.find(x=>x.id===p.pf).short} · ${p.comps.length} competitors</small></span>
   <span><span class="st ${st}">${ST_NAME[st]}</span></span>
   <span class="pw num ${w?"hot":""}">${w}</span>
   <span class="num">${p.bad}% <em class="dl ${p.delta>0?"up":"down"}">${p.delta>0?"↑":"↓"} ${Math.abs(p.delta)}</em></span>
   <span class="pspark">${spark(p.trend,160,28,"#7E1352",false,v=>v+"%","Bad for us")}</span>
   <span class="num">${p.ev4}</span>${ic("chev","chev")}</button>`;}
function refreshProds(){const a=$("#prodArea");if(a)a.innerHTML=prodArea();}
function prodCard(pid){
  const p=PROD[pid],w=waitingFor(pid).length,st={attention:"Needs attention",look:"Worth a look",calm:"Steady"}[w===0&&p.status!=="attention"?"calm":p.status];
  return `<button class="panel prod" data-act="open-prod" data-id="${pid}">
    <div class="ph"><div><h3>${p.name}</h3><div class="sub">${p.comps.length} competitors · ${PF.find(x=>x.id===p.pf).short}</div></div><span class="st ${w===0&&p.status!=="attention"?"calm":p.status}">${st}</span></div>
    <div class="nums"><div><b class="num">${p.bad}%</b><span>Bad for us</span></div><div class="${w?"hot":""}"><b class="num">${w}</b><span>To review</span></div><div><b class="num">${p.ev4}</b><span>Events, 4 weeks</span></div></div>
    <div class="spark">${spark(p.trend,300,44,"#7E1352",true,v=>v+"%","Bad for us")}</div>
    <div class="pf"><span class="num ${p.delta>0?"up":"down"}">${p.delta>0?"↑":"↓"} ${Math.abs(p.delta)} pts vs prior 4 weeks</span><span class="link">Open product ${ic("chev")}</span></div>
  </button>`;
}
/* ================= product view ================= */
function viewProduct(){
  const pid=S.scope.id,p=PROD[pid],w=waitingFor(pid).sort((a,b)=>b.d-a.d),rev=Object.values(EV).filter(e=>e.status==="confirmed"&&e.chosen.includes(pid)).sort((a,b)=>b.d-a.d);
  const shown=w.slice(0,5);
  const waitBlock=w.length?`<div class="waiting"><div class="wh"><h3>${w.length} event${w.length>1?"s are":" is"} waiting for your review</h3><p>For each one, confirm which products it affects and what it means for us. The AI has made a suggestion.</p></div>
    <table class="t"><thead><tr><th style="width:110px">Date</th><th>Event</th><th style="width:150px">Source</th><th style="width:120px">AI suggests</th><th style="width:110px"></th></tr></thead><tbody>
    ${shown.map(e=>`<tr id="w-${e.id}"><td class="num"><b style="font-weight:500">${e.date}</b></td><td><div class="ev-k">${e.kind} · ${e.actor}</div><div class="ev-t">${esc(e.title)}</div></td><td class="muted">${e.src}</td><td><span class="tag ${e.ai}">${SHORT[e.ai]}</span></td><td style="text-align:right"><button class="btn primary sm" data-act="open-ev" data-id="${e.id}">Review</button></td></tr>`).join("")}
    </tbody></table>${w.length>shown.length?`<div class="wf">${w.length-shown.length} more waiting · <button class="link" data-act="review-all">review all in Events</button></div>`:""}</div>`
   :`<div class="waiting clear"><div class="wh"><h3>Nothing is waiting for ${p.name}</h3><p>Every event captured for this product has a meaning. New captures arrive at 09:10 tomorrow.</p></div><div class="clear-msg">${ic("ok")}All reviewed</div></div>`;
  const weeks=[34,35,36,37,38,39,40,41,42,43,44,45];
  const mix=weeks.map((wk,i)=>{const t=6+((i*7+pid.length)%6);const b=Math.round(t*(p.trend[i]/100));const g=Math.max(1,Math.round(t*.2));const m=(i%3===0)?1:0;return [b,g,m,Math.max(0,t-b-g-m)];});
  const mx=Math.max(...mix.map(a=>a.reduce((x,y)=>x+y,0)));
  const cols=["#7E1352","#34682A","#A3650B","#C9C3BD"];
  const chart=`<svg viewBox="0 0 480 170" style="width:100%;height:auto" role="img" aria-label="Stacked weekly signal mix, weeks 34 to 45">${mix.map((a,i)=>{let y=150;const tot=a.reduce((x,z)=>x+z,0);return `<g class="hb" data-tip="${weekLabel(weeks[i])}" data-val="${a[0]} bad, ${a[1]} good, ${a[2]} mixed, ${a[3]} unsure (${tot} events)"><rect x="${i*40}" y="0" width="40" height="152" fill="transparent"/>`+a.map((v,k)=>{const h=v/mx*140;y-=h;return `<rect class="bar" x="${i*40+8}" y="${y}" width="24" height="${Math.max(0,h-1)}" rx="2" fill="${cols[k]}"/>`}).join("")+`</g>`+`<text x="${i*40+20}" y="166" font-size="10" fill="#6F6A65" text-anchor="middle">${weeks[i]}</text>`;}).join("")}</svg>`;
  return `<div class="pv-head"><div><h2>${p.name} · Vietnam</h2><p>${p.job}</p></div><div class="acts"><button class="btn" data-act="chat">${ic("spark")}Chat with ${p.name}</button><button class="btn primary" data-act="review-all" ${w.length?"":"disabled"}>Review ${w.length} events</button></div></div>
  <div class="tiles"><div class="tile"><div class="t">To review</div><div class="v num" style="color:${w.length?"var(--blue)":"var(--good)"}">${w.length}</div><div class="s">events waiting for a meaning</div></div>
   <div class="tile"><div class="t">Bad for us</div><div class="v num">${p.bad}%</div><div class="s">of events, last 4 weeks</div></div>
   <div class="tile"><div class="t">Events</div><div class="v num">${p.ev4}</div><div class="s">captured in the last 4 weeks</div></div>
   <button class="tile" style="text-align:left" data-act="nav" data-r="monitoring"><div class="t">Competitors</div><div class="v num">${p.comps.length}</div><div class="s">${p.comps.slice(0,2).join(", ")}, …</div></button></div>
  ${waitBlock}
  <div class="sec-h"><h2>Reviewed events <span class="muted" style="font-weight:400">· ${70+rev.length} on record</span></h2><button class="link" data-act="events-confirmed">See all ${ic("chev")}</button></div>
  <div class="panel rows">${rev.slice(0,5).map(e=>`<button class="row" data-act="open-ev" data-id="${e.id}"><span class="d">${e.date}</span><span class="ti">${esc(e.title)}<small>${e.kind} · Week ${e.week}</small></span><span></span>${tagShort(e.meaning)}${ic("chev","chev")}</button>`).join("")}</div>
  <div class="two" style="margin-top:16px">
    <div class="panel box"><h3>Signal mix by week</h3><p class="lede">Weeks 34–45. Bad-for-us has grown from ${p.trend[0]}% to ${p.trend[11]}% of events: pressure is building.</p>${chart}
      <div class="legend"><span><i style="background:#7E1352"></i>Bad for us</span><span><i style="background:#34682A"></i>Good for us</span><span><i style="background:#A3650B"></i>Mixed</span><span><i style="background:#C9C3BD"></i>Unsure</span></div></div>
    <div class="panel box"><h3>What we already know</h3><p class="lede">Inherited from ${PF.find(x=>x.id===p.pf).name}, plus what was added for this product.</p>
      <dl class="kv"><dt>Direct rivals</dt><dd>${p.comps.slice(0,3).join(", ")}</dd><dt>Substitutes</dt><dd>${p.comps[3]||"None recorded"}</dd><dt>Channels</dt><dd>Three pharmacy chains hold most of our shelf space</dd></dl>
      <details class="setup"><summary>Product set-up</summary><dl class="kv"><dt>Job to be done</dt><dd>${p.job}</dd><dt>Strategy</dt><dd>${p.strategy}</dd><dt>Price</dt><dd>${p.price}</dd><dt>Target</dt><dd>${p.target}</dd></dl></details>
      <div style="margin-top:14px"><button class="link" data-act="nav" data-r="monitoring">Open in Radar Setup ${ic("chev")}</button></div></div>
  </div>`;
}

/* ================= events ================= */
const GROUPS={all:"All",competitors:"Competitors",environment:"External Factors",supply:"Supply Chain"};
function evFiltered(){
  const q=S.ev.q.trim().toLowerCase();
  return Object.values(EV).filter(e=>e.status===S.ev.status&&inScope(e)&&(S.ev.group==="all"||e.group===S.ev.group)&&(!q||(e.title+" "+e.actor+" "+e.src+" "+e.kind).toLowerCase().includes(q))).sort((a,b)=>b.d-a.d);
}
function viewEvents(){
  const cnt=st=>Object.values(EV).filter(e=>e.status===st&&inScope(e)).length;
  const list=evFiltered();
  if(!list.find(e=>e.id===S.ev.sel))S.ev.sel=list[0]?list[0].id:null;
  const off={review:0,confirmed:0,noise:0};
  const seg=(k,lbl)=>`<button aria-pressed="${S.ev.status===k}" data-act="ev-status" data-v="${k}">${lbl}<span class="n num">${cnt(k)+off[k]}</span></button>`;
  return `<div class="ev-bar"><div class="seg" role="group" aria-label="Status">${seg("review","Needs review")}${seg("confirmed","Confirmed")}${seg("noise","Not relevant")}</div>
    <span class="ev-right"><label class="pill pill-sel">${ic("filt")}<select data-act-change="ev-group" aria-label="Source group">${Object.entries(GROUPS).map(([k,v])=>`<option value="${k}" ${S.ev.group===k?"selected":""}>${k==="all"?"All sources":v}</option>`).join("")}</select>${ic("chevd","pcv")}</label>
    <label class="pill pill-search ev-search">${ic("search")}<input id="evq" placeholder="Search events" value="${esc(S.ev.q)}" aria-label="Search events"></label>${can("review")?`<button class="btn primary ev-up" data-act="ev-upload">${ic("upload")}Upload Event</button>`:""}</span></div>
  <div class="ev-layout"><div class="ev-list" role="list">${list.length?list.map(e=>`<button role="listitem" class="ev-item" data-act="ev-sel" data-id="${e.id}" aria-current="${e.id===S.ev.sel}">
      <div class="k"><span class="evk"><span class="tag plain">${e.kind}</span>${e.chosen.length===0&&e.status==="review"?`<span class="np">No product</span>`:e.status==="confirmed"?tagShort(e.meaning):""}</span><span class="ev-d">${e.src} · ${e.date}</span></div><div class="tt">${esc(e.title)}</div></button>`).join("")
      :`<div class="panel empty">${S.ev.q.trim()||S.ev.group!=="all"?"No events match this view. Clear the search or choose another group.":S.ev.status==="review"?`Nothing waiting for ${esc(scopeName())}. Every event here has a meaning.`:`No ${S.ev.status==="confirmed"?"confirmed":"not relevant"} events for ${esc(scopeName())} yet.`}</div>`}
      ${S.ev.status!=="review"&&list.length?`<p class="muted" style="font-size:13px;padding:6px 4px">Showing the ${list.length} most recent</p>`:""}</div>
    <div class="panel detail" id="evDetail">${S.ev.sel?detailBody(EV[S.ev.sel],"inline"):`<div class="empty">Select an event to see its evidence.</div>`}</div></div>`;
}
function capHTML(e){
  const blk=(cls,lines,label,date,w)=>`<button type="button" class="cq cq-btn ${cls}" data-act="ev-src" data-id="${e.id}" data-w="${w}" aria-label="View ${esc(label)} capture details"><div class="cq-t">${lines.map(esc).join("<br>")}</div><div class="cq-m"><i></i><b>${esc(label)}</b><span>${date}</span><em class="cq-go">View capture${ic("chev")}</em></div></button>`;
  if(e.cap.before)return `<div class="cq-wrap two">${blk("",e.cap.before.l,"Before",e.cap.before.d,"before")}${blk("after",e.cap.after.l,"After",e.cap.after.d,"after")}</div>`;
  return `<div class="cq-wrap">${blk("",e.cap.detail,e.src,e.date,"detail")}</div>`;
}
function detailBody(e,mode){const ro=e.status==="confirmed"&&S.ev.edit!==e.id;
  const head=mode==="inline"?`<div class="dh"><div class="dh-t"><div class="k">${e.kind} · ${e.actor}${e.org?` (${e.org})`:""} · ${e.src} · ${e.date}</div><h2>${esc(e.title)}</h2></div><button class="btn dh-ask" data-act="ask-ev" data-id="${e.id}">${ic("spark")}Ask About This Event</button></div>`:"";
  const opts=["bad","good","mixed","unsure"].map(m=>`<button class="mean ${m}" aria-pressed="${e.meaning===m}" data-act="mean" data-id="${e.id}" data-v="${m}"><b>${MEAN[m]}</b>${e.ai===m?`<span class="aimark">${ic("spark")}AI suggestion</span>`:""}</button>`).join("");
  const sel=(k,arr)=>`<label>${{impact:"Impact",urgency:"Urgency",team:"Owner team"}[k]}<select class="field" data-act-change="an" data-id="${e.id}" data-k="${k}">${arr.map(v=>`<option ${e.an[k]===v?"selected":""}>${v}</option>`).join("")}</select></label>`;
  const body=`${head}
   <div class="blk"><span class="label">What was captured</span>${capHTML(e)}<div class="src">Source: ${esc(e.srcLine)} · ${GROUPS[e.group]} › ${esc(e.actor)} · confidence high</div></div>
   ${e.check?`<div class="blk ai"><h4>${ic("spark")}Checked against what we know</h4><div>${esc(e.check)}</div>${e.ctx.length?`<div class="ctx">${e.ctx.map(c=>`<span class="tag plain">${c}</span>`).join("")}</div>`:""}</div>`:""}
   <div class="${ro?"dec-ro":"dec"}"><div class="blk"><span class="label">1 · Which products does this affect?</span><div class="chips">${Object.keys(PROD).map(pid=>`<button class="chip" aria-pressed="${e.chosen.includes(pid)}" data-act="prod-chip" data-id="${e.id}" data-p="${pid}">${e.chosen.includes(pid)?ic("check"):""}${PROD[pid].name}</button>`).join("")}</div>
     ${e.chosen.length===0?`<div class="check no" style="margin-top:8px">${ic("alert")}Choose at least one product. The AI could not map this event.</div>`:""}</div>
   <div class="blk"><span class="label">2 · What does it mean for us?</span><div class="meaning">${opts}</div></div>
   <div class="blk"><textarea class="field" rows="2" placeholder="Note for the team (optional)" ${ro?"readonly":""} data-act-change="note" data-id="${e.id}" aria-label="Note for the team">${esc(e.note)}</textarea>
     <details class="analysis"><summary>Analysis fields, pre-filled by the AI: impact, urgency, owner team, next step</summary><div class="an-grid">${sel("impact",LVN)}${sel("urgency",LVN)}${sel("team",["Marketing","Sales","Finance","Management"])}<label>Next step<input class="field" style="margin-top:4px;height:38px" value="${esc(e.an.step)}" data-act-change="an" data-id="${e.id}" data-k="step"></label></div></details></div></div>`;
  const foot=footHTML(e);
  return mode==="inline"?body+`<div class="d-foot">${foot}</div>`:body;
}
function footHTML(e){
  if(e.status==="review"&&!can("review"))return `<span class="status">${ic("clock")}Waiting for review by ${ROLES.owner.name}, radar owner · AI suggests ${MEAN[e.ai||e.meaning].toLowerCase()}</span>`;
  if(e.status==="review")return `<span class="status">${ic("clock")}Waiting for review · AI suggests ${MEAN[e.ai||e.meaning].toLowerCase()}</span><span class="acts" style="display:flex;gap:10px"><button class="btn" data-act="noise" data-id="${e.id}">${ic("x")}Not relevant</button><button class="btn primary" data-act="confirm" data-id="${e.id}" ${e.chosen.length?"":"disabled"}>${ic("check")}Confirm</button></span>`;
  if(e.status==="confirmed")return `<span class="status">${tag(e.meaning)}Confirmed ${e.decided==="just now"?"just now by "+ROLES.owner.name:"by "+ROLES.owner.name+", radar owner"}${e.chosen.length?" · "+e.chosen.map(p=>PROD[p].name).join(", "):""}</span><span class="acts need-review" style="display:flex;gap:10px">${S.ev.edit===e.id?`<button class="btn" data-act="ev-discard" data-id="${e.id}">Discard</button><button class="btn primary" data-act="to-review" data-id="${e.id}" title="Save changes and move back to Needs review">${ic("undo")}Save &amp; Reopen</button>`:`<button class="btn" data-act="ev-edit" data-id="${e.id}">${ic("pen")}Edit</button>`}</span>`;
  return `<span class="status">Marked not relevant</span><button class="btn need-review" data-act="to-review" data-id="${e.id}">${ic("undo")}Move back to review</button>`;
}

/* ================= sheet ================= */
let SHEET=null,lastFocus=null;
function openSheet(s){SHEET=s;lastFocus=document.activeElement;renderSheet();$("#scrim").classList.add("open");$("#sheet").classList.add("open");$("#sheet").setAttribute("tabindex","-1");setTimeout(()=>$("#sheet").focus({preventScroll:true}),60);}
function closeSheet(){SHEET=null;$("#scrim").classList.remove("open");$("#sheet").classList.remove("open");if(lastFocus&&document.body.contains(lastFocus))lastFocus.focus();}
function renderSheet(){
  if(!SHEET)return;const sh=$("#sheet");const X=`<button class="x" data-act="close-sheet" aria-label="Close">${ic("x")}</button>`;let h="",b="",f="";
  sh.classList.toggle("narrow",SHEET.type!=="event");
  if(SHEET.type==="event"){const e=EV[SHEET.id];
    h=`<div><div class="k">Event · week ${e.week}</div><h2 id="sheetTitle">${esc(e.title)}</h2><p>${e.kind} · ${e.actor}${e.org?` (${e.org})`:""} · ${e.src} · ${e.date}</p></div>`;
    b=detailBody(e,"sheet");f=footHTML(e);}
  else if(SHEET.type==="comp"){const k=MON.comp.items.find(x=>x.id===SHEET.id);const g=gapCount(k.sources);
    const evs=Object.values(EV).filter(e=>e.actor===k.name).sort((a,b)=>b.d-a.d);
    h=`<div><div class="k">Competitor</div><h2 id="sheetTitle">${k.name}</h2><p>${k.org} · ${k.how.toLowerCase()} rival of ${monProd().name} · baseline research ${k.queued?"queued":"12 Oct 2026"}</p></div>`;
    b=`<div class="blk normal"><h4>What is normal for them</h4>${esc(k.normal)}</div>
     <section class="fsec"><h4>Price Ladder <span class="h-note">Index, ours = 100</span></h4><div class="ladder"><span>${monProd().name} (ours)</span><div class="bar" style="width:${100/1.2}%;background:var(--ink)">100</div><span>${k.name}</span><div class="bar" style="width:${k.idx/1.2}%;background:#8F8780">${k.idx}</div>${k.id==="k-ens"?`<span>${k.name} on promotion</span><div class="bar" style="width:${69/1.2}%;background:var(--bad)">69</div>`:""}</div></section>
     <section class="fsec"><h4>History of Moves <span class="h-cnt num">${evs.length+12}</span><span class="h-note">on record</span></h4>${(()=>{const R=[...(k.id==="k-ens"?[["Jun","Launch","Pack redesign",0],["Sep","Campaign","Doctor-led TV",0]]:[]),...evs.slice(0,5).reverse().map(e=>[e.date.split(" ").slice(1).join(" "),e.kind,e.title.replace(k.name+" ",""),e.status==="review"])];
       return R.length?`<div class="tl">${R.map(([d,t,x,n])=>`<div class="tl-r${n?" new":""}"><span class="tl-d">${d}</span><i class="tl-dot"></i><div class="tl-t"><b>${t}</b><span>${esc(x)}</span>${n?`<em class="tl-new">New</em>`:""}</div></div>`).join("")}</div>`:`<p class="rel-empty" style="margin:0">No moves recorded since baseline research.</p>`;})()}</section>
     <section class="fsec"><h4>Sources Watched <span class="h-cnt num">${k.sources.length}</span>${g?`<span class="tag bad">${g} with a gap</span>`:""}</h4><div class="srcs flat">${k.sources.map(s=>`<div><i class="dot ${s.status==="queued"?"delayed":s.status}"></i><span class="grow">${s.name}<br><small>${s.type} · ${s.cad||"Daily"} · ${s.status==="paused"?s.since:s.status==="queued"?"first capture queued":s.status}</small></span>${s.status==="queued"?"":`<button class="btn sm need-sources src-pz" data-act="pause" data-k="${k.id}" data-s="${s.id}">${ic(s.status==="paused"?"play":"pause")}${s.status==="paused"?"Resume":"Pause"}</button>`}</div>`).join("")}</div></section>
     <div class="blk normal"><h4>What we already know · Direct rivals</h4>${monPid()==="boost-opt"?"Ensure Gold leads on awareness; Anlene Gold and Sure Prevent Gold compete on price.":monProd().comps.slice(0,2).join(" and ")+" are the rivals buyers compare us with most often."} <button class="link" data-act="noop">Add what we know</button></div>`;
    f=`<button class="btn need-sources" data-act="add-source" data-k="${k.id}">${ic("plus")}Add source</button><button class="btn primary" data-act="chat-about" data-v="${k.name}">${ic("spark")}Chat about ${k.name}</button>`;}
  else if(SHEET.type==="group"){const g=MON[SHEET.id];const srcs=g.sources||[];
    h=`<div><div class="k">${g.shared?"Shared group · added to a portfolio":"Group"}</div><h2 id="sheetTitle">${g.name}</h2><p>${g.shared?"Added to "+PF.find(x=>x.id===monProd().pf).name+". Every product in it inherits it.":"Belongs to "+monProd().name+"."}</p></div>`;
    b=`<div class="blk normal"><h4>What we know</h4>${esc(g.know)}</div>${srcs.length?`<section class="fsec"><h4>Sources Watched <span class="h-cnt num">${srcs.length}</span></h4><div class="srcs flat">${srcs.map(s=>`<div><i class="dot ${s.status==="queued"?"delayed":s.status}"></i><span class="grow">${s.name}<br><small>${s.type} · ${s.status==="queued"?"first capture queued":s.since||s.status} · ${s.ev} events</small></span></div>`).join("")}</div></section>`:""}`;
    f=`<span></span><button class="btn primary need-sources" data-act="${SHEET.id==="comp"?"add-comp":"add-env"}" data-g="${SHEET.id}">${ic("plus")}${SHEET.id==="comp"?"Add competitor":"Add source"}</button>`;}
  else if(SHEET.type==="addComp"){
    const st=SHEET.step||2,C=NSCAT.find(x=>x[0]===SHEET.ch);
    h=`<div><div class="k">${SHEET.ch?`Step ${st} of 2 · `:""}Competitors</div><h2 id="sheetTitle">Add competitor</h2><p>${st===1?"Choose the channel we will watch them through first. You can add more sources later.":"A competitor is a rival product and the company behind it. It belongs to one of our products."}</p></div>`;
    b=st===1?igSrcForm():(C?`<div class="nssel">${nsIco(C[0])}<div><b>${C[1]}</b><span>${C[2]}</span></div><button class="link" data-act="nsback">Change</button></div>`:"")+addCompForm();
    f=st===1?`<span></span><span class="acts"><button class="btn primary" data-act="nsnext">Next ${ic("chev")}</button></span>`:`${C?`<button class="btn" data-act="nsback">Back</button>`:`<span class="muted" style="font-size:13px">Will be added to <b style="color:var(--ink);font-weight:500">${monProd().name}</b></span>`}<span class="acts"><button class="btn primary" data-act="do-add-comp">${ic("plus")}Add competitor</button></span>`;}
  else if(SHEET.type==="addEnv"||SHEET.type==="addSrc"){
    const isK=SHEET.type==="addSrc",g=isK?null:MON[SHEET.g];const k=isK?MON.comp.items.find(x=>x.id===SHEET.k):null;
    const LG=SHEET.lid&&isK&&!/-pa-[a-z]+$/.test(SHEET.lid)?(SHEET.lid.includes("-sc-")?"sup":"env"):null;
    const isO=SHEET.g==="own";
    const types=isO?["Internal plan","Store listing","Social post","Press release","Ad library"]:isK&&!LG?["Store listing","Social post","Press release","Ad library"]:(LG||SHEET.g)==="sup"?["Suppliers","Commodity prices","Logistics"]:["Government and regulators","News and media","Statistics and reports"];
    SHEET.type0=SHEET.type0||types[0];
    const LF=SHEET.lid&&LEAFMAP[SHEET.lid];
    h=`<div><div class="k">${LF?esc(LF.path):isK?"Competitor · "+k.name:g.name}</div><h2 id="sheetTitle">Add ${LF?"source to "+esc(LF.label):isK?"source":SHEET.g==="sup"?"supply source":"external factor source"}</h2><p>${isK?"Belongs to "+k.name+".":isO?"Belongs to "+monProd().name+". Add an internal plan or a place where the market shows our product.":"Belongs to a portfolio; every product in it inherits it."}</p></div>`;
    b=`${SHEET.pickOwn?ownSel():""}${SHEET.pick?destSel():""}${relSrc()}<div class="blk"><label class="flabel">Name of the source<input class="field" id="fName" placeholder="${isK?"For example: Lazada store":isO?"For example: Nestlé trade promotion plan":SHEET.g==="sup"?"For example: Tetra Pak supplier portal":"For example: Ministry of Science and Technology"}"></label></div>
      <div class="blk" style="margin-top:14px"><label class="flabel">Source link<input class="field" id="fLink" data-link placeholder="https://"></label><div class="check" data-check></div></div>
      <div class="blk" style="margin-top:14px"><span class="label">Type of source · where it sits on the map</span><div class="typelist">${types.map(t=>`<button aria-pressed="${SHEET.type0===t}" data-act="ftype" data-v="${t}">${t}</button>`).join("")}</div></div>
      ${isK||isO?"":`<div class="blk" style="margin-top:14px"><label class="flabel">Add to portfolio<select class="field">${PF.map(p=>`<option ${p.id===monProd().pf?"selected":""}>${p.name}</option>`).join("")}</select></label></div>`}
      <div class="howto"><h4>The link check</h4><table><tr><td>Feed in the link</td><td>RSS feed</td></tr><tr><td>Social platform or store</td><td>Apify actor</td></tr><tr><td>Public site</td><td>Web crawl (Firecrawl)</td></tr><tr><td>Not a web address</td><td>Blocked, with the reason</td></tr></table></div>`;
    f=`<span class="muted" style="font-size:13px">Will be added to <b style="color:var(--ink);font-weight:500">${isK?k.name:isO?monProd().name:PF.find(x=>x.id===monProd().pf).name}</b></span><span class="acts"><button class="btn primary" data-act="do-add-src">${ic("plus")}Add source</button></span>`;}
  if(SHEET.type==="roles"){const P=[["Read dashboard, events and analysis",()=>true],["Review events",n=>ROLEDEF[n].can.includes("review")],["Change sources",n=>ROLEDEF[n].can.includes("sources")],["Approve the weekly analysis",n=>ROLEDEF[n].can.includes("approve")],["Change roles and invite people",n=>ROLEDEF[n].can.includes("sources")]];
    h=`<div><div class="k">Team &amp; Access</div><h2 id="sheetTitle">Roles and permissions</h2><p>What each role can do in the radar.</p></div>`;
    b=`<table class="t perm-t"><thead><tr><th>Role</th>${P.map(p=>`<th>${p[0]}</th>`).join("")}</tr></thead><tbody>${Object.keys(ROLEDEF).map(n=>`<tr><td><b style="font-weight:500">${n}</b></td>${P.map(p=>`<td>${p[1](n)?`<span class="pm-y">${ic("check")}</span>`:`<span class="pm-n">–</span>`}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
    f=`<span></span><button class="btn" data-act="close-sheet">Close</button>`;}
  if(SHEET.type==="invite"){h=`<div><div class="k">Team &amp; Access</div><h2 id="sheetTitle">Invite member</h2><p>They get an email with a link to join the Nestlé Vietnam radar.</p></div>`;
    b=`<div class="blk"><label class="flabel">Email address<input class="field" id="invEmail" type="email" placeholder="name@example.com" autocomplete="off"></label><div class="check no" id="invErr" aria-live="polite"></div></div>
     <div class="blk" style="margin-top:14px"><label class="flabel">Role<select class="field" id="invRole">${Object.keys(ROLEDEF).map(n=>`<option ${n==="Marketing team"?"selected":""}>${n}</option>`).join("")}</select></label><p class="muted" style="font-size:13px;margin-top:8px">You can change the role later.</p></div>`;
    f=`<span></span><span class="acts"><button class="btn primary" data-act="do-invite">Send Invite</button></span>`;}
  if(SHEET.type==="upload"){const today="2026-11-13",prod=S.scope.level==="prod"?S.scope.id:"boost-opt";SHEET.files=SHEET.files||[];
    h=`<div><div class="k">Upload</div><h2 id="sheetTitle">Upload event</h2></div>`;
    b=`<div class="up-flat"><span class="label">Evidence</span>
      <label class="up-drop" ondragover="event.preventDefault();this.classList.add('over')" ondragleave="this.classList.remove('over')" ondrop="event.preventDefault();this.classList.remove('over');upFiles(event.dataTransfer.files)"><input type="file" id="upFile" multiple accept="image/*,.pdf,.doc,.docx,.xlsx,.csv,.pptx" data-act-change="up-file" hidden>${ic("upload")}<b>Drop files here or <u>browse</u></b><small>Screenshot, photo, PDF or document · up to 20 MB each</small></label>
      <div class="up-files" id="upFiles">${upFileList()}</div>
      <div style="margin-top:18px"><label class="flabel"><span>Or paste a link <span class="opt">(optional)</span></span><input class="field" id="upLink" data-link placeholder="https://"></label><div class="check" data-check></div></div>
     <div class="fgrid up-fields">
      <label class="full">Title<input class="field" id="upTitle" placeholder="For example: Ensure Gold starts buy 2 get 1 at Long Chau"></label>
      <label>Type<select class="field" id="upKind">${["Price","Promotion","Launch","Campaign","Claim","Policy","Supply","Other"].map(k=>`<option>${k}</option>`).join("")}</select></label>
      <label>Source group<select class="field" id="upGroup"><option value="competitors">Competitors</option><option value="environment">External Factors</option><option value="supply">Supply Chain</option></select></label>
      <label>Who it is about<input class="field" id="upActor" placeholder="For example: Ensure Gold"></label>
      <label>Our product<select class="field" id="upProd">${Object.keys(PROD).map(p=>`<option value="${p}" ${p===prod?"selected":""}>${PROD[p].name}</option>`).join("")}</select></label>
      <label>Date seen<input class="field" id="upDate" type="date" value="${today}" max="${today}"></label>
      <label class="full">What we saw<textarea class="field" id="upNote" rows="3" placeholder="Where you saw it and anything that matters"></textarea></label></div></div>`;
    f=`<span class="muted" style="font-size:13px">Goes to Needs review</span><span class="acts"><button class="btn primary" data-act="do-upload">${ic("upload")}Upload Event</button></span>`;}
  if(SHEET.type==="igsrc"){const C=NSCAT.find(x=>x[0]===SHEET.ch);h=`<div><div class="k">Step ${SHEET.step} of 2 · ${monProd().name}</div><h2 id="sheetTitle">${SHEET.step===1?"Add source":"Configure "+C[1].toLowerCase()}</h2></div>`;b=igSrcForm();
    f=SHEET.step===1?`<span></span><span class="acts"><button class="btn primary" data-act="nsnext">Next ${ic("chev")}</button></span>`:`<button class="btn" data-act="nsback">Back</button><span class="acts"><button class="btn primary" data-act="do-ig-src">${ic("plug")}Connect Source</button></span>`;}
  if(SHEET.type==="evsrc"){const e=EV[SHEET.id],F=findSrc(e),x=F.s,st=x.status||"current",evs=Object.values(EV).filter(v=>v.srcLine===e.srcLine).sort((a,b)=>b.d-a.d),C=chanOf(x.type||e.src),w=SHEET.w||"detail",cp=w==="before"?{l:e.cap.before.l,d:e.cap.before.d,n:"Before"}:w==="after"?{l:e.cap.after.l,d:e.cap.after.d,n:"After"}:{l:e.cap.detail||[],d:e.date,n:e.src},lnk=/^https?:/.test(e.srcLine)?`<a class="link" href="${esc(e.srcLine)}" target="_blank" rel="noopener">${esc(e.srcLine)}</a>`:`<span class="muted">${esc(x.url||"Set in Radar Setup")}</span>`;
    h=`<div><div class="k">Capture · ${esc(e.title)}</div><h2 id="sheetTitle">${esc(cp.n)} · ${cp.d}</h2></div>`;
    const M=capMeta(e,w,cp),X=CAPX[e.id]||{},both=w!=="detail";
    b=`<section class="fsec" style="margin-top:20px"><h4>Captured Post</h4>
       <div class="cp-head"><b class="cp-title">${esc(M.title)}</b>${M.url?`<button class="cp-url" data-act="cap-link" title="${esc(M.url)}">${ic("globe")}<span>${esc(M.url.replace(/^https:\/\//,""))}</span></button>`:`<span class="cp-url cp-nourl">${ic("mail")}<span>${esc(M.via)}</span></span>`}
       <div class="cp-meta"><span>${esc(M.author)}</span><span>Published ${esc(M.pub)}</span>${M.lang?`<span>${esc(M.lang)}</span>`:""}</div></div>
       <div class="cq ${w==="after"?"after":""} cq-still"><div class="cq-t">${cp.l.map(esc).join("<br>")}</div><div class="cq-m"><i></i><b>${esc(cp.n)}</b><span>${cp.d}</span></div></div>
       <div class="cp-tags"><span class="flabel">Tags</span><div class="chips">${M.tags.map(t=>`<span class="tag ${t[1]}">${esc(t[0])}</span>`).join("")}</div></div>
       <dl class="kv src-kv" style="margin-top:16px"><dt>Captured</dt><dd>${cp.d}, 09:00 run</dd><dt>Method</dt><dd>${C[0]}</dd>${w!=="detail"?`<dt>Compared with</dt><dd>${w==="before"?`After · ${e.cap.after.d}`:`Before · ${e.cap.before.d}`} <button class="link" data-act="ev-src" data-id="${e.id}" data-w="${w==="before"?"after":"before"}">View ${ic("chev")}</button></dd>`:""}</dl></section>
     ${X.f?`<section class="fsec"><h4>${ic("spark")}What the AI Pulled Out</h4><dl class="kv src-kv ai-kv">${X.f.map(([k,v])=>`<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("")}</dl><p class="ai-note">Read from the captured ${both?"pages":"page"}. Check it against the captured text before you confirm.</p></section>`:""}
     <section class="fsec"><h4>Source</h4><div class="nssel"><span class="ig-ic" style="background:${C[2]}">${ic(C[1])}</span><div><b>${esc(x.name)}</b><span>${esc(x.type||e.src)} · ${C[0]}</span></div><span class="tag ${st==="current"?"good":st==="paused"?"bad":"watching"}">${st==="current"?"Current":st==="paused"?"Paused":st==="queued"?"Queued":"Delayed"}</span></div>
     ${st==="paused"||st==="delayed"?`<div class="rem gap-al" style="margin-top:14px">${ic("alert")}<span>${esc(x.since||st)}. Events from this source may be missing.</span></div>`:""}
     <dl class="kv src-kv" style="margin-top:16px"><dt>Where it sits</dt><dd>${esc(F.path)}</dd><dt>Checked</dt><dd>${x.cad||"Daily, after the 09:00 capture"}</dd><dt>Events captured</dt><dd class="num">${Math.max(x.ev||0,evs.length)}</dd></dl></section>
     <section class="fsec"><h4>Events From This Source</h4>${evs.length?`<div class="people">${evs.map(v=>`<div><span class="grow"><b>${esc(v.title)}</b><small>${v.kind} · ${v.date}</small></span><span class="tag ${v.status==="review"?"watching":v.status==="confirmed"?"good":"plain"}">${v.status==="review"?"Needs review":v.status==="confirmed"?"Confirmed":"Not relevant"}</span>${v.id===e.id?`<span class="muted" style="font-size:13px;white-space:nowrap">This event</span>`:`<button class="link" data-act="evsrc-open" data-id="${v.id}">Open ${ic("chev")}</button>`}</div>`).join("")}</div>`:`<p class="rel-empty">No other events yet.</p>`}</section>`;
    f=`${F.real&&can("sources")?`<button class="btn src-pz" data-act="evsrc-pz" data-id="${e.id}">${ic(st==="paused"?"play":"pause")}${st==="paused"?"Resume":"Pause"}</button>`:"<span></span>"}<span class="acts"><button class="btn primary" data-act="evsrc-map">${ic("monitoring")}Open in Radar Setup</button></span>`;}
  if(SHEET.type==="monNode"){const F=findNode(SHEET.id);if(!F){closeSheet();return;}const t=F.t,d=F.ids.length-1,all=tsrc(t),gaps=all.filter(x=>x.status==="paused"||x.status==="delayed"),kids=t.children||null,KL=kids?(LVLN[d+1]||"Item"):"";
    const srcRow=x=>`<li><span class="nd-src"><i class="dot ${x.status==="queued"?"delayed":x.status}"></i><span><b>${esc(x.name)}</b><small>${esc(x.type)} · ${x.status==="paused"||x.status==="delayed"?esc(x.since||x.status):x.status==="queued"?"First capture queued":x.ev+" events"}</small></span></span>${x.status==="paused"||x.status==="delayed"?`<span class="tag bad">Gap</span>`:""}</li>`;
    h=`<div><div class="k">${esc(F.labels.slice(0,-1).join(" › "))} · ${LVLN[d]||"Group"}</div><h2 id="sheetTitle">${esc(t.label)}</h2>${t.hint?`<p>${esc(t.hint)}</p>`:""}</div>`;
    b=`<div class="nd-stats"><div><b class="num">${all.length}</b><span>Sources watched</span></div><div><b class="num ${gaps.length?"bad":""}">${gaps.length}</b><span>Gaps</span></div><div><b class="num">${kids?kids.length:all.reduce((a,x)=>a+(x.ev||0),0)}</b><span>${kids?KL+(kids.length===1?"":"s"):"Events captured"}</span></div></div>
     ${gaps.length?`<div class="rem gap-al" style="margin-top:16px">${ic("alert")}<span>${gaps.map(x=>`${esc(x.name)}, ${esc(x.since||x.status)}`).join("; ")}.</span></div>`:""}
     ${kids?`<section class="fsec"><h4>Inside ${esc(t.label)} <span class="h-cnt num">${kids.length}</span></h4>${kids.length?`<ul class="grp-ex nd-kids">${kids.map(c=>{const cs=tsrc(c),cg=gapCount(cs);return `<li><span><b>${esc(c.label)}</b><small>${cs.length?cs.length+" source"+(cs.length>1?"s":""):"No sources yet"}${c.children?` · ${c.children.length} ${(LVLN[d+2]||"item").toLowerCase()}${c.children.length===1?"":"s"}`:""}</small></span><span class="nd-r">${cg?`<span class="tag bad">${cg} gap</span>`:""}<button class="link" data-act="mon-node" data-id="${c.id}">View ${ic("chev")}</button></span></li>`;}).join("")}</ul>`:`<p class="muted" style="margin:0">Nothing inside yet.</p>`}</section>`
       :`<section class="fsec"><h4>Sources <span class="h-cnt num">${all.length}</span></h4>${all.length?`<ul class="grp-ex">${all.map(srcRow).join("")}</ul>`:`<p class="muted" style="margin:0">No sources yet. Add the first one so this part of the map is watched.</p>`}</section>`}`;
    const add=t.addKid?`<button class="btn primary need-sources" data-act="add-pa-grp" data-id="${t.id}">${ic("plus")}${t.addKid.l}</button>`:t.addComp?`<button class="btn primary need-sources" data-act="add-comp">${ic("plus")}Add Competitor</button>`:t.leaf?`<button class="btn primary need-sources" data-act="add-leaf" data-id="${t.id}">${ic("plus")}Add Source</button>`:"";
    f=`<button class="btn" data-act="mon-goto" data-id="${t.id}">${ic("monitoring")}Show on Map</button><span class="acts">${add}</span>`;}
  if(SHEET.type==="addGrp"){const I=paGrpInfo(SHEET.pid),sg=I.kind==="subgroup",mics=SHEET.mics=SHEET.mics||[],taken=new Set(I.list.map(([,l])=>l.toLowerCase())),KN=sg?"Subgroup":"Micro-group";
    const crumbs=I.path.split(" › ");
    h=`<div><div class="k">${esc(I.path)}</div><h2 id="sheetTitle">Add ${KN} to ${esc(I.label)}</h2></div>`;
    b=`<section class="fsec"><h4>${KN} Details</h4>
       <label class="flabel" for="fGrp">Name</label><input class="field" id="fGrp" maxlength="40" autocomplete="off" placeholder="${sg?"For example: Sampling":"For example: Bundle offers"}" aria-describedby="grpHelp">
       <div class="grp-help" id="grpHelp"><span>${sg?"A new kind of product activity to watch.":"A narrower slice of "+esc(I.label)+" to watch."} Shown on the map card.</span><span class="num" id="grpCnt">0/40</span></div>
       <div class="check no" id="grpErr" style="display:none"></div>
       <div class="grp-sug"><span class="label">Suggestions</span><div class="chips">${I.sug.filter(x=>!taken.has(x.toLowerCase())).map(x=>`<button class="chip" data-act="grp-sug" data-v="${esc(x)}">${esc(x)}</button>`).join("")}</div></div></section>
     ${sg?`<section class="fsec"><h4>Micro-groups <span class="h-opt">Optional</span></h4>
       <p class="muted" style="margin:0 0 12px;font-size:14px">Split this subgroup into narrower slices now, or add them later from the map.</p>
       <div class="grp-row"><input class="field" id="fMic" maxlength="40" autocomplete="off" placeholder="For example: Pharmacy sampling events" aria-label="Micro-group name"><button class="btn" data-act="grp-mic-add">${ic("plus")}Add</button></div>
       ${mics.length?`<ul class="grp-mics">${mics.map((m,i)=>`<li><span>${esc(m)}</span><button class="nb" data-act="grp-mic-del" data-i="${i}" aria-label="Remove ${esc(m)}">${ic("x")}</button></li>`).join("")}</ul>`:""}</section>`:""}
     <section class="fsec"><h4>Where It Goes</h4><ol class="grp-path">${crumbs.map((c,i)=>`<li style="--i:${i}">${esc(c)}</li>`).join("")}<li style="--i:${crumbs.length}" class="new"><b id="grpPrev">New ${KN.toLowerCase()}</b><span class="tag blue">New</span></li>${mics.map(m=>`<li style="--i:${crumbs.length+1}" class="new-k">${esc(m)}</li>`).join("")}</ol></section>
     <section class="fsec"><h4>Already in ${esc(I.label)} <span class="h-cnt num">${I.list.length}</span></h4>${I.list.length?`<ul class="grp-ex">${I.list.map(([id,l])=>{const n=I.cnt(id);return `<li><span>${esc(l)}</span><small>${n?n+" source"+(n>1?"s":""):"No sources yet"}</small></li>`;}).join("")}</ul>`:`<p class="muted" style="margin:0">Nothing yet. This will be the first.</p>`}</section>`;
    f=`<span class="muted" style="font-size:13px">Will be added to <b style="color:var(--ink);font-weight:500">${esc(monProd().name)}</b></span><span class="acts"><button class="btn primary" data-act="do-add-grp">${ic("plus")}Add ${KN}</button></span>`;}
  if(SHEET.type==="emailcfg"){h=`<div><div class="k">Integration · Email digest</div><h2 id="sheetTitle">Email settings</h2></div>`;
    b=`<section class="fsec"><h4>Sender</h4><div class="fgrid"><label>Sender name<input class="field" id="dgFrom" value="${esc(DIGEST.from)}"></label><label>Reply-to address<input class="field" id="dgReply" type="email" value="${esc(DIGEST.reply)}"></label></div></section>
    <section class="fsec"><h4>People on the Email List</h4><p class="dg-note">Teams and roles are chosen for each analysis in Report Setup. Add individual people or outside addresses here, and choose what each one gets.</p>
     <div class="dg-list">${DIGEST.people.map((p,i)=>`<div class="dg-row"><b class="dg-mail">${esc(p.email)}</b><div class="chips">${DGK.map(([k,l])=>`<button class="chip" aria-pressed="${p.gets.includes(k)}" data-act="dg-get" data-i="${i}" data-v="${k}">${p.gets.includes(k)?ic("check"):""}${l}</button>`).join("")}</div><button class="dg-x" data-act="dg-del" data-i="${i}" aria-label="Remove ${esc(p.email)}" title="Remove">${ic("x")}</button></div>`).join("")||`<p class="muted">No one yet.</p>`}</div>
     <div class="dg-add"><label class="flabel" style="flex:1">Add a person<input class="field" id="dgNew" type="email" placeholder="name@example.com" autocomplete="off"></label><button class="btn" data-act="dg-add">${ic("plus")}Add</button></div><div class="check no" id="dgErr" aria-live="polite"></div></section>`;
    f=`<span class="muted" style="font-size:13px">${DIGEST.people.length} people on the list</span><span class="acts"><button class="btn primary" data-act="dg-save">Save</button></span>`;}
  if(["addSrc","addEnv","addComp","invite","emailcfg","upload","igsrc"].includes(SHEET.type)&&!(SHEET.type==="igsrc"&&SHEET.step===1))f=f.replace('<span class="acts">',`<span class="acts"><button class="link sample-link" type="button" data-act="fill-sample">${ic("spark")}Use Sample Data</button>`);
  sh.innerHTML=`<div class="sheet-h">${h}${X}</div><div class="sheet-b">${b}</div><div class="sheet-f">${f}</div>`;
}
function upFileList(){return (SHEET&&SHEET.files||[]).map((f,i)=>`<span class="up-file">${ic("doc")}<span>${esc(f.n)}</span><small>${f.s>1048576?(f.s/1048576).toFixed(1)+" MB":Math.max(1,Math.round(f.s/1024))+" KB"}</small><button data-act="up-rm" data-i="${i}" aria-label="Remove ${esc(f.n)}">${ic("x")}</button></span>`).join("");}
function upFiles(fl){if(!SHEET)return;SHEET.files=[...(SHEET.files||[]),...[...fl].map(f=>({n:f.name,s:f.size}))];const b=$("#upFiles");if(b)b.innerHTML=upFileList();}
function destSel(){monTree();const ent=Object.entries(LEAFMAP),ord=[...ent.filter(([,L])=>L.path.startsWith("Our Context")),...ent.filter(([,L])=>!L.path.startsWith("Our Context"))];
  const grp={};ord.forEach(([id,L])=>{const g=L.path.startsWith("Our Context")?"Our Context":"Competitor · "+L.path.split(" › ")[0];(grp[g]=grp[g]||[]).push([id,L]);});
  return `<div class="blk"><label class="flabel">Where it belongs<select class="field" data-act-change="src-dest" aria-label="Where the source belongs">${Object.entries(grp).map(([g,l])=>`<optgroup label="${esc(g)}">${l.map(([id,L])=>`<option value="${id}" ${id===SHEET.lid?"selected":""}>${esc(L.path.replace(/^Our Context › /,""))}</option>`).join("")}</optgroup>`).join("")}</select></label></div>`;}
const NSCAT=[["rss","RSS feed","RSS feeds connector","rss","RSS feed","rss"],["store","Store listing","Apify · Shopee, Lazada, TikTok Shop","bot","Store listing","apify"],["social","Social page","Apify · Facebook, TikTok, YouTube","chat","Social post","apify"],["adlib","Ad library","Apify · Meta Ad Library","layers","Ad library","apify"],["web","Website or newsroom","Firecrawl · page changes and new articles","globe","Web crawl","fire"],["email","Email inbox","Email feed · forwarding rule","mail","Email feed","mail"],["form","Web form","Upload form, submitted by people","upload","Web form","form"],["api","Custom","REST API or webhook","plug","API","api"]];
const NSCOL={rss:"#A3650B",store:"#34682A",social:"#34682A",adlib:"#34682A",web:"#7E1352",email:"#017CBA",form:"#343231",api:"#52667A"};
const NSFREQ={id:"freq",l:"Check frequency",type:"sel",opts:["Every hour","Every 6 hours","Daily, after the 09:00 capture"]};
const NSCFG={
 rss:[{id:"url",l:"Feed link",ph:"https://example.com/rss",req:1,hint:"Usually ends in /rss, /feed or .xml."},{id:"kw",l:"Only items that mention",ph:"For example: nutrition, sữa, Ensure"},NSFREQ],
 store:[{id:"plat",l:"Platform",type:"sel",opts:["Shopee","Lazada","TikTok Shop","Tiki","Brand e-store"]},{id:"url",l:"Store or product link",ph:"https://shopee.vn/…",req:1},{type:"sec",l:"What to watch"},{id:"w1",l:"Price and pack sizes",type:"tog",on:1},{id:"w2",l:"Promotion badges and vouchers",type:"tog",on:1},{id:"w3",l:"Ratings and reviews",type:"tog",on:0},NSFREQ],
 social:[{id:"plat",l:"Platform",type:"sel",opts:["Facebook","TikTok","YouTube","Instagram","Zalo OA"]},{id:"url",l:"Page link",ph:"https://facebook.com/…",req:1},{id:"cm",l:"Include comments",type:"tog",on:1},{id:"lv",l:"Include live streams",type:"tog",on:0,hint:"Live shopping sessions are summarised after they end."},NSFREQ],
 adlib:[{id:"adv",l:"Advertiser or brand",ph:"For example: Ensure Gold",req:1},{id:"ctry",l:"Country",type:"sel",opts:["Vietnam","Vietnam and Thailand","All countries"]},{id:"new",l:"Only new ads",type:"tog",on:1},NSFREQ],
 web:[{id:"url",l:"Website link",ph:"https://…",req:1},{id:"watch",l:"Watch for",type:"sel",opts:["New articles and press releases","Any change to the page","Changes to prices on the page"]},{id:"depth",l:"Follow links",type:"sel",opts:["This page only","This page and one level down"]},NSFREQ],
 email:[{id:"from",l:"Sender address",ph:"notices@supplier.com",req:1},{type:"sec",l:"Forward to the radar inbox",hint:"Ask the sender to add this address, or set a forwarding rule in Outlook. Attachments are read as evidence."},{type:"code",l:"Radar inbox",v:"radar.vn+boost@inbox.example.com"},{id:"att",l:"Read attachments",type:"tog",on:1}],
 form:[{type:"sec",l:"How it works",hint:"People submit evidence with <b>Upload Event</b> on Events Review or Integration. Anything sent through this channel is tagged with its name."},{id:"who",l:"Who can submit",type:"sel",opts:["Everyone in the workspace","Reviewers and above","Field sales team only"]}],
 api:[{type:"code",l:"Endpoint",v:"POST https://api.example.com/v1/evidence"},{type:"code",l:"API key",v:"radar_live_••••••••7c1d",copy:1,hint:"A new key just for this source."},{type:"code",l:"Webhook",v:"https://hooks.example.com/radar/7f3a9c21",copy:1,hint:"For Zapier, Make and cloud functions."}]};
function nsField(f){const v=SHEET.cfg[f.id];
 if(f.type==="sec")return `<div class="nssec"><b>${f.l}</b>${f.hint?`<p>${f.hint}</p>`:""}</div>`;
 if(f.type==="code")return `<div class="blk"><span class="label">${f.l}</span><div class="nscode"><code>${f.v}</code>${f.copy?`<button class="btn sm" data-act="nscopy">Copy</button>`:""}</div>${f.hint?`<p class="nshint">${f.hint}</p>`:""}</div>`;
 if(f.type==="tog"){const on=v==null?!!f.on:!!v;return `<div class="nstog"><span>${f.l}${f.hint?`<small>${f.hint}</small>`:""}</span><input type="checkbox" class="switch-in" ${on?"checked":""} aria-label="${f.l}" data-act-change="nstog" data-f="${f.id}"></div>`;}
 if(f.type==="sel")return `<div class="blk"><label class="flabel">${f.l}<select class="field" id="ns-${f.id}">${f.opts.map(o=>`<option ${v===o?"selected":""}>${o}</option>`).join("")}</select></label>${f.hint?`<p class="nshint">${f.hint}</p>`:""}</div>`;
 return `<div class="blk"><label class="flabel"><span>${f.l}${f.req?"":` <span class="opt">(optional)</span>`}</span><input class="field" id="ns-${f.id}" ${f.req?"data-req":""} ${f.id==="url"?"data-link":""} placeholder="${esc(f.ph||"")}" autocomplete="off"></label>${f.id==="url"?`<div class="check" data-check></div>`:""}${f.hint?`<p class="nshint">${f.hint}</p>`:""}</div>`;}
const nsIco=k=>{const c=NSCAT.find(x=>x[0]===k);return `<span class="ig-ic" style="background:${NSCOL[k]}">${ic(c[3])}</span>`;};
function igSrcForm(){monTree();const C=NSCAT.find(x=>x[0]===SHEET.ch);
 if(SHEET.step===1)return `<div class="blk"><span class="label">Channel</span><label class="pill pill-search nsq">${ic("search")}<input type="search" placeholder="Search channels" autocomplete="off" aria-label="Search channels" oninput="const q=this.value.toLowerCase();let n=0;document.querySelectorAll('.nsopt').forEach(b=>{const ok=b.dataset.q.includes(q);b.hidden=!ok;if(ok)n++;});document.querySelector('.nsnone').hidden=n>0"></label>
   <div class="nsgrid" role="radiogroup" aria-label="Channel">${NSCAT.map(([k,n,t])=>`<button class="nsopt${SHEET.ch===k?" on":""}" role="radio" aria-checked="${SHEET.ch===k}" data-act="nsk" data-k="${k}" data-q="${(n+" "+t).toLowerCase()}">${nsIco(k)}<i class="nsck" aria-hidden="true">${ic("check")}</i><span class="nstx"><b>${n}</b><em>${t}</em></span></button>`).join("")}</div><p class="rel-empty nsnone" hidden>No channels match your search.</p></div>`;
 return `<div class="nssel">${nsIco(C[0])}<div><b>${C[1]}</b><span>${C[2]}</span></div><button class="link" data-act="nsback">Change</button></div>
  <section class="fsec"><h4>Connection</h4><div class="blk" style="margin-top:0!important"><label class="flabel"><span>Name of the source <span class="opt">(optional)</span></span><input class="field" id="fName" placeholder="${C[1]}" autocomplete="off"></label></div>${NSCFG[C[0]].map(nsField).join("")}</section>
  <section class="fsec"><h4>On the Map</h4>${SHEET.kind?destPick():destSel()}${relSrc()}</section>`;}
function dpLid(){const K=SHEET.kind,own=SHEET.who==="own",cats=K==="env"?PESTEL:SC;if(!cats.some(c=>c[0]===SHEET.cat))SHEET.cat=cats[0][0];
  if(own){const mics=MIC[K][SHEET.cat]||[];if(!mics.some(m=>m[0]===SHEET.mic))SHEET.mic=mics[0][0];return K+"-"+SHEET.cat+"-"+SHEET.mic;}
  return SHEET.who+(K==="env"?"-ef-":"-sc-")+SHEET.cat;}
function destPick(){monTree();const K=SHEET.kind,own=SHEET.who==="own",cats=K==="env"?PESTEL:SC;SHEET.lid=dpLid();const L=LEAFMAP[SHEET.lid];
  return `<div class="dp"><span class="flabel">Belongs to</span><div class="chips dp-who" role="radiogroup" aria-label="Belongs to"><button class="chip" role="radio" aria-checked="${own}" aria-pressed="${own}" data-act="dp-who" data-v="own">${own?ic("check"):""}Our Context</button>${MON.comp.items.map(k=>`<button class="chip" role="radio" aria-checked="${SHEET.who===k.id}" aria-pressed="${SHEET.who===k.id}" data-act="dp-who" data-v="${k.id}">${SHEET.who===k.id?ic("check"):""}${esc(k.name)}</button>`).join("")}</div>
   <p class="dp-hint">${own?`Watched for ${esc(monProd().name)} and every product in its portfolio.`:`Only for ${esc(MON.comp.items.find(k=>k.id===SHEET.who).name)}: for example a rule or supplier that affects them, not us.`}</p>
   <div class="fgrid dp-sel"><label>${K==="env"?"External factor":"Supply chain stage"}<select class="field" data-act-change="dp-cat">${cats.map(([c,l])=>`<option value="${c}" ${c===SHEET.cat?"selected":""}>${l}</option>`).join("")}</select></label>${own?`<label>Micro-group<select class="field" data-act-change="dp-mic">${(MIC[K][SHEET.cat]||[]).map(([m,l])=>`<option value="${m}" ${m===SHEET.mic?"selected":""}>${l}</option>`).join("")}</select></label>`:`<label>Micro-group<div class="field dp-na">Not used for competitors</div></label>`}</div>
   <div class="dp-path">${ic("monitoring")}<span>${L?esc((own?"":"Competitors › ")+L.path):""}</span></div></div>`;}
function relSrc(){const L=SHEET.lid&&LEAFMAP[SHEET.lid];if(!L)return "";const src=L.src||[];
  return `<div class="rel"><span class="label">Already watched in ${esc(L.label)} <span class="h-cnt num">${src.length}</span></span>${src.length?`<div class="rel-list">${src.map(x=>`<div><i class="dot ${x.status==="queued"?"delayed":x.status}"></i><span>${esc(x.name)}</span><small>${esc(x.type)}${x.status==="paused"||x.status==="delayed"?" · "+(x.since||x.status):""}</small></div>`).join("")}</div>`:`<p class="rel-empty">Nothing yet. This will be the first source here.</p>`}</div>`;}
function findNode(id){let hit=null;const w=(t,labels,ids)=>{if(hit)return;const L=[...labels,t.label],I=[...ids,t.id];if(t.id===id){hit={t,labels:L,ids:I};return;}(t.children||[]).forEach(c=>w(c,L,I));};monTree().forEach(t=>w(t,[],[]));return hit;}
const LVLN=["Main group","Group","Subgroup","Micro-group"];
let OWNPA=null;const ownPA=()=>OWNPA||(OWNPA=PAMIC.map(x=>[x[0],x[1]]));
const GRPSUG={sub:["Sampling","Distribution","Shelf Placement","Loyalty Programmes","Influencer Partnerships"],price:["Bundle offers","Pack-size pricing","Channel price gaps"],promo:["Bundle offers","Gift with purchase","Flash sales"],launch:["New flavours","Pack changes","Range extensions"],ads:["Influencer posts","TV and video","Out-of-home"],claims:["Health claims","Pack redesigns","Certifications"],any:["Bundle offers","Seasonal offers","Channel-specific activity"]};
function paGrpInfo(pid){
  const own=MON.own.sources;
  if(pid==="own")return {kind:"subgroup",label:"Product-Related Activities",path:"Our Context › Product-Related Activities",list:ownPA(),cnt:m=>own.filter(x=>x.sub===m).length,sug:GRPSUG.sub,add:(id,l)=>{ownPA().push([id,l]);OWNMIC[id]=[];return "own-"+id;}};
  if(pid.startsWith("own-")){const m=pid.slice(4),e=ownPA().find(x=>x[0]===m);return {kind:"micro-group",label:e[1],path:"Our Context › Product-Related Activities › "+e[1],list:OWNMIC[m],cnt:x=>own.filter(y=>y.sub===m&&y.mic===x).length,sug:GRPSUG[m]||GRPSUG.any,add:(id,l)=>{OWNMIC[m].push([id,l]);return pid+"-"+id;}};}
  const k=MON.comp.items.find(x=>pid===x.id+"-pa");return {kind:"micro-group",label:"Product-Related Activities",path:"Competitors › "+k.name+" › Product-Related Activities",list:k.pamic,cnt:m=>k.sources.filter(x=>x.mic===m).length,sug:GRPSUG.any,add:(id,l)=>{k.pamic.push([id,l]);return pid+"-"+id;}};}
document.addEventListener("keydown",e=>{if(e.key!=="Enter")return;if(e.target.id==="fMic"){e.preventDefault();A["grp-mic-add"]();}else if(e.target.id==="fGrp"){e.preventDefault();A["do-add-grp"]();}});
function ownSel(){monTree();const grp={};Object.keys(LEAFMAP).filter(k=>k.startsWith("own-")).forEach(k=>{const p=LEAFMAP[k].path.split(" › "),g=p[p.length-2];(grp[g]=grp[g]||[]).push(k);});
  return `<div class="blk" style="margin-bottom:14px"><label class="flabel">Product-related activity<select class="field" data-act-change="src-dest" aria-label="Product-related activity">${Object.entries(grp).map(([g,ks])=>`<optgroup label="${esc(g)}">${ks.map(k=>`<option value="${k}" ${k===SHEET.lid?"selected":""}>${esc(LEAFMAP[k].label)}</option>`).join("")}</optgroup>`).join("")}</select></label></div>`;}
const CAPX={
e1:{f:[["Mechanic","Buy 2 get 1"],["Pack","850 g tin"],["Valid until","30 Nov"],["Effective price","About 33% lower per tin"],["Channel","Pharmacy chain e-store"]],vi:{before:["Hộp 850 g giá niêm yết","Không có nhãn khuyến mãi"],after:["Hộp 850 g: mua 2 tặng 1","Nhãn: áp dụng đến 30/11"]}},
e2:{f:[["Store","Sure Prevent Gold Official, verified"],["Listings","12"],["Live shopping","Fridays at 20:00"],["Channel","TikTok Shop"]],vi:{detail:["Gian hàng chính hãng mới: Sure Prevent Gold Official","12 sản phẩm, livestream mỗi thứ Sáu lúc 20:00"]}},
e3:{f:[["Document","Draft circular"],["Consultation","60 days"],["Requirement","Clinical evidence for time-bound claims"],["Issued by","Vietnam Food Administration"]],vi:{detail:["Dự thảo thông tư được công bố để lấy ý kiến trong 60 ngày","Công bố tác dụng trong thời gian cụ thể phải có bằng chứng lâm sàng"]}},
e4:{f:[["Format","Facebook post"],["Shares","1.2k in 24 hours"],["Mechanic","10,000 steps a day for 30 days"],["Reward","Prizes from Anlene Gold"]],vi:{detail:["Bài đăng Facebook, 1,2 nghìn lượt chia sẻ trong 24 giờ","10.000 bước mỗi ngày trong 30 ngày, nhận quà từ Anlene Gold"]}},
e5:{f:[["Input","Whey protein concentrate 80%"],["Change","+6%"],["Effective","1 Jan 2027"],["Reason","Dairy commodity prices"]]},
e6:{f:[["Pack","1.7 kg tin, new"],["Price per gram","12% lower"],["Range before","400 g and 850 g"],["Channel","Lazada"]],vi:{before:["Hộp 400 g và 850 g"],after:["Hộp 1,7 kg mới, giá mỗi gram thấp hơn 12%"]}},
e7:{f:[["Product","Sure Prevent Gold Protein+"],["Protein","18 g per serving"],["Launch","December"],["Channel","Pharmacies"]],vi:{detail:["Sure Prevent Gold Protein+: 18 g đạm mỗi khẩu phần","Có mặt tại nhà thuốc từ tháng 12"]}},
e8:{f:[["Audience","Care homes"],["Topic","Texture-modified drinks"],["Framework","IDDSI"]]},
e9:{f:[["Mechanic","Flash sale"],["Discount","15%"],["Duration","24 hours"],["Pack","400 g tin"],["Channel","Shopee"]],vi:{before:["Hộp 400 g giá niêm yết"],after:["Hộp 400 g giảm 15%, chỉ trong 24 giờ"]}},
e10:{f:[["Format","Instagram teaser"],["Product","New vanilla flavour"],["Timing","Coming soon, no date"]],vi:{detail:["Teaser Instagram: “Điều mới mẻ sắp ra mắt”"]}},
e11:{f:[["Who","Long Châu and Pharmacity"],["Change","Review of listing terms"],["Timing","Q1 2027"]],vi:{detail:["Long Châu và Pharmacity sẽ xem xét lại điều khoản niêm yết trong quý 1"]}},
c1:{f:[["Format","Facebook re-post"],["Content","2025 Tet gift-box advert"],["Change","New caption"]],vi:{detail:["Quảng cáo được đăng lại với chú thích mới"]}},
c2:{f:[["Format","14 Facebook ads and a TV spot"],["Spokesperson","Geriatrician"],["Channels","Facebook, VTV3"]],vi:{detail:["14 quảng cáo Facebook mới có bác sĩ lão khoa","TVC trên VTV3"]}},
c3:{f:[["Pack","400 g"],["Price","VND 465,000 → 437,000"],["Change","−6%"]],vi:{before:["Hộp 400 g giá 465.000 ₫"],after:["Hộp 400 g giá 437.000 ₫"]}},
c4:{f:[["Format","Ready-to-drink, 110 ml"],["Pack","4-pack"],["Range before","Powder only"]],vi:{before:["Chỉ có dạng bột"],after:["Dạng uống liền 110 ml, lốc 4 hộp"]}},
c5:{f:[["Claim","Muscle and bone support in 4 weeks"],["Placement","New pack shot"],["Watch","Time-bound claim under the draft rule"]],vi:{detail:["“Cơ và xương chắc khỏe sau 4 tuần” trên hình bao bì mới"]}},
c6:{f:[["Proposal","Higher fines for misleading food ads"],["Maximum fine","VND 200 million"],["Issued by","Ministry of Health"]],vi:{detail:["Đề xuất mức phạt lên đến 200 triệu đồng"]}},
c7:{f:[["Mechanic","Gift with purchase"],["Gift","Shaker"],["Pack","900 g tin"],["Channel","Long Châu"]],vi:{detail:["Tặng bình lắc khi mua hộp 900 g"]}},
c8:{f:[["Pack","800 g"],["Price","VND 520,000 → 536,000"],["Change","+3%"]],vi:{before:["Hộp 800 g giá 520.000 ₫"],after:["Hộp 800 g giá 536.000 ₫"]}},
c9:{f:[["Format","30-second TV spot"],["Channels","VTV1 and HTV7"],["Message","Doctor-recommended"]],vi:{detail:["TVC 30 giây trên VTV1 và HTV7"]}},
c10:{f:[["Index","Whole milk powder"],["Change","+4.2%"],["Auction","20 Oct"]]},
c11:{f:[["Activation","Pop-up stands"],["Locations","6 Aeon malls"],["Hook","Bone density tests"]],vi:{detail:["Đo mật độ xương tại 6 trung tâm thương mại"]}},
c12:{f:[["Proposal","Front-of-pack labelling"],["Disclosure","Protein and sugar"],["Issued by","Ministry of Health"]],vi:{detail:["Công bố hàm lượng đạm và đường ở mặt trước bao bì"]}},
n1:{f:[["Format","Brand greeting"],["Offer","None"]],vi:{detail:["Lời chúc từ thương hiệu, không có ưu đãi"]}},
n2:{f:[["Format","Recipe video"],["Offer","None"]],vi:{detail:["Nội dung công thức nấu ăn"]}}};
function capMeta(e,w,cp){const sl=t=>t.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/đ/g,"d").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),src=e.src,sl0=e.srcLine||"",org=sl(e.org||e.actor),h=[...e.id].reduce((a,c)=>a*31+c.charCodeAt(0),7);
  const host=src==="Store listing"?(/shopee/i.test(sl0)?"shopee.vn/"+sl(e.actor)+"-official":/lazada/i.test(sl0)?"lazada.vn/shop/"+sl(e.actor):/tiktok/i.test(sl0)?"shop.tiktok.com/vn/store/"+sl(e.actor):org+".com.vn/shop"):src==="Social post"?"facebook.com/"+sl(e.actor).replace(/-/g,"")+"vn/posts":src==="Ad library"?"facebook.com/ads/library":src==="Press release"?org+".com.vn/newsroom":src==="News"?"vnexpress.net/kinh-doanh":src==="Government site"?"vfa.gov.vn/tin-tuc":src==="Report"?"gso.gov.vn/bao-cao":null;
  const url=host?`https://${host}/${sl(e.title).split("-").slice(0,6).join("-")}-${Math.abs(h)%90000+10000}`:null;
  const title=w==="before"?`${e.actor}: page as it was on ${cp.d}`:e.title;
  const author=src==="Social post"||src==="Ad library"?`${e.actor} · verified page`:src==="Store listing"?sl0||e.actor:src==="Supplier notice"?"From: supplier account team":sl0||e.actor;
  const hh=7+Math.abs(h)%12,mm=Math.abs(h>>3)%60;const pub=`${cp.d}, ${String(hh).padStart(2,"0")}:${String(mm).padStart(2,"0")}`;
  const lang=/Social post|News|Government site|Ad library/.test(src)?"Vietnamese, auto-translated":"";
  const tags=[[e.kind,"blue"],[e.actor,"plain"],...e.chosen.map(p=>[PROD[p].name,"plain"]),...(e.ctx||[]).map(c=>[c,"plain"])].filter((t,i,a)=>a.findIndex(x=>x[0]===t[0])===i);
  return {title,url,via:src==="Supplier notice"?"Forwarded to the radar inbox":"Uploaded by hand",author,pub,lang,tags};}
function chanOf(t){t=t||"";return /RSS/i.test(t)?["RSS feeds","rss","#A3650B"]:/Email|Supplier notice/i.test(t)?["Email feed","mail","#017CBA"]:/Manual|Web form/i.test(t)?["Web form","upload","#343231"]:/Store|Social|Ad library/i.test(t)?["Apify","bot","#34682A"]:["Firecrawl","globe","#7E1352"];}
function findSrc(e){monTree();const n=(e.srcLine||"").toLowerCase();for(const L of Object.values(LEAFMAP))for(const x of (L.src||[]))if(x.name.toLowerCase()===n)return {s:x,path:L.path,real:true};
  return {s:{name:e.srcLine,type:e.src,status:"current"},path:`${GROUPS[e.group]||"Source"} › ${e.actor}`,real:false};}
function addCompForm(){
  const types=["Store listing","Social post","LinkedIn","Press release","Ad library"];SHEET.types=SHEET.types||["Store listing","Social post"];SHEET.how=SHEET.how||"Direct";
  const hd=t=>`<h4>${t}</h4>`;
  return `<section class="fsec">${hd("The Company")}<div class="fgrid"><label>Company name<input class="field" id="fCo" placeholder="For example: Nutricare"></label><label><span>Company website <span class="opt">(optional)</span></span><input class="field" placeholder="https://"></label></div></section>
  <section class="fsec">${hd("Their Product")}<div class="fgrid"><label>Product or brand name<input class="field" id="fProd" placeholder="For example: Nutricare Gold"></label><label>Competes with our product<select class="field">${Object.keys(PROD).map(p=>`<option ${p===monPid()?"selected":""}>${PROD[p].name}</option>`).join("")}</select></label>
   <label>How it competes<div class="fseg" role="group" aria-label="How it competes">${["Direct","Indirect","Substitute"].map(v=>`<button type="button" aria-pressed="${SHEET.how===v}" data-act="fhow" data-v="${v}">${v}</button>`).join("")}</div></label><label><span>Price against ours <span class="opt">(ours = 100)</span></span><input class="field" id="fIdx" inputmode="numeric" placeholder="For example: 85"></label>
   <label>Format and pack sizes<input class="field" placeholder="Powder, 400 g and 900 g tins"></label><label>Where it is sold<input class="field" placeholder="Pharmacy chains, e-commerce"></label>
   <label class="full">Main claim and anything else we know<input class="field" placeholder="For example: bone and muscle in 8 weeks"></label></div></section>
  ${SHEET.ch?(()=>{const C=NSCAT.find(x=>x[0]===SHEET.ch);return `<section class="fsec">${hd("First Source · "+C[1])}<div class="blk" style="margin-top:0!important"><label class="flabel"><span>Name of the source <span class="opt">(optional)</span></span><input class="field" id="fName" placeholder="${C[1]}" autocomplete="off"></label></div>${NSCFG[C[0]].map(nsField).join("")}</section>`;})():`<section class="fsec">${hd("Sources to Watch")}<span class="label">Type of source</span><div class="chips">${types.map(t=>`<button class="chip" aria-pressed="${SHEET.types.includes(t)}" data-act="ftypes" data-v="${t}">${SHEET.types.includes(t)?ic("check"):ic("plus")}${t}</button>`).join("")}</div>
   <div class="src-links">${SHEET.types.map(t=>`<div><label class="flabel">${t} link<input class="field" data-link data-t="${t}" placeholder="https://"></label><div class="check" data-check></div></div>`).join("")}</div></section>`}
  <div class="howto"><h4>What happens next</h4>The radar checks each link, runs baseline research, then captures on the cadence. Every change it sees becomes an event for ${monProd().name}, tied to the link it came from.</div>`;
}
function checkLink(v){
  v=v.trim();if(!v)return ["",""];
  if(!/^https?:\/\/[^\s.]+\.[^\s]+$/i.test(v))return ["no","Blocked · this is not a web address. Paste a link that starts with https://"];
  if(/rss|\.xml|feed/i.test(v))return ["ok","RSS feed · a feed is available. New items arrive as they are published."];
  if(/shopee|lazada|tiki|tiktok|sendo/i.test(v))return ["ok","Apify actor · store listing. Price, promotion badge and pack sizes can be observed."];
  if(/facebook|instagram|youtube|zalo|linkedin/i.test(v))return ["ok","Apify actor · social posts. New posts, reach and comments can be observed."];
  return ["ok","Web crawl (Firecrawl) · public site. Page changes and new articles can be observed."];
}
/* ================= monitoring ================= */
const NW=224,NH=60,RH=70,XC={root:24,main:286,group:548,sub:810,micro:1072,src:1334,store:1630,review:1892,feed:2154};
const SC=[["up","Upstream","Tiers 1–3: raw materials, components and sub-tier suppliers"],["ops","Internal Operations","Procurement, manufacturing, quality control, warehousing and inventory"],["down","Downstream","Distribution centres, wholesalers, retailers, last-mile and returns"]];
const PESTEL=[["P","Political","Government policy, stability, tax, trade restrictions, tariffs"],["E","Economic","Growth, interest rates, inflation, exchange rates, income, labour costs"],["S","Social","Demographics, culture, lifestyle trends, health consciousness"],["T","Technological","Innovation, automation, R&D, AI, digital infrastructure"],["En","Environmental","Climate, weather, footprint, sustainability, resource scarcity"],["L","Legal","Labour law, health and safety, consumer rights, data privacy, licensing"]];
const SUBMAP={"s-whey":"up","s-gdt":"up","s-frt":"down","s-pkg":"up","m-pch":"up","m-gdt":"up","m-frt":"down","d-xg":"up","d-sch":"up","s-vfa":"L","s-moh":"P","s-vnx":"E","s-gso":"E","s-who":"S","m-ten":"P","m-moh":"L","m-vns":"S","m-vnx":"S","d-who":"S","d-iddsi":"L","d-care":"S"};
const DEFOPEN=new Set(["main-comp","main-ctx","k-ens"]);
let LEAFMAP={};
function monExt(){S.mon.op=S.mon.op||{};
  MON.comp.items.forEach(k=>{if(!k.sc){k.sc={up:[],ops:[],down:[]};k.ef={P:[],E:[],S:[],T:[],En:[],L:[]};
    if(k.id==="k-ens"){k.sc.down.push({id:"x-ens1",name:"Distributor price list",type:"Web crawl",status:"current",ev:2});k.ef.L.push({id:"x-ens2",name:"Ad standards rulings",type:"Web crawl",status:"current",ev:1});}
    if(k.id==="k-spg")k.sc.ops.push({id:"x-spg1",name:"Vinamilk factory news",type:"Press release",status:"current",ev:1});}});
  MON.sup.sources.forEach(s=>s.sub=s.sub||SUBMAP[s.id]||"up");MON.env.sources.forEach(s=>s.sub=s.sub||SUBMAP[s.id]||"E");
  const mk=(id,name,type,i)=>({id,name,type,status:"current",ev:(name.length+i*3)%7+1});
  const fill=(arr,list,pre)=>{list.forEach((d,i)=>{if(arr.length<3&&!arr.some(x=>x.name===d[0]))arr.push(mk(pre+i,d[0],d[1],i));});};
  if(!MON.own){const p=monProd().name;MON.own={name:"Product-Related Activities",know:"Our own prices, promotions, launches, advertising and claims for "+p+": what we planned, and what the market actually shows.",sources:[]};
    Object.entries(OWNMIC).forEach(([sub,ms])=>ms.forEach(([m,,list])=>list.forEach(([n,t],i)=>MON.own.sources.push({...mk("own-"+monPid()+"-"+sub+"-"+m+i,n.replace("{p}",p),t,i),sub,mic:m}))));}
  MON.comp.items.forEach(k=>{k.sources.forEach(x=>{if(!x.mic)x.mic=PATYPE[x.type]||"price";});if(k.pfill)return;k.pfill=1;const c=k.name,o=k.org||c;
    PAMIC.forEach(([m,,list])=>{const add=[];fill(add,list.map(([n,t])=>[n.replace("{c}",c).replace("{o}",o),t]).filter(d=>!k.sources.some(x=>x.name===d[0])).slice(0,Math.max(0,3-k.sources.filter(x=>x.mic===m).length)),k.id+"-pa"+m+"-");add.forEach(x=>{x.mic=m;k.sources.push(x);});});});
  MON.comp.items.forEach(k=>{if(k.filled)return;k.filled=1;const c=k.name,o=k.org||c;
    Object.entries(SEEDK).forEach(([cat,list])=>{const arr=cat==="pa"?k.sources:k.sc[cat]||k.ef[cat];fill(arr,list.map(([n,t])=>[n.replace("{c}",c).replace("{o}",o),t]),k.id+"-"+cat+"-");});});
  [["sup",MON.sup],["env",MON.env]].forEach(([g,G])=>{G.sources.forEach(x=>{if(!x.mic)x.mic=MICMAP[x.id]||MIC[g][x.sub][0][0];});if(G.filled)return;G.filled=1;const pre=(G.sources[0]||{id:g}).id+"-f";
    Object.entries(MIC[g]).forEach(([sub,mics])=>mics.forEach(([mic,,list])=>{const have=G.sources.filter(x=>x.sub===sub&&x.mic===mic),add=[];fill(add,list.filter(d=>!G.sources.some(x=>x.name===d[0])).slice(0,Math.max(0,3-have.length)),pre+sub+mic);add.forEach(x=>{x.sub=sub;x.mic=mic;G.sources.push(x);});}));});}
const OWNMIC={price:[["list","List Price",[["Nestlé price list: {p}","Internal plan"],["Price change approvals","Internal plan"],["Distributor price agreements","Internal plan"]]],["online","Online Marketplace Prices",[["{p} Shopee and Lazada prices","Store listing"],["{p} TikTok Shop prices","Store listing"],["{p} official e-store prices","Store listing"]]],["offline","Offline Retail Prices",[["{p} pharmacy shelf prices","Web crawl"],["{p} supermarket shelf prices","Web crawl"],["{p} hospital pharmacy prices","Web crawl"]]]],
  promo:[["plan","Planned Promotions",[["Nestlé promotion calendar","Internal plan"],["Trade promotion budget","Internal plan"],["Key account promotion agreements","Internal plan"]]],["disc","Retailer Discounts",[["{p} retailer discount tracker","Store listing"],["{p} mega sale deals","Store listing"],["{p} bundle and gift offers","Store listing"]]],["unauth","Unauthorised Sellers",[["Unauthorised seller listings","Store listing"],["Grey import listings","Store listing"],["Parallel trade reports","Web crawl"]]]],
  launch:[["plan","Launch Plans",[["Nestlé launch plan","Internal plan"],["Innovation pipeline","Internal plan"],["Launch readiness checklist","Internal plan"]]],["reg","Registrations and Approvals",[["{p} product registration status","Government and regulators"],["Food Administration approvals","Government and regulators"],["Import permit status","Government and regulators"]]],["cov","Market Coverage",[["{p} launch coverage","News and media"],["{p} retailer listing checks","Store listing"],["Health professional feedback","Web crawl"]]]],
  ads:[["plan","Media Plans",[["Nestlé media plan","Internal plan"],["Campaign brief tracker","Internal plan"],["Agency performance reports","Internal plan"]]],["paid","Paid Ads",[["{p} Facebook ads","Ad library"],["{p} YouTube ads","Ad library"],["{p} TikTok ads","Ad library"]]],["social","Reviews and Social Listening",[["{p} reviews and social listening","Social post"],["{p} marketplace ratings","Store listing"],["{p} community forum mentions","Web crawl"]]]],
  claims:[["appr","Approved Claims",[["Approved claims register","Internal plan"],["Regulatory claim reviews","Internal plan"],["Packaging artwork approvals","Internal plan"]]],["label","Label Compliance",[["{p} label checks on marketplaces","Store listing"],["Retailer label audits","Store listing"],["Food Administration label notices","Government and regulators"]]],["fake","Counterfeits",[["Counterfeit product alerts","Web crawl"],["Brand protection reports","Web crawl"],["Market surveillance seizures","Government and regulators"]]]]};
const PATYPE={"Store listing":"price","Social post":"ads","Ad library":"ads","Press release":"launch"};
const PAMIC=[["price","Pricing",[["{c} official e-store prices","Store listing"],["{c} Shopee Mall prices","Store listing"],["{c} pharmacy shelf prices","Web crawl"]]],
  ["promo","Promotions",[["{c} Lazada vouchers","Store listing"],["{c} bundle and gift offers","Store listing"],["{c} mega sale campaigns","Store listing"]]],
  ["launch","Product Launches",[["{o} press room","Press release"],["{c} new SKU registrations","Government and regulators"],["{c} launch event coverage","News and media"]]],
  ["ads","Advertising and Campaigns",[["{c} Facebook ads","Ad library"],["{c} YouTube ads","Ad library"],["{c} TikTok campaigns","Social post"]]],
  ["claims","Claims and Packaging",[["{c} label and claim changes","Store listing"],["{c} packaging redesigns","Social post"],["{c} health professional materials","Web crawl"]]]];
const SEEDK={
  P:[["{o} government relations news","News and media"],["Tariff rulings on {o} imports","Government and regulators"],["{o} trade association statements","Press release"]],
  E:[["{o} quarterly results","Statistics and reports"],["{o} investor presentations","Statistics and reports"],["{c} retail price tracker","Web crawl"]],
  S:[["{c} social listening","Social post"],["{c} shopper reviews on Shopee","Store listing"],["{c} parenting and health forum mentions","Web crawl"]],
  T:[["{o} patent filings","Government and regulators"],["{o} R&D announcements","Press release"],["{c} app and e-commerce updates","Web crawl"]],
  En:[["{o} sustainability report","Statistics and reports"],["{o} packaging and recycling news","News and media"],["{o} ESG ratings","Statistics and reports"]],
  L:[["{o} product recalls","Government and regulators"],["{c} label registrations (Food Administration)","Government and regulators"],["{o} court and dispute filings","Government and regulators"]],
  up:[["{o} milk powder supplier news","Suppliers"],["{o} raw material sourcing notices","Suppliers"],["{o} import customs records","Commodity prices"]],
  ops:[["{o} factory news","Press release"],["{o} manufacturing job postings","Web crawl"],["{o} quality certifications","Government and regulators"]],
  down:[["{c} pharmacy chain listings","Store listing"],["{c} modern trade shelf audits","Logistics"],["{o} distributor network news","Logistics"]],
  pa:[["{c} Lazada store","Store listing"],["{c} TikTok Shop","Social post"],["{c} YouTube ads","Ad library"]]};
const MIC={sup:{
  up:[["raw","Raw Material Extractors",[["Dairy commodity index","Commodity prices"],["Sugar price tracker","Commodity prices"],["Milk powder import prices","Commodity prices"]]],["comp","Component Fabricators",[["Can and lid maker notices","Suppliers"],["Label printer updates","Suppliers"],["Vitamin premix supplier notices","Suppliers"]]],["tier","Sub-Tier Suppliers",[["Farm cooperative news","Suppliers"],["Feed and fertiliser price tracker","Commodity prices"],["Supplier audit findings","Suppliers"]]]],
  ops:[["proc","Procurement",[["Purchase order status feed","Suppliers"],["Tender and contract notices","Suppliers"],["Supplier price change alerts","Suppliers"]]],["mfg","Manufacturing and Assembly",[["Factory maintenance calendar","Suppliers"],["Line downtime log","Suppliers"],["Production plan updates","Suppliers"]]],["qc","Quality Control",[["Quality control alerts","Suppliers"],["Batch release records","Suppliers"],["Lab test results","Suppliers"]]],["wh","Warehousing",[["Warehouse inventory feed","Logistics"],["Warehouse capacity reports","Logistics"],["Cold storage temperature log","Logistics"]]],["inv","Inventory Management",[["Stock cover dashboard","Logistics"],["Expiry and write-off reports","Logistics"],["Safety stock alerts","Logistics"]]]],
  down:[["dc","Distribution Centres",[["Distributor stock reports","Logistics"],["Distribution centre throughput","Logistics"],["Regional service levels","Logistics"]]],["whs","Wholesalers",[["Wholesaler price lists","Logistics"],["Wholesale order trends","Logistics"],["Trade credit notices","Logistics"]]],["ret","Retailers",[["Pharmacy chain sell-out data","Logistics"],["Modern trade shelf audits","Logistics"],["E-commerce marketplace rankings","Logistics"]]],["last","Last-Mile Logistics",[["E-commerce delivery performance","Logistics"],["Courier service alerts","Logistics"],["Fuel price tracker","Commodity prices"]]],["rev","Reverse Logistics",[["Product returns log","Logistics"],["Damaged goods reports","Logistics"],["Recall logistics notices","Logistics"]]]]},
env:{
  P:[["pol","Government Policy",[["National Assembly news","Government and regulators"],["Ministry of Industry and Trade notices","Government and regulators"],["Government decrees tracker","Government and regulators"]]],["lead","Leadership and Stability",[["Government leadership news","News and media"],["Party congress coverage","News and media"],["Political risk index","Statistics and reports"]]],["tax","Tax",[["General Department of Taxation notices","Government and regulators"],["Ministry of Finance circulars","Government and regulators"],["VAT rate updates","Government and regulators"]]],["trade","Trade Restrictions and Tariffs",[["Tariff schedule updates","Government and regulators"],["Customs import notices","Government and regulators"],["Free trade agreement news","News and media"]]]],
  E:[["grow","Growth",[["GDP quarterly report","Statistics and reports"],["Retail sales bulletin","Statistics and reports"],["World Bank Vietnam updates","Statistics and reports"]]],["rate","Interest Rates",[["State Bank policy rate","Statistics and reports"],["Commercial bank lending rates","Statistics and reports"],["Bond yield tracker","Statistics and reports"]]],["infl","Inflation",[["Consumer price index","Statistics and reports"],["Food price index","Statistics and reports"],["Inflation outlook reports","Statistics and reports"]]],["fx","Exchange Rates",[["State Bank exchange rates","Statistics and reports"],["USD/VND market rate","Statistics and reports"],["NZD/VND rate for dairy imports","Statistics and reports"]]],["inc","Disposable Income",[["Household living standards survey","Statistics and reports"],["Wage growth reports","Statistics and reports"],["Consumer confidence index","Statistics and reports"]]],["lab","Labour Costs",[["Minimum wage updates","Government and regulators"],["Labour market reports","Statistics and reports"],["Manufacturing wage index","Statistics and reports"]]]],
  S:[["demo","Demographics and Population",[["Ageing population reports","Statistics and reports"],["Population census updates","Statistics and reports"],["UNFPA Vietnam reports","Statistics and reports"]]],["cult","Cultural Norms and Lifestyle",[["Lifestyle trend surveys","Statistics and reports"],["Tết spending reports","Statistics and reports"],["Urbanisation reports","Statistics and reports"]]],["health","Health Consciousness",[["Health and nutrition trend surveys","Statistics and reports"],["National Institute of Nutrition news","Government and regulators"],["Non-communicable disease reports","Statistics and reports"]]],["att","Consumer Attitudes",[["Social listening: adult nutrition","News and media"],["Consumer sentiment surveys","Statistics and reports"],["Brand trust studies","Statistics and reports"]]]],
  T:[["inn","Innovation and R&D",[["Ministry of Science and Technology news","Government and regulators"],["Nutrition science journals","Statistics and reports"],["Patent office filings","Government and regulators"]]],["auto","Automation and AI",[["Manufacturing automation news","News and media"],["AI adoption reports","Statistics and reports"],["Health-tech startup news","News and media"]]],["dig","Digital Infrastructure",[["E-commerce platform updates","News and media"],["Mobile and internet usage reports","Statistics and reports"],["Digital payments news","News and media"]]]],
  En:[["clim","Climate and Weather",[["National weather service","Government and regulators"],["Typhoon and flood alerts","Government and regulators"],["Climate risk reports","Statistics and reports"]]],["eco","Ecological Footprint and Sustainability",[["Plastic packaging regulation news","Government and regulators"],["Extended producer responsibility updates","Government and regulators"],["Carbon reporting news","News and media"]]],["res","Resource Scarcity",[["Water scarcity reports","Statistics and reports"],["Drought monitoring","Government and regulators"],["Dairy herd reports","Statistics and reports"]]]],
  L:[["labl","Labour Laws",[["Labour law updates","Government and regulators"],["Social insurance regulations","Government and regulators"],["Trade union notices","Government and regulators"]]],["safe","Health and Safety",[["Food safety alerts","Government and regulators"],["Occupational safety notices","Government and regulators"],["Food safety decrees","Government and regulators"]]],["cons","Consumer Rights",[["Consumer protection rulings","Government and regulators"],["Advertising law updates","Government and regulators"],["Consumer complaints tracker","Government and regulators"]]],["priv","Data Privacy",[["Personal data protection decree news","Government and regulators"],["Cybersecurity law updates","Government and regulators"],["Data privacy enforcement news","News and media"]]],["lic","Industry Licensing",[["Official Gazette","Government and regulators"],["Product registration rules","Government and regulators"],["Import licence notices","Government and regulators"]]]]}};
const MICMAP={"s-whey":"raw","s-gdt":"raw","s-pkg":"comp","s-frt":"last","m-pch":"comp","m-gdt":"raw","m-frt":"last","d-xg":"raw","d-sch":"comp","s-vfa":"lic","s-moh":"pol","s-vnx":"grow","s-gso":"infl","s-who":"health","m-ten":"pol","m-moh":"safe","m-vns":"health","m-vnx":"att","d-who":"health","d-iddsi":"safe","d-care":"demo"};
const isOpen=id=>S.mon.op&&id in S.mon.op?S.mon.op[id]:DEFOPEN.has(id);
const tsrc=t=>t.src?t.src:(t.children||[]).flatMap(tsrc);
function monTree(){monExt();
  const comps=MON.comp.items.map(k=>({id:k.id,label:k.name,info:["mon-comp",k.id],del:1,owner:k.id,queued:k.queued,children:[
    {id:k.id+"-pa",label:"Product-Related Activities",hint:"Prices, promotions, launches, campaigns and claims for this product",owner:k.id,addKid:{l:"Add micro-group",s:"to Product-Related Activities"},children:(k.pamic||(k.pamic=PAMIC.map(x=>[x[0],x[1]]))).map(([m,l])=>({id:k.id+"-pa-"+m,label:l,src:k.sources.filter(x=>x.mic===m),leaf:{k:k.id,arr:k.sources,mic:m},owner:k.id}))},
    {id:k.id+"-sc",label:"Supply Chain",owner:k.id,children:SC.map(([c,l,d])=>({id:k.id+"-sc-"+c,label:l,hint:d,src:k.sc[c],leaf:{k:k.id,arr:k.sc[c]},owner:k.id}))},
    {id:k.id+"-ef",label:"External Factors",owner:k.id,children:PESTEL.map(([c,l,d])=>({id:k.id+"-ef-"+c,label:l,hint:d,src:k.ef[c],leaf:{k:k.id,arr:k.ef[c]},owner:k.id}))}]}));
  const micN=(g,sub,owner)=>MIC[g][sub].map(([m,l])=>({id:g+"-"+sub+"-"+m,label:l,src:MON[g].sources.filter(s=>s.sub===sub&&s.mic===m),leaf:{g,sub,mic:m},owner}));
  const ctx=[{id:"own",label:"Product-Related Activities",hint:"Our own prices, promotions, launches, advertising and claims: internal plans and market observations",info:["mon-group","own"],owner:"own",addKid:{l:"Add subgroup",s:"to Product-Related Activities"},children:ownPA().map(([m,l])=>({id:"own-"+m,label:l,owner:"own",addKid:{l:"Add micro-group",s:"to "+l},children:OWNMIC[m].map(([x,xl])=>({id:"own-"+m+"-"+x,label:xl,src:MON.own.sources.filter(s=>s.sub===m&&s.mic===x),leaf:{g:"own",arr:MON.own.sources,sub:m,mic:x},owner:"own"}))}))},{id:"sup",label:"Supply Chain",info:["mon-group","sup"],owner:"sup",children:SC.map(([c,l,d])=>({id:"sup-"+c,label:l,hint:d,owner:"sup",children:micN("sup",c,"sup")}))},
    {id:"env",label:"External Factors",info:["mon-group","env"],owner:"env",children:PESTEL.map(([c,l,d])=>({id:"env-"+c,label:l,hint:d,owner:"env",children:micN("env",c,"env")}))}];
  comps.forEach(c=>c.children.reverse());ctx.reverse();
  const tops=[{id:"main-comp",label:"Competitors",children:comps,addComp:1},{id:"main-ctx",label:"Our Context",children:ctx}];
  LEAFMAP={};const w=(t,p,ids)=>{const pp=[...p,t.label],ii=[...ids,t.id];if(t.leaf)LEAFMAP[t.id]={...t.leaf,label:t.label,path:(pp[0]==="Our Context"?pp:pp.slice(1)).join(" › "),ids:ii,src:t.src};(t.children||[]).forEach(c=>w(c,pp,ii));};tops.forEach(t=>w(t,[],[]));
  return tops;}
function allTreeIds(){const ids=[];const w=t=>{ids.push(t.id);(t.children||[]).forEach(w);};monTree().forEach(w);return ids;}
function openToGaps(){const w=t=>{const g=gapCount(tsrc(t))>0;if(g)S.mon.op[t.id]=true;(t.children||[]).forEach(w);};monTree().forEach(w);}
function gapList(){const out=[];const w=(t,p)=>{const pp=[...p,t.label];if(t.src)t.src.forEach(s=>{if(s.status==="paused"||s.status==="delayed")out.push([(pp[0]==="Our Context"?pp:pp.slice(1)).join(" › "),s]);});(t.children||[]).forEach(c=>w(c,pp));};monTree().forEach(t=>w(t,[]));return out;}
function monLayout(){
  const nodes=[],edges=[];let y=56;const add=n=>{nodes.push(n);return n;};const COLN=["main","group","sub","micro"];
  const place=(t,d,parent)=>{const all=tsrc(t),canOpen=true,open=isOpen(t.id);let ny;
    if(open&&t.children){const ys=t.children.map(c=>place(c,d+1,t.id));
      if(t.addKid){const aid="addk-"+t.id;add({id:aid,col:COLN[d+1],y,kind:"add",label:t.addKid.l,sub:t.addKid.s,act:"add-pa-grp",lid:t.id});edges.push([t.id,aid]);ys.push(y);y+=RH;}
      if(t.addComp){add({id:"add-comp",col:COLN[d+1],y,kind:"add",cls:"need-sources",label:"Add competitor",sub:"to "+monProd().name,act:"add-comp"});edges.push([t.id,"add-comp"]);ys.push(y);y+=RH;}
      ny=(ys[0]+ys[ys.length-1])/2;}
    else if(open){const st=y;t.src.forEach(s=>{add({id:s.id,col:"src",y,kind:"src",s,gap:s.status==="paused"||s.status==="delayed",parent:t.owner});edges.push([t.id,s.id]);edges.push([s.id,"store",1]);y+=RH;});add({id:"add-"+t.id,col:"src",y,kind:"add",label:"Add source",sub:"to "+t.label,act:"add-leaf",lid:t.id});edges.push([t.id,"add-"+t.id]);y+=RH;ny=(st+y-RH)/2;}
    else{ny=y;y+=RH;if(all.length)edges.push([t.id,"store",1]);}
    add({id:t.id,col:COLN[d],y:ny,kind:"tree",t,d,open,canOpen,queued:t.queued,cnt:all.length,gaps:gapCount(all),gap:gapCount(all)>0});edges.push([parent,t.id]);
    y+=d===0?16:d===1?6:0;return ny;};
  const ys=monTree().map(t=>place(t,0,"root"));
  const ry=(ys[0]+ys[ys.length-1])/2;
  add({id:"root",col:"root",y:ry,kind:"root",total:allSources().length});
  const my=Math.max(ry,180);
  add({id:"store",col:"store",y:my,kind:"label",label:"Evidence store",sub:"Every capture, searchable"});
  add({id:"review",col:"review",y:my,kind:"label",label:"Owner review",sub:"Map to product, set meaning"});
  [["f1","Product records","Events on each product",-RH-6],["f2","Summary and briefings","Analysis layer",0],["f3","Chat answers","Cited from the store",RH+6]].forEach(([id,l,s,dy])=>{add({id,col:"feed",y:my+dy,kind:"label",label:l,sub:s});edges.push(["review",id]);});
  edges.push(["store","review"]);
  nodes.forEach(n=>n.x=XC[n.col]);
  return {nodes,edges,h:y+40};
}
function nodeHTML(n){
  const tog=(id,open)=>`<button class="nb" data-act="mon-tog" data-id="${id}" aria-label="${open?"Collapse":"Expand"}" aria-expanded="${open}">${ic(open?"minus":"plus")}</button>`;
  const inf=(act,id)=>`<button class="nb" data-act="${act}" data-id="${id}" aria-label="Details">${ic("info")}</button>`;
  if(n.kind==="root")return `<div class="nt"><b>${monProd().name}</b><small>${n.total} sources watched</small></div>`;
  if(n.kind==="tree"){const t=n.t,pre="";
    const desc=t.queued?"Baseline research queued":n.cnt?`<span>${pre}${n.cnt} source${n.cnt>1?"s":""}</span>${n.gaps?`<em class="gpill">${n.gaps} gap${n.gaps>1?"s":""}</em>`:""}`:"<span>No sources yet</span>";
    return `${t.del&&mine(t.id)||ADDED.has(t.id)?`<button class="nb del need-sources" data-act="mon-del" data-id="${t.id}" aria-label="Remove ${esc(t.label)}">${ic("x")}</button>`:""}<div class="nt" ${t.hint?`title="${esc(t.hint)}"`:""}><b>${esc(t.label)}</b><small class="nmeta">${desc}</small></div><span class="nbs">${n.canOpen?tog(t.id,n.open):""}${t.info?inf(t.info[0],t.info[1]):inf("mon-node",t.id)}</span>`;}
  if(n.kind==="src"){const s=n.s;return `${mine(n.id)?`<button class="nb del need-sources" data-act="mon-del" data-id="${n.id}" aria-label="Remove ${esc(s.name)}" title="Remove (added by you)">${ic("x")}</button>`:""}<div class="nt"><b><i class="dot ${s.status==="queued"?"delayed":s.status}" style="display:inline-block;margin-right:6px;vertical-align:middle"></i>${s.name}</b><small>${s.status==="paused"?s.since:s.status==="delayed"?s.since:s.status==="queued"?"First capture queued":`${s.type} · ${s.ev} events`}</small></div>`;}
  if(n.kind==="add")return `<div class="nt"><b>+ ${n.label}</b><small>${n.sub}</small></div>`;
  return `<div class="nt"><b>${n.label}</b><small>${n.sub}</small></div>`;
}
function viewMonitoring(){
  const all=allSources(),g=gapCount(all);
  const tb=`<div class="toolbar"><button class="btn sm need-sources" data-act="add-comp">${ic("plus")}Competitor</button><button class="btn sm need-sources" data-act="ns-env">${ic("plus")}External Factor</button><button class="btn sm need-sources" data-act="add-sup">${ic("plus")}Supply Chain</button>${can("sources")?"":`<span class="muted" style="font-size:13px">View only. ${ROLES.owner.name} and ${ROLES.admin.name} can change sources.</span>`}<span class="sp"></span>
    <button class="btn sm ${S.mon.gaps?"primary":""}" data-act="mon-gaps" aria-pressed="${S.mon.gaps}">Only gaps · ${g}</button><span class="ic-grp" role="group" aria-label="Expand or collapse the map"><button class="btn sm ic-btn" data-act="mon-all" data-v="1" aria-label="Expand all" title="Expand all">${ic("expandall")}</button><button class="btn sm ic-btn" data-act="mon-all" data-v="0" aria-label="Collapse all" title="Collapse all">${ic("collapseall")}</button></span>
    ${S.mon.view==="canvas"?`<span class="zoom"><button data-act="zoom" data-d="-0.1" aria-label="Zoom out">−</button><span class="num" id="zl">${Math.round(S.mon.z*100)}%</span><button data-act="zoom" data-d="0.1" aria-label="Zoom in">+</button></span><button class="btn sm ic-btn" data-act="fit" aria-label="Fit and reset layout" title="Fit to screen and reset layout">${ic("fitview")}</button><button class="btn sm fs-tog" data-act="mon-full" aria-pressed="${!!S.mon.full}" aria-label="${S.mon.full?"Exit full screen":"View full screen"}" title="${S.mon.full?"Exit full screen (Esc)":"View full screen"}">${ic(S.mon.full?"shrink":"grow")}</button>`:""}</div>`;
  const head=`<div class="mon-head"><div><h2>${monProd().name} · ${all.length} sources</h2><p class="muted" style="margin-top:6px">${MON.comp.items.length} competitors, plus Our Context: External Factors, Supply Chain and Product-Related Activities. Make sure the right sources are watched and nothing goes dark.</p></div>
    <div class="mon-ctl">${S.scope.level==="prod"?"":`<label class="pill pill-sel">${ic("grid")}<span class="muted" style="font-size:15px">Product:</span><select data-act-change="mon-pid" aria-label="Starting product">${(S.scope.level==="pf"?PF.find(p=>p.id===S.scope.id).products:Object.keys(PROD)).slice().sort((a,b)=>PROD[a].name.localeCompare(PROD[b].name)).map(p=>`<option value="${p}" ${p===monPid()?"selected":""}>${PROD[p].name}</option>`).join("")}</select>${ic("chevd","pcv")}</label>`}<div class="seg" role="group" aria-label="View"><button aria-pressed="${S.mon.view==="canvas"}" data-act="mon-view" data-v="canvas">Canvas</button><button aria-pressed="${S.mon.view==="list"}" data-act="mon-view" data-v="list">List</button></div></div></div>
   ${(()=>{const gs=gapList();
     return gs.length?`<div class="rem gap-al" role="alert">${ic("alert")}<b>${gs.length} source${gs.length>1?"s have":" has"} a gap:</b><span>${gs.map(([o,s])=>`${esc(s.name)} (${esc(o)}), ${s.since}`).join("; ")}.</span><button class="btn sm" data-act="mon-gaps" aria-pressed="${S.mon.gaps}">${S.mon.gaps?"Show All":"Show Gaps"}</button></div>`
       :`<div class="rem ok-al">${ic("ok")}<b>All ${all.length} sources are current.</b></div>`;})()}`;
  if(S.mon.view==="list")return head+`<div class="canvas-wrap">${tb}<div class="tree">${listTree()}</div></div>`;
  return head+`<div class="canvas-wrap ${S.mon.full?"full":""}" ${S.mon.full?'role="dialog" aria-modal="true" aria-label="Radar map, full screen"':""}>${tb}<div class="stage" id="stage"><div class="world" id="world"></div><div class="colbar" id="colbar" aria-hidden="true"></div><div class="mini" id="mini" aria-hidden="true"></div>
    <div class="stage-help"><span><i class="dot current"></i>Current</span><span><i class="dot delayed"></i>Delayed</span><span><i class="dot paused"></i>Paused</span><span>Drag a box to move it · drag empty space to move the map · Fit puts everything back</span></div></div></div>`;
}
function listTree(){
  const row=(lvl,html,extra="")=>`<div class="tr" style="padding-left:${8+lvl*28}px">${html}${extra}</div>`;
  const tg=(id,o)=>`<button class="tog" data-act="mon-tog" data-id="${id}" aria-expanded="${o}" aria-label="Toggle">${ic("chev")}</button>`;
  const srcRow=(s,l)=>row(l,`<span style="width:22px"></span><i class="dot ${s.status==="queued"?"delayed":s.status}"></i><span class="grow">${s.name} <small>· ${s.type} · ${s.since||s.status} · ${s.ev} events</small></span>`,(s.status==="paused"||s.status==="delayed")?`<span class="tag bad">Gap</span>`:"");
  let h="";
  const w=(t,l)=>{const all=tsrc(t),gp=gapCount(all),canOpen=true,o=isOpen(t.id);
    h+=row(l,`${canOpen?tg(t.id,o):`<span style="width:22px"></span>`}<span class="grow">${l<2?`<b style="font-weight:500">${esc(t.label)}</b>`:esc(t.label)} <small>· ${all.length?all.length+" source"+(all.length>1?"s":""):"no sources yet"}${gp?" · "+gp+" gap":""}</small></span>`,`${t.leaf?`<button class="link need-sources" data-act="add-leaf" data-id="${t.id}">${ic("plus")}Add source</button>`:""}<button class="link" style="margin-left:14px" data-act="${(t.info||["mon-node"])[0]}" data-id="${t.info?t.info[1]:t.id}">Details</button>`);
    if(o){if(t.children)t.children.forEach(c=>w(c,l+1));else t.src.forEach(s=>h+=srcRow(s,l+1));
      if(t.addKid)h+=row(l+1,`<span style="width:22px"></span><button class="link need-sources" data-act="add-pa-grp" data-id="${t.id}">${ic("plus")}${t.addKid.l}</button>`);
      if(t.addComp)h+=row(l+1,`<span style="width:22px"></span><button class="link need-sources" data-act="add-comp">${ic("plus")}Add competitor to ${monProd().name}</button>`);}};
  monTree().forEach(t=>w(t,0));return h;
}
let LAY=null,POS={},UNDO=null,justDragged=false;
const COLS=[["Starting point","root"],["Main group","main"],["Group","group"],["Subgroup","sub"],["Micro-group","micro"],["Sources","src"],["Evidence store","store"],["Review","review"],["What it feeds","feed"]];
function wirePaths(){
  const gapIds=new Set(LAY.nodes.filter(n=>n.gap).map(n=>n.id));
  const keep=id=>{if(!S.mon.gaps)return true;const n=POS[id];if(!n)return true;if(n.kind==="root"||n.kind==="label")return true;return !!n.gap;};
  return LAY.edges.map(([a,b,flow])=>{const A=POS[a],B=POS[b];if(!A||!B)return"";const x1=A.x+NW,y1=A.y+NH/2,x2=B.x,y2=B.y+NH/2,dx=Math.max(40,Math.abs(x2-x1)*.5);
    const dim=S.mon.gaps&&!(keep(a)&&keep(b));return `<path class="${flow?"flow":""}" d="M${x1} ${y1}C${x1+dx} ${y1},${x2-dx} ${y2},${x2} ${y2}" ${dim?'opacity=".25"':""}/>`;}).join("");
}
function mountCanvas(){
  const stage=$("#stage"),world=$("#world");if(!stage)return;
  LAY=monLayout();POS={};S.mon.off=S.mon.off||{};
  LAY.nodes.forEach(n=>{const o=S.mon.off[n.id];if(o){n.x+=o[0];n.y+=o[1];}POS[n.id]=n;});
  const keep=n=>!S.mon.gaps||n.kind==="root"||n.kind==="label"||n.gap;
  const H=Math.max(640,LAY.h);world.style.height=H+"px";
  world.innerHTML=`<svg class="wires" id="wires" style="height:${H}px">${wirePaths()}</svg>`+LAY.nodes.map(n=>{
    const cls=["node",n.kind==="root"?"root":"",n.kind==="label"?"label":"",n.kind==="add"?"add need-sources":"",n.gap&&n.kind==="src"?"gap":"",n.kind==="tree"&&n.gaps?"tgap":"",n.kind==="tree"&&!n.cnt&&!(n.t&&n.t.queued)?"nempty":"",n.queued?"new":"",n.s&&n.s.status==="queued"?"new":"",!keep(n)?"dim":""].join(" ");
    const attrs=n.kind==="add"?`role="button" tabindex="0" data-act="${n.act}" ${n.g?`data-g="${n.g}"`:""} ${n.k?`data-k="${n.k}"`:""} ${n.lid?`data-id="${n.lid}"`:""}`:n.kind==="src"?`role="button" tabindex="0" data-act="mon-src" data-p="${n.parent}"`:"";
    return `<div class="${cls}" data-nid="${n.id}" style="left:${n.x}px;top:${n.y}px" ${attrs}>${nodeHTML(n)}</div>`;}).join("");
  $("#colbar").innerHTML=COLS.map(([l,c])=>`<span data-c="${c}">${l}</span>`).join("");
  if(!S.mon.fitted){S.mon.fitted=1;const st0=$("#stage"),r0=POS.root;S.mon.z=.88;S.mon.x=10;S.mon.y=Math.round(Math.min(34,st0.clientHeight/2-(r0.y+NH/2)*.88));}applyXf();
  const mini=$("#mini"),sx=168/2420,sy=80/H;
  mini.innerHTML=LAY.nodes.map(n=>`<i style="left:${n.x*sx}px;top:${n.y*sy}px;width:${NW*sx}px"></i>`).join("")+`<div class="vp" id="vp"></div>`;
  updMini();
  let pan=null,nd=null;
  stage.onpointerdown=e=>{
    if(e.target.closest("button"))return;
    const el=e.target.closest(".node");
    if(el){const n=POS[el.dataset.nid];nd={el,n,x:e.clientX,y:e.clientY,ox:n.x,oy:n.y,moved:false};el.setPointerCapture(e.pointerId);return;}
    pan={x:e.clientX,y:e.clientY,ox:S.mon.x,oy:S.mon.y};stage.setPointerCapture(e.pointerId);stage.classList.add("drag");};
  stage.onpointermove=e=>{
    if(nd){const dx=(e.clientX-nd.x)/S.mon.z,dy=(e.clientY-nd.y)/S.mon.z;if(!nd.moved&&Math.abs(e.clientX-nd.x)+Math.abs(e.clientY-nd.y)<8)return;
      nd.moved=true;nd.el.classList.add("moving");nd.n.x=nd.ox+dx;nd.n.y=nd.oy+dy;nd.el.style.left=nd.n.x+"px";nd.el.style.top=nd.n.y+"px";$("#wires").innerHTML=wirePaths();return;}
    if(pan){S.mon.x=pan.ox+e.clientX-pan.x;S.mon.y=pan.oy+e.clientY-pan.y;applyXf();}};
  stage.onpointerup=stage.onpointercancel=()=>{
    if(nd){if(nd.moved){const o=S.mon.off[nd.n.id]||[0,0];S.mon.off[nd.n.id]=[o[0]+nd.n.x-nd.ox,o[1]+nd.n.y-nd.oy];nd.el.classList.remove("moving");justDragged=true;setTimeout(()=>justDragged=false,0);updMiniNodes();}nd=null;}
    pan=null;stage.classList.remove("drag");};
  stage.onwheel=e=>{e.preventDefault();if(e.shiftKey){S.mon.x-=e.deltaY;applyXf();return;}if(e.altKey){S.mon.y-=e.deltaY;applyXf();return;}
    const r=stage.getBoundingClientRect(),mx=e.clientX-r.left,my=e.clientY-r.top,z0=S.mon.z,z=Math.min(1.6,Math.max(.4,z0*(e.deltaY<0?1.08:.93)));
    S.mon.x=mx-(mx-S.mon.x)*z/z0;S.mon.y=my-(my-S.mon.y)*z/z0;S.mon.z=z;applyXf();};
}
function updMiniNodes(){const mini=$("#mini");if(!mini||!LAY)return;const H=Math.max(640,LAY.h),sx=168/2420,sy=80/H;mini.querySelectorAll("i").forEach((i,k)=>{const n=LAY.nodes[k];i.style.left=n.x*sx+"px";i.style.top=n.y*sy+"px";});}
const ADDED=new Set();const mine=id=>/^q\d+$/.test(id)||/^k-\d+$/.test(id)||ADDED.has(id);
function delGroup(id){const own=MON.own.sources,cut=(arr,fn)=>{const out=[];for(let j=arr.length-1;j>=0;j--)if(fn(arr[j]))out.unshift(arr.splice(j,1)[0]);return out;};let label="",undo;
  let m=id.match(/^own-([^-]+)$/);
  if(m){const k=m[1],L=ownPA(),i=L.findIndex(x=>x[0]===k);if(i<0)return false;const e=L.splice(i,1)[0],mic=OWNMIC[k];delete OWNMIC[k];const gone=cut(own,x=>x.sub===k);label=`Removed ${e[1]}${gone.length?` and its ${gone.length} source${gone.length>1?"s":""}`:""}.`;undo=()=>{L.splice(i,0,e);OWNMIC[k]=mic;own.push(...gone);};}
  else if((m=id.match(/^own-([^-]+)-([^-]+)$/))){const L=OWNMIC[m[1]]||[],i=L.findIndex(x=>x[0]===m[2]);if(i<0)return false;const e=L.splice(i,1)[0],gone=cut(own,x=>x.sub===m[1]&&x.mic===m[2]);label=`Removed ${e[1]}${gone.length?` and its ${gone.length} source${gone.length>1?"s":""}`:""}.`;undo=()=>{L.splice(i,0,e);own.push(...gone);};}
  else{const k=MON.comp.items.find(x=>id.startsWith(x.id+"-pa-"));if(!k||!k.pamic)return false;const mm=id.slice((k.id+"-pa-").length),i=k.pamic.findIndex(x=>x[0]===mm);if(i<0)return false;const e=k.pamic.splice(i,1)[0],gone=cut(k.sources,x=>x.mic===mm);label=`Removed ${e[1]} from ${k.name}${gone.length?` and its ${gone.length} source${gone.length>1?"s":""}`:""}.`;undo=()=>{k.pamic.splice(i,0,e);k.sources.push(...gone);};}
  ADDED.delete(id);UNDO=()=>{undo();ADDED.add(id);};delete S.mon.off[id];render();toast(label,true);return true;}
function monDelete(id){if(ADDED.has(id)&&delGroup(id))return;
  const comps=MON.comp.items;let label="";
  const ki=comps.findIndex(k=>k.id===id);
  if(ki>-1){const k=comps[ki];comps.splice(ki,1);UNDO=()=>comps.splice(ki,0,k);label=`Removed ${k.name} and its ${k.sources.length} sources.`;}
  else{const lists=[MON.env.sources,MON.sup.sources,MON.own.sources,...comps.flatMap(k=>[k.sources,...Object.values(k.sc||{}),...Object.values(k.ef||{})])];for(const L of lists){const i=L.findIndex(s=>s.id===id);if(i>-1){const s=L[i];L.splice(i,1);UNDO=()=>L.splice(i,0,s);label=`Removed ${s.name}.`;break;}}}
  delete S.mon.off[id];render();toast(label,true);
}
function focusMon(id){
  if(S.mon.view==="list"){const b=document.querySelector(`.tog[data-id="${id}"]`);if(b){b.focus({preventScroll:true});b.scrollIntoView({block:"center",behavior:"smooth"});}return;}
  const n=POS[id],st=$("#stage"),w=$("#world"),cb=$("#colbar");if(!n||!st||!w)return;const z=S.mon.z;
  S.mon.x=Math.round(st.clientWidth*.3-(n.x+NW/2)*z);S.mon.y=Math.round(st.clientHeight/2-(n.y+NH/2)*z);
  w.classList.add("glide");cb&&cb.classList.add("glide");applyXf();setTimeout(()=>{w.classList.remove("glide");cb&&cb.classList.remove("glide");},450);
  const el=document.querySelector(`.node[data-nid="${id}"]`);if(el){el.classList.add("focus");setTimeout(()=>el.classList.remove("focus"),1600);const t=el.querySelector('[data-act="mon-tog"]');t&&t.focus({preventScroll:true});}}
function applyXf(){const w=$("#world");if(!w)return;w.style.transform=`translate(${S.mon.x}px,${S.mon.y}px) scale(${S.mon.z})`;document.querySelectorAll("#colbar span").forEach(sp=>{sp.style.left=(S.mon.x+XC[sp.dataset.c]*S.mon.z)+"px";});const zl=$("#zl");if(zl)zl.textContent=Math.round(S.mon.z*100)+"%";updMini();}
function updMini(){const vp=$("#vp"),st=$("#stage");if(!vp||!st||!LAY)return;const H=Math.max(640,LAY.h),sx=168/2420,sy=80/H,z=S.mon.z;
  vp.style.left=Math.max(0,-S.mon.x/z*sx)+"px";vp.style.top=Math.max(0,-S.mon.y/z*sy)+"px";vp.style.width=Math.min(168,st.clientWidth/z*sx)+"px";vp.style.height=Math.min(80,st.clientHeight/z*sy)+"px";}
function fitCanvas(reset=true){if(reset&&S.mon.off&&Object.keys(S.mon.off).length){S.mon.off={};mountCanvas();}const st=$("#stage");if(!st||!LAY)return;const H=Math.max(...LAY.nodes.map(n=>n.y))+NH+30;const z=Math.min(1.2,Math.max(.4,Math.min(st.clientWidth/2420,(st.clientHeight-34)/H)));S.mon.z=z;S.mon.x=10;S.mon.y=34;applyXf();}

/* ================= weekly pulse ================= */
function pulseRows(){
  return Object.values(EV).filter(e=>e.status==="confirmed"&&e.week===S.week&&e.inPulse&&inScope(e))
   .sort((a,b)=>(LV[b.an.impact]*3+LV[b.an.urgency])-(LV[a.an.impact]*3+LV[a.an.urgency])||b.d-a.d);
}
function viewPulse(){
  const rows=pulseRows(),shown=rows.filter(e=>(S.pteam||"All")==="All"||e.an.team===S.pteam);
  const wt=waiting().filter(e=>e.week===S.week&&inScope(e)).length;const sent=S.sent[S.week];
  const c=m=>rows.filter(e=>e.meaning===m).length;const dec=d=>rows.filter(e=>(DEC[e.id]||"Watch")===d).length;
  const top=rows[0];
  const sum=rows.length?`<b>${rows.length} changes this week:</b> ${c("bad")} bad for us, ${c("good")} good for us${c("mixed")?`, ${c("mixed")} mixed`:""}, ${c("unsure")} to keep watching. ${dec("Act")+dec("Investigate")} to act on or investigate, ${dec("Watch")} to watch. <b>Most pressing:</b> ${esc(top.title)}. ${esc(top.means)}`:"No confirmed changes in this view.";
  const cells=[];for(let r=2;r>=0;r--)for(let u=0;u<3;u++){const tone=r+u>=3?"c2":r+u===2?"c1":"c0";cells.push(`<div class="cell ${tone}" data-i="${r}" data-u="${u}"></div>`);}
  const teams=["All","Marketing","Sales","Finance","Management"];
  return `<div class="pv-head"><div><h2>${scopeName()} · Week ${S.week}</h2><p>${weekRange(S.week)} · ${sent?`Sent ${sent} to all four teams`:"Draft, not sent yet"}</p></div>
    <div class="acts"><button class="wk-btn" data-act="wk-cal" aria-haspopup="dialog" aria-label="Choose week, currently week ${S.week}">${ic("cal")}<span><small>Week ${S.week}</small><b>${weekRange(S.week)}</b></span>${ic("chevd","wk-cv")}</button>${sent?`<button class="btn sent-btn" data-act="sent-info" aria-haspopup="dialog">${ic("check")}Sent ${sent}${ic("chevd","wk-cv")}</button>`:!can("approve")?`<span class="tag plain" style="height:38px;padding:0 16px">Awaiting approval by ${ROLES.owner.name}</span>`:S.week>=46?`<button class="btn primary" disabled title="Can be sent once the period closes">${ic("send")}Approve and Send</button>`:`<button class="btn primary" data-act="approve">${ic("send")}Approve and send</button>`}</div></div>
   ${wt&&!sent?`<div class="banner">${ic("alert")}${wt} event${wt>1?"s":""} from this week ${wt>1?"are":"is"} still waiting for review and not in this summary.<button data-act="review-week">Review now</button></div>`:""}
   ${sent&&S.week===45?`<div class="banner sent">${ic("ok")}Summary sent by ${ROLES.owner.name}. It stays in the list of all weekly summaries below.</div>`:""}
   ${periodsBlock("w")}
   <p class="pulse-sum">${sum}</p>
   <div class="pulse-grid"><div class="panel matrix"><h3>Where each change sits</h3>
     <div class="mx"><div class="yl">Potential impact</div><div class="ys"><span>High</span><span>Medium</span><span>Low</span></div><div class="cells" id="cells">${cells.join("")}</div>
     <div class="xs" style="grid-column:3"><span>Low</span><span>Medium</span><span>High</span></div><div class="xl">Response urgency</div></div>
     <div class="legend"><span><i style="background:var(--bad);border-radius:50%"></i>Bad for us</span><span><i style="background:var(--good);border-radius:50%"></i>Good for us</span><span><i style="background:var(--mixed);border-radius:50%"></i>Mixed</span><span><i style="background:var(--unsure);border-radius:50%"></i>Unsure</span></div>
     <p class="mx-note">Numbers match the rows. Select a dot to find its row; drag a dot to another cell to re-rate it.</p>
     <div class="weeks"><span class="label" style="margin-top:12px">All weekly summaries</span>${[45,44,43,42,41].map(w=>`<button data-act="goto-week" data-w="${w}" aria-current="${w===S.week}"><span class="grow">Week ${w} · ${weekRange(w)}</span>${S.sent[w]?`<span class="tag good">Sent</span>`:`<span class="tag blue">Draft</span>`}${ic("chev","chev")}</button>`).join("")}</div></div>
    <div><div class="seg" role="group" aria-label="Team view" style="margin-bottom:12px">${teams.map(t=>`<button aria-pressed="${(S.pteam||"All")===t}" data-act="team" data-v="${t}">${t}</button>`).join("")}</div>
     <div class="panel" style="overflow:hidden"><table class="t pt"><thead><tr><th style="width:44px">#</th><th>What changed</th><th>What it means for N&amp;H</th><th style="width:220px">What to watch or do</th></tr></thead><tbody>
     ${shown.length?shown.map(e=>{const i=rows.indexOf(e)+1;return `<tr id="pr-${e.id}" class="${S.hl===e.id?"hl":""} ${e.fresh?"fresh":""}" data-hover="${e.id}"><td><span class="n ${e.meaning}">${i}</span></td><td><div class="what">${esc(e.title)}</div><button class="link" style="margin-top:8px;font-weight:400" data-act="open-ev" data-id="${e.id}">Open evidence ${ic("chev")}</button></td>
       <td class="means">${esc(e.means)}<small>${MEAN[e.meaning]}</small></td><td class="todo"><select data-act-change="dec" data-id="${e.id}" aria-label="Decision" ${sent||!can("approve")?"disabled":""}>${["Act","Investigate","Watch","Ignore"].map(d=>`<option ${(DEC[e.id]||"Watch")===d?"selected":""}>${d}</option>`).join("")}</select><small style="margin-top:6px"><b style="font-weight:500;color:var(--ink-2)">${e.an.team}</b> · ${esc(e.an.step)}</small></td></tr>`;}).join(""):`<tr><td colspan="4" class="empty">No changes for ${S.pteam} this week.</td></tr>`}
     </tbody></table></div></div></div>`;
}
function mountPulse(){
  const cells=$("#cells");if(!cells)return;const rows=pulseRows();const W=cells.clientWidth/3,H=99;
  const groups={},tot={};rows.forEach(e=>{const k=LV[e.an.impact]+"-"+LV[e.an.urgency];tot[k]=(tot[k]||0)+1;});
  rows.forEach((e,i)=>{const r=LV[e.an.impact],u=LV[e.an.urgency],k=r+"-"+u;groups[k]=(groups[k]||0)+1;const n=groups[k]-1,T=tot[k],rowsN=Math.ceil(T/2),inRow=Math.min(2,T-Math.floor(n/2)*2);
    const d=document.createElement("button");d.className=`pdot ${e.meaning} ${S.hl===e.id?"hl":""}`;d.textContent=i+1;d.dataset.id=e.id;d.setAttribute("aria-label",`${i+1}: ${e.title}. ${e.an.impact} impact, ${e.an.urgency} urgency`);
    const cx=u*W+W/2+((n%2)-(inRow-1)/2)*36,cy=(2-r)*H+H/2+(Math.floor(n/2)-(rowsN-1)/2)*36;d.style.left=(cx-15)+"px";d.style.top=(cy-15)+"px";cells.appendChild(d);
    let st=null;
    d.onpointerdown=ev=>{st={x:ev.clientX,y:ev.clientY,l:cx-15,t:cy-15,moved:false};d.setPointerCapture(ev.pointerId);};
    d.onpointermove=ev=>{if(!st)return;const dx=ev.clientX-st.x,dy=ev.clientY-st.y;if(Math.abs(dx)+Math.abs(dy)>4){st.moved=true;d.classList.add("dragging");}
      if(st.moved){d.style.left=(st.l+dx)+"px";d.style.top=(st.t+dy)+"px";const c=cellAt(st.l+dx+15,st.t+dy+15);cells.querySelectorAll(".cell").forEach(x=>x.classList.toggle("over",c&&x.dataset.i==c[0]&&x.dataset.u==c[1]));}};
    d.onpointerup=ev=>{if(!st)return;const moved=st.moved;const dx=ev.clientX-st.x,dy=ev.clientY-st.y;const c=cellAt(st.l+dx+15,st.t+dy+15);st=null;
      if(!moved){S.hl=e.id;render();const row=$("#pr-"+e.id);row&&row.scrollIntoView({block:"nearest",behavior:"smooth"});return;}
      if(c){e.an.impact=LVN[c[0]];e.an.urgency=LVN[c[1]];toast(`Re-rated: ${e.an.impact.toLowerCase()} impact, ${e.an.urgency.toLowerCase()} urgency`);}render();};
  });
  function cellAt(x,y){const u=Math.floor(x/W),r=2-Math.floor(y/H);if(u<0||u>2||r<0||r>2)return null;return [r,u];}
}

/* ================= briefings ================= */
const BR={
 monthly:{span:"Weeks 42–45",total:61,pf:{medical:[56,9,+21],dysphagia:[50,10,+8],active:[41,42,-3]}},
 quarterly:{span:"Weeks 34–45",total:178,pf:{medical:[49,26,+14],dysphagia:[47,29,+6],active:[38,123,-2]}}
};
const BRP={
 medical:{name:"Medical nutrition",narr:(d,q)=>`Competitive pressure is building. Of ${d[1]} confirmed events, ${d[0]}% read as bad for us and 11% as good. Most of the pressure came from the environment and from buyers and channels, not from one competitor. Nutrison was the most active rival. In our favour: their price rise widens our advantage in hospital tenders.`,
   from:[["Environment and sustainability",3],["Policy and regulation",2],["Economy",2],["Buyers and channels",1]],moves:[["Our whey protein supplier: 6% price rise from next quarter","e5"],["VnExpress: pharmacy chains ask for higher listing fees","e11"],["Fresubin: new high-protein variant",null]],
   knew:"Buyers and channels: three pharmacy chains control most shelf space. This period is consistent with it.",tell:["Pressure is building: "+"56% bad for us, up 21 points.","The main source is the environment, not one competitor.","Finance has 2 items and Sales 1 to act on or investigate."],asks:[["Finance","Seek a second whey quote before 1 January."],["Sales","Raise listing fees at the next joint business review."]]},
 dysphagia:{name:"Dysphagia management",narr:(d)=>`Pressure is rising slowly. Of ${d[1]} confirmed events, ${d[0]}% read as bad for us. Rivals are pricing lower in care homes, but new WHO guidance on safe swallowing care supports the standard our product is built around.`,
   from:[["Buyers and channels",3],["Competitors",3],["Policy and regulation",1]],moves:[["WHO Vietnam publishes guidance on safe swallowing care","e8"],["Resource Thicken Up cuts care-home price by 8%",null],["Nutilis Clear sponsors a speech-therapy congress",null]],
   knew:"Care homes buy on price per serving; clinicians choose on clarity and safety.",tell:["Pressure is up 8 points, mostly on price in care homes.","WHO guidance works in our favour: use it with clinicians.","Marketing has 1 item to act on."],asks:[["Marketing","Share the WHO guidance with speech therapists."],["Sales","Hold care-home pricing; lead with safety evidence."]]},
 active:{name:"Active nutrition and healthy ageing",narr:(d)=>`The calmest portfolio, but the busiest. Of ${d[1]} confirmed events, ${d[0]}% read as bad for us, down 3 points. Sure Prevent Gold and Ensure Gold made the most moves, mostly on price and pack format; a stricter line on advertising claims works in our favour.`,
   from:[["Competitors",14],["Buyers and channels",4],["Policy and regulation",3],["Economy",2]],moves:[["Sure Prevent Gold lists a 110 ml ready-to-drink pack","c4"],["Ensure Gold cuts its 400 g price by 6%","c3"],["Ministry of Health proposes higher fines for misleading food advertising","c6"]],
   knew:"Ensure Gold leads on awareness; Anlene Gold and Sure Prevent Gold compete on price.",tell:["Pressure is steady at 41%, down 3 points.","Ready-to-drink is the format to watch.","Marketing has 1 item to investigate."],asks:[["Marketing","Size the ready-to-drink format by month end."],["Finance","Track whether Ensure Gold's price cut holds."]]}
};
function viewBriefings(){
  const B=BR[S.brief.mode],pfs=["medical","dysphagia","active"],sel=S.brief.pf,d=B.pf[sel],P2=BRP[sel],mx=Math.max(...P2.from.map(x=>x[1]));
  return `<div class="pv-head"><div><h2>${scopeName()} · ${bpLabel(S.brief.mode,BP[S.brief.mode].cur)}</h2><p>${bpRange(S.brief.mode,BP[S.brief.mode].cur)} · ${BP[S.brief.mode].sent[BP[S.brief.mode].cur]?`Sent ${BP[S.brief.mode].sent[BP[S.brief.mode].cur]} to all four teams`:"Draft, not sent yet"}</p></div>${bpActs()}</div>${S.brief.mode==="monthly"?periodsBlock("m"):""}
  <section class="panel br-hero"><div class="k">${S.brief.mode==="monthly"?"Monthly":"Quarterly"} briefing · ${bpRange(S.brief.mode,BP[S.brief.mode].cur)}</div><h2>Pressure is highest on Medical nutrition</h2>
   <p>Across 3 portfolios, ${B.total} confirmed events were recorded. Medical nutrition carries the most pressure: ${B.pf.medical[0]}% of its events read as bad for us, up ${B.pf.medical[2]} points on the previous period. Active nutrition and healthy ageing is the calmest at ${B.pf.active[0]}%. The theme reaching every portfolio is suppliers.</p>
   <div class="pf-tiles">${pfs.map(id=>{const x=B.pf[id];return `<button class="pf-tile" aria-pressed="${id===sel}" data-act="brief-pf" data-v="${id}"><b>${BRP[id].name}</b><div class="big num">${x[0]}%<small class="${x[2]>0?"up":"down"}">${x[2]>0?"↑":"↓"} ${Math.abs(x[2])} pts</small></div><div class="s">bad for us · ${x[1]} events</div></button>`;}).join("")}</div>
   <p class="shared"><b>What every portfolio shares:</b> suppliers, 6 events, 3 bad for us. Policy and regulation, 5 events, 2 good for us.</p></section>
  <section class="panel br-pf"><div class="k muted" style="font-size:13px">Portfolio</div><h3>${P2.name}</h3><p>${P2.narr(d)}</p>
   <div class="br-cols"><div><h4>Where the pressure came from</h4><div class="hbars">${P2.from.map(([l,n])=>`<span>${l}</span><i style="width:${n/mx*100}%"></i><span class="num">${n}</span>`).join("")}</div></div>
    <div><h4>Moves that mattered</h4><div class="moves">${P2.moves.map(([t,id],i)=>id?`<button data-act="open-ev" data-id="${id}"><span>${i+1}</span>${esc(t)}</button>`:`<button disabled style="cursor:default"><span>${i+1}</span>${esc(t)}</button>`).join("")}</div></div>
    <div><h4>What we already knew</h4><p style="font-size:14px">${P2.knew}</p></div>
    <div><h4>What to tell the organisation</h4><ul class="bullets">${P2.tell.map(t=>`<li>${t}</li>`).join("")}</ul></div>
    ${S.brief.mode==="quarterly"?`<div><h4>Month by month</h4><div class="months"><div>Weeks 34–37<b class="num">${d[0]-9}%</b>bad for us</div><div>Weeks 38–41<b class="num">${d[0]-4}%</b>bad for us</div><div>Weeks 42–45<b class="num">${BR.monthly.pf[sel][0]}%</b>bad for us</div></div></div>`:`<div></div>`}
    <div><h4>Asks by team</h4><div class="asks">${P2.asks.map(([t,a])=>`<div><b>${t}</b>${a}</div>`).join("")}</div></div></div>
   <p class="muted" style="font-size:13px;margin-top:24px">Briefings rebuild from confirmed events. To change a line, correct the event or the context, not the document.</p></section>`;
}

/* ================= chat ================= */
function renderChat(){
  const n=S.scope.level==="prod"?PROD[S.scope.id].chatScope:S.scope.level==="pf"?PF.find(p=>p.id===S.scope.id).products.reduce((a,p)=>a+PROD[p].chatScope,0):206;
  $("#chat").innerHTML=`<div class="chat-h"><div><h3>Ask about ${scopeName()}</h3><p>${n} events in scope · confirmed events only · scripted demo</p></div><button class="x" data-act="chat" aria-label="Close chat">${ic("x")}</button></div>
   <div class="chat-b" id="chatb">${S.chatLog.length?"":`<p class="muted" style="font-size:13px">Answers are assembled only from the evidence held for ${scopeName()}, and cite it.</p>`}${S.chatLog.map(m=>m.u?`<div class="msg-u">${esc(m.u)}</div>`:m.typing?`<div class="msg-a typing"><i></i><i></i><i></i></div>`:m.a).join("")}</div>
   <div class="sugg">${["What changed this week?","What is bad for us right now?","What is working in our favour?","What should we keep watching?"].map(q=>`<button data-act="ask" data-q="${q}">${q}</button>`).join("")}</div>
   <form class="chat-f" id="chatf"><input class="field" id="chatq" placeholder="Ask about ${scopeName()}" aria-label="Ask a question" autocomplete="off"><button aria-label="Send">${ic("send")}</button></form>`;
  const b=$("#chatb");b.scrollTop=b.scrollHeight;
}
function openChat(on=!S.chat){S.chat=on;render();if(on)setTimeout(()=>{const q=$("#chatq");q&&q.focus();},300);}
function cite(list){return `<ol>${list.map((e,i)=>`<li><button data-act="open-ev" data-id="${e.id}"><span>${i+1}</span>${esc(e.title)}<em>${e.date}</em></button></li>`).join("")}</ol>`;}
function answer(q){
  const s=q.toLowerCase(),conf=Object.values(EV).filter(e=>e.status==="confirmed"&&inScope(e)).sort((a,b)=>b.d-a.d);
  const pick=f=>conf.filter(f).slice(0,3);
  if(/bad|threat|risk|pressure/.test(s)){const l=pick(e=>e.meaning==="bad");return `<div class="msg-a">${12+conf.filter(e=>e.meaning==="bad").length} events in the last four weeks read as bad for us. The most pressing:${cite(l)}<div class="ctx">Checked against context: Direct rivals, Substitutes</div></div>`;}
  if(/chang|this week|new/.test(s)){const l=conf.filter(e=>e.week===45).slice(0,4);return `<div class="msg-a">${l.length} confirmed changes in week 45, newest first:${cite(l)}<div class="ctx">${waiting().filter(inScope).length} more are still waiting for review and are not included.</div></div>`;}
  if(/favour|favor|good|working/.test(s)){const l=pick(e=>e.meaning==="good");return `<div class="msg-a">Working in our favour: stricter rules on advertising claims. Rivals' unsubstantiated claims become costlier.${cite(l)}</div>`;}
  if(/watch|unsure|keep/.test(s)){const l=pick(e=>e.meaning==="unsure"||e.meaning==="mixed");return `<div class="msg-a">Keep watching these. None needs action yet:${cite(l)}</div>`;}
  const comp=["ensure","anlene","sure prevent","värna","varna","glucerna"].find(c=>s.includes(c));
  if(comp&&conf.some(e=>e.actor.toLowerCase().replace("ä","a").includes(comp.replace("ä","a")))){const l=conf.filter(e=>e.actor.toLowerCase().replace("ä","a").includes(comp.replace("ä","a"))).sort((a,b)=>b.d-a.d).slice(0,4);return `<div class="msg-a">${l.length} recent events for ${l[0].actor}:${cite(l)}<div class="ctx">Confirmed events only. Events still waiting for review are not used.</div></div>`;}
  if(/price|promo|discount/.test(s)){const l=pick(e=>e.kind==="Price"||e.kind==="Promotion");return `<div class="msg-a">Recent price and promotion moves:${cite(l)}</div>`;}
  return `<div class="msg-a none">I found nothing about that in the evidence held for ${scopeName()}, so I won't guess. Try naming a competitor, an event type or a source.</div>`;
}
function ask(q){if(!q.trim())return;S.chatLog.push({u:q});const t={typing:true};S.chatLog.push(t);renderChat();setTimeout(()=>{t.typing=false;t.a=answer(q);renderChat();},650);}

/* ================= strategy ================= */
function viewStrategy(){return `<div class="soon-wrap"><span class="tag blue">Coming soon</span><h2 style="margin-top:18px">Test our next move against their likely reply</h2><p>Strategy Lab will use each competitor's history of moves to suggest how they are likely to respond, before we commit. It is not built in this prototype.</p>
  <div class="soon-steps"><div><b>Pick a move</b>A price change, a pack, a promotion or a claim.</div><div><b>See likely replies</b>Drawn from what is normal for each rival.</div><div><b>Choose with evidence</b>Every reply cites the events behind it.</div></div>
  <p style="margin-top:36px;font-size:14px">To scale the radar, add a portfolio. Environment and supply chain sources are already there.</p></div>`;}

const BP={monthly:{cur:"2026-11",avail:["2026-08","2026-09","2026-10","2026-11"],sent:{"2026-08":"Tue 1 Sep","2026-09":"Thu 1 Oct"}},
  quarterly:{cur:"2026-Q4",avail:["2026-Q3","2026-Q4"],sent:{"2026-Q3":"Thu 1 Oct"}}};
const MNS=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],MNL=["January","February","March","April","May","June","July","August","September","October","November","December"];
function bpLabel(mode,k){const [y,x]=k.split("-");if(mode==="monthly")return MNL[+x-1]+" "+y;const q=+x.slice(1),a=(q-1)*3;return `Q${q} ${y}`;}
function bpRange(mode,k){const [y,x]=k.split("-");if(mode==="monthly"){const m=+x-1,last=new Date(+y,m+1,0).getDate();return `1–${last} ${MNS[m]} ${y}`;}const q=+x.slice(1),a=(q-1)*3;return `${MNS[a]}–${MNS[a+2]} ${y}`;}
function bpActs(){const mode=S.brief.mode,P=BP[mode],k=P.cur,sent=P.sent[k];
  return `<div class="acts"><button class="wk-btn" data-act="bp-cal" aria-haspopup="dialog" aria-label="Choose ${mode==="monthly"?"month":"quarter"}, currently ${bpLabel(mode,k)}">${ic("cal")}<span><small>${mode==="monthly"?"Month":"Quarter"}</small><b>${bpLabel(mode,k)}</b></span>${ic("chevd","wk-cv")}</button>${sent?`<button class="btn sent-btn" data-act="bp-sent" aria-haspopup="dialog">${ic("check")}Sent ${sent}${ic("chevd","wk-cv")}</button>`:!can("approve")?`<span class="tag plain" style="height:38px;padding:0 16px">Awaiting approval by ${ROLES.owner.name}</span>`:pState(mode==="monthly"?"m":"q",k)==="prog"?`<button class="btn primary" disabled title="Can be sent once the period closes">${ic("send")}Approve and Send</button>`:`<button class="btn primary" data-act="bp-approve">${ic("send")}Approve and Send</button>`}</div>`;}
function renderBpCal(){const mode=S.brief.mode,P=BP[mode],y=S.bpY;
  const items=mode==="monthly"?MNS.map((m,i)=>[`${y}-${String(i+1).padStart(2,"0")}`,m]):[1,2,3,4].map(q=>[`${y}-Q${q}`,`Q${q}`]);
  $("#pop").innerHTML=`<div class="cal-h"><button class="cal-nav" data-act="bp-y" data-d="-1" aria-label="Previous year">${ic("chevl")}</button><b>${y}</b><button class="cal-nav" data-act="bp-y" data-d="1" aria-label="Next year">${ic("chev")}</button></div>
   <div class="bp-g ${mode}">${items.map(([k,l])=>{const ok=P.avail.includes(k),sel=k===P.cur;return ok?`<button class="bp-c ${sel?"sel":""}" data-act="bp-pick" data-k="${k}" aria-pressed="${sel}"><b>${l}</b>${mode==="quarterly"?`<small>${bpRange(mode,k)}</small>`:""}${P.sent[k]?`<i title="Sent"></i>`:""}</button>`:`<span class="bp-c no"><b>${l}</b>${mode==="quarterly"?`<small>${bpRange(mode,k)}</small>`:""}</span>`;}).join("")}</div>
   <div class="cal-f">${mode==="monthly"?"Months":"Quarters"} with an analysis can be opened. A dot marks the ones already sent.</div>`;}
const WSUM={46:[3,33,33],45:[18,39,17],44:[14,36,21],43:[12,35,25],42:[11,33,18]};
const MSUM={"2026-11":[7,29,29,"Weeks 45–46"],"2026-10":[59,41,17,"Weeks 40–44"],"2026-09":[40,40,20,"Weeks 36–39"],"2026-08":[19,53,10,"Weeks 34–35 · since watching began"]};
const PEND={46:"15 Nov 2026",45:"8 Nov 2026",44:"1 Nov 2026",43:"25 Oct 2026",42:"18 Oct 2026","2026-11":"30 Nov 2026","2026-10":"31 Oct 2026","2026-09":"30 Sep 2026","2026-08":"31 Aug 2026","2026-Q4":"31 Dec 2026"};
function pState(t,k){if(t==="w")return +k>=46?"prog":S.sent[k]?"sent":"final";if(k==="2026-11"||k==="2026-Q4")return"prog";return BP[t==="q"?"quarterly":"monthly"].sent[k]?"sent":"final";}
const PSN={prog:["In progress","mixed"],final:["Final, not sent","bad"],sent:["Sent","good"]};
function periodsBlock(t){
  const keys=t==="w"?[46,45,44,43,42]:["2026-11","2026-10","2026-09","2026-08"],cur=t==="w"?S.week:BP.monthly.cur;
  const lab=k=>t==="w"?`week ${k} (${weekRange(k)})`:bpLabel("monthly",k);
  const card=k=>{const d=t==="w"?WSUM[k]:MSUM[k],st=pState(t,k),[sn,sc]=PSN[st],bad=d[1],good=d[2];
    return `<button class="pc ${k==cur?"on":""}" data-act="pc-pick" data-t="${t}" data-k="${k}" aria-pressed="${k==cur}"><div class="pc-h"><b>${t==="w"?"Week "+k:bpLabel("monthly",k)}</b><span class="tag ${sc}">${sn}</span></div>
      <div class="pc-s">${t==="w"?weekRange(k):d[3]}</div><div class="pc-bar" aria-hidden="true"><i style="width:${bad}%;background:var(--bad)"></i><i style="width:${good}%;background:var(--good)"></i><i style="flex:1;background:#B8B1A9"></i></div>
      <div class="pc-f">${d[0]} events · <b>${bad}%</b> bad for us</div></button>`;};
  const fin=keys.find(k=>pState(t,k)==="final"&&k!=cur);
  return `<div class="periods">${keys.map(card).join("")}</div>
   ${fin!==undefined?`<div class="rem">${ic("bell")}<b>Reminder:</b><span>the ${t==="w"?"weekly":"monthly"} analysis for ${lab(fin)} is final but not sent yet. It closed on ${PEND[fin]}.</span><button class="btn sm" data-act="pc-pick" data-t="${t}" data-k="${fin}">Open It</button></div>`:""}
   ${pState(t,cur)==="prog"?`<div class="prog-note"><b>In progress.</b> ${t==="w"?"Week "+cur:bpLabel("monthly",cur)} is still open, so this analysis updates as events are confirmed. It can be sent once the ${t==="w"?"week":"month"} closes on ${PEND[cur]}; you will get a reminder then.</div>`:""}`;}
const WK0=new Date(2026,10,2);
function wkStart(w){const d=new Date(WK0);d.setDate(d.getDate()+(w-45)*7);return d;}
function wkOf(d){const m=new Date(d);m.setDate(m.getDate()-((m.getDay()+6)%7));return 45+Math.round((m-WK0)/(7*864e5));}
function renderCal(){const [y,m]=S.calM,first=new Date(y,m,1),off=(first.getDay()+6)%7,days=new Date(y,m+1,0).getDate();
  const MN=["January","February","March","April","May","June","July","August","September","October","November","December"];
  let cells="";for(let i=0;i<off;i++)cells+=`<span></span>`;
  for(let d=1;d<=days;d++){const dt=new Date(y,m,d),w=wkOf(dt),ok=w>=41&&w<=46,sel=w===S.week,dow=(dt.getDay()+6)%7;
    const cls=["cal-d",ok?"":"no",sel?"in":"",sel&&dow===0?"s":"",sel&&dow===6?"e":"",sel&&d===1&&dow!==0?"s2":"",sel&&d===days&&dow!==6?"e2":"",(y===2026&&m===10&&d===13)?"today":""].join(" ");
    cells+=ok?`<button class="${cls}${sel&&dow===0?" sel":""}" data-act="cal-pick" data-w="${w}" title="Week ${w}, ${weekRange(w)}" aria-pressed="${sel}">${d}</button>`:`<span class="${cls}" title="${w>46?"No analysis yet":"Before the radar started"}">${d}</span>`;}
  $("#pop").innerHTML=`<div class="cal-h"><button class="cal-nav" data-act="cal-m" data-d="-1" aria-label="Previous month">${ic("chevl")}</button><b>${MN[m]} ${y}</b><button class="cal-nav" data-act="cal-m" data-d="1" aria-label="Next month">${ic("chev")}</button></div>
   <div class="cal-g">${["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(x=>`<span class="cal-w">${x}</span>`).join("")}${cells}</div>
   <div class="cal-f">Choose any day to open its week. Weeks 41–46 have an analysis.</div>`;}
S.team={tab:"members",grp:"all",q:"",sort:"name"};
let NAVC={};try{NAVC=JSON.parse(localStorage.getItem("radar-navc")||"{}")||{};}catch(e){NAVC={};}
const NOTIF=[
 {t:"11 events are waiting for your review",when:"Today, 09:10",read:false,go:()=>{Object.assign(S.ev,{status:"review",group:"all",q:"",sel:null});nav("events");}},
 {t:"Ensure Gold started a buy 2 get 1 promotion",when:"Sun 8 Nov",read:false,go:()=>openSheet({type:"event",id:"e1"})},
 {t:"Ad library for Ensure Gold is paused",when:"Since 1 Nov",read:false,go:()=>nav("monitoring")},
 {t:"Week 44 analysis was sent to all teams",when:"Fri 6 Nov",read:true,go:()=>{S.week=44;nav("pulse");}}];
const HUBS={
 decision:{t:"Decide our next move with evidence",p:"Pick a move, see how each rival is likely to reply, and record the decision with the events behind it.",steps:[["Pick a move","A price change, a pack, a promotion or a claim."],["See likely replies","Drawn from what is normal for each rival."],["Record the decision","With the events and context that support it."]]},
 results:{t:"See whether our moves worked",p:"Track each recorded decision against what happened next: share, price gap and rival replies.",steps:[["Link a decision","Every result starts from a recorded decision."],["Watch the signals","Events after the decision are matched to it."],["Read the outcome","Worked, partly worked or did not work, with evidence."]]},
 lessons:{t:"Keep what we learned",p:"Turn results into short lessons the next product team can reuse.",steps:[["Write the lesson","One sentence, linked to its decision and result."],["Tag it","By rival, channel and type of move."],["Reuse it","Lessons appear when a similar event is reviewed."]]}};
function viewHub(k){const h=HUBS[k];return `<div class="soon-wrap"><span class="tag blue">Coming soon</span><h2 style="margin-top:18px">${h.t}</h2><p>${h.p}</p>
  <div class="soon-steps">${h.steps.map(([b,d])=>`<div><b>${b}</b>${d}</div>`).join("")}</div></div>`;}
const INTEG=[
 {id:"rss",dir:"in",name:"RSS feeds",ic:"rss",col:"#A3650B",desc:"News sites and regulator feeds, read as they publish.",src:7,sync:"Today, 09:10",on:true},
 {id:"apify",dir:"in",name:"Apify",ic:"bot",col:"#34682A",desc:"Store listings and social pages: prices, badges, posts.",src:14,sync:"Today, 09:10",on:true,warn:"1 paused"},
 {id:"fire",dir:"in",name:"Firecrawl",ic:"globe",col:"#7E1352",desc:"Public websites, checked for page changes and new articles.",src:8,sync:"Today, 09:08",on:true,warn:"2 late"},
 {id:"mail",dir:"in",name:"Email feed",ic:"mail",col:"#017CBA",desc:"Supplier notices forwarded to the radar inbox.",src:2,sync:"Yesterday, 17:42",on:true},
 {id:"teams",dir:"out",name:"Microsoft Teams",ic:"chat",col:"#5B5FC7",desc:"Post the weekly analysis to a team channel when it is approved.",on:false},
 {id:"sp",dir:"out",name:"SharePoint",ic:"folder",col:"#0F7B83",desc:"Save monthly and quarterly analysis as documents in a library.",on:false},
 {id:"outlook",dir:"out",name:"Email digest",ic:"mail",col:"#343231",desc:"Send the morning digest and weekly analysis by email.",on:true,sync:"Fri 6 Nov, 16:00",note:"4 recipients"}];
function viewIntegration(){const edit=can("sources"),cn=INTEG.filter(x=>x.on).length,srcN=INTEG.reduce((a,x)=>a+(x.src||0),0);
  const card=x=>`<article class="ig-card ${x.on?"":"off"}"><div class="ig-top"><span class="ig-ic" style="background:${x.col}">${ic(x.ic)}</span><span class="tag ${x.on?"good":"plain"}">${x.on?"Connected":"Not connected"}</span></div>
    <h3>${x.name}</h3><p>${x.desc}</p>
    <div class="ig-foot"><dl class="ig-meta">${x.on?`${x.src?`<div><dt>Sources</dt><dd class="num"><button class="ig-srcl" data-act="nav" data-r="monitoring" title="View sources">${x.src}${ic("chev")}</button>${x.warn?` <span class="ig-warn">${x.warn}</span>`:""}</dd></div>`:`<div><dt>Sends to</dt><dd>${x.id==="outlook"?DIGEST.people.length+" people":x.note}</dd></div>`}<div><dt>Last ${x.dir==="in"?"sync":"sent"}</dt><dd>${x.sync}</dd></div>`:`<div><dt>Status</dt><dd class="muted">Ready to connect</dd></div>`}</dl>
    <div class="ig-acts">${edit?(x.on?`<button class="ig-gear" data-act="ig-manage" data-id="${x.id}" aria-label="Manage ${x.name}" title="Manage ${x.name}">${ic("gear")}</button>`:`<button class="btn sm primary" data-act="ig-connect" data-id="${x.id}">${ic("plug")}Connect</button>`):`<span class="muted" style="font-size:13px">Managed by an administrator</span>`}</div></div></article>`;
  const sec=(dir,t,d)=>`<div class="ig-sh"><h2>${t}</h2><p>${d}</p></div><div class="ig-grid n${INTEG.filter(x=>x.dir===dir).length}">${INTEG.filter(x=>x.dir===dir).map(card).join("")}</div>`;
  return `<div class="pv-head"><div><h2>Integration</h2><p>Where the radar collects evidence from, and where it sends results.</p></div><div class="tm-btns">${can("review")?`<button class="btn" data-act="ev-upload">${ic("upload")}Upload</button>`:""}${edit?`<button class="btn primary" data-act="ig-add-src">${ic("plus")}Add Source</button>`:""}</div></div>
  <div class="ig-sum"><div><b class="num">${cn}</b><span>of ${INTEG.length} connected</span></div><div><b class="num">${srcN}</b><span>sources collecting</span></div><div><b>09:10</b><span>last capture today</span></div><div><b class="num" style="color:var(--bad)">3</b><span>sources need attention</span></div></div>
  ${sec("in","Collect evidence","Tools that watch sources and turn changes into events.")}
  ${sec("out","Send results","Where approved analysis goes after review.")}`;}
function viewAReview(){const edit=can("sources");
  return `<div class="pv-head"><div><h2>Report Setup</h2><p>Who reviews and approves each analysis, who receives it, and where it goes once approved.</p></div>${edit?`<div class="tm-btns"><button class="btn primary" data-act="ig-manage" data-id="outlook">${ic("mail")}Email List</button></div>`:""}</div>
  <div class="ar-page">${arevSec(edit)}</div>`;}
const AREV=[
 {id:"weekly",name:"Weekly Analysis",r:"pulse",draft:"Monday, 08:00",drafts:["Monday, 08:00","Monday, 13:00","Friday, 16:00"],rev:"Reviewer",appr:"Radar owner",to:["outlook"],auto:true,rcpt:["Marketing team","Sales team","Finance team"]},
 {id:"monthly",name:"Monthly Analysis",r:"monthly",draft:"1st working day, 09:00",drafts:["1st working day, 09:00","3rd working day, 09:00","Last Friday of the month, 16:00"],rev:"Radar owner",appr:"Management",to:["outlook"],auto:false,rcpt:["Management","Marketing team"]},
 {id:"quarterly",name:"Quarterly Analysis",r:"quarterly",draft:"5th working day of the quarter",drafts:["5th working day of the quarter","10th working day of the quarter","Last week of the quarter"],rev:"Radar owner",appr:"Management",to:["outlook"],auto:false,rcpt:["Management"]}];
const DIGEST={from:"Competitor Radar · Nestlé Vietnam",reply:"radar@example.com",people:[
 {email:"lan.pham@example.com",gets:["digest","weekly","monthly","quarterly"]},{email:"huy.le@example.com",gets:["digest","weekly"]},
 {email:"thu.nguyen@example.com",gets:["weekly","monthly"]},{email:"insights@agency.example.com",gets:["monthly","quarterly"]}]};
const DGK=[["digest","Morning digest"],["weekly","Weekly"],["monthly","Monthly"],["quarterly","Quarterly"]];
function arevSec(edit){
  const opts=(list,v)=>list.map(o=>`<option ${o===v?"selected":""}>${o}</option>`).join("");
  const outs=INTEG.filter(x=>x.dir==="out");
  const card=a=>`<article class="ar-card"><div class="ar-top"><h3>${a.name}</h3><button class="link" data-act="nav" data-r="${a.r}">Open ${ic("chev")}</button></div>
    <label>Draft ready<select class="field" data-act-change="arev" data-id="${a.id}" data-k="draft" ${edit?"":"disabled"}>${opts(a.drafts,a.draft)}</select></label>
    <label>Reviewed by<select class="field" data-act-change="arev" data-id="${a.id}" data-k="rev" ${edit?"":"disabled"}>${opts(Object.keys(ROLEDEF),a.rev)}</select></label>
    <label>Approved by<select class="field" data-act-change="arev" data-id="${a.id}" data-k="appr" ${edit?"":"disabled"}>${opts(Object.keys(ROLEDEF),a.appr)}</select></label>
    <div class="ar-l">Send to<div class="chips">${outs.map(x=>{const on=a.to.includes(x.id);return `<button class="chip" aria-pressed="${on&&x.on}" data-act="arev-to" data-id="${a.id}" data-v="${x.id}" ${edit?"":"disabled"} title="${x.on?"":"Connect "+x.name+" first"}">${x.on?ic(on?"check":"plus"):ic("plug")}${x.name}</button>`;}).join("")}</div></div>
    <div class="ar-l">Recipients<div class="ar-rc">${a.rcpt.map(r=>`<span class="ar-tag">${r}${edit?`<button data-act="ar-rm" data-id="${a.id}" data-v="${r}" aria-label="Remove ${r}">${ic("x")}</button>`:""}</span>`).join("")}${edit&&Object.keys(ROLEDEF).some(r=>!a.rcpt.includes(r))?`<select class="ar-add" data-act-change="ar-add" data-id="${a.id}" aria-label="Add recipients"><option value="">+ Add</option>${Object.keys(ROLEDEF).filter(r=>!a.rcpt.includes(r)).map(r=>`<option>${r}</option>`).join("")}</select>`:""}</div>
      <small class="ar-more">${(()=>{const n=DIGEST.people.filter(p=>p.gets.includes(a.id)).length;return n?`Plus ${n} ${n>1?"people":"person"} from the email list. `:""})()}${edit?`<button class="link" data-act="ig-manage" data-id="outlook">Manage email list</button>`:""}</small></div>
    <label class="ar-sw"><span>Send automatically after approval</span><input type="checkbox" class="switch-in" data-act-change="arev" data-id="${a.id}" data-k="auto" ${a.auto?"checked":""} ${edit?"":"disabled"}></label></article>`;
  return `<div class="ig-sh"><h2>Analysis review</h2><p>Who reviews and approves each analysis, and where it goes once approved.</p></div><div class="ar-grid">${AREV.map(card).join("")}</div>`;}
const ROLEDEF={
 "Radar owner":{desc:"Reviews events, sets up sources, approves the weekly analysis",can:["review","sources","approve"]},
 "Administrator":{desc:"Sets up sources and keeps the map current",can:["sources"]},
 "Reviewer":{desc:"Reviews events but cannot change sources or approve",can:["review"]},
 "Marketing team":{desc:"Reads the analysis and acts on Marketing items",can:[]},
 "Sales team":{desc:"Reads the analysis and acts on Sales items",can:[]},
 "Finance team":{desc:"Reads the analysis and acts on Finance items",can:[]},
 "Management":{desc:"Reads briefings and the weekly analysis",can:[]}};
const TEAMX=[
 {k:"x1",name:"Thu Nguyen",ini:"TN",email:"thu.nguyen@example.com",role:"Reviewer",seen:"2 hr ago",on:false,col:"#5E7C8A"},
 {k:"x2",name:"Bao Vo",ini:"BV",email:"bao.vo@example.com",role:"Sales team",seen:"Yesterday",on:false,col:"#A3650B"}];
const mins=s=>s==="Online"?0:s==="Sent just now"?0:/min/.test(s)?parseInt(s):/hr/.test(s)?parseInt(s)*60:s==="Yesterday"?1440:/day/.test(s)?parseInt(s)*1440:99999;
const SEEN={owner:["Online",true],admin:["5 min ago",true],marketing:["1 hr ago",false],mgmt:["3 days ago",false]};
const EMAIL={owner:"kay@example.com",admin:"minh.tran@example.com",marketing:"huy.le@example.com",mgmt:"lan.pham@example.com"};
let INVITES=[{email:"an.do@example.com",role:"Marketing team",sent:"Sent 2 days ago"},{email:"quang.ly@example.com",role:"Finance team",sent:"Sent 5 days ago"}];
const TGROUPS=[["admins","Owners and administrators",["Radar owner","Administrator"]],["reviewers","Reviewers",["Reviewer"]],["teams","Teams",["Marketing team","Sales team","Finance team"]],["mgmt","Management",["Management"]]];
const REMOVED=new Set();
function members(){return [...Object.entries(ROLES).filter(([k])=>!REMOVED.has(k)).map(([k,r])=>({k,name:r.name,ini:r.ini,email:EMAIL[k],role:r.role,seen:SEEN[k][0],on:SEEN[k][1],me:k===S.role,cls:"av-"+k})),...TEAMX.map(x=>({...x,me:false}))];}
function viewTeam(){const T=S.team,edit=can("sources"),all=members(),q=T.q.trim().toLowerCase();
  const list=all.filter(m=>(!q||(m.name+" "+m.email.split("@")[0]+" "+m.role).toLowerCase().includes(q))).sort((a,b)=>T.sort==="name"?a.name.localeCompare(b.name):T.sort==="namez"?b.name.localeCompare(a.name):(mins(a.seen)-mins(b.seen))||a.name.localeCompare(b.name));
  const flat=T.sort==="active";
  const grp=T.grp==="all"?TGROUPS:TGROUPS.filter(g=>g[0]===T.grp);
  const row=m=>`<div class="tm-row"><span class="av ${m.cls||""}" ${m.col?`style="background:${m.col}"`:""}>${m.ini}</span><span class="grow"><b>${esc(m.name)}${m.me?' <em>(you)</em>':""}</b><small>${m.email}</small></span>
    <span class="tag plain">${m.role}</span><span class="tm-seen"><i class="${m.on?"on":""}"></i>${m.seen}</span>${edit?`<button class="tm-more" data-act="tm-menu" data-k="${m.k}" aria-label="Options for ${esc(m.name)}" aria-haspopup="menu">${ic("more")}</button>`:`<span class="tm-more"></span>`}</div>`;
  const members_=flat?(list.filter(m=>grp.some(g=>g[2].includes(m.role))).length?`<h3 class="tm-gh">Most recently active first <span>(${list.filter(m=>grp.some(g=>g[2].includes(m.role))).length})</span></h3><div class="tm-card">${list.filter(m=>grp.some(g=>g[2].includes(m.role))).map(row).join("")}</div>`:`<div class="panel empty">No members match. Clear the search or choose another group.</div>`):grp.map(([id,label,roles])=>{const ms=list.filter(m=>roles.includes(m.role));if(!ms.length)return"";return `<h3 class="tm-gh">${label} <span>(${ms.length})</span></h3><div class="tm-card">${ms.map(row).join("")}</div>`;}).join("")||`<div class="panel empty">No members match. Clear the search or choose another group.</div>`;
  const inv=INVITES.length?`<div class="tm-card">${INVITES.map((v,i)=>`<div class="tm-row"><span class="av" style="background:var(--sand);color:var(--ink-2)">${ic("user")}</span><span class="grow"><b>${v.email}</b><small>${v.sent}</small></span><span class="tag plain">${v.role}</span>${edit?`<span class="tm-acts inv-acts"><button class="btn sm" data-act="inv-resend" data-i="${i}">${ic("mail")}Resend</button><button class="btn sm inv-cancel" data-act="inv-cancel" data-i="${i}">Cancel</button></span>`:""}</div>`).join("")}</div>`:`<div class="panel empty">No pending invites.</div>`;
  return `<div class="pv-head" style="margin-bottom:18px"><div><h2>Team &amp; Access</h2><p>Who works in the Nestlé Vietnam radar, and what each person can do.</p></div><div class="tm-btns"><button class="btn" data-act="tm-roles">${ic("shield")}Roles and permissions</button>${edit?`<button class="btn primary" data-act="tm-invite">${ic("user")}Invite member</button>`:""}</div></div><div class="tm-top"><div class="tm-tabs" role="tablist"><button role="tab" aria-selected="${T.tab==="members"}" data-act="tm-tab" data-v="members">Members <span>(${all.length})</span></button><button role="tab" aria-selected="${T.tab==="invites"}" data-act="tm-tab" data-v="invites">Pending invites <span>(${INVITES.length})</span></button></div></div>
  ${T.tab==="members"?`<div class="tm-tools"><div class="chips tm-filter">${[["all","All"],...TGROUPS.map(g=>[g[0],g[1]])].map(([k,l])=>`<button class="chip" aria-pressed="${T.grp===k}" data-act="tm-grp" data-v="${k}">${T.grp===k?ic("check"):""}${l}</button>`).join("")}</div>
    <div class="tm-right"><label class="pill pill-search">${ic("search")}<input id="teamq" placeholder="Search members" value="${esc(T.q)}" aria-label="Search members"></label>
    <label class="pill pill-sel"><span class="muted" style="font-size:15px">Sort by:</span><select data-act-change="tm-sort" aria-label="Sort members">${[["name","Name A–Z"],["namez","Name Z–A"],["active","Last active"]].map(([k,l])=>`<option value="${k}" ${T.sort===k?"selected":""}>${l}</option>`).join("")}</select>${ic("chevd","pcv")}</label></div></div>
    <div id="teamList">${members_}</div>${edit?"":`<p class="muted" style="font-size:14px;margin-top:14px">Only a radar owner or administrator can change roles or invite people.</p>`}`
   :`<div style="margin-top:24px">${inv}</div>`}`;}
function setMemberRole(k,n){const r=ROLES[k]||TEAMX.find(x=>x.k===k);const prev=r.role;
  if(prev==="Radar owner"&&n!=="Radar owner"&&members().filter(x=>x.role==="Radar owner").length===1){toast("At least one person must stay Radar owner.");return;}
  r.role=n;if(ROLES[k]){r.desc=ROLEDEF[n].desc;r.can=[...ROLEDEF[n].can];r.team=n.endsWith(" team")?n.replace(" team",""):(n==="Management"?"Management":"All");}
  toast(`${r.name} is now ${n}.`);render();}
/* ================= profile ================= */
const PROFILE={};
function viewProfile(){
  const r=me(),em=EMAIL[S.role]||"you@example.com",edit=can("sources");
  const PR=PROFILE[S.role]||(PROFILE[S.role]={title:{owner:"Competitive Intelligence Lead",admin:"Insights Analyst",marketing:"Brand Manager",mgmt:"Business Unit Head"}[S.role]||"Team member",lang:"English",tz:"Asia/Ho Chi Minh (UTC+7)"});
  const P=[["review","Review events","Choose products and meaning, confirm or mark not relevant"],["sources","Manage sources","Add, pause and resume sources in Radar Setup"],["approve","Approve analysis","Approve and send the weekly analysis"]];
  const mine=Object.values(EV).filter(e=>e.status==="confirmed"&&e.decided==="just now");
  const duty=AREV.flatMap(a=>[a.rev===r.role?["Reviews",a]:null,a.appr===r.role?["Approves",a]:null,a.rcpt.includes(r.role)?["Receives",a]:null].filter(Boolean));
  const opt=(l,v)=>l.map(o=>`<option ${o===v?"selected":""}>${o}</option>`).join("");
  const tg=(k,t,d)=>`<label class="set-row"><span class="grow"><b>${t}</b><small>${d}</small></span><input type="checkbox" class="switch-in" data-act-change="pref" data-k="${k}" ${PREFS[k]?"checked":""}></label>`;
  return `<section class="panel pf-hero"><span class="av av-${S.role} xl">${r.ini}</span><div class="pf-id"><h2>${esc(r.name)}</h2><p>${esc(PR.title)} · Nestlé Vietnam</p>
     <div class="pf-meta"><span class="pf-role">${ic("shield")}${r.role}</span><span class="pf-on"><i></i>Online</span><span>${ic("mail")}${em}</span></div></div>
     <button class="btn" data-act="signout">${ic("out")}Sign Out</button></section>
  <div class="ig-sum pf-sum">${[[14+mine.length,"events reviewed this week"],[9+mine.length,"confirmed this week"],[5,"marked not relevant"],[3,"analyses approved this quarter"]].map(([n,l])=>`<div><b class="num">${n}</b><span>${l}</span></div>`).join("")}</div>
  <div class="pf-grid"><div class="pf-col">
   <section class="panel box"><h3>Personal Details</h3>
    <div class="fgrid pf-form"><label>Display name<input class="field" id="pfName" value="${esc(r.name)}"></label><label>Job title<input class="field" id="pfTitle" value="${esc(PR.title)}"></label>
     <label><span>Email <span class="opt">(from SSO)</span></span><input class="field" value="${em}" disabled></label><label><span>Team <span class="opt">(set by an administrator)</span></span><input class="field" value="${r.team==="All"?"Competitive intelligence":r.team}" disabled></label>
     <label>Language<select class="field" id="pfLang">${opt(["English","Tiếng Việt"],PR.lang)}</select></label><label>Time zone<select class="field" id="pfTz">${opt(["Asia/Ho Chi Minh (UTC+7)","Asia/Singapore (UTC+8)","Europe/Zurich (UTC+1)"],PR.tz)}</select></label></div>
    <div class="pf-save"><button class="btn primary" data-act="prof-save">Save Changes</button></div></section>
   <section class="panel box"><h3>Recent Activity</h3>
    ${mine.length?`<div class="people">${mine.map(e=>`<div><span class="grow"><b>${esc(e.title)}</b><small>Confirmed ${MEAN[e.meaning].toLowerCase()} · ${e.chosen.map(p=>PROD[p].name).join(", ")}</small></span><button class="link" data-act="open-ev" data-id="${e.id}">Open ${ic("chev")}</button></div>`).join("")}</div>`:`<div class="pf-empty"><span>Nothing yet in this session. Events you confirm will appear here.</span><button class="link" data-act="nav" data-r="events">Go to Events Review ${ic("chev")}</button></div>`}</section></div>
  <div class="pf-col">
   <section class="panel box"><h3>Role and Access</h3><p class="lede">You are ${/^[AEIOU]/.test(r.role)?"an":"a"} ${r.role}. An administrator can change this in Team &amp; Access.</p>
    <div class="perm pf-perm">${P.map(([k,t,d])=>`<div class="${can(k)?"on":""}">${ic(can(k)?"check":"minus")}<span><b>${t}</b><small>${d}</small></span></div>`).join("")}</div></section>
   <section class="panel box"><h3>Your Analysis Duties</h3>
    ${duty.length?`<div class="people">${duty.map(([v,a])=>`<div><span class="grow"><b>${v} ${a.name}</b><small>${v==="Receives"?"By email, after approval":"Draft ready "+a.draft}</small></span><button class="link" data-act="nav" data-r="${a.r}">Open ${ic("chev")}</button></div>`).join("")}</div>`:`<p class="muted" style="font-size:15px">No analysis duties for your role.</p>`}
    ${edit?`<button class="link pf-more" data-act="pf-review">Change in Report Setup ${ic("chev")}</button>`:""}</section>
   <section class="panel box"><h3>Notifications</h3><p class="lede">Sent to ${em}. Changes save as you make them.</p>
    ${tg("digest","Morning digest","At 09:15, what is waiting for you")}${tg("pulse","Weekly Analysis","When it is approved and sent")}${tg("urgent","High-impact events","As soon as one is rated high impact")}${tg("gaps","Source gaps","When a source is paused or late")}</section></div></div>`;
}
/* ================= settings ================= */
const PREFS={digest:true,pulse:true,urgent:true,gaps:false};
function viewSettings(){
  const tg=(k,t,d)=>`<label class="set-row"><span class="grow"><b>${t}</b><small>${d}</small></span><input type="checkbox" class="switch-in" data-act-change="pref" data-k="${k}" ${PREFS[k]?"checked":""}></label>`;
  return `<div class="pv-head"><div><h2>Settings</h2><p>Your notifications and the portfolios in this workspace. People and roles are in Team &amp; Access.</p></div></div>
  <div class="two" style="margin-top:24px"><section class="panel box"><h3>Notifications</h3><p class="lede">Sent to ${me().name}. Changes save as you make them.</p>
    ${tg("digest","Morning digest","At 09:15, after the daily capture: what is waiting for you.")}${tg("pulse","Weekly Analysis","When the weekly analysis is approved and sent on Friday.")}${tg("urgent","High-impact events","As soon as an event is rated high impact and high urgency.")}${tg("gaps","Source gaps","When a source is paused or late for more than 3 days.")}</section>
   <section class="panel box"><h3>Portfolios in this workspace</h3><p class="lede">Supply Chain and External Factors sources are shared across each portfolio.</p>
   <div class="people">${PF.map(p=>`<div><span class="grow"><b>${p.name}</b><small>${p.products.map(x=>PROD[x].name).join(", ")}</small></span><span class="muted" style="font-size:13px">${p.products.length} product${p.products.length>1?"s":""}</span></div>`).join("")}</div></section></div>`;
}
/* ================= actions ================= */
function rerenderAll(){render();if(SHEET)renderSheet();}
function confirmEv(id){const e=EV[id];e.status="confirmed";e.decided="just now";e.inPulse=e.week===45;e.fresh=true;
  DEC[id]=e.meaning==="bad"&&e.an.impact==="High"?"Act":e.an.impact==="High"?"Investigate":"Watch";
  toast(`Confirmed. It joins ${e.chosen.map(p=>PROD[p].name).join(", ")} and this week's summary.`);
  if(!SHEET&&S.route==="events"){const l=evFiltered();S.ev.sel=l[0]?l[0].id:null;}rerenderAll();}
const A={
  nav:(el,ev)=>{ev.preventDefault();if(el.closest("#nav")&&el.dataset.r==="cockpit"&&S.scope.level==="prod")setScope("pf",PROD[S.scope.id].pf);if(el.closest("#nav"))closeSheet();nav(el.dataset.r);},
  scope:el=>{const _l=el.dataset.l,_id=el.dataset.id||null;if(_l!=="all"){S.recent=[[_l,_id],...(S.recent||[]).filter(r=>!(r[0]===_l&&r[1]===_id))].slice(0,4);}S.popq="";S.popPf=null;setScope(el.dataset.l,el.dataset.id||null);$("#pop").classList.remove("open");if(S.route==="briefings"&&el.dataset.l==="pf")S.brief.pf=el.dataset.id;render();},
  switch:el=>{const p=$("#pop");if(p.classList.contains("open")&&p.dataset.m==="scope"){p.classList.remove("open");return;}p.dataset.m="scope";S.popq="";S.popPf=null;S.popPq="";S.popLim={pf:50,prod:50};S.popAll={};renderPop();const r=el.getBoundingClientRect();p.style.left=r.left+"px";p.style.top=(r.bottom+8)+"px";p.style.width="680px";p.classList.add("open");el.setAttribute("aria-expanded","true");setTimeout(()=>{const i=$("#popq");i&&i.focus();},20);},
  chat:()=>openChat(),
  acct:el=>{const p=$("#pop");if(p.classList.contains("open")&&p.dataset.m==="acct"){p.classList.remove("open");el.setAttribute("aria-expanded","false");return;}
    p.dataset.m="acct";p.innerHTML=`<div class="acct-h"><span class="av av-${S.role} lg">${me().ini}</span><div><b>${me().name}</b><small>${me().role} · Nestlé Vietnam</small></div></div>
<button data-act="soon" data-v="Profile">${ic("user")}Profile</button>`;
    const r=el.getBoundingClientRect();p.style.width="340px";p.style.left=(r.right-340)+"px";p.style.top=(r.bottom+8)+"px";p.classList.add("open");el.setAttribute("aria-expanded","true");p.querySelector("[aria-checked=true]")?.focus();},
  "tm-tab":el=>{S.team.tab=el.dataset.v;render();},
  "tm-grp":el=>{S.team.grp=el.dataset.v;render();},
  "tm-menu":el=>{const p=$("#pop"),k=el.dataset.k;if(p.classList.contains("open")&&p.dataset.m==="tm"+k){p.classList.remove("open");return;}
    const m=members().find(x=>x.k===k);p.dataset.m="tm"+k;
    p.innerHTML=`<p>Change role for ${esc(m.name)}</p>${Object.keys(ROLEDEF).map(n=>`<button role="menuitemradio" aria-checked="${m.role===n}" data-act="tm-setrole" data-k="${k}" data-v="${n}">${n}${m.role===n?ic("check","rc"):""}</button>`).join("")}${m.me?"":m.role==="Radar owner"&&members().filter(x=>x.role==="Radar owner").length<2?`<div class="pop-sep"></div><p class="pop-note">The only radar owner cannot be removed.</p>`:`<div class="pop-sep"></div><button class="danger" data-act="tm-remove" data-k="${k}">${ic("x")}Remove from workspace</button>`}`;
    const r=el.getBoundingClientRect();p.style.width="260px";p.classList.add("open");p.style.left=(r.right-260)+"px";const h=p.offsetHeight;p.style.top=(r.bottom+h+8>innerHeight?r.top-h-8:r.bottom+8)+"px";},
  "tm-setrole":el=>{$("#pop").classList.remove("open");setMemberRole(el.dataset.k,el.dataset.v);},
  "tm-remove":el=>{$("#pop").classList.remove("open");const k=el.dataset.k,i=TEAMX.findIndex(x=>x.k===k);let nm;if(i>-1){const x=TEAMX.splice(i,1)[0];nm=x.name;UNDO=()=>TEAMX.splice(i,0,x);}else{nm=ROLES[k].name;REMOVED.add(k);UNDO=()=>REMOVED.delete(k);}toast(`Removed ${nm} from the workspace.`,true);render();},
  "tm-roles":()=>openSheet({type:"roles"}),
  "tm-invite":()=>openSheet({type:"invite"}),
  "inv-resend":el=>toast(`Invite sent again to ${INVITES[+el.dataset.i].email}.`),
  "inv-cancel":el=>{const i=+el.dataset.i,v=INVITES.splice(i,1)[0];UNDO=()=>INVITES.splice(i,0,v);toast(`Cancelled the invite to ${v.email}.`,true);render();},
  "do-invite":()=>{const e=$("#invEmail"),v=e.value.trim();if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)){e.style.borderColor="var(--bad)";e.focus();$("#invErr").textContent="Enter an email address, like name@example.com.";return;}
    INVITES.unshift({email:v,role:$("#invRole").value,sent:"Sent just now"});closeSheet();S.team.tab="invites";render();toast(`Invite sent to ${v}.`);},
  "ig-connect":el=>{const x=INTEG.find(i=>i.id===el.dataset.id);x.on=true;x.sync="Not sent yet";x.note=x.id==="teams"?"#competitor-radar":"Competitor Radar library";toast(`${x.name} connected.`);render();},
  "ig-manage":el=>{const x=INTEG.find(i=>i.id===el.dataset.id);if(x.id==="outlook"){openSheet({type:"emailcfg"});return;}toast(`${x.name} settings are not part of this prototype.`);},
  "dg-get":el=>{const p=DIGEST.people[+el.dataset.i],k=el.dataset.v;p.gets=p.gets.includes(k)?p.gets.filter(x=>x!==k):[...p.gets,k];const v=keepForm();renderSheet();restoreForm(v);},
  "dg-del":el=>{const p=DIGEST.people.splice(+el.dataset.i,1)[0];const v=keepForm();renderSheet();restoreForm(v);toast(`Removed ${p.email}.`);},
  "dg-add":()=>{const i=$("#dgNew"),v=i.value.trim();if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)){$("#dgErr").textContent="Enter a valid email address.";i.focus();return;}
    if(DIGEST.people.some(p=>p.email===v)){$("#dgErr").textContent="This address is already on the list.";return;}DIGEST.people.push({email:v,gets:["weekly"]});i.value="";const k=keepForm();renderSheet();restoreForm(k);toast(`Added ${v}.`);},
  "dg-save":()=>{DIGEST.from=$("#dgFrom").value.trim()||DIGEST.from;DIGEST.reply=$("#dgReply").value.trim()||DIGEST.reply;closeSheet();render();toast("Email settings saved.");},
  "ar-rm":el=>{const r=AREV.find(x=>x.id===el.dataset.id);r.rcpt=r.rcpt.filter(x=>x!==el.dataset.v);render();toast(`${el.dataset.v} removed from ${r.name}.`);},
  "pop-pin":el=>{const k=el.dataset.l+":"+el.dataset.id;S.pins=S.pins||[];const on=S.pins.includes(k);S.pins=on?S.pins.filter(x=>x!==k):[k,...S.pins];renderPop();const b=document.querySelector(`.sp-star[data-l="${el.dataset.l}"][data-id="${el.dataset.id}"]`);b&&b.focus();toast(on?"Unpinned.":"Pinned to the top of the switcher.");},
  "pop-more":el=>{const k=el.dataset.k;S.popLim=S.popLim||{pf:50,prod:50};S.popLim[k]+=50;const c=el.closest(".sp-col"),t=c&&c.scrollTop,ci=c?[...document.querySelectorAll("#pop .sp-col")].indexOf(c):-1;renderPop();if(ci>-1)document.querySelectorAll("#pop .sp-col")[ci].scrollTop=t;},
  "pop-all":el=>{S.popAll=S.popAll||{};S.popAll[el.dataset.k]=true;const r=$("#pop .sp-res"),t=r&&r.scrollTop;renderPop();const r2=$("#pop .sp-res");if(r2)r2.scrollTop=t;},
  "pop-pf":el=>{S.popPf=el.dataset.v;S.popPq="";S.popLim={pf:(S.popLim||{pf:50}).pf,prod:50};const c=document.querySelector("#pop .sp-col"),t=c&&c.scrollTop;renderPop();const c2=document.querySelector("#pop .sp-col");if(c2)c2.scrollTop=t;const b=document.querySelector(`.sp-pf[data-v="${el.dataset.v}"]`);b&&b.focus();},
  "ask-ev":el=>{const e=EV[el.dataset.id];if(!S.chat)openChat(true);setTimeout(()=>ask(`What has ${e.actor} done lately?`),S.chat?0:320);},
  navgrp:el=>{const g=el.dataset.g;NAVC[g]=!NAVC[g];try{localStorage.setItem("radar-navc",JSON.stringify(NAVC));}catch(e){}renderNav();const b=document.querySelector(`.nav-tog[data-g="${g}"]`);b&&b.focus();},
  notif:el=>{const p=$("#pop");if(p.classList.contains("open")&&p.dataset.m==="notif"){p.classList.remove("open");return;}
    p.dataset.m="notif";p.innerHTML=`<div class="nt-h"><b>Notifications</b><button class="link" data-act="notif-read">Mark All as Read</button></div>${NOTIF.map((x,i)=>`<button class="nt-i ${x.read?"":"unread"}" data-act="notif-go" data-i="${i}"><i></i><span class="grow"><b>${x.t}</b><small>${x.when}</small></span></button>`).join("")}`;
    const r=el.getBoundingClientRect();p.style.width="360px";p.style.left=(r.right-360)+"px";p.style.top=(r.bottom+8)+"px";p.classList.add("open");},
  "notif-read":()=>{NOTIF.forEach(x=>x.read=true);$("#pop").classList.remove("open");renderTop();},
  "notif-go":el=>{const x=NOTIF[+el.dataset.i];x.read=true;$("#pop").classList.remove("open");x.go();renderTop();},
  rolemenu:el=>{const p=$("#pop");if(p.classList.contains("open")&&p.dataset.m==="role"){p.classList.remove("open");el.setAttribute("aria-expanded","false");return;}
    p.dataset.m="role";p.innerHTML=`<p>Demo · view the radar as</p>${Object.entries(ROLES).map(([k,r])=>`<button role="menuitemradio" class="role" aria-checked="${S.role===k}" data-act="role" data-v="${k}"><span class="av av-${k}">${r.ini}</span><span class="grow"><b>${r.name} · ${r.role}</b><small>${r.desc}</small></span>${S.role===k?ic("check","rc"):""}</button>`).join("")}`;
    const r=el.getBoundingClientRect();p.style.width="340px";p.style.left=r.left+"px";p.classList.add("open");p.style.top=(r.top-p.offsetHeight-8)+"px";el.setAttribute("aria-expanded","true");p.querySelector("[aria-checked=true]")?.focus();},
  role:el=>{S.role=el.dataset.v;S.pteam=me().team;$("#pop").classList.remove("open");closeSheet();render();toast(`Viewing as ${me().name}, ${me().role}.${me().can.length?"":" Review and edit actions are hidden."}`);},
  signout:(el,ev)=>{ev.preventDefault();closeSheet();$("#pop").classList.remove("open");S.chat=false;
    const em={owner:"kay",admin:"minh.tran",marketing:"huy.le",mgmt:"lan.pham"}[S.role]+"@example.com";
    $("#signin").innerHTML=`
     <header class="si-top"><img src="${document.querySelector(".brand img").src}" alt="Nestlé"></header>
     <main class="si-main"><h1>Welcome</h1><p class="si-sub">Sign in to your account</p>
      <button class="si-btn si-out" data-act="signin">Continue with SSO Login</button>
      <div class="si-or"><span>Or</span></div>
      <form id="siForm" autocomplete="off" novalidate>
      <label class="si-label" for="siEmail">Email</label><input class="si-field" id="siEmail" type="email" autocomplete="off" spellcheck="false" value="${em}">
      <label class="si-label" for="siPw">Password</label><div class="si-pw"><input class="si-field" id="siPw" type="password" autocomplete="new-password" placeholder="Any password works"><button type="button" class="si-eye" data-act="si-eye" aria-label="Show password"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M3 10c2.5 3 5.5 4.5 9 4.5s6.5-1.5 9-4.5M6.5 13l-1.8 2.2M12 14.5V17M17.5 13l1.8 2.2"/></svg></button></div>
      <div class="si-forgot"><button type="button" class="si-link" data-act="fill-sample">Use Sample Data</button><button type="button" class="si-link" data-act="soon" data-v="Password reset">Forgot Password</button></div>
      <button type="submit" class="si-btn si-in">Sign In</button><p class="si-note">Prototype: any email and password signs you in. Please do not use your real password.</p></form></main>
     <footer class="si-foot"><button class="si-link" data-act="soon" data-v="Terms">Terms</button><i></i><button class="si-link" data-act="soon" data-v="Privacy">Privacy</button><i></i><button class="si-link" data-act="soon" data-v="Support">Support</button></footer>`;
    $("#signin").classList.add("open");document.querySelector(".app").setAttribute("inert","");setTimeout(()=>$("#siPw").focus(),30);},
  "si-eye":el=>{const i=$("#siPw");const show=i.type==="password";i.type=show?"text":"password";el.setAttribute("aria-label",show?"Hide password":"Show password");},
  signin:()=>{const f=$("#siForm");if(f)f.reset();$("#signin").classList.remove("open");document.querySelector(".app").removeAttribute("inert");nav("cockpit");toast(`Signed in as ${me().name}.`);},
  soon:el=>{$("#pop").classList.remove("open");toast(`${el.dataset.v} is not part of this prototype.`);},
  "open-prod":el=>{setScope("prod",el.dataset.id);nav("cockpit");},
  "review-all":()=>{Object.assign(S.ev,{status:"review",group:"all",q:"",sel:null});nav("events");},
  "review-week":()=>{Object.assign(S.ev,{status:"review",group:"all",q:"",sel:null});nav("events");},
  "events-confirmed":()=>{Object.assign(S.ev,{status:"confirmed",group:"all",q:"",sel:null});nav("events");},
  "open-ev":el=>openSheet({type:"event",id:el.dataset.id}),
  "close-sheet":()=>closeSheet(),
  "ev-status":el=>{S.ev.status=el.dataset.v;S.ev.sel=null;S.ev.edit=null;render();},
  "ev-group":el=>{S.ev.group=el.dataset.v;S.ev.sel=null;render();},
  "ev-sel":el=>{S.ev.sel=el.dataset.id;S.ev.edit=null;render();},
  "prod-chip":el=>{const e=EV[el.dataset.id],p=el.dataset.p;e.chosen=e.chosen.includes(p)?e.chosen.filter(x=>x!==p):[...e.chosen,p];rerenderAll();},
  mean:el=>{EV[el.dataset.id].meaning=el.dataset.v;rerenderAll();},
  confirm:el=>confirmEv(el.dataset.id),
  noise:el=>{const e=EV[el.dataset.id];e.status="noise";toast("Marked not relevant. You can find it under Not relevant.");if(!SHEET){const l=evFiltered();S.ev.sel=l[0]?l[0].id:null;}rerenderAll();},
  "to-review":el=>{const e=EV[el.dataset.id];e.status="review";e.fresh=false;S.ev.edit=null;if(S.route==="events"){S.ev.status="review";S.ev.group="all";S.ev.sel=e.id;}toast("Saved and moved back to Needs review.");rerenderAll();},
  "ev-edit":el=>{const e=EV[el.dataset.id];S.ev.edit=e.id;S.ev.snap={chosen:[...e.chosen],meaning:e.meaning,note:e.note,an:{...e.an}};rerenderAll();},
  "ev-discard":el=>{const e=EV[el.dataset.id],k=S.ev.snap;if(k){e.chosen=k.chosen;e.meaning=k.meaning;e.note=k.note;e.an=k.an;}S.ev.edit=null;S.ev.snap=null;toast("Changes discarded.");rerenderAll();},
  "ev-save":el=>{S.ev.edit=null;toast("Changes saved.");rerenderAll();},
  week:el=>{S.week=Math.min(45,Math.max(41,S.week+ +el.dataset.d));S.hl=null;render();},
  "goto-week":el=>{S.week=+el.dataset.w;S.hl=null;render();$("#view").scrollTop=0;},
  team:el=>{S.pteam=el.dataset.v;render();},
  "pc-pick":el=>{if(el.dataset.t==="w"){S.week=+el.dataset.k;S.hl=null;}else BP.monthly.cur=el.dataset.k;render();},
  "bp-cal":el=>{const p=$("#pop");if(p.classList.contains("open")&&p.dataset.m==="bp"){p.classList.remove("open");return;}
    p.dataset.m="bp";S.bpY=+BP[S.brief.mode].cur.slice(0,4);renderBpCal();const r=el.getBoundingClientRect();p.style.width="320px";p.classList.add("open");p.style.left=Math.max(12,r.right-320)+"px";p.style.top=(r.bottom+8)+"px";p.querySelector(".bp-c.sel")?.focus();},
  "bp-y":el=>{S.bpY+= +el.dataset.d;renderBpCal();},
  "bp-pick":el=>{BP[S.brief.mode].cur=el.dataset.k;$("#pop").classList.remove("open");render();toast(`Showing ${bpLabel(S.brief.mode,el.dataset.k)}.`);},
  "bp-approve":()=>{const P=BP[S.brief.mode];P.sent[P.cur]="Sat 14 Nov";toast(`${bpLabel(S.brief.mode,P.cur)} analysis approved and sent to all four teams.`);render();},
  "bp-sent":el=>{const p=$("#pop");if(p.classList.contains("open")&&p.dataset.m==="bps"){p.classList.remove("open");return;}
    p.dataset.m="bps";const P=BP[S.brief.mode];
    p.innerHTML=`<div class="si-box"><b>${bpLabel(S.brief.mode,P.cur)} analysis was sent</b><small>${P.sent[P.cur]}, by ${ROLES.owner.name}</small>
      <div class="si-to"><span class="sp-lbl" style="padding:10px 0 6px">Sent to</span>${["Marketing","Sales","Finance","Management"].map(t=>`<span class="tag plain">${t}</span>`).join("")}</div></div>
      <div class="pop-sep"></div><button data-act="bp-again">${ic("send")}Send Again</button>`;
    const r=el.getBoundingClientRect();p.style.width="300px";p.classList.add("open");p.style.left=(r.right-300)+"px";p.style.top=(r.bottom+8)+"px";},
  "bp-again":()=>{$("#pop").classList.remove("open");toast(`${bpLabel(S.brief.mode,BP[S.brief.mode].cur)} analysis sent again to all four teams.`);},

  "sent-info":el=>{const p=$("#pop");if(p.classList.contains("open")&&p.dataset.m==="sent"){p.classList.remove("open");return;}
    p.dataset.m="sent";const s=S.sent[S.week];
    p.innerHTML=`<div class="si-box"><b>Week ${S.week} analysis was sent</b><small>${s}, by ${ROLES.owner.name}</small>
      <div class="si-to"><span class="sp-lbl" style="padding:10px 0 6px">Sent to</span>${["Marketing","Sales","Finance","Management"].map(t=>`<span class="tag plain">${t}</span>`).join("")}</div></div>
      <div class="pop-sep"></div><button data-act="sent-again">${ic("send")}Send Again</button><button data-act="sent-copy">${ic("briefings")}Copy Summary Text</button>`;
    const r=el.getBoundingClientRect();p.style.width="300px";p.classList.add("open");p.style.left=(r.right-300)+"px";p.style.top=(r.bottom+8)+"px";},
  "sent-again":()=>{$("#pop").classList.remove("open");toast(`Week ${S.week} analysis sent again to all four teams.`);},
  "sent-copy":()=>{$("#pop").classList.remove("open");const t=document.querySelector(".pulse-sum")?.innerText||"";try{navigator.clipboard.writeText(t).then(()=>toast("Summary text copied."),()=>toast("Copy is not available here."));}catch(e){toast("Copy is not available here.");}},

  "wk-cal":el=>{const p=$("#pop");if(p.classList.contains("open")&&p.dataset.m==="cal"){p.classList.remove("open");return;}
    p.dataset.m="cal";const s=wkStart(S.week);S.calM=[s.getFullYear(),s.getMonth()];renderCal();const r=el.getBoundingClientRect();p.style.width="340px";p.classList.add("open");p.style.left=Math.max(12,r.right-340)+"px";p.style.top=(r.bottom+8)+"px";p.querySelector(".cal-d.sel")?.focus();},
  "cal-m":el=>{let [y,m]=S.calM;m+=+el.dataset.d;if(m<0){m=11;y--;}if(m>11){m=0;y++;}S.calM=[y,m];renderCal();},
  "cal-pick":el=>{S.week=+el.dataset.w;S.hl=null;$("#pop").classList.remove("open");render();toast(`Showing week ${S.week}, ${weekRange(S.week)}.`);},

  approve:()=>{S.sent[45]="Fri 13 Nov";Object.values(EV).forEach(e=>e.fresh=false);toast("Weekly analysis approved and sent to all four teams.");render();},
  "brief-mode":el=>{nav(el.dataset.v==="quarterly"?"quarterly":"monthly");},
  "brief-pf":el=>{S.brief.pf=el.dataset.v;render();},
  ask:el=>ask(el.dataset.q),
  "chat-about":el=>{const n=el.dataset.v;closeSheet();if(!S.chat)openChat(true);ask(`What has ${n} done lately?`);},
  story:el=>{const d=+el.dataset.d;$("#intro").classList.remove("open");if(S.story===9&&d>0){S.story=-1;closeSheet();toast("Story complete. Explore freely.");render();return;}S.story=Math.max(0,S.story+d);closeSheet();STORY[S.story].go();renderStory();},
  "intro-close":()=>$("#intro").classList.remove("open"),
  "home-view":el=>{S.home.view=el.dataset.v;document.querySelectorAll(".vtog button").forEach(b=>b.setAttribute("aria-pressed",b===el));refreshProds();},
  "home-clear":()=>{Object.assign(S.home,{q:"",status:"all"});render();},
  "mon-pid":el=>{S.mon.pid=el.dataset.v;S.mon.fitted=0;render();},
  noop:()=>toast("In the full product this opens an editor for what we know."),
  "mon-view":el=>{S.mon.view=el.dataset.v;S.mon.full=false;render();},
  "mon-gaps":()=>{S.mon.gaps=!S.mon.gaps;if(S.mon.gaps)openToGaps();render();setTimeout(()=>{const st=$("#stage"),r=POS.root;if(!st||!r)return;S.mon.z=.88;S.mon.x=10;S.mon.y=Math.round(Math.min(34,st.clientHeight/2-(r.y+NH/2)*.88));applyXf();},0);},
  "mon-all":el=>{const o=el.dataset.v==="1";allTreeIds().forEach(id=>S.mon.op[id]=o);S.mon.op["main-comp"]=S.mon.op["main-ctx"]=true;render();setTimeout(fitCanvas,0);},
  "fill-sample":()=>{const set=(el,v)=>{if(!el)return;el.value=v;el.style.borderColor="";el.dispatchEvent(new Event("input",{bubbles:true}));};
    if($("#signin")&&$("#signin").classList.contains("open")){set($("#siEmail"),"demo.user@example.com");set($("#siPw"),"sample-password");return;}
    if(!SHEET)return;
    if(SHEET.type==="igsrc"){if(SHEET.step!==2)return;const v={rss:{url:"https://tuoitre.vn/rss/kinh-doanh.rss",kw:"nutrition, sữa"},store:{url:"https://shopee.vn/ensure-gold-official"},social:{url:"https://www.facebook.com/EnsureVietnam"},adlib:{adv:"Ensure Gold"},web:{url:"https://www.vn.abbott/media-center.html"},email:{from:"account.vn@tetrapak.example.com"},form:{},api:{}}[SHEET.ch];
      Object.entries(v).forEach(([k,x])=>set($("#ns-"+k),x));set($("#fName"),{rss:"Tuoi Tre business feed",store:"Ensure Gold Shopee Mall",social:"Ensure Vietnam Facebook page",adlib:"Ensure Gold ads",web:"Abbott Vietnam newsroom",email:"Tetra Pak account team",form:"Field sales store visits",api:"Distributor portal"}[SHEET.ch]);return;}
    if(SHEET.type==="upload"){set($("#upTitle"),"Anlene Gold adds a free shaker to 800 g tins at Guardian");$("#upKind").value="Promotion";$("#upGroup").value="competitors";set($("#upActor"),"Anlene Gold");
      set($("#upNote"),"Seen in store at Guardian, District 1. Shelf talker says the offer runs to 30 Nov.");set($("#upLink"),"https://www.guardian.com.vn/anlene-gold-800g");if(!SHEET.files.length)upFiles([{name:"guardian-shelf-photo.jpg",size:1843200}]);return;}
    if(SHEET.type==="emailcfg"){set($("#dgNew"),"an.do@example.com");if($("#dgErr"))$("#dgErr").textContent="";return;}
    if(SHEET.type==="invite"){set($("#invEmail"),"minh.tran@example.com");if($("#invErr"))$("#invErr").textContent="";return;}
    if(SHEET.type==="addComp"){const vals=["Nutricare","https://nutricare.com.vn","Nutricare Gold","85","Powder, 400 g and 900 g tins","Pharmacy chains, Shopee and Lazada","Bone and muscle strength in 8 weeks"];
      document.querySelectorAll(".sheet-b input.field:not([data-link])").forEach((el,i)=>vals[i]!=null&&set(el,vals[i]));
      const LK={"Store listing":"https://shopee.vn/nutricare-official","Social post":"https://www.facebook.com/nutricare.vn","LinkedIn":"https://www.linkedin.com/company/nutricare","Press release":"https://nutricare.com.vn/feed","Ad library":"https://www.facebook.com/ads/library/?q=nutricare"};
      document.querySelectorAll(".sheet-b [data-link]").forEach(el=>set(el,LK[el.dataset.t]||"https://nutricare.com.vn"));return;}
    const k=SHEET.type==="addSrc"&&MON.comp.items.find(x=>x.id===SHEET.k),LF=SHEET.lid&&LEAFMAP[SHEET.lid],slug=t=>t.toLowerCase().replace(/[^a-z0-9]+/g,"-");
    const lab=LF?LF.label.toLowerCase():"",mkt=LF&&/-pa-/.test(SHEET.lid)||SHEET.g==="own",plan=SHEET.g==="own"&&LF&&/^(list|plan|appr)$/.test(LF.mic);
    const [n,l]=plan?["Nestlé "+lab,"https://nestle.sharepoint.com/sites/vn-"+slug(LF.label)]:LF?[(k?k.name:SHEET.g==="own"?monProd().name:"Vietnam")+" "+lab+" tracker",mkt?"https://shopee.vn/search?keyword="+slug((k?k.name:monProd().name)+" "+LF.label):"https://vnexpress.net/tag/"+slug(LF.label)]:k?[k.name+" Lazada store","https://www.lazada.vn/shop/"+slug(k.name)]:SHEET.g==="own"?["Nestlé trade promotion plan","https://nestle.sharepoint.com/sites/vn-trade"]:SHEET.g==="sup"?["Tetra Pak supplier portal","https://www.tetrapak.com/vi-vn/news"]:["Ministry of Science and Technology news","https://most.gov.vn/rss"];
    set($("#fName"),n);set($("#fLink"),l);},
  "arev-to":el=>{const r=AREV.find(x=>x.id===el.dataset.id),x=INTEG.find(i=>i.id===el.dataset.v);if(!x.on){toast(`Connect ${x.name} first, on the Integration page.`);return;}
    r.to=r.to.includes(x.id)?r.to.filter(i=>i!==x.id):[...r.to,x.id];toast(`${r.name} ${r.to.includes(x.id)?"will be sent to":"will no longer go to"} ${x.name}.`);render();},
  "ig-tab":el=>{S.igTab=el.dataset.v;render();},
  "prof-save":()=>{const r=me(),PR=PROFILE[S.role],n=$("#pfName").value.trim();if(!n){$("#pfName").focus();$("#pfName").style.borderColor="var(--bad)";return;}
    r.name=n;r.ini=n.split(/\s+/).map(w=>w[0]).join("").slice(0,2).toUpperCase();PR.title=$("#pfTitle").value.trim()||PR.title;PR.lang=$("#pfLang").value;PR.tz=$("#pfTz").value;render();toast("Profile saved.");},
  "pf-review":()=>{nav("areview");},
  "ev-upload":()=>openSheet({type:"upload"}),
  "up-rm":el=>{SHEET.files.splice(+el.dataset.i,1);$("#upFiles").innerHTML=upFileList();},
  "do-upload":()=>{const t=$("#upTitle"),title=t.value.trim(),link=$("#upLink").value.trim();
    if(!title){t.focus();t.style.borderColor="var(--bad)";toast("Add a title for the event.");return;}
    if(!SHEET.files.length&&!link){toast("Add a file or a link as evidence.");$("#upLink").focus();return;}
    const dt=new Date(($("#upDate").value||"2026-11-13")+"T12:00:00"),pid=$("#upProd").value,note=$("#upNote").value.trim(),id="u"+Date.now();
    EV[id]={id,kind:$("#upKind").value,actor:$("#upActor").value.trim()||"Unknown",org:"",src:"Manual upload",date:dt.toLocaleDateString("en-GB",{weekday:"short",day:"numeric",month:"short"}).replace(",",""),d:dt.getDate(),group:$("#upGroup").value,title,products:[pid],ai:"unsure",
      cap:{detail:[note||"No notes added.",...SHEET.files.map(f=>"Attached: "+f.n)]},srcLine:link||SHEET.files[0].n,check:`Uploaded by ${me().name}. Choose the products and meaning, then confirm.`,ctx:[],an:{impact:"Medium",urgency:"Medium",team:"Marketing",step:""},means:"",status:"review",week:S.week,chosen:[pid],meaning:"unsure",note:"",manual:true};
    S.ev.status="review";S.ev.group="all";S.ev.q="";S.ev.sel=id;closeSheet();render();toast("Event uploaded. It is in Needs review.");},
  "ig-add-src":()=>{monTree();openSheet({type:"igsrc",step:1,ch:"store",lid:"k-ens-pa-price",cfg:{}});},
  "nsk":el=>{SHEET.ch=el.dataset.k;document.querySelectorAll(".nsopt").forEach(b=>{const on=b.dataset.k===SHEET.ch;b.classList.toggle("on",on);b.setAttribute("aria-checked",on);});},
  "ns-env":()=>{monTree();openSheet({type:"igsrc",step:1,ch:"rss",lid:"env-P-pol",kind:"env",who:"own",cat:"P",mic:"pol",cfg:{}});},
  "dp-who":el=>{SHEET.who=el.dataset.v;const k=keepForm();renderSheet();restoreForm(k);},
  "ev-src":el=>openSheet({type:"evsrc",id:el.dataset.id,w:el.dataset.w}),
  "cap-link":()=>toast("In the live radar this opens the original post. Links in this demo are samples."),
  "evsrc-open":el=>{const v=EV[el.dataset.id];closeSheet();S.ev.status=v.status;S.ev.group="all";S.ev.q="";S.ev.sel=v.id;S.ev.edit=null;if(S.route!=="events")nav("events");else render();},
  "evsrc-map":()=>{closeSheet();nav("monitoring");},
  "evsrc-pz":el=>{const F=findSrc(EV[el.dataset.id]),x=F.s;x.status=x.status==="paused"?"current":"paused";x.since=x.status==="paused"?"paused today":undefined;toast(`${x.name} ${x.status==="paused"?"paused":"resumed. Next capture tonight"}.`);rerenderAll();},
  "nsnext":()=>{SHEET.step=2;SHEET.cfg={};renderSheet();},
  "nsback":()=>{SHEET.step=1;renderSheet();},
  "nscopy":el=>{toast("Copied.");},
  "do-ig-src":()=>{const C=NSCAT.find(x=>x[0]===SHEET.ch),req=[...document.querySelectorAll("#sheet [data-req]")].filter(e=>!e.value.trim());
    if(req.length){req.forEach(e=>e.style.borderColor="var(--bad)");req[0].focus();toast("Fill in the required fields first.");return;}
    const nm=($("#fName").value.trim())||C[1],L=LEAFMAP[SHEET.lid],src={id:"q"+Date.now(),name:nm,type:C[4],status:"queued",ev:0};
    if(L.k){if(L.mic)src.mic=L.mic;L.arr.push(src);}else{src.sub=L.sub;src.mic=L.mic;(L.g==="own"?MON.own:MON[L.g]).sources.push(src);}
    const x=INTEG.find(i=>i.id===C[5]);if(x&&x.src!=null)x.src++;L.ids.forEach(i=>S.mon.op[i]=true);closeSheet();render();toast(`Connected ${nm}. First capture queued for ${L.path}.`);},
  "mon-tog":el=>{const id=el.dataset.id;S.mon.op[id]=!isOpen(id);render();focusMon(id);},
  "add-leaf":el=>{monTree();const id=el.dataset.id,L=LEAFMAP[id];if(!L)return;openSheet({type:"igsrc",step:1,ch:/-pa-/.test(id)||L.g==="own"?"store":/-sc-|^sup-/.test(id)?"web":"rss",lid:id,cfg:{}});},
  "mon-group":el=>openSheet({type:"group",id:el.dataset.id}),
  "mon-comp":el=>openSheet({type:"comp",id:el.dataset.id}),
  "mon-src":el=>{const p=el.dataset.p;if(MON[p])openSheet({type:"group",id:p});else openSheet({type:"comp",id:p});},
  zoom:el=>{S.mon.z=Math.min(1.6,Math.max(.4,S.mon.z+ +el.dataset.d));applyXf();},
  "mon-full":()=>{S.mon.full=!S.mon.full;render();requestAnimationFrame(()=>{const st=$("#stage"),r=POS.root;if(st&&r){S.mon.z=.88;S.mon.x=10;S.mon.y=Math.round(Math.min(34,st.clientHeight/2-(r.y+NH/2)*.88));applyXf();}$(".fs-tog")?.focus();});},
  fit:()=>{fitCanvas(true);toast("Map reset to its original layout.");},
  "mon-del":el=>monDelete(el.dataset.id),
  undo:()=>{if(UNDO){UNDO();UNDO=null;render();toast("Restored.");}},
  validate:()=>{const g=allSources().filter(s=>s.status==="paused"||s.status==="delayed");
    if(!g.length){toast("Map validated. Every group has a current source.");return;}
    S.mon.gaps=true;openToGaps();render();setTimeout(fitCanvas,0);
    toast(`${g.length} gap${g.length>1?"s":""} to fix: ${g.map(s=>s.name).join(", ")}.`);},
  pause:el=>{const k=MON.comp.items.find(x=>x.id===el.dataset.k),s=k.sources.find(x=>x.id===el.dataset.s);s.status=s.status==="paused"?"current":"paused";s.since=s.status==="paused"?"paused today":undefined;toast(`${s.name} ${s.status==="paused"?"paused":"resumed. Next capture tonight"}.`);rerenderAll();},
  "add-comp":()=>openSheet({type:"addComp",step:1,ch:"store",cfg:{}}),
  "add-sup":()=>{monTree();openSheet({type:"igsrc",step:1,ch:"web",lid:"sup-up-raw",kind:"sup",who:"own",cat:"up",mic:"raw",cfg:{}});},
  "add-env":el=>{monTree();const g=el.dataset.g||"env";openSheet({type:"igsrc",step:1,ch:g==="env"?"rss":g==="sup"?"web":"store",lid:{env:"env-P-pol",sup:"sup-up-raw",own:"own-price-list"}[g]||"env-P-pol",cfg:{}});},
  "add-source":el=>{monTree();const k=MON.comp.items.find(x=>x.id===el.dataset.k),lid=Object.keys(LEAFMAP).find(i=>i.startsWith(k.id+"-pa-"))||k.id+"-pa-price";openSheet({type:"igsrc",step:1,ch:"store",lid,cfg:{}});},
  "mon-node":el=>openSheet({type:"monNode",id:el.dataset.id}),
  "mon-goto":el=>{const F=findNode(el.dataset.id);if(!F)return;F.ids.forEach(i=>S.mon.op[i]=true);closeSheet();if(S.mon.view!=="canvas")S.mon.view="canvas";render();requestAnimationFrame(()=>focusMon(F.t.id));},
  "add-pa-grp":el=>{openSheet({type:"addGrp",pid:el.dataset.id,mics:[]});setTimeout(()=>$("#fGrp")?.focus(),80);},
  "grp-sug":el=>{const i=$("#fGrp");i.value=el.dataset.v;i.dispatchEvent(new Event("input",{bubbles:true}));i.focus();},
  "grp-mic-add":()=>{const i=$("#fMic"),v=i.value.trim();if(!v){i.focus();return;}if(SHEET.mics.some(m=>m.toLowerCase()===v.toLowerCase())){toast(`${v} is already in the list.`);i.select();return;}SHEET.mics.push(v);const keep=keepForm().filter(([k])=>k!=="fMic");renderSheet();restoreForm(keep);$("#fMic").focus();},
  "grp-mic-del":el=>{SHEET.mics.splice(+el.dataset.i,1);const keep=keepForm();renderSheet();restoreForm(keep);},
  "do-add-grp":()=>{const i=$("#fGrp"),v=i.value.trim(),I=paGrpInfo(SHEET.pid),er=$("#grpErr");
    const bad=m=>{er.style.display="";er.innerHTML=ic("alert")+m;i.focus();};
    if(!v)return bad("Enter a name.");if(I.list.some(([,l])=>l.toLowerCase()===v.toLowerCase()))return bad(`${esc(v)} is already in ${esc(I.label)}.`);
    const pid=SHEET.pid,mics=SHEET.mics||[],base="n"+Date.now().toString(36),nid=I.add(base,v);ADDED.add(nid);
    if(I.kind==="subgroup")mics.forEach((m,j)=>{OWNMIC[base].push([base+"m"+j,m]);ADDED.add(nid+"-"+base+"m"+j);});
    S.mon.op[pid]=true;S.mon.op[nid]=true;closeSheet();render();focusMon(nid);toast(`Added ${v} to ${I.label}${mics.length&&I.kind==="subgroup"?` with ${mics.length} micro-group${mics.length>1?"s":""}`:""}.`);},
  "add-own":()=>{monTree();openSheet({type:"addEnv",g:"own",lid:"own-price-list",pickOwn:1});},
  ftype:el=>{SHEET.type0=el.dataset.v;document.querySelectorAll(".typelist button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.v===SHEET.type0));},
  fhow:el=>{SHEET.how=el.dataset.v;el.parentNode.querySelectorAll("button").forEach(b=>b.setAttribute("aria-pressed",b===el));},
  ftypes:el=>{const t=el.dataset.v;const vals=keepForm();SHEET.types=SHEET.types.includes(t)?SHEET.types.filter(x=>x!==t):[...SHEET.types,t];renderSheet();restoreForm(vals);},
  "do-add-comp":()=>{const name=($("#fProd").value||$("#fCo").value).trim();if(!name){$("#fProd").focus();$("#fProd").style.borderColor="var(--bad)";return;}
    const k={id:"k-"+Date.now(),name,org:$("#fCo").value.trim()||"Unknown company",how:SHEET.how,idx:+$("#fIdx").value||90,open:true,queued:true,normal:"Baseline research is queued. What is normal for them appears here within a day.",
      sources:SHEET.ch?(()=>{const C=NSCAT.find(x=>x[0]===SHEET.ch);return [{id:"q"+Date.now(),name:($("#fName")?.value.trim())||C[1],type:C[4],status:"queued",ev:0,mic:PATYPE[C[4]]||"price"}];})():SHEET.types.map((t,i)=>({id:"q"+Date.now()+i,name:t,type:t,status:"queued",ev:0}))};
    MON.comp.items.push(k);S.mon.op=S.mon.op||{};S.mon.op[k.id]=S.mon.op[k.id+"-pa"]=true;closeSheet();if(S.route!=="monitoring")nav("monitoring");else render();toast(`Added ${name}. Baseline research and first capture queued.`);},
  "do-add-src":()=>{const nm=$("#fName").value.trim();if(!nm){$("#fName").focus();$("#fName").style.borderColor="var(--bad)";return;}
    const s={id:"q"+Date.now(),name:nm,type:SHEET.type0,status:"queued",ev:0};
    const L=SHEET.lid&&LEAFMAP[SHEET.lid];let lid=SHEET.lid;
    if(SHEET.type==="addSrc"){const k=MON.comp.items.find(x=>x.id===SHEET.k);if(L&&L.mic)s.mic=L.mic;else if(!L)s.mic=PATYPE[s.type]||"price";(L?L.arr:k.sources).push(s);lid=lid||k.id+"-pa-"+s.mic;}else if(SHEET.g==="own"){s.sub=L?L.sub:"price";s.mic=L?L.mic:OWNMIC.price[0][0];MON.own.sources.push(s);lid=lid||"own-"+s.sub+"-"+s.mic;}else{s.sub=L?L.sub:SHEET.g==="sup"?"up":"E";s.mic=L?L.mic:MIC[SHEET.g][s.sub][0][0];MON[SHEET.g].sources.push(s);lid=lid||SHEET.g+"-"+s.sub+"-"+s.mic;}
    monTree();(LEAFMAP[lid]?LEAFMAP[lid].ids:[]).forEach(i=>S.mon.op[i]=true);
    closeSheet();render();toast(`Added ${nm}. First capture queued.`);}
};
function keepForm(){return [...document.querySelectorAll("#sheet input")].map(i=>[i.id||i.dataset.t,i.value]);}
function restoreForm(v){v.forEach(([k,val])=>{const i=document.getElementById(k)||document.querySelector(`#sheet input[data-t="${k}"]`);if(i&&val){i.value=val;i.dispatchEvent(new Event("input",{bubbles:true}));}});}

document.addEventListener("click",ev=>{if(justDragged&&ev.target.closest(".node")){ev.stopPropagation();return;}
  const el=ev.target.closest("[data-act]");
  if(!ev.target.closest("#pop,.scope,.acct,.demo-role,.notif"))$("#pop").classList.remove("open");
  if(!el)return;const f=A[el.dataset.act];if(f){if(el.tagName==="A")ev.preventDefault();f(el,ev);}
});
document.addEventListener("keydown",ev=>{
  if(ev.key==="Escape"&&S.mon.full&&S.route==="monitoring"&&!$("#pop").classList.contains("open")&&!SHEET){S.mon.full=false;render();requestAnimationFrame(()=>fitCanvas(false));return;}
  if(ev.key==="Escape"){if($("#intro").classList.contains("open"))$("#intro").classList.remove("open");else if($("#pop").classList.contains("open"))$("#pop").classList.remove("open");else if(SHEET)closeSheet();}
  if((ev.key==="Enter"||ev.key===" ")&&ev.target.matches(".node[role=button]")){ev.preventDefault();ev.target.click();}
});
$("#scrim").addEventListener("click",closeSheet);
document.addEventListener("change",ev=>{const el=ev.target.closest("[data-act-change]");if(!el)return;const a=el.dataset.actChange,e=EV[el.dataset.id];
  if(a==="ev-group"){S.ev.group=el.value;S.ev.sel=null;render();return;}
  if(a==="home-st"){S.home.status=el.value;refreshProds();return;}
  if(a==="home-sort"){S.home.sort=el.value;$("#prodSub").textContent=SORTS[el.value][1];refreshProds();return;}
  if(a==="an"){e.an[el.dataset.k]=el.value;if(S.route==="pulse")render();}
  if(a==="mon-pid"){S.mon.pid=el.value;S.mon.fitted=0;render();return;}
  if(a==="tm-sort"){S.team.sort=el.value;render();return;}
  if(a==="set-role"){const k=el.dataset.k,r=ROLES[k],n=el.value,prev=r.role;
    if(prev==="Radar owner"&&n!=="Radar owner"&&Object.values(ROLES).filter(x=>x.role==="Radar owner").length===1){el.value=prev;toast("At least one person must stay Radar owner.");return;}
    r.role=n;r.desc=ROLEDEF[n].desc;r.can=[...ROLEDEF[n].can];r.team=n.endsWith(" team")?n.replace(" team",""):(n==="Management"?"Management":"All");
    toast(`${r.name} is now ${n}.`);render();return;}
  if(a==="ar-add"){if(!el.value)return;const r=AREV.find(x=>x.id===el.dataset.id);r.rcpt.push(el.value);toast(`${el.value} added to ${r.name}.`);render();return;}
  if(a==="nstog"){SHEET.cfg[el.dataset.f]=el.checked;return;}
  if(a==="dp-cat"){SHEET.cat=el.value;SHEET.mic=null;const k=keepForm();renderSheet();restoreForm(k);return;}
  if(a==="dp-mic"){SHEET.mic=el.value;const k=keepForm();renderSheet();restoreForm(k);return;}
  if(a==="src-dest"&&SHEET.type==="igsrc"){const keep=keepForm();SHEET.lid=el.value;renderSheet();restoreForm(keep);return;}
  if(a==="src-dest"){const L=LEAFMAP[el.value],keep=keepForm();SHEET.lid=el.value;if(L.k){SHEET.type="addSrc";SHEET.k=L.k;SHEET.g=null;}else{SHEET.type="addEnv";SHEET.g=L.g;SHEET.k=null;}SHEET.type0=null;renderSheet();restoreForm(keep);return;}
  if(a==="up-file"){upFiles(el.files);el.value="";return;}
  if(a==="arev"){const r=AREV.find(x=>x.id===el.dataset.id),k=el.dataset.k;r[k]=k==="auto"?el.checked:el.value;toast(k==="auto"?`${r.name} will ${el.checked?"send automatically":"wait for a manual send"} after approval.`:`${r.name}: ${k==="draft"?"draft ready":k==="rev"?"reviewed by":"approved by"} ${el.value}.`);return;}
  if(a==="pref"){PREFS[el.dataset.k]=el.checked;toast(el.checked?"Notification turned on.":"Notification turned off.");return;}
  if(a==="note")e.note=el.value;
  if(a==="dec"){DEC[el.dataset.id]=el.value;toast(`Set to ${el.value}.`);render();}});
let linkT;
document.addEventListener("input",ev=>{
  if(ev.target.id==="fGrp"){const v=ev.target.value.trim(),p=$("#grpPrev"),c=$("#grpCnt"),er=$("#grpErr");if(p)p.textContent=v||(SHEET&&SHEET.pid==="own"?"New subgroup":"New micro-group");if(c)c.textContent=ev.target.value.length+"/40";if(er)er.style.display="none";return;}
  if(ev.target.id==="popfq"){S.popPq=ev.target.value;S.popLim={pf:(S.popLim||{pf:50}).pf,prod:50};const pos=ev.target.selectionStart,c=document.querySelector("#pop .sp-col"),t=c&&c.scrollTop;renderPop();const c2=document.querySelector("#pop .sp-col");if(c2)c2.scrollTop=t;const q=$("#popfq");q.focus();q.setSelectionRange(pos,pos);return;}
  if(ev.target.id==="popq"){S.popq=ev.target.value;S.popAll={};const pos=ev.target.selectionStart;renderPop();const q=$("#popq");q.focus();q.setSelectionRange(pos,pos);return;}
  if(ev.target.id==="teamq"){S.team.q=ev.target.value;const pos=ev.target.selectionStart;render();const q=$("#teamq");q.focus();q.setSelectionRange(pos,pos);return;}
  if(ev.target.id==="prodq"){S.home.q=ev.target.value;refreshProds();return;}
  if(ev.target.id==="evq"){S.ev.q=ev.target.value;const pos=ev.target.selectionStart;render();const q=$("#evq");q.focus();q.setSelectionRange(pos,pos);}
  if(ev.target.matches("[data-link]")){const inp=ev.target,box=inp.closest("label").parentNode.querySelector("[data-check]");clearTimeout(inp._t);
    if(!inp.value.trim()){box.className="check";box.innerHTML="";return;}
    box.className="check wait";box.innerHTML=ic("clock")+"Checking the link…";inp._t=setTimeout(()=>{const [k,m]=checkLink(inp.value);box.className="check "+k;box.innerHTML=ic(k==="ok"?"check":"alert")+esc(m);},700);}
  if(ev.target.matches(".field"))ev.target.style.borderColor="";
});
document.addEventListener("submit",ev=>{if(ev.target.id==="siForm"){ev.preventDefault();A.signin();return;}if(ev.target.id==="chatf"){ev.preventDefault();const q=$("#chatq");const v=q.value;q.value="";ask(v);setTimeout(()=>{const n=$("#chatq");n&&n.focus();},700);}});
document.addEventListener("mouseover",ev=>{const r=ev.target.closest("[data-hover]");document.querySelectorAll(".pdot").forEach(d=>d.classList.toggle("hl",!!r&&d.dataset.id===r.dataset.hover||d.dataset.id===S.hl&&!r));});
window.addEventListener("hashchange",()=>{const r=UNHASH[location.hash.slice(1)];if(r&&r!==S.route){S.route=r;render();}});
window.addEventListener("resize",()=>{if(S.route==="pulse")render();});

/* init */
S.story=-1;
S.route=UNHASH[location.hash.slice(1)]||"cockpit";
render();

/* title-case button labels */
const SMALL=new Set("a an the and or but for nor of on in to at by with as vs per".split(" "));
function tc(s){const w=s.split(/(\s+)/);let idx=0;const words=w.filter(x=>x.trim()).length;
  return w.map(x=>{if(!x.trim())return x;const i=idx++;if(/[A-Z].*[A-Z]|\d/.test(x.slice(1))||/^[^a-zA-Z]/.test(x))return x;
    const lo=x.toLowerCase();if(i>0&&i<words-1&&SMALL.has(lo))return lo;return x.charAt(0).toUpperCase()+x.slice(1);}).join("");}
const TC_SEL=".btn,.si-btn,.story-ctl button,.link,.seg button,.si-link,.banner button,.sec-h h2,.ph-t h2,.box h3,.matrix h3,.waiting .wh h3,.br-cols h4,.fset h4,.normal h4,.ai h4,.howto h4,.chat-h h3,.levels b,.label,.pt-h span,table.t th,.pop p";
function tcAll(root){root.querySelectorAll(TC_SEL).forEach(b=>{b.childNodes.forEach(n=>{if(n.nodeType===3&&n.nodeValue.trim()){const v=tc(n.nodeValue);if(v!==n.nodeValue)n.nodeValue=v;}});});}
new MutationObserver(()=>tcAll(document)).observe(document.body,{childList:true,subtree:true});
tcAll(document);

/* chart hover tooltip */
(function(){const tip=document.createElement("div");tip.className="ctip";tip.setAttribute("role","tooltip");document.body.appendChild(tip);
  document.addEventListener("mousemove",ev=>{const g=ev.target.closest&&ev.target.closest("[data-tip]");
    if(!g){tip.classList.remove("on");return;}
    tip.innerHTML=`<small>${g.dataset.tip}</small><b>${g.dataset.val}</b>`;tip.classList.add("on");
    const w=tip.offsetWidth,h=tip.offsetHeight;let x=ev.clientX+14,y=ev.clientY-h-12;if(x+w>innerWidth-8)x=ev.clientX-w-14;if(y<8)y=ev.clientY+16;
    tip.style.left=x+"px";tip.style.top=y+"px";});
})();
