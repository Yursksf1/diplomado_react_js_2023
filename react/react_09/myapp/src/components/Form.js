import React, { useState } from 'react';

function MyForm() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    message: ''
  });

  const [listData, setListData] = useState([{
    name: 'Yurley',
    date: '2023-01-01',
    message: 'Hello'

}]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí se puede enviar la información del formulario a un servidor en este caso lo guardaremos en un state que vamos a listar
    console.log('formData', formData)
    console.log('listData', listData)



    setListData([...listData, formData]);

    setFormData({
        name: '',
        date: '',
        message: ''

    });
  }

  const rendeList = lista => {
    return lista.map(elemento => {
        return (
            <div>
                <p>name: {elemento.name}</p>
                <p>date: {elemento.date}</p>
                <p>message: {elemento.message}</p>
                <br/>
            </div>
        )
    })
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>
            Nombre:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br></br>
        <label>
            Fecha:
            <input type="date" name="date" value={formData.date} onChange={handleChange} />
        </label>
        <br></br>
        <label>
            Mensaje:
            <textarea name="message" value={formData.message} onChange={handleChange} />
        </label>
        <br></br>

        <button type="submit">Enviar</button>
        </form>
        {listData ? rendeList(listData): null}
    </div>
  );
}

export default MyForm;
