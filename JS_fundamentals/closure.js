// Closure is when a function is able to remember and access its lexical scope even when that function 
// is executing outside its lexical scope.

//  USE CASES
// 1. function that returns a function
// 2. setTimeout
// 3. function that creates an event handler
// 4. function passed in as a callback  
// 5. function is assigned inside a function and invoked outside that function

//                                                                                               EX 1
function foo() {
  var a = 2;

  function bar() {
    console.log(a); // 2
  }

  bar();
}

//foo(); //2 

//=================================================================================================================
//                                                                                               EX 2
function foo() {
  var a = 2;

  function bar() {
    console.log(a);
  }

  return bar;
}

var baz = foo();
//baz(); // 2 -- Whoa, closure was just observed, man.

// After foo() executed, normally we would expect that the entirety of the inner scope of foo() 
// would go away, because we know that the Engine employs a Garbage Collector that comes along and 
// frees up memory once it's no longer in use. Since it would appear that the contents of foo() are 
// no longer in use, it would seem natural that they should be considered gone.

// But the "magic" of closures does not let this happen.  
// That inner scope is in fact still "in use", and thus does not go away.  
// Who's using it? The function bar() itself.

//===================================================================================================================

// USE CASE 1

// USE CASE 2 - SetTimeout
function wait(message) {

  setTimeout(function timer() {
    console.log(message);
  }, 100);

}

// wait("Hello, closure!");

//===================================================================================================================
// Event Handlers -jQuery ect
// essentially whenever and wherever you treat functions(which access their own respective lexical scopes) 
// as first - class values and pass them around, you are likely to see those functions exercising closure.
// Be that timers, event handlers, Ajax requests, cross - window messaging, web workers, or any of the other 
// asynchronous(or synchronous!) tasks, when you pass in a callback function, get ready to sling some closure 
// around!



//===================================================================================================================
//                                                                                                    IN LOOPS                             
//                                                                              prints 6 Five times

// EXPLAINATION: var i gets hoisted to the global scope so all five functions are closed over the global scope

// for (var i = 1; i <= 5; i++) {
//   setTimeout(function timer() {
//     console.log(i);
//   }, i * 1000);
// }
// // 

//                                                                              ALSO prints 6 Five times

// EXPLAINATION: var i gets hoisted to the global scope so all five functions are closed over the global scope
//   we intoduced new lexical scope with the IFFE, but it's not adding new variables to that scope

// for (var i = 1; i <= 5; i++) {
//   (function () {
//     setTimeout(function timer() {
//       console.log(i);
//     }, 1000);
//   })();
// }
//                                                                              USING an IFFE and passing in i                                  
//                                                                              prints correctly      

// EXPLAINATION:  we have introduced a new var to the lexical scope added with an IFFE

// for (var i = 0; i< 5; i++) {
//   (function(num) {
//     setTimeout(function timer() {
//       console.log(num);
//     }, 1000);
//   })(i);
// }
// loopTest();

//                                                                              USING THE LET BINDING 
//                                                                              prints correctly
// EXPLAINATION:  let defines i in the block scope  + closure

// let highjacks a block and declares a variable in the block
// for (let i =0; i< 5; i++) {
//   setTimeout(function timer(){
//     console.log(i)
//   },100);
// }


// ====================================================================================================
//                                          MODULE
// ====================================================================================================


const coolModule = () => {
  let something = 'cool';
  let another = [1,2,3];

  let doSomething = () => {
    console.log('cool');
  }

  let doAnother = () => {
    console.log(another.join('!'));
  }
  return {
    doSomething: doSomething,
    doAnother: doAnother,
  }
}

let singleTon = coolModule();
singleTon.doSomething();
singleTon.doAnother();