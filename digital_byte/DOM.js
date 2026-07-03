// DOM-> Document Object Model.
// DOM-> follows tree structure , All the information of the doucment(title , url , lang, doctype html, etc) lies in the root element <html> [whole document structure] inside the head tag.
// The Edge of the div and other sections/tags(a,img,h1,nav) lie in the body tag.

// //  DOCUMENT OBJECT MODEL (DOM)
// ===========================================

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
//                                               <section>   <article>
//                                                  │             │
//                                             ┌────┴────┐        │
//                                             │         │        │
//                                           <h1>      <p>      <img>
//                                             │         │
//                                          Text Node  Text Node
//
//
//



