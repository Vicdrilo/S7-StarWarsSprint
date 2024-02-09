import { Header } from "../component/Header";
import { MainContent } from "../component/MainContent";

export function Home() {
  return (
    <div>
      <Header />

      <MainContent type="home" />
    </div>
  );
}
