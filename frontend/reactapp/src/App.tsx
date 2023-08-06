import { AuthProvider } from "./providers/AuthProvider"
import { ContactProvider } from "./providers/ContactProvider"
import { UserProvider } from "./providers/UserProvider"
import { RoutesMain } from "./routes/RouterMain"

function App() {
  return (
    <AuthProvider>
    <UserProvider>
      <ContactProvider>
      <div className="App">
        <RoutesMain />
      </div>
      </ContactProvider>

    </UserProvider>
    </AuthProvider>

  )
}

export default App
