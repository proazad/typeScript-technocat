"use strict";
{
    var user_1 = {
        id: 332,
        name: {
            firstName: "Mezbaul",
            middleName: "Abedin",
            lastName: " Persian",
        },
        contactNumber: 1799834043,
        address: "Uganda",
    };
    var contactNumber = user_1.contactNumber, middleName = user_1.name.middleName;
    console.log(middleName);
    var friends_1 = [
        "Jamala",
        "Kamal",
        "Dhamal",
        "Dulal",
        "Rafiq",
        "Jabbar",
        "Manik",
    ];
    var a = friends_1[0], b = friends_1[1], bestFriends = friends_1[2], rest = friends_1.slice(3);
    console.log(rest);
}
