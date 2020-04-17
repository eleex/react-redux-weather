(this["webpackJsonpreact-redux-weather"]=this["webpackJsonpreact-redux-weather"]||[]).push([[0],{29:function(e,t,a){e.exports=a(42)},39:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),l=a.n(c),u=a(6),i=a(16),o=a(12),s={data:[],multiData:[],inputCityValue:"",loading:!1,error:!1},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_WEATHER_REQUEST":return Object(o.a)({},e,{loading:!0,error:null});case"FETCH_CURRENT_WEATHER":return Object(o.a)({},e,{data:t.payload,loading:!1,error:!1});case"FETCH_FIVE_DAYS_WEATHER":return Object(o.a)({},e,{multiData:t.payload,loading:!1,error:!1});case"FETCH_WEATHER_FAILURE":return Object(o.a)({},e,{loading:!1,error:!0});case"ON_CHANGE_INPUT_CITY":return Object(o.a)({},e,{inputCityValue:t.payload});default:return e}},d=Object(i.b)(m),E=a(11),h=a(17),p=a(19),f=a(18),v=function(){return r.a.createElement("div",null,"Something going wrong....")},y=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(E.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={hasError:!1},e}return Object(h.a)(a,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){var e=this.state.hasError,t=this.props.children;return e?r.a.createElement(v,null):t}}]),a}(n.Component),b=r.a.createContext(),w=b.Provider,g=b.Consumer,C=a(9),N=a.n(C),_=a(20),x=function e(){var t=this;Object(E.a)(this,e),this._apiBase="https://api.openweathermap.org/data/2.5",this._apiKey="8a9238f7118a7ebc926a12bc8101dfe5",this.getResource=function(){var e=Object(_.a)(N.a.mark((function e(a,n){var r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiBase).concat(a).concat(n,"&appid=").concat(t._apiKey,"&units=metric&lang=ru"));case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(a,", received ").concat(r.status));case 5:return e.next=7,r.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),this.fetchCurrentWeather=function(){var e=Object(_.a)(N.a.mark((function e(a){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/weather?q=",a);case 2:return n=e.sent,e.abrupt("return",t._transformCurrentWeather(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.fetchFiveDaysWeather=function(){var e=Object(_.a)(N.a.mark((function e(a){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/forecast?q=",a);case 2:return n=e.sent,e.abrupt("return",n.list.map(t._transformFiveDaysWeather));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._transformCurrentWeather=function(e){return{id:e.id,city:e.name,time:1e3*e.dt,temp:Math.round(e.main.temp),pressure:e.main.pressure,humidity:e.main.humidity,clouds:e.weather[0].description,cloudsIcon:"http://openweathermap.org/img/w/".concat(e.weather[0].icon,".png"),wind:Math.round(e.wind.speed)}},this._transformFiveDaysWeather=function(e){return{time:e.dt_txt,temp:Math.round(e.main.temp),pressure:e.main.pressure,humidity:e.main.humidity,clouds:e.weather[0].description,wind:Math.round(e.wind.speed)}}},j=a(8),R=function(){return r.a.createElement("div",{className:"row mb-3"},r.a.createElement("h1",{className:"col-sm text-center"},"React-Redux Weather App"))},O=function(){return{type:"FETCH_WEATHER_REQUEST"}},T=function(){return{type:"FETCH_WEATHER_FAILURE"}},W=function(e){return function(t){return r.a.createElement(g,null,(function(a){return r.a.createElement(e,Object.assign({},t,{weatherService:a}))}))}},D=(a(39),{weatherRequest:O,onChangeInputCity:function(e){return{type:"ON_CHANGE_INPUT_CITY",payload:e.target.value}},getCurrentWeather:function(e){return{type:"FETCH_CURRENT_WEATHER",payload:e}},weatherError:T}),H=W(Object(u.b)((function(e){return{inputCityValue:e.inputCityValue,dataCity:e.data.city,time:e.data.time,loading:e.loading}}),D)((function(e){var t=e.inputCityValue,a=e.dataCity,n=e.time,c=e.onChangeInputCity,l=e.weatherRequest,u=e.getCurrentWeather,i=e.weatherError,o=e.weatherService;return r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var r,c;a===t&&(r=n,c=5,c>(Date.now()-new Date(r))/6e4)||(l(),o.fetchCurrentWeather(t).then((function(e){u(e)})).catch((function(e){i()})))},className:"form-inline col-12 justify-content-center"},r.a.createElement("label",null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434",r.a.createElement("input",{type:"text",className:"form-control ml-1 mr-2",value:t,onChange:c})),r.a.createElement("input",{type:"submit",className:"btn btn-outline-info search",value:""}))}))),F=(a(40),function(){return r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"loadingio-spinner-spinner-d7y3ytu4a5"},r.a.createElement("div",{className:"ldio-xk70y4k1kn"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))))}),k=function(e){var t=e.data;return r.a.createElement("div",{className:"col-12 mt-3"},r.a.createElement("h3",{className:"text-center"},"\u0412 \u0433\u043e\u0440\u043e\u0434\u0435 ",t.city," ",t.clouds,r.a.createElement("img",{src:"".concat(t.cloudsIcon),alt:"weather-icon"})),r.a.createElement("p",{className:"text-center mb-0"},"\u0434\u0430\u043d\u043d\u044b\u0435 \u043e \u043f\u043e\u0433\u043e\u0434\u0435 \u043d\u0430 ",function(e){var t=new Date(e),a=t.getHours(),n=t.getMinutes();return n=n<10?"0"+n:n,"".concat(a=a<10?"0"+a:a,":").concat(n)}(t.time)),r.a.createElement("ul",{className:"list-group col-4 m-auto"},r.a.createElement("li",{className:"list-group-item"},"\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430: ",t.temp," \u2103"),r.a.createElement("li",{className:"list-group-item"},"\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c: ",t.humidity," %"),r.a.createElement("li",{className:"list-group-item"},"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0432\u0435\u0442\u0440\u0430: ",t.wind," \u33a7"),r.a.createElement("li",{className:"list-group-item"},"\u0414\u0430\u0432\u043b\u0435\u043d\u0438\u0435: ",t.pressure," \u3371")),r.a.createElement("div",{className:"text-center"},r.a.createElement(j.b,{className:"btn btn-primary mt-3",to:"/react-redux-weather/five-days-weather"},"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043f\u043e\u0433\u043e\u0434\u0443 \u043d\u0430 5 \u0434\u043d\u0435\u0439")))},A=Object(u.b)((function(e){return{data:e.data,loading:e.loading,error:e.error}}))((function(e){var t=e.data,a=e.loading;return e.error?r.a.createElement("div",{className:"col-12 mt-3"},r.a.createElement("h4",{className:"text-center text-danger"},"\u041f\u043e\u0433\u043e\u0434\u044b \u043f\u043e \u044d\u0442\u043e\u043c\u0443 \u043f\u0443\u043d\u043a\u0442\u0443, \u043a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u043d\u0430 \u0441\u0430\u0439\u0442\u0435 \u043d\u0435\u0442.")):a?r.a.createElement(F,null):0===t.length?null:r.a.createElement(k,{data:t})})),I=function(){return r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(H,null),r.a.createElement(A,null))},S=a(7),U=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){return Object(E.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.city,a=e.weatherRequest,n=e.weatherService,r=e.getFiveDaysWeather,c=e.weatherError;t&&(a(),n.fetchFiveDaysWeather(t).then((function(e){r(e)})).catch((function(e){c()})))}},{key:"render",value:function(){var e=this.props,t=e.city,a=e.multiData,n=e.error,c=e.loading;if(!t||n)return r.a.createElement(S.a,{to:"/react-redux-weather/"});if(c)return r.a.createElement(F,null);return r.a.createElement("div",{className:"row"},r.a.createElement("h2",{className:"col-12 text-center"},"\u041f\u043e\u0433\u043e\u0434\u0430 \u0432 \u0433\u043e\u0440\u043e\u0434\u0435 ",t),r.a.createElement(j.b,{to:"/react-redux-weather/",role:"button",className:"btn btn-dark"},"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"),r.a.createElement("table",{className:"table table-hover table-dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u0414\u0430\u0442\u0430"),r.a.createElement("th",null,"\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u2103"),r.a.createElement("th",null,"\u0414\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u3371"),r.a.createElement("th",null,"\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c %"),r.a.createElement("th",null,"\u0412\u0435\u0442\u0435\u0440 \u33a7"),r.a.createElement("th",null,"\u041d\u0435\u0431\u043e"))),r.a.createElement("tbody",null,a.map((function(e,t){var a=e.time,n=e.temp,c=e.pressure,l=e.humidity,u=e.wind,i=e.clouds;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,a),r.a.createElement("td",null,n),r.a.createElement("td",null,c),r.a.createElement("td",null,l),r.a.createElement("td",null,u),r.a.createElement("td",null,i))})))))}}]),a}(n.Component),M={weatherRequest:O,getFiveDaysWeather:function(e){return{type:"FETCH_FIVE_DAYS_WEATHER",payload:e}},weatherError:T},V=W(Object(u.b)((function(e){return{city:e.data.city,multiData:e.multiData,loading:e.loading,error:e.error}}),M)(U)),q=function(){return console.log("/react-redux-weather"),r.a.createElement("div",{className:"container"},r.a.createElement(R,null),r.a.createElement(S.d,null,r.a.createElement(S.b,{path:"/",component:I}),r.a.createElement(S.b,{path:"/five-days-weather",component:V})))},Y=new x;l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,{store:d},r.a.createElement(y,null,r.a.createElement(w,{value:Y},r.a.createElement(j.a,{basename:"/react-redux-weather"},r.a.createElement(q,null)))))),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.a7fdfd91.chunk.js.map