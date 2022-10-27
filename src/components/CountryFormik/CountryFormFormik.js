import { useFormik } from "formik";
import CountryApi from "../../api/CountryApi";
import Button from "../Button";
import Input from "../Input";
import * as Yup from "yup";

const CountryFormFormik = () => {
  const validationSchema = Yup.object().shape({
    countryId: Yup.string("Enter Country Id").required("Country Id is required"),
    countryName: Yup.string("Enter Country Name").required("Country Name is required")
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

      await CountryApi.addCountry(payload).then(() => {
        window.alert("Data successfully inserted!");
        window.location.reload();
      });
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
          {formik.touched.countryId && formik.errors.countryId ? <span className="font-bold text-xs text-red-600">{formik.errors.countryId}</span> : null}
        <Input
          label="Country Name"
          type="text"
          name="countryName"
          onChange={formik.handleChange}
          value={formik.values.countryName}
        />
          {formik.touched.countryName && formik.errors.countryName ? <span className="font-bold text-xs text-red-600">{formik.errors.countryName}</span> : null}
        <Button type="submit">Add</Button>
      </form>
    </>
  );
};

export default CountryFormFormik;
