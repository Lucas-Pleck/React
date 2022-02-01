import React, { useState } from 'react'
import Toolbar from './components/Toolbar';
import ThemeContext from './context/ThemeContext';

const App = () => {
  const [theme,setTheme]=useState('light');
  const contextValue={
    theme,
    updateTheme: setTheme,
  };
  return(
  <ThemeContext.Provider value={contextValue}>
  <div className={`py-10 max-w-7x1 mx-auto ${theme==='light'?'bg-white':'bg-gray-800 text-white'}`}>
    <header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">
          Base TPK APP
        </h1>
      </div>
    </header>
    <main>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="px-4 py-8 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
            <Toolbar />
          </div>
        </div>
      </div>
    </main>
  </div>
  </ThemeContext.Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
