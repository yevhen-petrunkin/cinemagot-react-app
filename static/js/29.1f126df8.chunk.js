"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[29],{5992:function(e,l,a){a.d(l,{Z:function(){return t}});var n,u=a(168),i=a(4313).ZP.div(n||(n=(0,u.Z)(["\n  @media only screen and (min-width: 1200px) {\n    padding-top: ","px;\n    padding-bottom: ","px;\n    padding-left: ","px;\n    padding-right: ","px;\n  }\n  @media only screen and (max-width: 1199px) {\n    padding-top: ","px;\n    padding-bottom: ","px;\n    padding-left: ","px;\n    padding-right: ","px;\n  }\n  @media only screen and (max-width: 480px) {\n    padding-top: ","px;\n    padding-bottom: ","px;\n    padding-left: ","px;\n    padding-right: ","px;\n  } ;\n"])),(function(e){return 7*e.theme.space[1]}),(function(e){return 7*e.theme.space[1]}),(function(e){return 3*e.theme.space[5]}),(function(e){return 3*e.theme.space[5]}),(function(e){return e.theme.space[5]}),(function(e){return e.theme.space[5]}),(function(e){return 2*e.theme.space[5]}),(function(e){return 2*e.theme.space[5]}),(function(e){return e.theme.space[2]}),(function(e){return e.theme.space[2]}),(function(e){return e.theme.space[3]}),(function(e){return e.theme.space[3]})),v=a(184);var t=function(e){var l=e.children;return(0,v.jsx)(i,{children:l})}},6746:function(e,l,a){a.d(l,{Z:function(){return w}});var n,u,i,v,t,r=a(168),b=a(4313),o=b.ZP.ul(n||(n=(0,r.Z)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  align-items: baseline;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  gap: 20px;\n"]))),s=a(7689),c=a(9439),d=a(2791),h=a(1947),p=(0,b.ZP)(h.rU)(u||(u=(0,r.Z)(["\n  padding: 8px 0;\n  display: inline-block;\n  text-decoration: none;\n  color: ",";\n  text-shadow: ",";\n"])),(function(e){return e.theme.colors.default}),(function(e){return e.theme.shadows.ordinary})),x=b.ZP.img(i||(i=(0,r.Z)(["\n  width: 100%;\n  height: 100%;\n"]))),g=b.ZP.div(v||(v=(0,r.Z)(["\n  position: relative;\n  width: 260px;\n  height: 400px;\n  border-radius: 10px;\n  box-shadow: 1px 1px 3px black;\n  overflow: hidden;\n"]))),m=b.ZP.h3(t||(t=(0,r.Z)(["\n  position: absolute;\n  top: 8px;\n  left: 8px;\n  padding: 8px;\n  margin: 0;\n  width: 228px;\n  font-size: 12px;\n  text-align: left;\n  background-color: ",";\n  border-radius: 4px;\n  box-shadow: ",";\n"])),(function(e){return e.theme.colors.secondaryDark}),(function(e){return e.theme.shadows.ordinary})),f=a(2163),j=a(184);var Z=function(e){var l=e.movie,a=e.location,n=(0,d.useState)(!1),u=(0,c.Z)(n,2),i=u[0],v=u[1],t=l.id,r=l.movieName,b=l.poster,o="";switch(a.state.page){case"home":o="movies/"+t.toString();break;case"movies":o=t.toString();break;default:return}return(0,j.jsx)("li",{children:(0,j.jsx)(p,{to:o,state:{from:a},children:(0,j.jsxs)(g,{children:[(0,j.jsx)(m,{children:r}),!i&&(0,j.jsx)(f.Eh,{}),b&&(0,j.jsx)(x,{src:b,alt:"movieName",onLoad:function(){return v(!0)}})]})})})};var w=function(e){var l=e.movies,a=e.location;return(0,j.jsx)(j.Fragment,{children:l?(0,j.jsx)(o,{children:l.map((function(e){return(0,j.jsx)(Z,{movie:e,location:a},e.id)}))}):(0,j.jsx)(s.Fg,{to:"/"})})}},2163:function(e,l,a){a.d(l,{Eh:function(){return p},Mj:function(){return g},G9:function(){return x}});var n,u,i,v,t=a(168),r=a(4313),b=r.ZP.div(n||(n=(0,t.Z)(["\n  width: 260px;\n  height: 400px;\n  border-radius: 10px;\n  box-shadow: 1px 1px 3px black;\n  overflow: hidden;\n"]))),o=r.ZP.div(u||(u=(0,t.Z)(["\n  width: 300px;\n  height: 460px;\n  border-radius: 10px;\n  box-shadow: 1px 1px 3px black;\n  overflow: hidden;\n"]))),s=r.ZP.div(i||(i=(0,t.Z)(["\n  width: 160px;\n  height: 240px;\n  border-radius: 10px;\n  box-shadow: 1px 1px 3px black;\n  overflow: hidden;\n"]))),c=r.ZP.img(v||(v=(0,t.Z)(["\n  width: 100%;\n  height: 100%;\n"]))),d=a(6543),h=a(184);function p(){return(0,h.jsx)(b,{children:(0,h.jsx)(c,{src:d,alt:"placeholder"})})}function x(){return(0,h.jsx)(o,{children:(0,h.jsx)(c,{src:d,alt:"placeholder"})})}function g(){return(0,h.jsx)(s,{children:(0,h.jsx)(c,{src:d,alt:"placeholder"})})}},5029:function(e,l,a){a.r(l),a.d(l,{default:function(){return M}});var n,u=a(4942),i=a(1413),v=a(9439),t=a(2791),r=a(7689),b=a(9434),o=a(6351),s=a(5443),c=a(7701),d=(a(8639),a(7889)),h=a(7761),p=a(168),x=a(4313).ZP.h1(n||(n=(0,p.Z)(["\n  font-size: 26px;\n"]))),g=a(5992),m=[{id:"trending",label:"Trending Today",value:"trending"},{id:"current",label:"Now at Cinemas",value:"current"},{id:"popular",label:"Top Rated Current Movies",value:"popular"},{id:"top",label:"Top Rated Movies of All Times",value:"top"}],f=a(184);var j=function(e){var l=e.onChange;return(0,f.jsx)("ul",{children:m.map((function(e){var a=e.id,n=e.label,u=e.value;return(0,f.jsx)("li",{children:(0,f.jsxs)("label",{style:{display:"block"},children:[(0,f.jsx)("input",{type:"radio",name:"galleryChoice",value:u,onChange:l}),n]})},a)}))})},Z=[{id:"language",label:"Select original language: ",optionsSource:[{value:"",label:"None"},{value:"ar",label:"Arabic"},{value:"bn",label:"Bengali"},{value:"bg",label:"Bulgarian"},{value:"zh",label:"Chinese"},{value:"cs",label:"Czech"},{value:"da",label:"Danish"},{value:"nl",label:"Dutch"},{value:"en",label:"English"},{value:"et",label:"Estonian"},{value:"fi",label:"Finnish"},{value:"fr",label:"French"},{value:"de",label:"German"},{value:"el",label:"Greek"},{value:"he",label:"Hebrew"},{value:"hi",label:"Hindi"},{value:"hu",label:"Hungarian"},{value:"id",label:"Indonesian"},{value:"it",label:"Italian"},{value:"ja",label:"Japanese"},{value:"kk",label:"Kazakh"},{value:"ko",label:"Korean"},{value:"lv",label:"Latvian"},{value:"lt",label:"Lithuanian"},{value:"ms",label:"Malay"},{value:"mn",label:"Mongolian"},{value:"ne",label:"Nepali"},{value:"no",label:"Norwegian"},{value:"fa",label:"Persian"},{value:"pl",label:"Polish"},{value:"pt",label:"Portuguese"},{value:"ro",label:"Romanian"},{value:"ru",label:"Russian"},{value:"sr",label:"Serbian"},{value:"sk",label:"Slovak"},{value:"sl",label:"Slovenian"},{value:"es",label:"Spanish"},{value:"sv",label:"Swedish"},{value:"tl",label:"Tagalog"},{value:"ta",label:"Tamil"},{value:"th",label:"Thai"},{value:"tr",label:"Turkish"},{value:"uk",label:"Ukrainian"},{value:"ur",label:"Urdu"},{value:"uz",label:"Uzbek"},{value:"vi",label:"Vietnamese"},{value:"cy",label:"Welsh"},{value:"yi",label:"Yiddish"}],objValue:"language",isBackspaceRemovable:!0,hideSelected:!0,isSearcheable:!0},{id:"year",label:"Select year of the movie: ",optionsSource:[{value:"",label:"None"},{value:"2023",label:"2023"},{value:"2022",label:"2022"},{value:"2021",label:"2021"},{value:"2020",label:"2020"},{value:"2019",label:"2019"},{value:"2018",label:"2018"},{value:"2017",label:"2017"},{value:"2016",label:"2016"},{value:"2015",label:"2015"},{value:"2014",label:"2014"},{value:"2013",label:"2013"},{value:"2012",label:"2012"},{value:"2011",label:"2011"},{value:"2010",label:"2010"},{value:"2009",label:"2009"},{value:"2008",label:"2008"},{value:"2007",label:"2007"},{value:"2006",label:"2006"},{value:"2005",label:"2005"},{value:"2004",label:"2004"},{value:"2003",label:"2003"},{value:"2002",label:"2002"},{value:"2001",label:"2001"},{value:"2000",label:"2000"},{value:"1999",label:"1999"},{value:"1998",label:"1998"},{value:"1997",label:"1997"},{value:"1996",label:"1996"},{value:"1995",label:"1995"},{value:"1994",label:"1994"},{value:"1993",label:"1993"},{value:"1992",label:"1992"},{value:"1991",label:"1991"},{value:"1990",label:"1990"},{value:"1989",label:"1989"},{value:"1988",label:"1988"},{value:"1987",label:"1987"},{value:"1986",label:"1986"},{value:"1985",label:"1985"},{value:"1984",label:"1984"},{value:"1983",label:"1983"},{value:"1982",label:"1982"},{value:"1981",label:"1981"},{value:"1980",label:"1980"},{value:"1979",label:"1979"},{value:"1978",label:"1978"},{value:"1977",label:"1977"},{value:"1976",label:"1976"},{value:"1975",label:"1975"},{value:"1974",label:"1974"},{value:"1973",label:"1973"},{value:"1972",label:"1972"},{value:"1971",label:"1971"},{value:"1970",label:"1970"},{value:"1969",label:"1969"},{value:"1968",label:"1968"},{value:"1967",label:"1967"},{value:"1966",label:"1966"},{value:"1965",label:"1965"},{value:"1964",label:"1964"},{value:"1963",label:"1963"},{value:"1962",label:"1962"},{value:"1961",label:"1961"},{value:"1960",label:"1960"},{value:"1959",label:"1959"},{value:"1958",label:"1958"},{value:"1957",label:"1957"},{value:"1956",label:"1956"},{value:"1955",label:"1955"},{value:"1954",label:"1954"},{value:"1953",label:"1953"},{value:"1952",label:"1952"},{value:"1951",label:"1951"},{value:"1950",label:"1950"},{value:"1949",label:"1949"},{value:"1948",label:"1948"},{value:"1947",label:"1947"},{value:"1946",label:"1946"},{value:"1945",label:"1945"},{value:"1944",label:"1944"},{value:"1943",label:"1943"},{value:"1942",label:"1942"},{value:"1941",label:"1941"},{value:"1940",label:"1940"},{value:"1939",label:"1939"},{value:"1938",label:"1938"},{value:"1937",label:"1937"},{value:"1936",label:"1936"},{value:"1935",label:"1935"},{value:"1934",label:"1934"},{value:"1933",label:"1933"},{value:"1932",label:"1932"},{value:"1931",label:"1931"},{value:"1930",label:"1930"},{value:"1929",label:"1929"},{value:"1928",label:"1928"},{value:"1927",label:"1927"},{value:"1926",label:"1926"},{value:"1925",label:"1925"},{value:"1924",label:"1924"},{value:"1923",label:"1923"},{value:"1922",label:"1922"},{value:"1921",label:"1921"},{value:"1920",label:"1920"},{value:"1919",label:"1919"},{value:"1918",label:"1918"},{value:"1917",label:"1917"},{value:"1916",label:"1916"},{value:"1915",label:"1915"},{value:"1914",label:"1914"},{value:"1913",label:"1913"},{value:"1912",label:"1912"},{value:"1911",label:"1911"},{value:"1910",label:"1910"},{value:"1909",label:"1909"},{value:"1908",label:"1908"},{value:"1907",label:"1907"},{value:"1906",label:"1906"},{value:"1905",label:"1905"},{value:"1904",label:"1904"},{value:"1903",label:"1903"},{value:"1902",label:"1902"},{value:"1901",label:"1901"},{value:"1900",label:"1900"},{value:"1899",label:"1899"},{value:"1898",label:"1898"},{value:"1897",label:"1897"},{value:"1896",label:"1896"},{value:"1895",label:"1895"},{value:"1894",label:"1894"},{value:"1893",label:"1893"},{value:"1892",label:"1892"},{value:"1891",label:"1891"},{value:"1890",label:"1890"},{value:"1889",label:"1889"},{value:"1888",label:"1888"},{value:"1887",label:"1887"},{value:"1886",label:"1886"},{value:"1885",label:"1885"},{value:"1884",label:"1884"},{value:"1883",label:"1883"},{value:"1882",label:"1882"},{value:"1881",label:"1881"},{value:"1880",label:"1880"},{value:"1879",label:"1879"},{value:"1878",label:"1878"}],objValue:"year",isBackspaceRemovable:!0,hideSelected:!0,isSearcheable:!0}],w=[{value:28,label:"Action"},{value:12,label:"Adventure"},{value:16,label:"Animation"},{value:35,label:"Comedy"},{value:80,label:"Crime"},{value:99,label:"Documentary"},{value:18,label:"Drama"},{value:10751,label:"Family"},{value:14,label:"Fantasy"},{value:36,label:"History"},{value:27,label:"Horror"},{value:10402,label:"Music"},{value:9648,label:"Mystery"},{value:10749,label:"Romance"},{value:878,label:"Science Fiction"},{value:10770,label:"TV Movie"},{value:53,label:"Thriller"},{value:10752,label:"War"},{value:37,label:"Western"}],k=a(4323);var y=function(e){var l=e.onGenreChange,a=e.onOtherChange,n=e.object;return(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsxs)("label",{children:["Select genres:",(0,f.jsx)(k.ZP,{options:w,value:n.genres,isMulti:!0,backspaceRemovesValue:!0,hideSelectedOptions:!0,isSearchable:!0,onChange:l})]})}),(0,f.jsx)("li",{children:(0,f.jsx)("ul",{children:Z.map((function(e){var l=e.id,u=e.label,i=e.optionsSource,v=e.objValue,t=e.isBackspaceRemovable,r=e.hideSelected,b=e.isSearcheable;return(0,f.jsx)("li",{children:(0,f.jsxs)("label",{children:[u,(0,f.jsx)(k.ZP,{options:i,value:n[v],backspaceRemovesValue:t,hideSelectedOptions:r,isSearchable:b,onChange:function(e){return a(e,v)}})]})},l)}))})})]})},S=a(9513),C=a.n(S);var P=function(e){var l=e.onLowerChange,a=e.onGreaterChange,n=e.lowerDate,u=e.greaterDate;return(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsxs)("label",{children:["Movies not later than:",(0,f.jsx)(C(),{selected:n,onChange:l})]})}),(0,f.jsx)("li",{children:(0,f.jsxs)("label",{children:["Movies not earlier than:",(0,f.jsx)(C(),{selected:u,onChange:a})]})})]})},D=a(6746);var M=function(){var e=(0,b.v9)(o.gX),l=(0,b.v9)(o.UD),a=(0,b.v9)(o.pg),n=(0,b.v9)(o.wd),p=(0,b.v9)(o.w$),m=(0,b.v9)(o.Zd),Z=(0,b.v9)(o.tE),w=(0,b.v9)(o.lz),k=(0,b.v9)(o.dy),S=(0,b.I0)(),C=(0,r.TH)();C.state={page:"home"};var M=(0,t.useState)(null),T=(0,v.Z)(M,2),R=T[0],z=T[1],B=(0,t.useState)(null),F=(0,v.Z)(B,2),G=F[0],H=F[1];return(0,t.useEffect)((function(){Object.keys(m).length?S((0,c.$u)(m)):S((0,c.mp)(p))}),[S,p,m]),(0,f.jsx)("section",{children:(0,f.jsxs)(g.Z,{children:[(0,f.jsx)(x,{children:null!==l&&void 0!==l?l:"CineMaGot"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(j,{onChange:function(e){S((0,s.YH)("")),S((0,s.PX)({})),S((0,s.Bv)(d.y)),z(null),H(null),S((0,s.bC)(e.target.value))}})}),k&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("li",{children:(0,f.jsx)(y,{onGenreChange:function(e){S((0,s.Bv)((0,i.Z)((0,i.Z)({},Z),{},{genres:e}))),S((0,s.PX)((0,i.Z)((0,i.Z)({},m),{},{genres:e})))},onOtherChange:function(e,l){S((0,s.Bv)((0,i.Z)((0,i.Z)({},Z),{},(0,u.Z)({},l,e)))),S((0,s.PX)((0,i.Z)((0,i.Z)({},m),{},(0,u.Z)({},l,e.value))))},object:Z})}),(0,f.jsx)("li",{children:(0,f.jsx)(P,{lowerDate:R,greaterDate:G,onLowerChange:function(e){z(e);var l=(0,h.P9)(e);S((0,s.PX)((0,i.Z)((0,i.Z)({},m),{},{lowerDate:l})))},onGreaterChange:function(e){H(e);var l=(0,h.P9)(e);S((0,s.PX)((0,i.Z)((0,i.Z)({},m),{},{greaterDate:l})))}})}),(0,f.jsx)("li",{children:(0,f.jsxs)("label",{children:["Rating not less than:",(0,f.jsx)("input",{type:"number",min:"0",max:"10",step:"0.1",value:w,placeholder:"Enter number from 0 to 10",onChange:function(e){S((0,s.YH)(e.target.value)),S((0,s.PX)((0,i.Z)((0,i.Z)({},m),{},{voteAverage:e.target.value})))}})]})})]})]}),a&&(0,f.jsx)("span",{children:"Loading..."}),n&&(0,f.jsx)("span",{children:"Oops... Something went wrong!"}),e&&(0,f.jsx)(D.Z,{movies:e,location:C})]})})}},6543:function(e,l,a){e.exports=a.p+"static/media/photoholder.bc7debfc682a5ddc60bf.jpg"}}]);
//# sourceMappingURL=29.1f126df8.chunk.js.map