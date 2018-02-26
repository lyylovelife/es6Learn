'use strict';

var _temp = require('./temp');

console.log(_temp.a);

// // 16.class类的使用
// // 16.1类的声明
// class Coder{
//     name(val){
//         console.log(val);
//         return val;
//     }
//     skill(val){
//         console.log(this.name('yy')+':'+'skill:'+val);
//     }
//     constructor(a,b){
//         this.a=a;
//         this.b=b;
//     }
//     add(){
//         return this.a+this.b;
//     }
// }
// // 类的使用
// let c=new Coder();
// c.name('yy');
// // 类的多方法声明
// // 两个方法中间不要写逗号了，还有这里的this指类本身，还有要注意return 的用法
// c.skill('web');
// // 类的传参
// let yy=new Coder(1,2);
// console.log(yy.add());
// //class的继承
// class htmler extends Coder{

// }
// let h=new htmler();
// h.name('技术');


// // 15.promise对象的使用
// // 15.1promise的基本用法
// // Promis在现在的开发中使用率算是最高的，而且你面试前端都会考这个对象，大家一定要掌握好。
// let state = 1;
// function step1(resolve,reject){
//     console.log('1.开始-洗菜做饭');
//     if(state==1){
//         resolve('洗菜做饭--完成');
//     }else{
//         reject('洗菜做饭--出错');
//     }
// }
// let step2=(resolve,reject)=>{
//     console.log('2.开始-坐下来吃饭');
//     if(state==1){
//         resolve('坐下来吃饭--完成');
//     }else{
//         reject('坐下来吃饭--出错');
//     }
// }
// function step3(resolve,reject){
//     console.log('3.开始-收拾桌子洗碗');
//      if(state==1){
//         resolve('收拾桌子洗完--完成');
//     }else{
//         reject('收拾桌子洗完--出错');
//     }
// }

// new Promise(step1).then(function(val){
//     console.log(val);
//     return new Promise(step2);
// }).then(function(val){
//     console.log(val);
//     return new Promise(step3);
// }).then(function(val){
//     console.log(val);
//     return val;
// })


// // 14.用Proxy进行预处理
// // 回顾一下定义对象的方法
// var obj={
//     add:function(val){
//         return val+10;
//     },
//     name:'I am Jspang'

// };
// console.log(obj.add(100));
// console.log(obj.name);
// // 14.1声明Proxy
// // 第一个花括号就相当于我们方法的主体，后边的花括号就是Proxy代理处理区域，相当于我们写钩子函数的地方。
// // new Proxy（{},{}）;
// // 把上边的obj对象改成我们的Proxy形式。
// var pro=new Proxy({
//     add(val){
//         return val+10;
//     },
//     name:'I am yy'
// },{
//     get(target,key,property){
//         console.log('come in Get');
//         return target[key];
//     },
//     set(target,key,value,receiver){
//         console.log(`setting ${key} = ${value}`);
//         return target[key]=value;
//     }
// })
// // 控制台看到结果，先输出了come in Get。相当于在方法调用前的钩子函数。
// console.log(pro.name);
// pro.name='你好';
// console.log(pro.name);
// // 1.get属性
// // 2.target：得到的目标值
// // 3.key：目标的key值，相当于对象的属性
// // set属性
// // 1.target:目标值。
// // 2.key：目标的Key值。
// // 3.value：要改变的值。
// // 4.receiver：改变前的原始值。
// // 14.2apply的使用
// let target=function(){
//     return 'I am yy';
// }
// var handler={
//     apply(target,ctx,args){
//         console.log('do apply');
//         return Reflect.apply(...arguments);
//     }
// }
// var pro = new Proxy(target, handler);
// console.log(pro());


// // 13.map数据结构
// // 13.1Json和map格式的对比
// // map的效率和灵活性更好
// let json={
//     name:'yy',
//     skill:'web'
// }
// console.log(json.name);
// // json反应的速度要低于数组和map结构
// var map=new Map();
// map.set(json,'iam');
// console.log(map);
// // key字符串，value是对象
// map.set('yy',json);
// console.log(map);
// // 13.2map的增删查
// // 取值get
// console.log(map.get(json));
// // 删除delete
// map.delete(json);
// console.log(map);
// // size属性
// console.log(map.size);
// // 查找是否存在has
// console.log(map.has('yy'));
// // 清楚所有元素clear
// map.clear();
// console.log(map);
// // map在现在开发中已经经常使用，它的灵活性和高效性是我们喜欢的


// // 12.Set和WeakSet数据结构
// // 12.1Set的声明
// // Set和Array 的区别是Set不允许内部有重复的值，如果有只显示一个，相当于去重。虽然Set很像数组，但是他不是数组。
// let setArr=new Set(['jspang','技术','web','jspang']);
// console.log(setArr);//Set {"jspang", "技术胖", "web"}
// // 12.2Set值的增删查
// // 追加add：
// setArr.add('前端');
// console.log(setArr);
// // 删除delete：
// setArr.delete('前端');
// console.log(setArr);
// //查找has,用has进行值的查找，返回的是true或者false。
// console.log(setArr.has('jspang'));//true
// // 删除clear:
// setArr.clear();
// console.log(setArr);
// // 12.3set的循环
// let setArr1=new Set(['jspang','技术','web','jspang']);
// // for…of…循环：
// for(let item of setArr1){
//     console.log(item);
// }
// // size属性
// console.log(setArr1.size);
// // forEach循环
// setArr1.forEach((val)=>console.log(val));
// // 12.4WeakSet的声明
// // 这里需要注意的是，如果你直接在new 的时候就放入值，将报错。
// // WeakSet里边的值也是不允许重复,传入值必须是对象
// let weakObj =new WeakSet();
// let obj={a:'yy',b:'技术'};
// let obj1=obj;

// weakObj.add(obj);
// weakObj.add(obj1);
// console.log(weakObj);


// // 11.Symbol在对象中的作用(全局标记)
// // 11.1声明Symbol
// var a=new String;
// var b=new Number;
// var c=new Boolean;
// var d=new Array;
// var e=new Object;
// var f=Symbol();
// // 11.2Symbol的打印
// var s=Symbol('yy');
// // 没有toString的是红字，toString的是黑字。
// console.log(s);
// console.log(s.toString());
// // 11.3Symbol在对象中的应用
// var yy=Symbol();
// var obj={
//     [yy]:'李'
// }
// console.log(obj[yy]);
// obj[yy]='web';
// console.log(obj[yy]);
// // 11.4Symbol对象元素的保护作用
// let obj1={name:'jspang',skill:'web'};
// let age=Symbol();
// obj1[age]=18;
// for (let item in obj1){
//     console.log(obj1[item]);
// } 
// console.log(obj1);


// // 10.ES6中对象
// // 10.1对象赋值
// let name="jspang";
// let skill= 'web';
// var obj= {name,skill};
// console.log(obj);  //Object {name: "jspang", skill: "web"}
// // 10.2对象Key值构建
// // 我们在后台取了一个key值，然后可以用[ ] 的形式，进行对象的构建。
// let key ='skill';
// var obj1={
//     [key]:'web'
// }
// console.log(obj1.skill);
// // 10.3自定义对象方法
// var obj2={
//     add:function(a,b){
//         return a+b;
//     }
// }
// console.log(obj2.add(1,2));  //3
// // 10.4Object.is(  ) 对象比较
// //ES5
// var o1 = {name:'jspang'};
// var o2 = {name:'jspang'};
// console.log(o1.name === o2.name);//true
// // ES6为我们提供了is方法进行对比。
// console.log(Object.is(o1.name,o2.name));//true
// // 区分=== 和 is方法的区别是什么，看下面的代码输出结果。
// // ===为同值相等，is()为严格相等
// console.log(+0 === -0);  //true
// console.log(NaN === NaN ); //false
// console.log(Object.is(+0,-0)); //false
// console.log(Object.is(NaN,NaN)); //true
// // 10.5Object.assign(  )合并对象
// var a={a:'jspang'};
// var b={b:'技术胖'};
// var c={c:'web'};
//  //下标不能一样，否则会被覆盖
// let d=Object.assign(a,b,c)
// console.log(d);


// // 9.ES6中的函数和数组补漏
// // 9.1对象的函数解构
// let json = {
//     a:'yy',
//     b:'你好'
// }
// function fun({a,b='yy'}){
//     console.log(a,b);
// }
// fun(json);
// // 数组的函数解构
// let arr=['a','b','c'];
// function fun1(a,b,c){
//     console.log(a,b,c);
// }
// fun1(...arr);
// // 9.2in的用法
// // in是用来判断对象或者数组中是否存在某个值的
// // 对象判断
// let obj={
//     a:'yy',
//     b:'技术'
// }
// console.log('a' in obj);  //true
// // 数组判断
// //ES5
// let arr1=[,,,,,];
// console.log(arr1.length);//5
// //ES6 in
// // 0指的是数组下标位置是否为空。
// console.log(0 in arr1);//false
// let arr2=['a','b'];
// console.log(0 in arr2);//true
// // 9.3数组的遍历方法
// // forEach
// let arr3=['a','b','c'];
// // forEach循环的特点是会自动省略为空的数组元素，相当于直接给我们筛空了。当是有时候也会给我们帮倒忙。
// arr3.forEach((val,index)=>console.log(index,val));
// //filter
// arr3.filter(x=>console.log(x));
// //some
// arr3.some(x=>console.log(x));
// //map在这里起到一个替换的作用
// console.log(arr3.map(x=>'web'));
// // 9.4数组转换字符串
// // join()方法就是在数组元素中间，加了一些间隔，开发中很有用处。
// console.log(arr3.join('|'));
// // toString()方法
// console.log(arr3.toString());


// // 8.ES6中的箭头函数和扩展
// // ES5中的函数写法
// // function add(a,b){
// //     return a+b;
// // }
// // console.log(1,2);
// //8.1ES6默认值
// function add(a,b=1){
//     return a+b;
// }
// console.log(add(1));
// // 8.2主动抛出错误
// function add1(a,b=1){
//     if(a==0){
//         throw new Error('This is Error');
//     }
//     return a+b;
// }

// // console.log(add1(0));
// // 8.3函数中的严谨模式
// // function add2(a,b=1){
// function add2(a,b){
//     'use strict'
//     if(a == 0){
//         throw new Error('This is error');
//     }
//      return a+b;
// }
// // 你使用了默认值，再使用严谨模式的话，就会有冲突，所以我们要取消默认值的操作
// // console.log(add2(1));
// // 8.4获得需要传递的参数个数
// function add3(a,b){
//     'use strict'
//     if(a == 0){
//         throw new Error('This is error');
//     }
//      return a+b;
// }
// // 如果我们去掉严谨模式，并给第二个参数加上默认值的话，这时候add.length的值就变成了1， 也就是说它得到的是必须传入的参数。
// console.log(add3.length);
// // 8.5箭头函数
// var add4=(a,b=1)=>a+b;
// console.log(add4(1));

// var add5=(a,b=1)=>{
//     console.log('yy');
//     return a+b;
// }
// console.log(add5(2));


// // 7.ES6中新增的数组知识（2）
// let arr=[0,1,2,3,4,5,6,7,8,9];
// // 7.1fill( )实例方法：
// // 接收三个参数，第一个参数是填充的变量，第二个是开始填充的位置，第三个是填充到的位置。
// arr.fill('yy',2,5);
// console.log(arr);
// // 7.2数组的遍历
// let arr1=['jspang','技术胖','大胖逼逼叨']
// // for…of循环
// for (let item of arr1){
//     console.log(item);
// }
// // for…of数组索引:
// for (let index of arr1.keys()){
//     console.log(index);
// }
// // entries( )实例方法：
// // 同时输出数组的内容和索引：entries()这个实例方法，
// for(let [index,val] of arr1.entries()){
//     console.log(index+':'+val);
// }
// // entries()实例方式生成的是Iterator形式的数组，那这种形式的好处就是可以让我们在需要时用next()手动跳转到下一个值。
// let list=arr1.entries();
// console.log(list.next().value);
// console.log(list.next().value);
// console.log(list.next().value);


// // 6.ES6中新增的数组知识（1）
// // 6.1JSON数组格式转换
// let json={
//     '0':'a',
//     '1':'b',
//     '2':'c',
//     length:3
// }
// // 我们就用Array.from(xxx)来进行转换
// let arr=Array.from(json);
// console.log(arr);
// // Array.of()方法
// // eval的效率是很低的,把一堆文本或者变量转换成数组。
// let arr1=Array.of('a','v','你好');
// console.log(arr1);
// // 6.2find( )实例方法
// // 符合条件的数组元素就进行return，并停止查找。找不到会显示undefined
// let arr2=[1,2,3,4,5,6,7,8,9];
// console.log(arr2.find(function(value,index,arr){
//     return value > 5;
// }))


// // 5.ES6数字操作
// // 5.1二进制和八进制
// // 二进制的英文单词是Binary,二进制的开始是0（零），然后第二个位置是b（注意这里大小写都可以实现），然后跟上二进制的值就可以了。
// let binary=0B010101;
// console.log(binary);
// // 八进制的英文单词是Octal，也是以0（零）开始的，然后第二个位置是O（欧），然后跟上八进制的值就可以了
// let octal=0O666;
// console.log(octal);
// // 5.2数字判断和转换
// // 数字验证Number.isFinite( xx )
// let a=11/4;
// console.log(Number.isFinite(a));//true
// console.log(Number.isFinite('yy'));//false
// console.log(Number.isFinite(NaN));//false
// console.log(Number.isFinite(undefined));//false
// // NaN验证
// console.log(Number.isNaN(NaN));//true
// // 判断是否为整数Number.isInteger(xx)
// console.log(Number.isInteger(a)); //false

// // 整数转换Number.parseInt(xxx)和浮点型转换Number.parseFloat(xxx)
// let b='9.18';
// console.log(Number.parseInt(b));
// console.log(Number.parseFloat(b));
// // 5.3整数取值范围操作
// // 整数的操作是有一个取值范围的，它的取值范围就是2的53次方
// let c=Math.pow(2,53)-1;
// console.log(c);
// // 最大安全整数
// console.log(Number.MAX_SAFE_INTEGER);
// // 最小安全整数
// console.log(Number.MIN_SAFE_INTEGER);
// // 安全整数判断isSafeInteger( )
// console.log(Number.isSafeInteger(c));//false


// // 4.字符串模版
// let yy='yy';
// // let blog = '非常高兴你能看到这篇文章，我是你的老朋友'+yy+'。这节课我们学习字符串模版。';
// // ES6新增了字符串模版，支持html标签
// let blog = `<b>非常高兴你能看到这篇文章</b>，我是你的老朋友${yy}。<br/>这节课我们学习字符串模版。`;
// document.write(blog);
// // 4.1对运算的支持：
// let a=1;
// let b=2;
// let res=`${a+b}`;
// console.log(res);
// // 4.2字符串查找
// let jishu='技术';
// let blog1 = '非常高兴你能看到这篇文章，我是你的老朋友技术。这节课我们学习字符串模版。';
// // ES5
// console.log(blog1.indexOf(jishu));
// //ES6,存在返回true
// console.log(blog1.includes(jishu));
// // 判断开头是否存在：
// console.log(blog1.startsWith(jishu));//false
// // 判断结尾是否存在：
// console.log(blog1.endsWith(jishu));//false
// // 4.3复制字符串
// //复制3次
// console.log('yy1234|'.repeat(3));


// // 3.扩展运算符和rest运算符
// // 3.1对象扩展运算符（…）
// // 控制台输出了 1,2,3，undefined，这说明是可以传入多个值，并且就算方法中引用多了也不会报错
// function yy(...arg){
//     console.log(arg[0]);
//     console.log(arg[1]);
//     console.log(arg[2]);
//     console.log(arg[3]);
// }
// yy(1,2,3);
// // 内存堆栈的引用，而不是真正的赋值,
// // let arr1=['a','b','c'];
// // let arr2=arr1;
// // console.log(arr2);
// // arr2.push('yy');
// // console.log(arr1);
// // 这是我们不想看到的,利用对象扩展运算符简单的解决这个问题
// let arr1=['a','b','c'];
// let arr2=[...arr1];
// console.log(arr2);
// arr2.push('yy');
// console.log(arr1);
// // 3.2rest运算符
// function yyRest(first,...arg){
//     console.log(arg.length);
//     for(let val of arg){
//         console.log(val);
//     }
// }
// yyRest(0,1,2,3,4,5,6,7);


// // 2.变量的解构赋值
// //2.1数组的解构赋值左右形式必须一样
// // let [a,b,c]=[0,1,2];
// // let [a,[b,c],d]=[1,[2,3],4];
// // console.log(a)
// // console.log(b)
// // console.log(c)
// // 2.2解构赋值是允许你使用默认值的
// let [foo=true]=[];
// console.log(foo);
// let [a,b='yy']=['js',undefined];
// console.log(a+b);//显示的是yyjs
// // undefined相当于什么都没有，b是默认值。
// console.log(a+b);//显示的是yyjs
// let [c,d='yy']=['js',null];
// // null相当于有值，但值为null。所以b并没有取默认值，而是解构成了null。
// console.log(c+d);
// // 2.3对象的解构赋值
// // 对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
// let {f,z}={f:'foo',z:'zoo'};
// console.log(f+z);
// // 2.4圆括号的使用
// // 解构的语句外边加一个圆括号就可以
// let e;
// ({e} = {e:'echo'});
// console.log(e);
// // 2.5字符串解构
// const [a1,b1,c1,d1,e1,f1]="jsyy";
// console.log(a1);
// console.log(b1);
// console.log(c1);
// console.log(d1);
// console.log(e1);
// console.log(f1);

// 1.var let const
//ES6代表全局变量
// var a=1;
// {
//     //局部变量
//     let a =3;
// }
// console.log(a);

// for(var i=0;i<10;i++){
//     console.log('循环体中:'+i);
// }
// console.log('循环体外:'+i);

// for(let i=0;i<10;i++){
//     console.log('循环体中:'+i);
// }
// console.log('循环体外:'+i);

//常量只能定义一次
// const a='a';
// var a='b';
// console.log(a);
// 17.模块化操作
// export :负责进行模块化，也是模块的输出。
// import : 负责把模块引，也是模块的引入操作。
// 17.1export的用法：
