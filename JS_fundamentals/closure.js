// Closure is when a function is able to remember and access its lexical scope even when that function 
// is executing outside its lexical scope.

//  USE CASES
// 1. function that returns a function
// 2. setTimeout
// 3. function that creates an event handler
// 4. function passed in as a callback  
// 5. function is assigned inside a function and invoked outside that function


// USE CASE 1                                                                                               EX 1
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

// Whatever facility we use to transport an inner function outside of its lexical scope, it will maintain 
// a scope reference to where it was originally declared, and wherever we execute it, 
// that closure will be exercised.

//===================================================================================================================
// USE CASE 2 - SetTimeout
function wait(message) {

  setTimeout(function timer() {
    console.log(message);
  }, 100);

}

// wait("Hello, closure!");

// timer has a closure over the scope of wait.
// After we call wait the scope should be gone.  But 100MS later timer still has access to it.


//===================================================================================================================
// Event Handlers -jQuery ect
function setupBot(name, selector) {
  $(selector).click(function activator() {
    console.log("Activating: " + name);
  });
}

// setupBot("Closure Bot 1", "#bot_1");
// setupBot("Closure Bot 2", "#bot_2");

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

// let FOR-LOOP behavior: the variable will be declared @ each iteration of the loop!
// for (let i =0; i< 5; i++) {
//   setTimeout(function timer(){
//     console.log(i)
//   },100);
// }

// ====================================================================================================
//                                          MODULE
// ====================================================================================================
/*
To state it more simply, there are two "requirements" for the module pattern to be exercised:

There must be an outer enclosing function, and it must be invoked at least once (each time creates a new module 
  instance).

The enclosing function must return back at least one inner function, so that this inner function has closure 
over the private scope, and can access and/or modify that private state.

An object with a function property on it alone is not really a module. An object which is returned from a function 
invocation which only has data properties on it and no closured functions is not really a module, in the observable 
sense.
*/

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
// singleTon.doSomething();
// singleTon.doAnother();

let exampleModule = ((id) => {
  let stateID = () => {
    console.log(id)
  };
  let idToUpper = () => {
    console.log(id.toUpperCase());
  };
  let changeID = (newID) => {
    id = newID;
  };
  
  let publicAPI = {
    stateID: stateID,
    idToUpper: idToUpper,
    changeID: changeID,
  }
  return publicAPI;

})('someguy');

// exampleModule.stateID();
// exampleModule.changeID('buddy');
// exampleModule.stateID();

//========================================================================================================
// PRACTICE
//========================================================================================================
// ADD TO

const addTo = (num1) => {
  return (num2) => {
    return num1 + num2;
  }
}

// function addTo_A(num1) {
//   function inner(num2) {
//     return num1 + num2;
//   }
//   return inner;
// }

let addFive = addTo(5);
// console.log(
//   addFive(7)
// );

//================================================================================================
// private methods - MODULE pattern

// Private methods aren't just useful for restricting access to code: they also provide a powerful way of 
// managing your global namespace, keeping non-essential methods from cluttering up the public interface to your code.

const counterFive = ((startNum) => {
  let privateVal = startNum;
  
  function increaseBy(num) {
    privateVal += num;
  }
  function getVal() {
    return privateVal;
  }
  return {
    increaseBy: increaseBy,
    getVal: getVal,
  }
})(5);

counterFive.increaseBy(20);

console.log(
  counterFive.getVal()
)


