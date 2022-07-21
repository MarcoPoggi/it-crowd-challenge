import { Header } from "../components/Header/Header";
import { Products } from "../components/Products/Products";
import { ResultsProvider } from "../contexts/ResultsContext";

export function Home() {
  return (
    <div>
      <ResultsProvider>
        <Header />
        <Products/>
      </ResultsProvider>
    </div>
  );
}
