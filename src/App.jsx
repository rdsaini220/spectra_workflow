import { Route, Routes } from "react-router-dom";

import WorkflowPage from "./pages/WorkflowPage";
import StepOnePage from "./pages/StepOnePage";
import StepTwoPage from "./pages/StepTwoPage";
import StepThreePage from "./pages/StepThreePage";
import StepFourPage from "./pages/StepFourPage";
import StepFivePage from "./pages/StepFivePage";
import StepSixPage from "./pages/StepSixPage";
import StepSevenPage from "./pages/StepSevenPage";
import SetpFlowPage from "./pages/SetpFlowPage";
import SetpFlowPageCopy from "./pages/SetpFlowPageCopy";
import SetpFlowPageTest from "./pages/SetpFlowPageTest";
import DashboardPage from "./pages/DashboardPage";
import RecipeFlowPage from "./pages/RecipeFlowPage";
import BoydPage from "./pages/BoydPage";

function App() {
  return (<Routes>
        <Route path="/" element={<DashboardPage> <WorkflowPage /> </DashboardPage>} />
        <Route path="/step/:layoutId/charts" element={<DashboardPage><StepOnePage /></DashboardPage> } />
        <Route path="/step/:layoutId/templete" element={<DashboardPage><StepTwoPage /></DashboardPage>} />
        <Route path="/step/:layoutId/cloud" element={<DashboardPage><StepThreePage /></DashboardPage>} />
        <Route path="/step/:layoutId/alerts" element={<DashboardPage><StepFourPage /></DashboardPage>} />
        <Route path="/step/:layoutId/users" element={<DashboardPage><StepFivePage /></DashboardPage>} />
        <Route path="/step/:layoutId/diagram" element={<DashboardPage><StepSixPage /></DashboardPage>} />
        <Route path="/step/:layoutId/libraries" element={<DashboardPage><StepSevenPage /></DashboardPage>} />
        <Route path="/itinerary" element={<DashboardPage><SetpFlowPage /></DashboardPage>} />
        <Route path="/workflow" element={<DashboardPage><SetpFlowPageCopy /></DashboardPage>} />
        <Route path="/test" element={<DashboardPage><SetpFlowPageTest /></DashboardPage>} />
        <Route path="/recipe" element={<DashboardPage><RecipeFlowPage /></DashboardPage>} />
        <Route path="/boyd" element={<DashboardPage><BoydPage /></DashboardPage>} />
 </Routes>
 )
}

export default App
