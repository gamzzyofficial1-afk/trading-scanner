import Fastify from "fastify";
import cors from "@fastify/cors";
import { analyze } from "@scanner/analysis";
const app = Fastify({
  logger: true,
});

await app.register(cors, {
  origin: true,
});

app.get("/health", async () => {
  return {
    status: "ok",
    service: "trading-scanner-api",
  };
});

const PORT = Number(process.env.PORT) || 3000;

app.listen({
  port: PORT,
  host: "0.0.0.0",
}).then(() => {
  console.log(`Trading Scanner API running on port ${PORT}`);
}).catch((error) => {
  app.log.error(error);
  process.exit(1);
});
