import { Navigate } from "react-router-dom";
import CardList from "../components/CardList";

export default function HomePage() {
   return (
      <section className="p-9">
         <Navigate to="/login" replace />
         <CardList />
      </section>
   );
}
