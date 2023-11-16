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
import DashboardPage from "./pages/SetpFlowPage";

function App() {
  return (<Routes>
    <Route path="/" element={<WorkflowPage />} />
    <Route path="/step/:layoutId/charts" element={<StepOnePage />} />
    <Route path="/step/:layoutId/templete" element={<StepTwoPage />} />
    <Route path="/step/:layoutId/cloud" element={<StepThreePage />} />
    <Route path="/step/:layoutId/alerts" element={<StepFourPage />} />
    <Route path="/step/:layoutId/users" element={<StepFivePage />} />
    <Route path="/step/:layoutId/diagram" element={<StepSixPage />} />
    <Route path="/step/:layoutId/libraries" element={<StepSevenPage />} />
    <Route path="/setpflow" element={<SetpFlowPage />} />
    <Route path="/flow" element={<SetpFlowPageCopy />} />
    <Route path="/dashboard" element={<DashboardPage />} />
 </Routes>
 )
}

export default App
