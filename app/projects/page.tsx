import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Central Mosque Construction",
    status: "In Progress",
    location: "Dhaka",
    description: "Construction of a grand mosque with modern facilities and Islamic center",
    completion: "75%",
  },
  {
    title: "Islamic Education Center",
    status: "Completed",
    location: "Chittagong",
    description: "Establishment of a center for Islamic studies and education",
    completion: "100%",
  },
  {
    title: "Community Support Program",
    status: "Ongoing",
    location: "Multiple Locations",
    description: "Regular distribution of aid and support to needy families",
    completion: "Ongoing",
  },
];

export default function ProjectsPage() {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-8">Our Projects</h1>
      
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{project.title}</CardTitle>
                <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                  {project.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">{project.location}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Description</p>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Completion</p>
                  <p className="text-sm text-muted-foreground">{project.completion}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}