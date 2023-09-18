// import { server } from "./server.js";
import { server } from "./server.js";
// server.listen(…
const port = 9000;
server.listen(port, () => {
  console.log("Server is running on http://localhost:" + port + "/");
});
