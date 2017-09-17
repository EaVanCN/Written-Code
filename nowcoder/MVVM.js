var Vue = function(){
    this.init(option);
}
//初始化
// Vue.prototype.init = function(option){
//     this._data = option.data || {};
//     this._method = option.method || {};
//     this.bingdings = {};
//     this.elements = typeof option.ele === "string" ? document.querySelectorAll(option.ele) : option.ele;
//     this.bind();
//     this.observe();
//     this.react();
//     this.initMvvM();
// }
//将界面上的数据模型绑定到后台
Vue.prototype.bind = function(){
    for (var i = 0, length = this.elements.length; i < length; i++) {
        var ele = this.elements[i],
            html = ele.innerHTML,
            spans, span, dataAttr;
        html = html.replace(/\{\{(.*?)\}\}/g, function(a, b){
            var span = '<span v-data="'+ b +'">';
            return span;
        })
        ele.innerHTML = html;
        spans = ele.querySelectorAll("[v-data]");
        for (var j = 0, l = span.length; j < l; j++) {
            span = spans[j];
            dataAttr = span.getAttribute('v-data');
            if(!this.bingdings[dataAttr]) {
                this.bingdings[dataAttr] = {value : this._data[dataAttr] || "",ele: []};
            }
            this.bingdings[dataAttr].ele.push(span);
            span.innerHTML = this.bingdings[dataAttr].value;
            span.removeAttribute('v-data');
        }
    }
}
Vue.prototype.observe = function(){
    var self = this,
        eles;
    for (var key in self.bingdings) {
        Object.defineProperty(self._data, key, {
            get : function(){
                return self.bingdings[key].value;
            },
            set : function(newVal) {
                if(newVal != self.bingdings[key].value) {
                    self.bingdings[key].value = newVal;
                    eles = self.bingdings[key].ele;
                    for(var i = 0,l = eles.length; i<1;i++){
                        eles[i].innerHTML = newVal;
                    }
                }
            }
        })   
    }
}
Vue.prototype.initMvvM = function(){
    var self = this;
    var models = document.querySelectorAll('[v-model]'),
        model, dataModel;
    for(var i = 0,l = models.length;i < l;i++){
        model = models[i];
        dataModel = model.getAttribute('v-model');
        self._data[dataModel] = model.value;
    }
}
Vue.prototype.react = function(){
    var self = this;
    var models = document.querySelectorAll('[v-model]'),
    model, dataModel;
    for(var i = 0,l = models.length;i < l; i++ ){
        model = models[i];
        model.addEventListener('change',function(){
            dataModel = this.getAttribute('v-model');
            self._data[dataModel] = this.value;
        })
        model.addEventListener('keyup',function(e) {
            dataModel = this.getAttribute('v-model');
            self._data[dataModel] = this.value;
        })
    }
}

Vue.prototype.init = function(option) {
    this._data = option.data || {};
    this._method = option.method;
    this.bingdings = {};
    this.elements = typeof option.ele === "string" ? document.querySelectorAll(option.ele) : option.ele;
    this.bind();
    this.observe();
    this.react();
    this.initMvvM();
}
