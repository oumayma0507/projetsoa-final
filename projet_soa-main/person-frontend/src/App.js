import React, { useEffect, useState } from "react";

const API_URL = "http://localhost:8080/Project_person/api/persons";

function App() {
  const [persons, setPersons] = useState([]);
  const [form, setForm] = useState({
    id: null,
    name: "",
    email: "",
    age: "",
    phone: ""
  });

  /* ================= LOAD ================= */
  const loadPersons = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setPersons(data));
  };

  useEffect(() => {
    loadPersons();
  }, []);

  /* ================= FORM ================= */
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    const method = form.id ? "PUT" : "POST";
    const url = form.id ? `${API_URL}/${form.id}` : API_URL;



    const payload = {
      name: form.name,
      email: form.email,
      age: form.age ? parseInt(form.age) : null,
      phone: form.phone
    };

    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })
      .then(() => {
        resetForm();
        loadPersons();
      });
  };

  const editPerson = p => {
    setForm({
      id: p.id,
      name: p.name,
      email: p.email,
      age: p.age ?? "",
      phone: p.phone ?? ""
    });
  };

  const deletePerson = id => {
    if (!window.confirm("Supprimer cette personne ?")) return;
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
      .then(() => loadPersons());
  };

  const resetForm = () => {
    setForm({ id: null, name: "", email: "", age: "", phone: "" });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Gestion des Personnes</h2>

      {/* ===== FORM ===== */}
      <div className="card shadow p-4 mb-4">
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-3">
            <input className="form-control" name="name"
              placeholder="Nom" value={form.name}
              onChange={handleChange} required />
          </div>

          <div className="col-md-3">
            <input className="form-control" name="email"
              placeholder="Email" value={form.email}
              onChange={handleChange} required />
          </div>

          <div className="col-md-2">
            <input className="form-control" type="number"
              name="age" placeholder="Âge"
              value={form.age} onChange={handleChange} />
          </div>

          <div className="col-md-2">
            <input className="form-control"
              name="phone" placeholder="Téléphone"
              value={form.phone} onChange={handleChange} />
          </div>

          <div className="col-md-2 d-grid">
            <button className="btn btn-primary">
              {form.id ? "Modifier" : "Ajouter"}
            </button>
          </div>

          <div className="col-md-2 d-grid">
            <button type="button" className="btn btn-secondary"
              onClick={resetForm}>
              Annuler
            </button>
          </div>
        </form>
      </div>

      {/* ===== TABLE ===== */}
      <table className="table table-striped table-bordered shadow">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Âge</th>
            <th>Téléphone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {persons.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.email}</td>
              <td>{p.age ?? "-"}</td>
              <td>{p.phone ?? "-"}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2"
                  onClick={() => editPerson(p)}>
                  Modifier
                </button>
                <button className="btn btn-danger btn-sm"
                  onClick={() => deletePerson(p.id)}>
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
