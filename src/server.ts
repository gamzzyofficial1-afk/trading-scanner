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

const PORT = Number(process.env.PORT) || 3000;app.post("/scan", async (request, reply) => {
  try {
    const body = request.body as {
      symbol?: string;
      timeframe?: string;
      limit?: number;
    };

    if (!body.symbol || !body.timeframe) {
      return reply.code(400).send({
        error: "symbol and timeframe are required",
      });
    }

    const result = await analyze({
      symbol: body.symbol,
      timeframe: body.timeframe,
      limit: body.limit,
    });

    return reply.send(result);
  } catch (error) {
    app.log.error(error);

    return reply.code(500).send({
      error: "Scan failed",
    });
  }
});

app.listen({
  port: PORT,
  host: "0.0.0.0",
}).then(() => {
  console.log(`Trading Scanner API running on port ${PORT}`);
}).catch((error) => {
  app.log.error(error);
  process.exit(1);
});
