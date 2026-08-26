import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api");
  const origins = (process.env.DECKDEAL_WEB_ORIGINS ?? "http://localhost:3000")
    .split(",").map((value) => value.trim()).filter(Boolean);
  app.enableCors({ origin: origins, methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Authorization", "Content-Type", "Accept"], credentials: false });
  await app.listen(process.env.PORT ?? 4000);
}

bootstrap();
