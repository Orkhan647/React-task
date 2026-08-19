import Card from "./Card";
import avatar from "../assets/avatar.jpg";

function App() {
  return (
    <section className="min-h-[calc(100vh-144px)] bg-gray-100 p-8 flex items-center justify-center">
      <Card
        name="Orxan Kərimov"
        country="Azerbaijan"
        city="Baku"
        phone="+994 55 278 04 34"
        email="OrkhanKarimoff@outlook.com"
        photo={avatar}
      />
    </section>
  );
}

export default App;