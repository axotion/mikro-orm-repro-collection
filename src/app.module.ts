
import { MikroOrmModule } from "@mikro-orm/nestjs";
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from "@nestjs/config";
import { AppController } from './app.controller';
import { join } from "path";
import { migrations } from "./database/migration/list";
import { MigrationRunner } from "./database/migration/migration.runner";
import { mikroOrmConfigFactory } from "./database/mikro-orm-config.factory";
import { Cat } from "./database/model/cat.model";
import { Dog } from "./database/model/dog.model";
import { Owner } from "./database/model/owner.model";

@Module({
  imports: [
    MikroOrmModule.forRootAsync({
    imports: [ConfigModule.forRoot({ envFilePath: join(process.cwd(), ".env")})],
      useFactory: (configService: ConfigService) => {
        return mikroOrmConfigFactory(configService, {
          migrationsList: migrations,
          dropTables: true,
          allOrNothing: true,
        });
      },
      inject: [ConfigService],
  }),
    MikroOrmModule.forFeature({ entities: [Owner, Dog, Cat] }),
  ],
  controllers: [AppController],
  providers: [
    MigrationRunner,
  ],
})
export class AppModule {}
