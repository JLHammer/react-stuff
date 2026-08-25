import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { EducationPage } from "../pages/EducationPage";
import { CustomGoalPage } from "../pages/CustomGoalPage";
import { FaqPage } from "../pages/FaqPage";
import { ContactPage } from "../pages/ContactPage";
import { NoPage } from "../pages/NoPage";
import { GoalDetailsPage } from "../pages/GoalDetailsPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/maal/:id" element={<GoalDetailsPage />} />
      <Route path="/undervisning" element={<EducationPage />} />
      <Route path="/byg-dit-eget-maal" element={<CustomGoalPage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/kontakt" element={<ContactPage />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};
