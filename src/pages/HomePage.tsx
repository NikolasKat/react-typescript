import { Navigate } from "react-router-dom";

export default function HomePage() {
   return (
      <section className="p-9">
         <Navigate to="/login" replace />
      </section>
   );
}
