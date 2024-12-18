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
import EditJobPage from './pages/EditJobPage';


const App = () => {

  // Add Job
  const addJob = async (newJob) => {
    const res = await fetch('https://jobslisting-api.devncreatives.com/api/jobs', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });

    return;
  };

  // Delete Job
  const deleteJob = async (id) => {
    const res = await fetch(`https://jobslisting-api.devncreatives.com/api/jobs${id}`, {
      method: 'DELETE',
    });

    return;
  };

  // Update Job
  const updateJob = async (updatedJob) => {
    const res= await fetch(`https://jobslisting-api.devncreatives.com/api/jobs/${updatedJob._id.toString()}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedJob),
    });

    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
      </Route>
    )
  );

  return <RouterProvider router={router}/>
};

export default App;