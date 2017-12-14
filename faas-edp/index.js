exports.test = function test(req, res) {
  // Example input: {"name": "Hello!"}
  if (req.body.name === undefined) {
    // This is an error case, as "message" is required.
    res.status(400).send('Welocme to FaaS World !');
  } else {
    // Everything is okay.
    console.log(req.body.name);
    res.status(200).send('Hello Mr: ' + req.body.name +', Welcome to Faas world !');
  }
};
