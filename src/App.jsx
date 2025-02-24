import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.css'

import {MyComponent} from './MyComponent'

function App() {

  return (
    <>
      <div className={styles.app}>
        <header className={styles.header}>
          <MyComponent />
        </header>
      </div>
		  
      
    </>
  )
}

export default App
