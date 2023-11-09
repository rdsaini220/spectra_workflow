import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home";
import WorkflowPage from "./pages/WorkflowPage";

function App() {
  return (<Routes>
    <Route path="/" element={<WorkflowPage />} />
 </Routes>
 )
}

export default App
