import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import UseRefExample1 from './components/UseRefExample1'
import UseRefExample2 from './components/UseRefExample2'
import MemoryLeakExample from './components/MemoryLeakExample'
import UseMemoExample from './components/UseMemoExample'
import UseCallbackExample from './components/UseCallbackExample'
import CustomHookExample1 from './components/CustomHookExample1'
import CustomHookExample2 from './components/CustomHookExample2'
import UseContextExampleParent from './components/UseContextExampleParent'
import { CustomContextProvider } from './context/CustomContext'
import UseReducerExample from './components/UseReducerExample'
import HighOrderComponentExample from './components/HighOrderComponentExample'
import ReduxCounterExample from './components/ReduxCounterExample'

function App() {
  return (
    <CustomContextProvider>
      <Router>
        <main className='container mt-5'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='useref-example-1' element={<UseRefExample1 />} />
            <Route path='useref-example-2' element={<UseRefExample2 />} />
            <Route path='memory-leak-example' element={<MemoryLeakExample />} />
            <Route path='usememo-example' element={<UseMemoExample />} />
            <Route
              path='usecallback-example'
              element={<UseCallbackExample />}
            />
            <Route
              path='custom-hook-example-1'
              element={<CustomHookExample1 />}
            />
            <Route
              path='custom-hook-example-2'
              element={<CustomHookExample2 />}
            />
            <Route
              path='usecontext-example'
              element={<UseContextExampleParent />}
            />
            <Route path='usereducer-example' element={<UseReducerExample />} />
            <Route path='hoc-example' element={<HighOrderComponentExample />} />
            <Route
              path='redux-counter-example'
              element={<ReduxCounterExample />}
            />
          </Routes>
        </main>
      </Router>
    </CustomContextProvider>
  )
}

export default App
