import { useState } from "react";
import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [isAddingNewProject, setIsAddingNewProject] = useState(false);

  function handleAddingNewProject() {
    setIsAddingNewProject(true);
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar />
      <NoProjectSelected />
      {/* {isAddingNewProject && <NewProject />}
      {!isAddingNewProject && <NoProjectSelected />} */}
    </main>
  );
}

export default App;
