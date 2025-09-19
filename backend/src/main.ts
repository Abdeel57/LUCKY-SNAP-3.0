
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Enable Cross-Origin Resource Sharing
  app.setGlobalPrefix('api'); // Set a global prefix for all routes
  await app.listen(3001);
}
bootstrap();
