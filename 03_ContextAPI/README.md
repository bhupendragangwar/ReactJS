# Context API

The Context API in React Provides a way to share data across components without manually passing props at every level(called prop drilling).

- Props → Used for direct parent-to-child data transfer. Explicit but can get messy if deeply nested.

- Context API → Allows you to create a global state (via `React.createContext`) and make it accessible to any component in the tree using `Provider` and `useContext`.

The React Context API has two main parts.  
1. `Provider` : Provide the data
- It provides the data to all components that need it.
- The Provider defines the global state and share it with child component.
2. `Consumer` : Received the Data
- it comsumes the data provided by the Provider.