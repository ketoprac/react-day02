import { useFormik } from "formik";
import CountryApi from "../../api/CountryApi";
import Button from "../Button";
import Input from "../Input";

const CountryFormFormik = () => {
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

export default CountryFormFormik;
