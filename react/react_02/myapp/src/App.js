import logo from './logo.svg';
import './App.css';

function getCelebraciones() {
  const celebraciones = [
    {
      "fecha": "2 - abril - 2023",
      "titulo": "Domingo de ramos",
      "imagen": "https://www.milenio.com/uploads/media/2022/04/08/domingo-de-ramos-significado-y.jpg",
      "descripcion": "​También llamado Domingo de Pasión o Palmas, este día se escenifica la entrada triunfal de Jesucristo a Jerusalén, montado en un borricón, mientras la multitud le daba la bienvenida con hojas de palma en las mano"
    },
    {
      "fecha": "6 - abril - 2023",
      "titulo": "Jueves Santo",
      "imagen": "https://img.freepik.com/vector-premium/ilustracion-vector-jueves-santo_80983-264.jpg",
      "descripcion": "Es el día en que Jesús se reunió con sus discípulos, que eran sus amigos más cercanos, y celebró con ellos la Última Cena como gesto de despedida."
    },
    {
      "fecha": "6 - abril - 2023",
      "titulo": "Jueves Santo",
      "imagen": "https://img.freepik.com/vector-premium/ilustracion-vector-jueves-santo_80983-264.jpg",
      "descripcion": "Es el día en que Jesús se reunió con sus discípulos, que eran sus amigos más cercanos, y celebró con ellos la Última Cena como gesto de despedida."
    },
    {
      "fecha": "6 - abril - 2023",
      "titulo": "Jueves Santo",
      "imagen": "https://img.freepik.com/vector-premium/ilustracion-vector-jueves-santo_80983-264.jpg",
      "descripcion": "Es el día en que Jesús se reunió con sus discípulos, que eran sus amigos más cercanos, y celebró con ellos la Última Cena como gesto de despedida."
    },
    {
      "fecha": "6 - abril - 2023",
      "titulo": "Jueves Santo",
      "imagen": "https://img.freepik.com/vector-premium/ilustracion-vector-jueves-santo_80983-264.jpg",
      "descripcion": "Es el día en que Jesús se reunió con sus discípulos, que eran sus amigos más cercanos, y celebró con ellos la Última Cena como gesto de despedida."
    },
  ]
  const renderCelebracion = celebraciones.map(celebracion => {
    return (
      <div>
        <h1 className="titulo">
          {celebracion.titulo}
        </h1>
        <h2 className="subtitulo">
          {celebracion.fecha}
        </h2>
        <p className="texto">
          {celebracion.descripcion}
        </p>
        <img className="imagen" src={celebracion.imagen} />
      </div>
    )
  } )
  return renderCelebracion
}

function App() {
  return (
    <div className="App">
      { getCelebraciones() }
    </div>
  );
}

export default App;


/*
En ReactJS, un componente es una pieza de código reutilizable que encapsula la funcionalidad y 
la interfaz de usuario de una parte de una aplicación web. Los componentes pueden ser simples o 
complejos, y se pueden combinar para formar la estructura de una aplicación web.

Cada componente de ReactJS es una clase o una función que recibe ciertas propiedades (props) 
como entrada y devuelve un elemento de React (React element) que describe lo que se debe 
renderizar en la interfaz de usuario. Los elementos de React son objetos que describen 
lo que se debe mostrar en la pantalla, incluyendo información sobre los atributos, 
los estilos y los hijos de un elemento.
*/