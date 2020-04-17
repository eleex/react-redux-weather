(this["webpackJsonpreact-redux-weather"]=this["webpackJsonpreact-redux-weather"]||[]).push([[0],{29:function(e,t,a){e.exports=a(42)},39:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(14),l=a.n(c),u=a(6),i=a(16),o=a(12),s={data:[],multiData:[],inputCityValue:"",loading:!1,error:!1},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_WEATHER_REQUEST":return Object(o.a)({},e,{loading:!0,error:null});case"FETCH_CURRENT_WEATHER":return Object(o.a)({},e,{data:t.payload,loading:!1,error:!1});case"FETCH_FIVE_DAYS_WEATHER":return Object(o.a)({},e,{multiData:t.payload,loading:!1,error:!1});case"FETCH_WEATHER_FAILURE":return Object(o.a)({},e,{loading:!1,error:!0});case"ON_CHANGE_INPUT_CITY":return Object(o.a)({},e,{inputCityValue:t.payload});default:return e}},d=Object(i.b)(m),h=a(11),E=a(17),p=a(19),f=a(18),v=function(){return n.a.createElement("div",null,"Something going wrong....")},y=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={hasError:!1},e}return Object(E.a)(a,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){var e=this.state.hasError,t=this.props.children;return e?n.a.createElement(v,null):t}}]),a}(r.Component),w=n.a.createContext(),b=w.Provider,g=w.Consumer,C=a(9),N=a.n(C),_=a(20),x=function e(){var t=this;Object(h.a)(this,e),this._apiBase="https://api.openweathermap.org/data/2.5",this._apiKey="8a9238f7118a7ebc926a12bc8101dfe5",this.getResource=function(){var e=Object(_.a)(N.a.mark((function e(a,r){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiBase).concat(a).concat(r,"&appid=").concat(t._apiKey,"&units=metric&lang=ru"));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(a,", received ").concat(n.status));case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),this.fetchCurrentWeather=function(){var e=Object(_.a)(N.a.mark((function e(a){var r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/weather?q=",a);case 2:return r=e.sent,e.abrupt("return",t._transformCurrentWeather(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.fetchFiveDaysWeather=function(){var e=Object(_.a)(N.a.mark((function e(a){var r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/forecast?q=",a);case 2:return r=e.sent,e.abrupt("return",r.list.map(t._transformFiveDaysWeather));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._transformCurrentWeather=function(e){return{id:e.id,city:e.name,time:1e3*e.dt,temp:Math.round(e.main.temp),pressure:e.main.pressure,humidity:e.main.humidity,clouds:e.weather[0].description,cloudsIcon:"http://openweathermap.org/img/w/".concat(e.weather[0].icon,".png"),wind:Math.round(e.wind.speed)}},this._transformFiveDaysWeather=function(e){return{time:e.dt_txt,temp:Math.round(e.main.temp),pressure:e.main.pressure,humidity:e.main.humidity,clouds:e.weather[0].description,wind:Math.round(e.wind.speed)}}},j=a(8),R=function(){return n.a.createElement("div",{className:"row mb-3"},n.a.createElement("h1",{className:"col-sm text-center"},"React-Redux Weather App"))},O=function(){return{type:"FETCH_WEATHER_REQUEST"}},T=function(){return{type:"FETCH_WEATHER_FAILURE"}},W=function(e){return function(t){return n.a.createElement(g,null,(function(a){return n.a.createElement(e,Object.assign({},t,{weatherService:a}))}))}},D=(a(39),{weatherRequest:O,onChangeInputCity:function(e){return{type:"ON_CHANGE_INPUT_CITY",payload:e.target.value}},getCurrentWeather:function(e){return{type:"FETCH_CURRENT_WEATHER",payload:e}},weatherError:T}),H=W(Object(u.b)((function(e){return{inputCityValue:e.inputCityValue,dataCity:e.data.city,time:e.data.time,loading:e.loading}}),D)((function(e){var t=e.inputCityValue,a=e.dataCity,r=e.time,c=e.onChangeInputCity,l=e.weatherRequest,u=e.getCurrentWeather,i=e.weatherError,o=e.weatherService;return n.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n,c;a===t&&(n=r,c=5,c>(Date.now()-new Date(n))/6e4)||(l(),o.fetchCurrentWeather(t).then((function(e){u(e)})).catch((function(e){i()})))},className:"form-inline col-12 justify-content-center"},n.a.createElement("label",null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434",n.a.createElement("input",{type:"text",className:"form-control ml-1 mr-2",value:t,onChange:c})),n.a.createElement("input",{type:"submit",className:"btn btn-outline-info search",value:""}))}))),F=(a(40),function(){return n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("div",{className:"loadingio-spinner-spinner-d7y3ytu4a5"},n.a.createElement("div",{className:"ldio-xk70y4k1kn"},n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null))))}),k=function(e){var t=e.data;return n.a.createElement("div",{className:"col-12 mt-3"},n.a.createElement("h3",{className:"text-center"},"\u0412 \u0433\u043e\u0440\u043e\u0434\u0435 ",t.city," ",t.clouds,n.a.createElement("img",{src:"".concat(t.cloudsIcon),alt:"weather-icon"})),n.a.createElement("p",{className:"text-center mb-0"},"\u0434\u0430\u043d\u043d\u044b\u0435 \u043e \u043f\u043e\u0433\u043e\u0434\u0435 \u043d\u0430 ",function(e){var t=new Date(e),a=t.getHours(),r=t.getMinutes();return r=r<10?"0"+r:r,"".concat(a=a<10?"0"+a:a,":").concat(r)}(t.time)),n.a.createElement("ul",{className:"list-group col-4 m-auto"},n.a.createElement("li",{className:"list-group-item"},"\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430: ",t.temp," \u2103"),n.a.createElement("li",{className:"list-group-item"},"\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c: ",t.humidity," %"),n.a.createElement("li",{className:"list-group-item"},"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0432\u0435\u0442\u0440\u0430: ",t.wind," \u33a7"),n.a.createElement("li",{className:"list-group-item"},"\u0414\u0430\u0432\u043b\u0435\u043d\u0438\u0435: ",t.pressure," \u3371")),n.a.createElement("div",{className:"text-center"},n.a.createElement(j.b,{className:"btn btn-primary mt-3",to:"/react-redux-weather/five-days-weather"},"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043f\u043e\u0433\u043e\u0434\u0443 \u043d\u0430 5 \u0434\u043d\u0435\u0439")))},A=Object(u.b)((function(e){return{data:e.data,loading:e.loading,error:e.error}}))((function(e){var t=e.data,a=e.loading;return e.error?n.a.createElement("div",{className:"col-12 mt-3"},n.a.createElement("h4",{className:"text-center text-danger"},"\u041f\u043e\u0433\u043e\u0434\u044b \u043f\u043e \u044d\u0442\u043e\u043c\u0443 \u043f\u0443\u043d\u043a\u0442\u0443, \u043a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u043d\u0430 \u0441\u0430\u0439\u0442\u0435 \u043d\u0435\u0442.")):a?n.a.createElement(F,null):0===t.length?null:n.a.createElement(k,{data:t})})),I=function(){return n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement(H,null),n.a.createElement(A,null))},S=a(7),U=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.city,a=e.weatherRequest,r=e.weatherService,n=e.getFiveDaysWeather,c=e.weatherError;t&&(a(),r.fetchFiveDaysWeather(t).then((function(e){n(e)})).catch((function(e){c()})))}},{key:"render",value:function(){var e=this.props,t=e.city,a=e.multiData,r=e.error,c=e.loading;if(!t||r)return n.a.createElement(S.a,{to:"/react-redux-weather/react-redux-weather"});if(c)return n.a.createElement(F,null);return n.a.createElement("div",{className:"row"},n.a.createElement("h2",{className:"col-12 text-center"},"\u041f\u043e\u0433\u043e\u0434\u0430 \u0432 \u0433\u043e\u0440\u043e\u0434\u0435 ",t),n.a.createElement(j.b,{to:"/react-redux-weather/",role:"button",className:"btn btn-dark"},"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"),n.a.createElement("table",{className:"table table-hover table-dark"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u0414\u0430\u0442\u0430"),n.a.createElement("th",null,"\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u2103"),n.a.createElement("th",null,"\u0414\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u3371"),n.a.createElement("th",null,"\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c %"),n.a.createElement("th",null,"\u0412\u0435\u0442\u0435\u0440 \u33a7"),n.a.createElement("th",null,"\u041d\u0435\u0431\u043e"))),n.a.createElement("tbody",null,a.map((function(e,t){var a=e.time,r=e.temp,c=e.pressure,l=e.humidity,u=e.wind,i=e.clouds;return n.a.createElement("tr",{key:t},n.a.createElement("td",null,a),n.a.createElement("td",null,r),n.a.createElement("td",null,c),n.a.createElement("td",null,l),n.a.createElement("td",null,u),n.a.createElement("td",null,i))})))))}}]),a}(r.Component),M={weatherRequest:O,getFiveDaysWeather:function(e){return{type:"FETCH_FIVE_DAYS_WEATHER",payload:e}},weatherError:T},V=W(Object(u.b)((function(e){return{city:e.data.city,multiData:e.multiData,loading:e.loading,error:e.error}}),M)(U)),q=function(){return console.log("/react-redux-weather"),n.a.createElement("div",{className:"container"},n.a.createElement(R,null),n.a.createElement(S.d,null,n.a.createElement(S.b,{path:"/react-redux-weather/",component:I}),n.a.createElement(S.b,{path:"/react-redux-weather/five-days-weather",component:V})))},Y=new x;l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(u.a,{store:d},n.a.createElement(y,null,n.a.createElement(b,{value:Y},n.a.createElement(j.a,{basename:"/react-redux-weather"},n.a.createElement(q,null)))))),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.4eeeda7a.chunk.js.map