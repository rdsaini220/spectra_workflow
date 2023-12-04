import { Route, Routes } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import StepOnePage from "./pages/StepOnePage";
import StepTwoPage from "./pages/StepTwoPage";
import StepThreePage from "./pages/StepThreePage";
import StepFourPage from "./pages/StepFourPage";
import StepFivePage from "./pages/StepFivePage";
import StepSixPage from "./pages/StepSixPage";
import StepSevenPage from "./pages/StepSevenPage";
import WorkflowPage from "./pages/WorkflowPage";
import WorkflowPage2 from "./pages/WorkflowPage2";
import SetpFlowPageTest from "./pages/SetpFlowPageTest";
import Layout from "./pages/Layout";
import RecipeFlowPage from "./pages/RecipeFlowPage";
import BoydPage from "./pages/BoydPage";
import StepDashboardPage from "./pages/StepDashboardPage";
import ItineraryPage from "./pages/ItineraryPage";
import ItineraryPageOld from "./pages/ItineraryPageOld";

function App() {
  return (<Routes>
        <Route path="/" element={<Layout> <DashboardPage /> </Layout>} />
        <Route path="/step/:layoutId/charts" element={<Layout><StepOnePage /></Layout> } />
        <Route path="/step/:layoutId/templete" element={<Layout><StepTwoPage /></Layout>} />
        <Route path="/step/:layoutId/cloud" element={<Layout><StepThreePage /></Layout>} />
        <Route path="/step/:layoutId/alerts" element={<Layout><StepFourPage /></Layout>} />
        <Route path="/step/:layoutId/users" element={<Layout><StepFivePage /></Layout>} />
        <Route path="/step/:layoutId/diagram" element={<Layout><WorkflowPage2 /></Layout>} />
        <Route path="/step/:layoutId/libraries" element={<Layout><StepSevenPage /></Layout>} />
        <Route path="/step/:layoutId/dashboard" element={<StepDashboardPage/>} />
        <Route path="/itinerary" element={<Layout><ItineraryPage /></Layout>} />
        <Route path="/workflow" element={<Layout><WorkflowPage /></Layout>} />
        <Route path="/test" element={<Layout><SetpFlowPageTest /></Layout>} />
        <Route path="/recipe" element={<Layout><RecipeFlowPage /></Layout>} />
        <Route path="/boyd" element={<Layout><BoydPage /></Layout>} />
        <Route path="/old" element={<Layout><ItineraryPageOld /></Layout>} />
 </Routes>
 )
}

export default App
