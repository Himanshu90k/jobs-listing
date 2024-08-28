import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddJobPage = ( { addJobSubmit } ) => {

    const initialValues = {
      title: '',
      type: 'Full-Time',
      description: '',
      salary: 'Under 1L',
      location: '',
      companyName: '',
      companyDescription: '',
      contactEmail: '',
      contactPhone: '',
      
    };

    const navigate = useNavigate();

    const [ formData, setFormData ] = useState(initialValues);

    const handleChange = (fieldName, newValue) => {
      setFormData((prevState) => ({
        ...prevState,
        [fieldName]: newValue
      }))
    }

    const submitForm = (e) => {
      e.preventDefault();
      
      const newJob = {
        title : formData.title,
        type : formData.type,
        location: formData.location,
        description: formData.description,
        salary : formData.salary,
        company: {
          name: formData.companyName,
          description: formData.companyDescription,
          contactEmail: formData.contactEmail,
          contactPhone: formData.contactPhone
        }
      }

      addJobSubmit(newJob);

      toast.success('Job Added Successfully');

      return navigate('/jobs');

    }

    return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div
          className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Add Job</h2>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                >Job Type</label
              >
              <select
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3"
                required
                value={formData.type}
                onChange={e => handleChange('type', e.target.value)}
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Job Listing Name</label
              >
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Beautiful Apartment In Miami"
                required
                value={formData.title}
                onChange={e => handleChange('title', e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
                >Description</label
              >
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add any job duties, expectations, requirements, etc"
                value={formData.description}
                onChange={e => handleChange('description', e.target.value)}
              >
              </textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                >Salary</label
              >
              <select
                id="salary"
                name="salary"
                className="border rounded w-full py-2 px-3"
                required
                value={formData.salary}
                onChange={e => handleChange('salary', e.target.value)}
              >
                <option value="Under 1L">Under 1L</option>
                <option value="1L - 2L">1L - 2L</option>
                <option value="2L - 3L">2L - 3L</option>
                <option value="3L - 4L">3L - 4L</option>
                <option value="4L - 5L">4L - 5L</option>
                <option value="5L - 6L">5L - 6L</option>
                <option value="6L - 7L">6L - 7L</option>
                <option value="7L - 8L">7L - 8L</option>
                <option value="8L - 9L">8L - 9L</option>
                <option value="10L - 11L">10L - 11L</option>
                <option value="Over 11L">Over 11L</option>
              </select>
            </div>

            <div className='mb-4'>
              <label className='blocK text-gray-700 font-bold mb-2'>
                Location
              </label>
              <input
                type='text'
                id='location'
                name='location'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='Company Location'
                required
                value={formData.location}
                onChange={e => handleChange('location', e.target.value)}           
              />
            </div>

            <h3 className="text-2xl mb-5">Company Info</h3>

            <div className="mb-4">
              <label htmlFor="company" className="block text-gray-700 font-bold mb-2"
                >Company Name</label
              >
              <input
                type="text"
                id="company"
                name="company"
                className="border rounded w-full py-2 px-3"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={e => handleChange('companyName', e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="company_description"
                className="block text-gray-700 font-bold mb-2"
                >Company Description</label
              >
              <textarea
                id="company_description"
                name="company_description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="What does your company do?"
                value={formData.companyDescription}
                onChange={e => handleChange('companyDescription', e.target.value)}
              >
              </textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact_email"
                className="block text-gray-700 font-bold mb-2"
                >Contact Email</label
              >
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                className="border rounded w-full py-2 px-3"
                placeholder="Email address for applicants"
                required
                value={formData.contactEmail}
                onChange={e => handleChange('contactEmail', e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contact_phone"
                className="block text-gray-700 font-bold mb-2"
                >Contact Phone</label
              >
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                className="border rounded w-full py-2 px-3"
                placeholder="Optional phone for applicants"
                value={formData.contactPhone}
                onChange={e => handleChange('contactPhone', e.target.value)}
              />
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    );
};

export default AddJobPage;