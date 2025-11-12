import CardComponent from "./components/card/card.component";

function App() {
  return (
    <div className="">
      <h1>Don</h1>
      <CardComponent
        title="Restless Dream"
        description="Description"
        imgUrl="https://images.unsplash.com/photo-1487621167305-5d248087c724?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3132"
      />
      <CardComponent
        title="Saab 9-3 SportCombi"
        description="Description"
        imgUrl="https://images.unsplash.com/photo-1500252185289-40ca85eb23a7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2071"
      />
      <CardComponent
        title="My Car"
        description="(Trust)"
        imgUrl="https://images.unsplash.com/photo-1605907153179-8b364644a241?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3130"
      />
    </div>
  );
}

export default App;
