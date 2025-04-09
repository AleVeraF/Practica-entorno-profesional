import { useState } from 'react';

function ProductCard({ title, description, image }) {
  const [likes, setLikes] = useState(0);
  const [comment, setComment] = useState(''); // Estado para manejar el comentario
  const [comments, setComments] = useState([]); // Estado para almacenar los comentarios

  const handleAddComment = () => {
    if (comment.trim()) {
      setComments([...comments, comment]); // Agregar el nuevo comentario al array
      setComment(''); // Limpiar el campo de entrada después de agregar el comentario
    }
  };

  return (
    <div className="tarjeta-producto bg-white p-4 rounded-lg shadow-lg">
      <img src={image} alt={title} className="imagen-producto w-full h-64 object-cover rounded-md mb-4" />
      <h3 className="titulo-producto text-xl font-semibold mb-2">{title}</h3>
      <p className="descripcion-producto text-gray-600 mb-4">{description}</p>
      
      <button onClick={() => setLikes(likes + 1)} className="mi-boton bg-blue-500 p-2 rounded-lg hover:bg-blue-600">
        ❤️ Me gusta ({likes})
      </button>

      {/* Sección de comentarios */}
      <div className="comentarios mt-4">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-2 border rounded-lg mb-2"
          placeholder="Escribe un comentario..."
        ></textarea>
        <button 
          onClick={handleAddComment}
          className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600"
        >
          Añadir Comentario
        </button>
      </div>

      {/* Mostrar los comentarios */}
      <div className="comentarios-lista mt-4">
        <h4 className="font-semibold text-lg">Comentarios:</h4>
        <ul className="list-disc pl-5">
          {comments.map((comment, index) => (
            <li key={index} className="text-gray-700">{comment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductCard;
