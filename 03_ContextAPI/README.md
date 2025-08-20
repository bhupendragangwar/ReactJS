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

---

```useContext Hooks```: The useContext hook in React allows you to access values from a React Context, making it easy to share state or data among multiple components—without needing to pass props down manually through every level (avoiding “prop drilling”)  

### Key Points
1. Purpose: useContext lets components subscribe to context values directly, making shared state management across deeply nested components much easier.  
2. Creation: First, create a context using React.createContext().  
3. Provider: Wrap one or more components with the <YourContext.Provider> to make the context available in their subtree.  
4. Usage: Call const value = useContext(YourContext); inside any functional component to read the value provided by the nearest matching Provider above it in the component tree.

### Basic Example
![alt text](image.png)

---

# Interview Question

1. What problems does Context API solve?
   - Eliminates prop drilling in deeply nested component trees.
   - Centralizes global states like authentication status, theme, language, user data, app settings.
   - Makes code cleaner and more maintainable.

2. When would you use Context API over Redux?
   - Context API → Great for simple global state (theme, authentication, user preferences). Lightweight and built-in.
   - Redux → Better for large-scale applications with complex state logic, advanced debugging (Redux DevTools), middleware support, or if you need fine-grained control over state updates.

3. How to avoid unnecessary re-renders in Context?
   - By default, any value change in Context re-renders all consumers, even if they don’t use the changed value.
   - To avoid this:
       - Split Contexts: Use multiple smaller contexts instead of one big one.
       - Memoization: Wrap provider values in useMemo to prevent unnecessary recalculations.
       - Selector Pattern (like Zustand/Recoil): Only subscribe to the part of state you need.
       - Example: <img width="634" height="102" alt="image" src="https://github.com/user-attachments/assets/d6f366f7-f094-4850-979d-6003f3be63d8" />

4. How would you handle authentication with Context API?
   - Create an AuthContext that stores user info and authentication state (user, isAuthenticated, login, logout).
   - Wrap the app with AuthProvider.
   - Use useContext(AuthContext) in components to check auth state.
   - Protect routes by conditionally rendering based on isAuthenticated.

