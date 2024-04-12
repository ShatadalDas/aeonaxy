import "./App.css";
import { Sidebar, Header, Footer, MainContent, SearchBox } from "./components";

function App() {
  return (
    <>
      <Header />

      <section className="wrapper">
        <h2>Enter your question</h2>
        <SearchBox />

        <div className="contents-wrapper">
          <Sidebar />
          <MainContent />
        </div>
        <Footer />
      </section>
    </>
  );
}
export default App;
