"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix("api");
    const origins = (process.env.DECKDEAL_WEB_ORIGINS ?? "http://localhost:3000")
        .split(",").map((value) => value.trim()).filter(Boolean);
    app.enableCors({ origin: origins, methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
        allowedHeaders: ["Authorization", "Content-Type", "Accept"], credentials: false });
    await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
