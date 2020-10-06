const express = require("express");

const app = express();

// Define routes
app.use("/api/users", require("./Routes/Users"));
app.use("/api/auth", require("./Routes/Auth"));
app.use("/api/contacts", require("./Routes/Contacts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on ${PORT}`));
