import Navbar from './components/Navbar/Navbar';
import BooksList from './components/BooksList/BooksList';
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar title="IronBooks" />
      <div className="container mt-4">
        <BooksList />
      </div>
    </div>
  )
}

export default App
