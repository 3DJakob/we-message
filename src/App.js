import logo from './logo.svg'
import './App.css'

// const { ipcRenderer } = require('electron')
const { ipcRenderer } = window.require('electron')

function App () {
  const contactMain = () => {
    ipcRenderer.send('hello', 'Hello world!')
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={contactMain}>Contact main!</button>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
