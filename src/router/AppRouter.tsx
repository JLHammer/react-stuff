import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { GoalDetailsPage } from "../pages/GoalDetailsPage";
import { ThemePage } from "../pages/ThemePage";
import { ThemeGoalList } from "../components/organisms/ThemeGoalList/ThemeGoalList";
import { ThemeGoalDetail } from "../components/organisms/ThemeGoalDetail/ThemeGoalDetail";
import { EducationPage } from "../pages/EducationPage";
import { CustomGoalPage } from "../pages/CustomGoalPage";
import { FaqPage } from "../pages/FaqPage";
import { ContactPage } from "../pages/ContactPage";
import { LoginPage } from "../pages/LoginPage";
import { ErrorPage } from "../pages/ErrorPage";
import { ThemePageHint } from "../pages/ThemePage.styled";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/maal/:id" element={<GoalDetailsPage />} />
      <Route path="/temaer" element={<ThemePage />}>
        <Route
          index
          element={
            <ThemePageHint>
              Vælg et tema i menuen for at se de verdensmål, der hører til.
            </ThemePageHint>
          }
        />
        <Route path=":themeSlug" element={<ThemeGoalList />} />
        <Route path=":themeSlug/:goalId" element={<ThemeGoalDetail />} />
      </Route>
      <Route path="/undervisning" element={<EducationPage />} />
      <Route path="/byg-dit-eget-maal" element={<CustomGoalPage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/kontakt" element={<ContactPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
