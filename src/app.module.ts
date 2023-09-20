import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TranslationController } from './translation/translation.controller';
import { TranslationService } from './translation/translation.service';

@Module({
  imports: [],
  controllers: [AppController, TranslationController],
  providers: [AppService, TranslationService],
})
export class AppModule {}
