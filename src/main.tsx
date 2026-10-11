import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import theme from './theme'
import App from './App.tsx'
import ErrorBoundary from './components/ui/ErrorBoundary'
import './index.css'

const lightOnlyManager = {
  type: 'localStorage' as const,
  get: () => 'light' as const,
  set: () => undefined,
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={theme} colorModeManager={lightOnlyManager}>
      <ErrorBoundary>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ErrorBoundary>
    </ChakraProvider>
  </StrictMode>,
)