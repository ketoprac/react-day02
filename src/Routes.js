import React from 'react'
import { useRoutes } from 'react-router-dom'
import CountryView from './components/Country/CountryView'
import CountryViewFormik from './components/CountryFormik/CountryViewFormik'
import CountryViewReduxSaga from './components/CountryReduxSaga/CountryViewReduxSaga'
import Dashboard from './components/Dashboard/Dashboard'

const Routes = () => {
  return useRoutes([
    {
      path: '/',
      element: <Dashboard/>,
      children: [
        {path: 'country', element: <CountryView />},
        {path: 'country-formik', element: <CountryViewFormik />},
        {path: 'country-redux', element: <CountryViewReduxSaga />},
      ]
    }
  ]
  )
}

export default Routes