import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configFile = app.get(ConfigService);
  const host = configFile.get("HOST");
  const port = configFile.get("PORT");
  await app.listen(port || 3001, () => {
    console.log("Server has been connected in " + host + port);
  });
}
bootstrap();
