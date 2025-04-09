import { useState } from 'react';
import ProductCard from './components/ProductCard';
import SearchBar from './components/SearchBar';
import './styles/index.css';

const productos = [
  {
    id: 1,
    title: 'Ana',
    description: 'Camino con arboles',
    image: 'https://picsum.photos/100',
  },
  {
    id: 2,
    title: 'Luis',
    description: 'Perro negro con ojos oscuros',
    image: 'https://picsum.photos/200',
  },
  {
    id: 3,
    title: 'Alex',
    description: 'Taza para desarrolladores frontend.',
    image: 'https://picsum.photos/300',
  },
  {
    id: 4,
    title: 'María',
    description: 'Camino con arboles',
    image: 'https://picsum.photos/400',
  },
  {
    id: 5,
    title: 'Juan',
    description: 'Perro negro con ojos oscuros',
    image: 'https://picsum.photos/500',
  },
  {
    id: 6,
    title: 'Claudia',
    description: 'Taza para desarrolladores frontend.',
    image: 'https://picsum.photos/600',
  },
];

function App() {
  const [search, setSearch] = useState('');

  const productosFiltrados = productos.filter((producto) =>
    producto.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-blue-200 p-6">
      <h1 className="text-5xl md:text-7xl font-extrabold text-black dark:text-white text-center tracking-tight">
        Instagram
      </h1>

      <SearchBar onSearch={setSearch} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productosFiltrados.map((p) => (
          <ProductCard
            key={p.id}
            title={p.title}
            description={p.description}
            image={p.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
