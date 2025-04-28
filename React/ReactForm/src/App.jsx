import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <>
      <form
        onSubmit={handleSubmit(async (data) => {
          await new Promise((resolve) => setTimeout(resolve, 5000)); // 5 sec delay
          console.log(data);
        })}
      >
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            {...register("firstName", {
              required: "First name is required",
              maxLength: { value: 4, message: "Max length is 4 characters" },
            })}
          />
          {errors.firstName && (
            <p style={{ color: "yellow" }}>{errors.firstName.message}</p>
          )}
        </div>
        <br />
        <div>
          <label htmlFor="middleName">Middle Name:</label>
          <input {...register("middleName")} />
        </div>
        <br />
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input {...register("lastName")} />
        </div>
        <br />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Here!!"}
        </button>
      </form>
    </>
  );
}

export default App;
