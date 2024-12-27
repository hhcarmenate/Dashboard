
import Header from "./components/Header"
import { OverviewContainer, OverviewTodayContainer } from "./components/OverviewContainer"

function App() {

  return (
    <main className="min-h-screen w-full bg-white dark:bg-Very-Dark-Blue flex flex-col items-center">
      <Header />
      <OverviewContainer />
      <OverviewTodayContainer />
    </main>
  )
}

export default App
