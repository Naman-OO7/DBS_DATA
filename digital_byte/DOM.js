// FILE STRUCTURE.{JS files} :-
// DOM=> contain simple Code.
// DOM2=> contains create element , append child
// DOM3=> contains eventlistener , buttons to used listener, clock, setinterval, settimeout, clearinterval, cleartimeout,

//CLASS NOTES. {JS ADVANCE}
// DOM-> Document Object Model.
// DOM-> follows tree structure , All the information of the doucment(title , url , lang, doctype html, etc) lies in the root element <html> [whole document structure] inside the head tag.
// The Edge of the div and other sections/tags(a,img,h1,nav) lie in the body tag.

// DOCUMENT OBJECT MODEL (DOM) tree structure.

//                      WINDOW
//                         │
//                  ┌──────┴──────┐
//                  │             │
//               Document      Navigator
//                  │
//                  │
//                <html>
//               /      \
//            <head>   <body>
//              │          │
//       ┌──────┴──────┐   ├───────────────────────────────┐
//       │             │   │                               │
//    <title>       <meta> <header>                     <main>
//                                │                        │
//                           <nav>                   ┌─────┴─────┐
//                                                  │           │
//                                           <section tags>   <article tags>
//                                                  │             │
//                                             ┌────┴────┐        │
//                                             │         │        │
//                                           <h1>      <p>      <img>
//                                             │         │
//                                          Text Node  Text Node
//
//
//
//Document is object for Window and Window is considered the parent object of document.
// {id} =>document.getElementById(), {class}=>document.getElementsByClassName() , {tag name}=> document.getElementBytag(), {css selector}=>document.queryselector()
// {Specific name attribute}=>document.getElementsByName()->(used for form inputs like radio buttons).
// innerHTML => returns the actual HTML markup, including all tags inside the element.
// textContent=> returns the raw text inside an element, including hidden text, scripts, and styles, exactly as written in the HTML.
// innerText=> returns only the visible text as it appears on the screen, respecting CSS styling and ignoring hidden elements.
//Console stores previous files/statements temporary and sometimes you get error in console while coding, to solve this clear console once and everything will be fine.
//Query Selector=> querySelector searches the DOM using CSS selectors to find and return only the very first matching element on your webpage.
//createElement:This method builds a new HTML tag completely inside the browser's memory, ready to be configured with text/data or styled in css.
//appendChild:This method moves an existing or newly created element from memory/code and inserts it as the last child inside the body tag or any other mentioned tag.
//event listener to add event on a button so that it can perform certain action/properities mentioned inside the arrow function inside the listener.
//event listener is an higher order funtion(HOF). empty raises a null pointer inside the function/program.
//e.prevent default is used to prevent the leakage of form details from the event listener arrow function section.(default action is present inside the browser.)
//h2.remove()=> remove function is used to remove the existing tag from the html document using JS code.
//(String Interpolation {$})=>When used inside backticks (``), ${variable_name} allows you to insert variables directly into a text string.
//setinterval, clock, clear interval, settimeout, clear timeout, event looping , event emitter, js is sync or async?  
//setinterval is used to run a function repeatedly at specified intervals (in milliseconds) until it is stopped by user, while settimeout is used to run a function once after a specified delay (in milliseconds).
//clearinterval is used to stop a setinterval timer, while cleartimeout is used to cancel a settimeout timer before it executes.
//event loop is a programming construct that allows asynchronous code to be executed in a non-blocking manner, enabling efficient handling of multiple tasks and events in a single-threaded environment.
//event bubbling is a type of event propagation in the DOM where an event starts at the most specific element (the target) and then bubbles up to its ancestors in the DOM tree, allowing parent elements to also respond to the event.
//Event capturing is the opposite, where the event starts from the outermost element and propagates down to the target element, allowing parent elements to intercept the event before it reaches the target.
//event emitter is a programming pattern that allows objects to emit events and other objects to listen for those events and respond accordingly, enabling communication between different parts of an application.
//async programming is a programming paradigm that allows tasks to run independently of the main program flow, enabling non-blocking operations and improving performance, 
//while synchronous programming executes tasks sequentially, blocking the program flow until each task is completed.
//clock is a visual representation of time that displays the current hour, minute, and second, often using rotating hands or digital numbers to indicate the passage of time. using getminutes,getseconds, gethours, setinterval, clearinterval, and date object to create a clock in JS.
//closure is a feature in JavaScript where an inner function has access to the variables and parameters of its outer function, even after the outer function has finished executing, allowing for data encapsulation and maintaining state across function calls.
//temporal dead zone is a behavior in JavaScript where variables declared with let and const are not accessible before their declaration, resulting in a ReferenceError if accessed too early, helping to prevent bugs related to variable hoisting and scope.
//lexical scope is a concept in programming where the accessibility of variables is determined by their physical placement in the source code, meaning that inner functions have access to variables defined in their outer functions, but not vice versa, allowing for organized and predictable variable scoping.
//promise is an object in JavaScript that represents the eventual completion (or failure) of an asynchronous operation and its resulting value, allowing for cleaner and more manageable handling of asynchronous code through methods like .then(), .catch(), and .finally().
//hositing is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase, allowing them to be used before they are explicitly defined in the code, which can lead to unexpected behavior if not properly understood.
//
//
//
//
//
//
//
//COMMON DOM METHODS:-
// =========================================================
// document.getElementById(), document.getElementsByClassName(), document.getElementsByTagName(), document.querySelector() document.querySelectorAll(),
//  document.createElement(), document.createTextNode(), element.appendChild(), element.removeChild(), element.replaceChild(), element.insertBefore(),
// element.setAttribute(), element.getAttribute(), element.removeAttribute().

// =========================================================
// COMMON DOM PROPERTIES:-
// =========================================================
// innerHTML, innerText, textContent, style, className, classList, id value, children, parentElement, firstChild, lastChild, 
// nextElementSibling, previousElementSibling.

// =========================================================
// COMMON DOM EVENTS:-
// =========================================================
// click, dblclick, mouseover, mouseout, mousemove, keydown, key, keypress, submit, change, focus, blur, input, load, resiz, scroll.

// =========================================================
// EVENT FLOW:-
// =========================================================

// Window
//    ↓
// Document
//    ↓
// HTML
//    ↓
// BODY
//    ↓
// DIV
//    ↓
// BUTTON

// Capturing Phase
//         ↓
// Target Phase
//         ↓
// Bubbling Phase

// =========================================================
// DOM MANIPULATION FLOW
// =========================================================

// Select Element.
//         ↓
// Read Element
//         ↓
// Modify Element
//         ↓
// Add / Remove Element
//         ↓
// Update UI
//
//
//
//
//
//
//
//
//