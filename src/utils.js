var EventUtil = {
    /**
    * [addHandler 添加事件处理程序]
    * @param {[Object]} ele [事件绑定dom元素]
    * @param {[String]} type [事件类型]
    * @param {[Function]} handler [事件处理函数]
    */
　　addHandler: function(ele,type,handler){
　　　　if(ele.addEventListener){
　　　　　　ele.addEventListener(type,handler,false);
　　　　}else if(ele.atachEvent){
　　　　　　ele.atachEvent('on'+type,handler);
　　　　}else{
　　　　　　ele['on'+type] = handler;
　　　　}
　　},
    /**
    * [getEvent 获取事件对象]
    */
　　getEvent: function(event){
　　　　return event ? event : window.event;
　　},
    /**
    * [getTarget 获取事件目标]
    */
　　getTarget: function(event){
　　　　return event.target || event.srcElement;
　　},
    /**
    * [preventDefault 阻止默认事件]
    */
　　preventDefault: function(event){
　　　　if(event.preventDefault){
　　　　　　event.preventDefault();
　　　　}else{
　　　　　　event.returnValue = false;
　　　　}
　　},
    /**
    * [removeHandler 移除事件处理程序]
    * @param {[Object]} ele [事件绑定dom元素]
    * @param {[String]} type [事件类型]
    * @param {[Function]} handler [事件处理函数]
    */
　　removeHandler: function(ele,type,handler){
　　　　if(ele.removeEventListener){
　　　　　　ele.removeEventListener(type,handler,false);
　　　　}else if(ele.detachEvent){
　　　　　　ele.detachEvent('on'+type,handler);
　　　　}else{
　　　　　　ele['on'+type] = null;
　　　　}
　　},
    /**
    * [stopPropagation 阻止事件冒泡]
    */
　　stopPropagation: function(event){
　　　　if(event.stopPropagation){
　　　　　　event.stopPropagation();
　　　　}else{
　　　　　　event.cancelBubble = true;
　　　　}
　　},
    /**
    * [getRelatedTarget 当事件为mouseover和mouseout时才有值，其余事件为null]
    */
　　getRelatedTarget: function(event){
　　　　if(event.relatedTarget){
　　　　　　return event.relatedTarget;
　　　　}else if(event.toElement){
　　　　　　return event.toElement; 
　　　　}else if(event.fromElement){
　　　　　　return event.fromElement;
　　　　}else{
　　　　　　return null;
　　　　}
　　},
    /**
    * [getButton DOM版鼠标事件]
    * @param {[Object]} event [事件对象]
    */
　　getButton: function(event){
　　　　if(document.implementation.hasFeature("MouseEvents","2.0")){
　　　　　　return event.button;
　　　　}else{
　　　　switch(event.button){
　　　　　　case 0:
　　　　　　case 1:
　　　　　　case 3:
　　　　　　case 5:
　　　　　　case 7:
　　　　　　　　return 0;
　　　　　　case 2:
　　　　　　case 6:
　　　　　　　　return 2;
　　　　　　case 4:
　　　　　　　　return 1;
　　　　　　}
　　　　}
    },
    /**
    * [getWheelDelta 获取鼠标滚轮增值（delta）的方法]
    */
　　getWheelDelta: function(event){
　　　　if(event.wheelDelta){
　　　　　　return (client.engine.oprea && client.engine.oprea < 9.5 ?
　　　　　　　　-event.wheelDelta : event.wheelDelta);
　　　　}else{
　　　　　　return -event.detail * 40; 
　　　　}
　　},
    /**
    * [getCharCode 获取字符编码]
    */
　　getCharCode: function(event){
　　　　if(typeof event.charCode == "number"){
　　　　　　return event.charCode;
　　　　}else{
　　　　　　return event.keyCode;
　　　　}
　　},
    /**
    * [getClipboardText 剪贴板事件，获取剪切内容]
    */
　　getClipboardText: function(event){
　　　　var clipboardData = (event.clipboardData || window.clipboardData);
　　　　return clipboardData.getData("text");
　　},
    /**
    * [setClipboardText 剪贴板事件，设置剪切内容]
    */
　　setClipboardText: function(event, value){
　　　　if(event.clipboardData){
　　　　　　return event.clipboardData.setData("text/plain", value);
　　　　}else if(window.clipboardData){
　　　　　　return window.clipboardData.setData("text", value);
　　　　}
　　}
}