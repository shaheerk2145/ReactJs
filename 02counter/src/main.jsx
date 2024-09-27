import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// createRoot
// create dom behind the structure and compare user Dom with main react Dom and upfdate only those things which are updated in UI


// Render in React refers to how the UI is displayed based on the component's state/props.
// Rendering happens both during the initial component mount and whenever updates occur.
// React's virtual DOM ensures efficient updates to the actual DOM during re-rendering.
// https://github.com/acdlite/react-fiber-architecture

// We've established that a primary goal of Fiber is to enable React to take advantage of scheduling. Specifically, we need to be able to

// pause work and come back to it later.
// assign priority to different types of work.
// reuse previously completed work.
// abort work if it's no longer needed.



// The key points are:

// In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.
// Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store.
// A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you.