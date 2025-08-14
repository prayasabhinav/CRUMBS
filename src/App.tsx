import { useAppStore } from '@/stores/appStore'
import './App.css'

function App() {
  const { theme, setTheme } = useAppStore()

  return (
    <div className="min-h-screen bg-base-100" data-theme={theme}>
      <header className="navbar bg-primary text-primary-content">
        <div className="flex-1">
          <h1 className="text-xl font-bold">CRUMBS</h1>
        </div>
        <div className="flex-none">
          <button
            className="btn btn-ghost btn-circle"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </header>
      
      <main className="container mx-auto p-4">
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Welcome to CRUMBS</h2>
            <p>Ultra-efficient image sharing for bandwidth-constrained environments</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App