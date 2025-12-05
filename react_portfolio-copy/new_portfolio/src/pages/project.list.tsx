import { Link } from "react-router-dom";
export const Data = [
  {
    id: 1,
    name: "Project Name 1",
    description: "blub 1",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQFE5esPxOwdVA/profile-displayphoto-shrink_400_400/B4DZXrIDiHG8Ag-/0/1743406512774?e=2147483647&v=beta&t=WpNkyc23rSwepxjFU-ayG5d2eNSgEdJq4mw_tPj2_ug",
  },
  {
    id: 2,
    name: "Project Name 2",
    description: "blub 2",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQFE5esPxOwdVA/profile-displayphoto-shrink_400_400/B4DZXrIDiHG8Ag-/0/1743406512774?e=2147483647&v=beta&t=WpNkyc23rSwepxjFU-ayG5d2eNSgEdJq4mw_tPj2_ug",
  },
];
const ProjectList = () => {
  return (
    <div>
      {Data.map((d) => (
        <Link to={`/projects/${d.id}`}>
          <h2>{d.name}</h2>
        </Link>
      ))}
    </div>
  );
};
export default ProjectList;
