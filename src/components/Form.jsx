import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    comment: "",
  });
  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);

  const validate = () => {
    let validationErrors = {};

    if (!form.name.trim()) {
      validationErrors.name = "Name is required.";
    } else if (form.name.length < 2) {
      validationErrors.name = "Name must be at least 2 characters.";
    }

    if (!form.surname.trim()) {
      validationErrors.surname = "Surname is required.";
    } else if (form.surname.length < 2) {
      validationErrors.surname = "Surname must be at least 2 characters.";
    }

    if (!form.phone.trim()) {
      validationErrors.phone = "Phone number is required.";
    } else if (!/^\d+$/.test(form.phone)) {
      validationErrors.phone = "Phone must contain only digits.";
    } else if (form.phone.length < 10 || form.phone.length > 15) {
      validationErrors.phone = "Phone must be between 10 and 15 digits.";
    }

    if (!form.email.trim()) {
      validationErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      validationErrors.email = "Email is not valid.";
    }

    if (!form.comment.trim()) {
      validationErrors.comment = "Comment is required.";
    } else if (form.comment.length < 10) {
      validationErrors.comment = "Comment must be at least 10 characters.";
    }

    return validationErrors;
  };

  const handleChange = (e) => {
    setForm((p) => ({
      ...p,
      [e.target.name]: e.target.value,
    }));
    setErrors((p) => ({
      ...p,
      [e.target.name]: "",
    }));
    setSubmit(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log(form);
    setSubmit(true);
    setForm({
      name: "",
      surname: "",
      phone: "",
      email: "",
      comment: "",
    });
    setErrors({});
  };

  return (
    <div className="form-container">
      <form action="" onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          type="text"
          name="surname"
          value={form.surname}
          onChange={handleChange}
          placeholder="Surname"
        />
        {errors.surname && <p className="error">{errors.surname}</p>}

        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone"
        />
        {errors.phone && <p className="error">{errors.phone}</p>}

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="text"
          name="comment"
          value={form.comment}
          onChange={handleChange}
          placeholder="Comment"
        />
        {errors.comment && <p className="error">{errors.comment}</p>}

        <button type="submit">Submit</button>
      </form>
      {submit ? (
        <p className="success">You have successfully registered</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Form;
