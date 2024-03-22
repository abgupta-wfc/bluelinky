import { DEFAULT_LANGUAGE, EULanguages, EuropeanBrandEnvironment } from '../../constants/europe';

import { CookieJar } from 'tough-cookie';
import { IndianBrandEnvironment } from '../../constants/india';
import got from 'got';
import logger from '../../logger';

export type Code = string;

export interface AuthStrategy {
  readonly name: string;
  login(
    user: { username: string; password: string },
    options?: { cookieJar?: CookieJar }
  ): Promise<{ code: Code; cookies: CookieJar }>;
}

export async function initSession(
  environment: EuropeanBrandEnvironment | IndianBrandEnvironment,
  language: EULanguages = DEFAULT_LANGUAGE,
  cookies?: CookieJar
): Promise<CookieJar> {
  logger.debug(`Initializing session`);
  const cookieJar = cookies ?? new CookieJar();
  await got(environment.endpoints.session, { cookieJar });
  await got(environment.endpoints.language, {
    method: 'POST',
    body: `{"lang":"${language}"}`,
    cookieJar,
  });
  logger.debug(environment.endpoints.session);
  logger.debug(environment.endpoints.language);
  return cookieJar;
}
