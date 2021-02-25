const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.randomNumber = functions.https.onRequest((req, res) => {
  const number = Math.round(Math.random() * 100);
  res.send(number.toString());
});


exports.isAdmin = functions.https.onCall((data) => {
  return auth()
    .getUserByEmail(data.email)
    .then((userRecord) => {
      return userRecord.customClaims.admin;
    })
    .catch((err) => {
      return err;
    });
});


exports.deleteUser = https.onCall((data) => {
  return auth()
    .getUserByEmail(data.email)
    .then((user) => {
      return auth().deleteUser(user.uid).then;
    })
    .then(() => {
      return "Successfully deleted user " + data.email;
    })
    .catch((err) => {
      return err.message;
    });
});



exports.listAllUser = https.onCall((data) => {
  return auth()
    .listUsers(1000)
    .then((listUserResult) => {
      listUserResult.users.forEach((userRecord) => {
        console.log("user", userRecord.email);
        data.list.push(userRecord.email);
      });
      return data.list;
    })
    .catch((error) => {
      console.log("Error listing useres: ", error);
    });
});

