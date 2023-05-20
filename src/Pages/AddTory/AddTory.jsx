import React from "react";
import { useForm } from "react-hook-form";

const AddTory = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:8000/postTory", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });

    console.log(data);
  };

  return (
    <div className="text-center bg-zinc-500 ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-4 p-2"
          defaultValue="picture URL"
          {...register("picture_URL", { required: true })}
        />

        <input
          className="mb-4 p-2 mx-3"
          defaultValue="name"
          {...register("name", { required: true })}
        />

        <input
          className="mb-4 p-2"
          defaultValue="Email"
          {...register("email", { required: true })}
        />
        <br />
        <input
          className="mb-4 p-2"
          defaultValue="sub Category"
          {...register("sub_Category", { required: true })}
        />

        <input
          className="mb-4 p-2 mx-3"
          defaultValue="price"
          {...register("price", { required: true })}
        />

        <input
          className="mb-4 p-2"
          defaultValue="Rating"
          {...register("rating", { required: true })}
        />
        <br />
        <input
          className="mb-4 p-2 mx-4"
          defaultValue="Quantity"
          {...register("quantity", { required: true })}
        />

        <input
          className="mb-4 p-2"
          defaultValue="Description"
          {...register("description", { required: true })}
        />
        <br />
        <input
          className="mb-4 p-2"
          {...register("exampleRequired", { required: true })}
        />
        <br />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" value="post tory" className="btn" />
      </form>
    </div>
  );
};

export default AddTory;
