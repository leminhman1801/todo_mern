import express from "express";
import cors from "cors";
import records from "./routes/record.js";
import tasks from "./routes/tasks.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Allow only your client URL
  })
);
app.use(express.json());
app.use("/record", records);
app.use("/tasks", tasks);
// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
