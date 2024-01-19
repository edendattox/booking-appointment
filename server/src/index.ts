import { app } from "./app";

const PORT = 4000;

(async () => {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
})();
