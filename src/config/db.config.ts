import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions"
import * as path from "path"
import { ConfigService } from "@nestjs/config"

export const dbConfig = async (configService: ConfigService): Promise<PostgresConnectionOptions> => ({
    type: "postgres",
    url: configService.get<string>("DATABASE_URL"),
    port: configService.get<number>("DATABAS_PORT"),
    entities: [path.resolve(__dirname,"..") + "/**/*.entity{.ts,.js}"],
    synchronize: configService.get<boolean>("DATABASE_SYNCHRONIZE") || false, //Use true only in Development
})