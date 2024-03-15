import { MikroORM } from "@mikro-orm/core";
import { MikroOrmModule } from "@mikro-orm/nestjs";
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from "@nestjs/config";
import { AppController } from './app.controller';
import { join } from "path";
import { mikroOrmConfigFactory } from "./database/mikro-orm-config.factory";

@Module({
  imports: [
    MikroOrmModule.forRootAsync({
    imports: [ConfigModule.forRoot({ envFilePath: join(process.cwd(), ".env")})],
      useFactory: (configService: ConfigService) => {
        return mikroOrmConfigFactory(configService, {
          migrationsList: [],
          dropTables: true,
          allOrNothing: true,
        });
      },
      inject: [ConfigService],
  })
  ],
  controllers: [AppController],
})
export class AppModule {}
