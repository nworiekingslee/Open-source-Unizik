import {useState} from 'react'
import MembersContainer from './components/MembersContainer';
import data from './utils/members';
import './App.css';
import SideBar from './components/SideBar';


function App() {
  const [members, setMembers] = useState(data)
  

  return (
      <>
        <div className='bg-dark text-brand p-4 text-center'>
          <h1 className='font-bold text-3xl'>Open Source Club </h1>
        </div>
        <div className="App container mx-auto md:flex md:flex-row-reverse block text-text">
          <SideBar />
          <MembersContainer members={members}/>
        </div>
      </>
);
}

export default App;
