(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{154:function(n,e,t){n.exports=t(155)},155:function(n,e,t){(function(n){const e=t(156),o=e(),i=t(9),s=t(81);o.use(e.static("public")),o.use(s.json()),o.get("/",(e,t)=>{t.sendFile(i.join(n,"index.html"))}),o.get("/sanctuary",(e,t)=>{t.sendFile(i.join(n,"anctuary.html"))}),o.get("/live-streaming",(e,t)=>{t.sendFile(i.join(n,"live-streaming.html"))}),o.get("/community-forum",(e,t)=>{t.sendFile(i.join(n,"community-forum.html"))}),o.get("/prayer-requests",(e,t)=>{t.sendFile(i.join(n,"prayer-requests.html"))}),o.get("/events",(e,t)=>{t.sendFile(i.join(n,"events.html"))}),o.get("/giving",(e,t)=>{t.sendFile(i.join(n,"giving.html"))}),o.post("/send-chat-message",(n,e)=>{console.log("Chat message received:",n.body.message),e.send("Chat message sent!")});o.listen(3e3,()=>{console.log("Server started on port ".concat(3e3))})}).call(this,"/")},165:function(n,e){},167:function(n,e){},220:function(n,e){},221:function(n,e){},232:function(n,e){},249:function(n,e){},254:function(n,e){function t(n){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}t.keys=function(){return[]},t.resolve=t,n.exports=t,t.id=254},286:function(n,e){},288:function(n,e){},289:function(n,e){},294:function(n,e){},296:function(n,e){},316:function(n,e){},332:function(n,e){},335:function(n,e){}},[[154,1,2]]]);
//# sourceMappingURL=main.10525878.chunk.js.map