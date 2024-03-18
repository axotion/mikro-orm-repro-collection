import { LoadStrategy, MigrationsOptions, Options } from '@mikro-orm/core';
import { Migrator } from "@mikro-orm/migrations";
import { defineConfig, MySqlDriver } from '@mikro-orm/mysql';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cat } from "./model/cat.model";
import { Dog } from "./model/dog.model";
import { Owner } from "./model/owner.model";

export const mikroOrmConfigFactory = (
  configService: ConfigService,
  migrationsOptions: MigrationsOptions,
): Options<MySqlDriver> => {
  const dbLogger = new Logger('MikroORM');
  return defineConfig({
    entities: [
      Owner,
      Cat,
      Dog,
    ],
    host: configService.get('DB_HOST'),
    dbName: configService.get('DB_NAME'),
    user: configService.get('DB_USER'),
    password: configService.get('DB_PASSWORD'),
    port: configService.get('DB_PORT'),
    logger: dbLogger.log.bind(dbLogger),
    debug: true,
    migrations: migrationsOptions,
    loadStrategy: LoadStrategy.JOINED,
    extensions: [Migrator],
  });
};
