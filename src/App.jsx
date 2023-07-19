import Card from "./components/Card/Card"
import Grid from "./components/Grid/Grid"


function App() {

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Grid numberOfCards={9}/>
    </div>
  )
}

export default App
