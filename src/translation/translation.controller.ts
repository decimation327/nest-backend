// src/translation/translation.controller.ts
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TranslationService } from './translation.service';

@Controller('translation')
export class TranslationController {
  constructor(private readonly translationService: TranslationService) {}

  @Get(':text')
  async translateToEnglish(@Param('text') text: string) {
    const translatedText = await this.translationService.translate(text, 'en');
    return { translation: translatedText };
  }

  @Post()
  async translateToSpanish(@Body('text') text: string) {
    const translatedText = await this.translationService.translate(text, 'es');
    return { translation: translatedText };
  }
}
