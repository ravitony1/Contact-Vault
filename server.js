const express = require("express");
const connectDB = require("./config/db");

const app = express();
// connect database
connectDB();

//Init middleware we can accept data
app.use(express.json({ extended: false }));

// Define routes
app.use("/api/users", require("./Routes/Users"));
app.use("/api/auth", require("./Routes/Auth"));
app.use("/api/contacts", require("./Routes/Contacts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on ${PORT}`));
