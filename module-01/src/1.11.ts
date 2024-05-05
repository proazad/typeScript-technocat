{
  //
  // Tarnery Operator || Optional Chaining || Nullinsh Coalescing Operator
  const age: number = 20;
  //   if (18 <= age) {
  //     console.log("Adult");
  //   } else {
  //     console.log("Not Adult");
  //   }

  const isAdult = age >= 18 ? "Adult" : "Not Adult";
  //   console.log({ isAdult });

  //nullish coalescing Operator
  //null || undefined
  const isAuthenticated = "a";
  const result = isAuthenticated ?? "Gest";
  //   console.log({ result });
  const result1 = isAuthenticated ? isAuthenticated : "Gest";
  //   console.log({ result1 });

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };
  const user: User = {
    name: "Persian",
    address: {
      city: "Noakhali",
      road: "Chayani",
      presentAddress: "Noakhali, Bengumgonj",
    },
  };

  const permanentAddress =
    user?.address?.permanentAddress ?? "No Permanent Address";
  console.log({ permanentAddress });
  //
}
