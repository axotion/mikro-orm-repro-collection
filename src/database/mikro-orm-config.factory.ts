import { LoadStrategy, MigrationsOptions, Options } from '@mikro-orm/core';
import { defineConfig, MySqlDriver } from '@mikro-orm/mysql';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export const mikroOrmConfigFactory = (
  configService: ConfigService,
  migrationsOptions: MigrationsOptions,
): Options<MySqlDriver> => {
  const dbLogger = new Logger('MikroORM');
  return defineConfig({
    entities: [],
    host: configService.get('DB_HOST'),
    dbName: configService.get('DB_NAME'),
    user: configService.get('DB_USER'),
    password: configService.get('DB_PASSWORD'),
    port: configService.get('DB_PORT'),
    logger: dbLogger.log.bind(dbLogger),
    debug: true,
    migrations: migrationsOptions,
    loadStrategy: LoadStrategy.JOINED,
  });
};
