import { Header } from "../component/Header";
import { MainContent } from "../component/MainContent";

export function ShipsList() {
  return (
    <div>
      <Header />
      <MainContent type="list" />
    </div>
  );
}
