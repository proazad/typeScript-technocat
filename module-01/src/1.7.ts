{
  // spreed operator
  // rest operator

  // learn Spreed Operator

  const bros1: string[] = ["Rahim", "Karim", "Malek"];
  const bros2: string[] = ["Hanif", "Jamal", "Kamal"];
  const brosList = bros1.push(...bros2);

  const mentors1 = {
    typeScript: "Mesba",
    redux: "Mir",
    dbms: "Nahid",
  };

  const mentors2 = {
    nextjs: "Tanmoy",
    cloud: "Firoz",
    express: "Babul",
  };

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  const greetDeveloper = (dev1: string, dev2: string, dev3: string) => {
    console.log(`Hi, ${dev1} ${dev2} ${dev3}`);
  };

  const greetMentor = (...mentors: string[]) => {
    mentors.forEach((mentor: string) => `Hi, ${mentor}`);
  };
  const greet = greetMentor("Kamal", "Jamal", "Dhamal");
}
