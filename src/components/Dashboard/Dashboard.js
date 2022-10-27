import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="h-screen m-16">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard | Country CRUD</title>
      </Helmet>
      <h1 className="font-bold mb-5 text-3xl">Dashboard</h1>
      <div className="flex items-center justify-between">
        <Link to="/country">
          <div className="flex flex-col w-96 h-48 p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
            <h5 className="mb-2 pb-2 text-2xl font-bold tracking-tight text-gray-900 border-b">
              Country CRUD
            </h5>
            <p className="font-normal text-gray-700 ">
              Built using React and Axios.
            </p>
          </div>
        </Link>
        <Link to="/country-formik">
          <div className="flex flex-col w-96 h-48 p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 border-b pb-2">
              Country CRUD Formik
            </h5>
            <p className="font-normal text-gray-700 ">
              Built using React, Axios, and Formik for handling form.
            </p>
          </div>
        </Link>
        <Link to="/country-redux">
          <div className="flex flex-col w-96 h-48 p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 border-b pb-2">
              Country CRUD Formik and Redux
            </h5>
            <p className="font-normal text-gray-700 ">
              Built using React, Axios, Formik for form handling, and Redux Saga
              for state management.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
