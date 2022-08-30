import { NestFactory } from '@nestjs/core';
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function poyehali() {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
      .setTitle('User-o Backend')
      .setDescription('Учебный бэкенд (Ыыыыыфывйцшщтьщшсмцтг9щцутацгшщу)')
      .setVersion('1.0alphaprereleaseilsurgay')
      .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(PORT,'0.0.0.0', () => {console.log(`Server started at port ${PORT}`)});

}
poyehali();
