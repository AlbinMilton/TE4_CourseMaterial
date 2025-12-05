import { data, useParams } from "react-router-dom";
import ProjectList from "./project.list";

const ProjectDetail = () => {
  const { projectId } = useParams();
  return (
    <div>
      <h2>Project Detail {projectId}</h2>
    </div>
  );
};

export default ProjectDetail;
