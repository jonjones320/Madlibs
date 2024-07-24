import React, { useState } from "react";

const MadlibForm = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    adjective: '',
    noun: '',
    verb: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="adjective">Adjective</label>
      <input
        id="adjective"
        type="text"
        name="adjective"
        placeholder="Pick an adjective!"
        value={formData.adjective}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="noun">Noun</label>
      <input
        id="noun1"
        type="text"
        name="noun"
        placeholder="Pick a noun!"
        value={formData.noun}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="verb">Verb</label>
      <input
        id="verb"
        type="text"
        name="verb"
        placeholder="Pick a verb!"
        value={formData.verb}
        onChange={handleChange}
      />
      <br />
      <button>Go!</button>
    </form>
  );
}

export default MadlibForm;


