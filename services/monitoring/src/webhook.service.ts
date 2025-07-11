import { Injectable } from '@nestjs/common';

@Injectable()
export class WebhookService {
  // TODO: store webhook URLs per merchant and POST events
  async emit(event: string, payload: any) {
    // placeholder emit to webhook
  }
}
