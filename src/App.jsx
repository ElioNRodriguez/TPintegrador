import './App.css';
import TaskListContainer from './components/TaskListContainerComponent/TaskListContainer'
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
      <TaskListContainer></TaskListContainer>
      <Toaster position="top-right"></Toaster>
    </>
  )
}

export default App
