import { NestFactory } from "@nestjs/core";

import { AppModule } from "../app.module";
import { DatabaseService } from "../database/database.service";

async function main() {
  const app =
    await NestFactory.createApplicationContext(
      AppModule,
    );

  try {
    const database =
      app.get(DatabaseService);

    const email =
      process.env.BOOTSTRAP_USER_EMAIL;

    const username =
      process.env.BOOTSTRAP_USER_USERNAME;

    const displayName =
      process.env.BOOTSTRAP_USER_DISPLAY_NAME;

    if (!email) {
      throw new Error(
        "BOOTSTRAP_USER_EMAIL is required.",
      );
    }

    if (!username) {
      throw new Error(
        "BOOTSTRAP_USER_USERNAME is required.",
      );
    }

    if (!displayName) {
      throw new Error(
        "BOOTSTRAP_USER_DISPLAY_NAME is required.",
      );
    }

    const existingUser =
      await database.client.user_profiles.findUnique({
        where: {
          email,
        },
      });

    if (existingUser) {
      const user =
        await database.client.user_profiles.update({
          where: {
            id: existingUser.id,
          },
          data: {
            username,
            display_name:
              displayName,
            status: "active",
            updated_at:
              new Date(),
          },
        });

      console.log(
        "Existing DeckDeal user updated:",
      );

      console.table([
        {
          id: user.id,
          email: user.email,
          username: user.username,
          displayName:
            user.display_name,
          authProvider:
            user.auth_provider,
          authUserId:
            user.auth_user_id,
          status: user.status,
        },
      ]);

      return;
    }

    const user =
      await database.client.user_profiles.create({
        data: {
          auth_provider:
            "bootstrap",
          auth_user_id:
            "bootstrap-primary-user",

          email,
          username,
          display_name:
            displayName,

          status: "active",
        },
      });

    console.log(
      "DeckDeal user created:",
    );

    console.table([
      {
        id: user.id,
        email: user.email,
        username: user.username,
        displayName:
          user.display_name,
        authProvider:
          user.auth_provider,
        authUserId:
          user.auth_user_id,
        status: user.status,
      },
    ]);
  } finally {
    await app.close();
  }
}

main().catch((error) => {
  console.error(
    "DeckDeal user bootstrap failed:",
  );

  console.error(error);

  process.exitCode = 1;
});