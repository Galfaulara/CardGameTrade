import { NestFactory } from "@nestjs/core";

import { AppModule } from "../app.module";
import { CatalogSyncService } from "../catalog/catalog-sync.service";

async function main() {
  const app = await NestFactory.createApplicationContext(AppModule);

  try {
    const catalogSyncService = app.get(CatalogSyncService);

    const result =
      await catalogSyncService.syncCanonicalCards();

    console.log(
      "Scryfall canonical-card synchronization complete:",
    );
    console.table([result]);
  } finally {
    await app.close();
  }
}

main().catch((error) => {
  console.error(
    "Scryfall canonical-card synchronization failed:",
  );
  console.error(error);
  process.exitCode = 1;
});
