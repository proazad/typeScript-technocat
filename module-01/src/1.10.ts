{
  //
  // union Type
  type FrontendDeveloper = "FakibazDeveloper" | "JuniorDeveloper";
  type BackendDeveloper = "FrontendDeveloper" | "ExpertDeveloper";

  type FullStackDeveloper = FrontendDeveloper | BackendDeveloper;
  const fullStackDeveloper: FullStackDeveloper = "JuniorDeveloper";

  type User = {
    name: string;
    email?: string;
    number: string;
    gender: "Male" | "Female";
    bloodGroup: "O+" | "A+" | "B+" | "AB+";
  };
  const user: User = {
    name: "Mezbaul Abedin Persian",
    number: "0198233248372",
    gender: "Male",
    bloodGroup: "O+",
  };
  //InterSection Type
  type FrontendDeveloper1 = {
    skills: string[];
    designation1: "Frontend Developer";
  };

  type BackendDevelope1 = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullStackDeveloper1 = FrontendDeveloper1 & BackendDevelope1;

  const fullStackDeveloper1: FullStackDeveloper1 = {
    skills: ["HTML", "CSS", "JS", "EXPRESS"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
