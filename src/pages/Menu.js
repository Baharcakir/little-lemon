import React from 'react';

const menuData = {
  Appetizers: [
    {
      name: 'Hummus',
      description: 'Creamy chickpea dip with olive oil and pita bread.',
      price: '$6',
      image: './hummus.jpeg',
    },
    {
      name: 'Stuffed Grape Leaves',
      description: 'Rice and herbs wrapped in grape leaves.',
      price: '$7',
      image: './stuffed_leaves.jpeg',
    },
  ],
  Mains: [
    {
      name: 'Lamb Kofta',
      description: 'Spiced ground lamb meatballs with tahini sauce.',
      price: '$16',
      image: './lamb_kofte.jpeg',
    },
  ],
  Desserts: [
    {
      name: 'Baklava',
      description: 'Sweet layers of filo pastry with nuts and honey.',
      price: '$8',
      image: './baklava.png',
    },
    {
      name: 'Knafeh',
      description: 'Cheese pastry soaked in sweet syrup.',
      price: '$9',
      image: './kunefe.jpeg',
    },
  ],
  "Turkish Delights": [
    {
      name: 'Kebap',
      description: 'Grilled meat skewers seasoned with traditional spices.',
      price: '$18',
      image: './kebap.jpeg',
    },
    {
      name: 'Meze Platter',
      description: 'Selection of small Turkish appetizers to share.',
      price: '$12',
      image: './mezze_platter.jpeg',
    },
    {
      name: 'Lahmacun',
      description: 'Thin crispy flatbread topped with minced meat and herbs.',
      price: '$10',
      image: './lahmacun.jpeg',
    },
    {
      name: 'Turkish Tea',
      description: 'Traditional strong black tea served in tulip-shaped glasses.',
      price: '$3',
      image: './tea.jpeg',
    },
  ],
};

export default function Menu() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-yellow-700 mb-10 text-center">Our Menu</h1>

      {Object.entries(menuData).map(([category, dishes]) => (
        <section key={category} className="mb-12">
          <h2 className="text-3xl font-semibold text-yellow-600 mb-6">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dishes.map(({ name, description, price, image }) => (
              <DishCard
                key={name}
                name={name}
                description={description}
                price={price}
                image={image}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function DishCard({ image, name, description, price }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-xl text-yellow-700 mb-2">{name}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <p className="font-bold text-yellow-600">{price}</p>
      </div>
    </div>
  );
}
