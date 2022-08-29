import { NestFactory } from '@nestjs/core';
import {
    DocumentBuilder,
    SwaggerCustomOptions,
    SwaggerModule,
} from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        cors: {
            origin: 'http://localhost:3000',
            credentials: true,
        },
    });
    app.setGlobalPrefix('v1');
    const config = new DocumentBuilder()
        .setTitle('Custommer Support')
        .setDescription('This documentation provides API for customer support')
        .setVersion('v1.0')
        .build();

    const options: SwaggerCustomOptions = {
        customCss: '.swagger-ui .topbar { display: none  }',
    };

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/v1/api', app, document, options);

    app.enableCors({
        origin: true,

        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        maxAge: 3600,
        allowedHeaders: 'Content-Type, Authorization',
        credentials: true,
    });
    await app.listen(process.env.BACK_PORT || 3000);
}
bootstrap();
