import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { AddCountryRequest } from "../../redux-saga/Action/CountryAction";
import * as Yup from "yup";
import Button from "../Button";
import Input from "../Input";

const CountryFormReduxSaga = () => {
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    countryId: Yup.string("Enter Country Id").required("Country Id is required"),
    countryName: Yup.string("Enter Country Name").required("Country Name is required")
  })

  const formik = useFormik({
    initialValues: {
      countryId: "",
      countryName: "",
    },
    onSubmit: async (values) => {
      let payload = {
        countryId: values.countryId,
        countryName: values.countryName,
      };

      dispatch(AddCountryRequest(payload));      
        window.alert("Data successfully inserted!");
        window.location.reload();
    },
  });

  return (
    <>
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add Country</h2>
      <form
        onSubmit={formik.handleSubmit}
        className="mb-6 flex flex-col gap-y-2 w-4/12"
      >
        <Input
          label="Country Id"
          type="text"
          name="countryId"
          onChange={formik.handleChange}
          value={formik.values.countryId}
        />
        <Input
          label="Country Name"
          type="text"
          name="countryName"
          onChange={formik.handleChange}
          value={formik.values.countryName}
        />
        <Button type="submit">Add</Button>
      </form>
    </>
  );
};

export default CountryFormReduxSaga;
