# React Foundation and Basic

## Components
1. Components are the building blocks of React applications. They let us split the UI into independent, reusable pieces, and think about each piece in isolation.
2.  A component is a piece of the UI (user interface) that has its own logic and appearance.
3.  React components are JavaScript functions that return markup.
4.  React component names must always start with a capital letter, while HTML tags must be lowercase.

Types of Components
1. Functional Component
2. Class Component
3. Higher Order Component(HOC)

## React Element v/s Components

React Element: A React Element is a plain JavaScript object that describes what you want to see on the screen—a representation of a DOM node, including its type and properties.
`const element = <h1>Hello, React!</h1>;`

React Components:  A React Component is a function or class that can accept input (props) and returns React elements. Components manage logic, state, and lifecycle.
`function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
`

## JSX

JSX stands for JavaScript XML. It allows writing HTML in JavaScript and converts the HTML tags into React elements.

## Props & State
1. "State" Describes a changeable default data value in a React Components, it is subject to change with time. state is managed within the component (similar to variables declared within a function).
2. "Props" are us to show the way a React Component is configured. Props don't Change. and props get passed to the component (similar to function parameters), Parent -> Child | Read-only 
3. simply, The state is changeable based on user actions and times, while props are not
- React Props Destructuring: `const { text } = props;`
- React Spread Props: `<Welcome {...greeting} />`
- React Rest Props: 
- React props with Default Value: `{ title = 'Earth', description }`
- React's children prop: only a string is put in between of the element's tags. Then in the child component, you can make use of everything which is in between the tags by using React's children prop. Cards, Modals, Dialogs, Reusable Layouts.`<Component>{children}</Component>`


## Conditional Rendering
1. In React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application.
2. display different things depending on different conditions. In React, you can conditionally render JSX using JavaScript syntax like `if statements, &&, and ? : (ternary)operators`.

- if statement
- && (Logical AND) : `{isLoggedIn && <AdminPanel />}`
- Ternary : `{isLoggedIn ? (<AdminPanel />) : (<LoginForm />) }`

