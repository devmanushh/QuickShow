
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import{ BrowserRouter } from 'react-router-dom'
 import { ClerkProvider } from '@clerk/clerk-react'

// I am using clerk for the signup form . Its a readymade form and we need to have this thing particularly the publishable key for usage 
// Import your own Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}


createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <BrowserRouter>
     <App />
   </BrowserRouter>
  </ClerkProvider>
)
