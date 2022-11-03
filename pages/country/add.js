import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { AddCountryRequest } from "../../src/redux-saga/Action/CountryAction";
import * as Yup from "yup";
import TextField from "../../src/components/TextField";
import Button from "../../src/components/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";

const AddCountry = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    countryId: Yup.string("Enter Country Id").required(
      "Country Id is required"
    ),
    countryName: Yup.string("Enter Country Name").required(
      "Country Name is required"
    ),
  });

  const formik = useFormik({
    initialValues: {
      countryId: "",
      countryName: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      let payload = {
        countryId: values.countryId,
        countryName: values.countryName,
      };

      dispatch(AddCountryRequest(payload));
      toast('Country added successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      router.push("/country");
    },
  });

  return (
    <div className="h-screen flex flex-col items-center mt-24">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add Country</h2>
      <form
        onSubmit={formik.handleSubmit}
        className="mb-6 flex flex-col gap-y-2 w-4/12"
      >
        <TextField
          label="Country Id"
          type="text"
          name="countryId"
          onChange={formik.handleChange}
          value={formik.values.countryId}
        />
        {formik.touched.countryId && formik.errors.countryId ? (
          <span className="font-bold text-xs text-red-600">
            {formik.errors.countryId}
          </span>
        ) : null}
        <TextField
          label="Country Name"
          type="text"
          name="countryName"
          onChange={formik.handleChange}
          value={formik.values.countryName}
        />
        {formik.touched.countryName && formik.errors.countryName ? (
          <span className="font-bold text-xs text-red-600">
            {formik.errors.countryName}
          </span>
        ) : null}
        <Button type="submit">Add</Button>
        <Link href="/country">
          <Button>Cancel</Button>
        </Link>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </div>
  );
};

export default AddCountry;
