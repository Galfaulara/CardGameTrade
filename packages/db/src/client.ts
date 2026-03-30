export const createDbClient = (connectionString: string) => {
  return { connectionString };
};

export type DbClient = ReturnType<typeof createDbClient>;
