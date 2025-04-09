export default function GridDemo() {
    return (
      <div className="p-8 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-bold mb-6 text-center">Responsive Grid</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold mb-2">Item {i + 1}</h3>
              <p className="text-gray-600">Contenido del elemento {i + 1}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
  