// src/translation/translation.service.ts
import { Injectable } from '@nestjs/common';
import * as translate from 'google-translate-api';

@Injectable()
export class TranslationService {
  async translate(text: string, targetLanguage: string) {
    const result = await translate(text, { to: targetLanguage });
    return result.text;
  }
}
