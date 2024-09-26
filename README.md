### Word Quiz

This is a word quiz app that allows the user to test their knowledge of the definitions of various English words. The definitions of the words are pulled from an API created by Merriam-Webster.

### How to use

The user simply presses the start button to start the quiz. When pressed, the app will fetch the definitions using the Merriam-Webster Elementary Dictionary API. When the words are fetched, processed, and used to create the questions, the user will be taken to the first question. The user must choose one of four possible definitions for that word as well as three other words. The user can press the arrow buttons to move to the next or previous question. When finished, the user will be taken to the results section where they will see what questions that got correct. Questions that they got wrong will have their correct answers be provided. If the user wants to, they can repeat the quiz again as many times as they want.

### Technologies

- Git 
- TypeScript
- CSS
- HTML
- WebPack
- ESList
- Prettier 
- Node

### Design

The app was created using the MVC (Model - View - Controller) design pattern.

### Things I learned / Reflection

- Using the MVC helped not only organize my code but sped up my productivity. 
- Using an event emitter help decoupled my code and avoid deep nesting of callbacks
- Creating a module that is responsible for binding handlers with HTML elements made it easy to know where handlers are
being connected.
- TypeScript was used to mainly for type checking parameters in functions. 
- While using CSS is not difficult, I often have to relearn something from it. Obviously the reason is that I don't code in CSS so often. Need to practice more reguarly.
- Would like to use more of MVC in the future. 