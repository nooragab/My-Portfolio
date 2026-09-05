import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function Skills({ skills }: { skills: readonly string[] }) {
  return (
    <Card className="flex flex-wrap gap-2 p-5">
      {skills.map((skill) => (
        <Badge key={skill}>{skill}</Badge>
      ))}
    </Card>
  );
}
