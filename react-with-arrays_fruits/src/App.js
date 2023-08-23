import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 2,
      name: "🍓 strawberry",
      color: "red",
    },
    {
      id: 3,
      name: "🫐 blueberry",
      color: "blue",
    },
    {
      id: 4,
      name: "🍉 watermelon",
      color: "red",
    },
    {
      id: 5,
      name: "🍑 peach",
      color: "peach",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => {
        return <Card key={fruit.id} name={fruit.name} />;
      })}
    </div>
  );
}
