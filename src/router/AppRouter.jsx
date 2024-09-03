
import { Routes, Route } from "react-router-dom";

import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { DiarioRoutes } from "../diario/routes/DiarioRoutes";


export const AppRouter = () => {
  return (
  
    <Routes>
        <Route path="/auth/*" element={<AuthRoutes />} />

        <Route path="/*" element={<DiarioRoutes />} />


      
    </Routes>


  );
};
