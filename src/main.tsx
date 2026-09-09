import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BudgetProvider } from './context/BudgetContext.tsx' // se importa el provider para envolver la app y que todos los componentes puedan acceder al contexto

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BudgetProvider>
            <App />
        </BudgetProvider>
    </StrictMode>,
)
