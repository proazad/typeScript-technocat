{
  const user = {
    id: 332,
    name: {
      firstName: "Mezbaul",
      middleName: "Abedin",
      lastName: " Persian",
    },
    contactNumber: 1799834043,
    address: "Uganda",
  };
  const {
    contactNumber,
    name: { middleName },
  } = user;
  console.log(middleName);
  const friends: string[] = [
    "Jamala",
    "Kamal",
    "Dhamal",
    "Dulal",
    "Rafiq",
    "Jabbar",
    "Manik",
  ];
  const [a, b, bestFriends, ...rest] = friends;
  console.log(rest);
}
