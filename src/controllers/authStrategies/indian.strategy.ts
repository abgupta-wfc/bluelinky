import { AuthStrategy, Code, initSession } from './authStrategy';
import { INLanguages, IN_LANGUAGES, IndianBrandEnvironment } from '../../constants/india';

import { CookieJar } from 'tough-cookie';
import Url from 'url';
import got from 'got';

export class IndianLegacyAuthStrategy implements AuthStrategy {
  constructor(
    private readonly environment: IndianBrandEnvironment,
    private readonly language: INLanguages
  ) {}

  public get name(): string {
    return 'IndianAuthStrategy';
  }

  async login(
    user: { username: string; password: string },
    options?: { cookieJar: CookieJar }
  ): Promise<{ code: Code; cookies: CookieJar }> {
    const cookieJar = await initSession(this.environment, this.language, options?.cookieJar);
    const { body, statusCode } = await got(this.environment.endpoints.login, {
      method: 'POST',
      json: true,
      body: {
        'email': user.username,
        'password': user.password,
      },
      cookieJar,
    });
    if (!body.redirectUrl) {
      throw new Error(
        `@IndianAuthStrategy.login: sign In didn't work, could not retrieve auth code. status: ${statusCode}, body: ${JSON.stringify(
          body
        )}`
      );
    }
    const { code } = Url.parse(body.redirectUrl, true).query;
    if (!code) {
      throw new Error(
        '@IndianAuthStrategy.login: AuthCode was not found, you probably need to migrate your account.'
      );
    }
    return {
      code: code as Code,
      cookies: cookieJar,
    };
  }
}
