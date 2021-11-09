const Observer = (function(){
    var _messages = {};
    return {
        add: (type, fn)=>{
            if(_messages[type]){
                _messages[type].push(fn)
            }else{
                _messages[type] = [fn] 
            }
        },
        emit: (type, args)=>{
            if(_messages[type] && _messages[type] instanceof Array){
                for(let i = 0; i < _messages[type].length; i++){
                    typeof _messages[type][i] == 'function' && _messages[type][i].call(this, args)
                }
            }
        },
        remove: (type, fn)=>{
            if(_messages[type] && _messages[type] instanceof Array){
                for(let i = _messages[type].length - 1; i >= 0; i--){
                    _messages[type][i] == fn && _messages[type].splice(i, 1);
                }
            }
        }
    }
})()

var Teacher = function(){
    this.question = function(questionName){
        console.log('老师提问了： ' + questionName);
        Observer.emit(questionName, {question: questionName})
    }
}

var Student = function(name){
    this.name = name;
    this.answer = function(args){
        console.log(name +'回答老师的问题： ' + args.question);
    }
}
Student.prototype = {
    listen: function(questionName){
        console.log(this.name +'想要回答问题： ' + questionName);
        Observer.add(questionName, this.answer)
    },
    sleep: function(questionName){
        console.log(this.name +'睡着了');
        Observer.remove(questionName, this.answer)
    }
}

var s1 = new Student('小明');
var s2 = new Student('小红');

s1.listen("谁最帅");
s2.listen("谁最帅");

var t = new Teacher();
setTimeout(() => {
    t.question('谁最帅');

    s1.sleep("谁最帅");
    setTimeout(() => {
        t.question('谁最帅')
    }, 2000);

}, 2000);