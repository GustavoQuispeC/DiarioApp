import { Route, Routes, Navigate } from "react-router-dom"
import { DiarioPage } from "../page/DiarioPage"


export const DiarioRoutes = () => {
  return (
    <Routes>
        <Route path="diario" element={<DiarioPage />} />
        <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
  )
}
