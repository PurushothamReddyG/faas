exports.test = function test(req, res) {
  // Example input: {"message": "Hello!"}
  if (req.body.message === undefined) {
    // This is an error case, as "message" is required.
    res.status(400).send('Welocme to FaaS World !');
  } else {
    // Everything is okay.
    console.log(req.body.message);
    res.status(200).send('Hello Mr: ' + req.body.message +', Welcome to Faas world !');
  }
};
