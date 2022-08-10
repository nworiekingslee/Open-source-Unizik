import MemberCard from './components/MemberCard';
import './App.css';
import members from './utils/members';


function App() {
  console.log(members)
  

  return (
    <div className="App container mx-auto h-full md:flex md:flex-row-reverse block">
      
      <div className='md:w-96 bg-dark text-brand p-4 md:h-full w-full h-auto'>Hellos</div>
      {/* <div className='w-full flex flex-wrap justify-start items-start bg-red-50'> */}
      <div className='p-4 w-full grid grid-rows-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-red-5'>
        {members.map(member => <MemberCard data={member} key={member.name}/> )}
      </div>
    </div>
);
}

export default App;
