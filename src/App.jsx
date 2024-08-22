import {
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider
} 
from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, {jobLoader} from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';


const App = () => {

  // Add Job
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'content-type': '/application/json',
      },
      body: JSON.stringify(newJob),
    });

    return;
  };

  // Delete Job
  const deleteJob = async (id) => {
    console.log('delete', id);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
      </Route>
    )
  );

  return <RouterProvider router={router}/>
};

export default App;