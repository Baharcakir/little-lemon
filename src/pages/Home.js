import React from 'react';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">

      {/* About Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-yellow-700 mb-4">About Us</h2>
        <p className="text-gray-700 max-w-3xl leading-relaxed">
          At Little Lemon, we bring authentic Mediterranean cuisine to your table with a cozy atmosphere and friendly service. Whether you’re here for a family dinner or a special occasion, our chefs create dishes that delight the senses.
        </p>
      </section>

      {/* Featured Dishes Section */}
      <section>
        <h2 className="text-3xl font-semibold text-yellow-700 mb-8">Featured Dishes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <DishCard
            image="./grilled_chicken.jpeg"
            name="Grilled Chicken Souvlaki"
            description="Juicy chicken marinated in herbs, grilled to perfection."
            price="$15"
          />
          <DishCard
            image="./falafel_platter.jpeg"
            name="Falafel Platter"
            description="Crispy falafel served with fresh salad and tahini sauce."
            price="$12"
          />
          <DishCard
            image="./mediterranean_salad.jpeg"
            name="Mediterranean Salad"
            description="Fresh vegetables, olives, and feta cheese with lemon dressing."
            price="$10"
          />
        </div>
      </section>
    </div>
  );
}

function DishCard({ image, name, description, price }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-xl text-yellow-700 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="font-bold text-yellow-600">{price}</p>
      </div>
    </div>
  );
}