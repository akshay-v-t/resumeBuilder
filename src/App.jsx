import { AppContextProvider } from './context/AppContext';  // Import your context provider
import PersonalInformation from './components/PersonalINformation';
import ResumePreview from './components/ResumePreview';

function App() {
  return (
    <AppContextProvider>  {/* Wrap the whole app with the context provider */}
      <div className='p-10 border border-gray-400 m-2 rounded-l'>
        <h1 className="text-3xl font-bold  text-blue-500/80 text-center">
          Resume Builder
        </h1>

        <div className='grid-cols-2 grid gap-2'>

        <PersonalInformation />
        <ResumePreview/>

        </div>
       
      </div>
    </AppContextProvider>
  );
}

export default App;
