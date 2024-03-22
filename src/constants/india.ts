import { Brand } from '../interfaces/common.interfaces';
import { IndiaBlueLinkyConfig } from '../controllers/indian.controller';

export type INLanguages =
  | 'cs'
  | 'da'
  | 'nl'
  | 'en'
  | 'fi'
  | 'fr'
  | 'de'
  | 'it'
  | 'pl'
  | 'hu'
  | 'no'
  | 'sk'
  | 'es'
  | 'sv';
export const IN_LANGUAGES: INLanguages[] = [
  'cs',
  'da',
  'nl',
  'en',
  'fi',
  'fr',
  'de',
  'it',
  'pl',
  'hu',
  'no',
  'sk',
  'es',
  'sv',
];
export const DEFAULT_LANGUAGE: INLanguages = 'en';

export interface IndianBrandEnvironment {
  brand: Brand;
  host: string;
  baseUrl: string;
  clientId: string;
  appId: string;
  endpoints: {
    integration: string;
    silentSignIn: string;
    session: string;
    login: string;
    language: string;
    redirectUri: string;
    token: string;
  };
  basicToken: string;
  GCMSenderID: string;
}

const getEndpoints = (
  baseUrl: string,
  clientId: string
): IndianBrandEnvironment['endpoints'] => ({
  session: `${baseUrl}/api/v1/user/oauth2/authorize?response_type=code&state=test&client_id=${clientId}&redirect_uri=${baseUrl}/api/v1/user/oauth2/redirect`,
  login: `${baseUrl}/api/v1/user/signin`,
  language: `${baseUrl}/api/v1/user/language`,
  redirectUri: `${baseUrl}/api/v1/user/oauth2/redirect`,
  token: `${baseUrl}/api/v1/user/oauth2/token`,
  integration: `${baseUrl}/api/v1/user/integrationinfo`,
  silentSignIn: `${baseUrl}/api/v1/user/silentsignin`,
});

type BrandEnvironmentConfig = {
  brand: Brand;
};

const getHyundaiEnvironment = (): IndianBrandEnvironment => {
  const host = 'prd.in-ccapi.hyundai.connected-car.io:8080';
  const baseUrl = `https://${host}`;
  const clientId = 'e5b3f6d0-7f83-43c9-aff3-a254db7af368';
  const appId = '6a27df80-4ca1-4154-8c09-6f4029d91cf7';
  return {
    brand: 'hyundai',
    host,
    baseUrl,
    clientId,
    appId,
    endpoints: Object.freeze(getEndpoints(baseUrl, clientId)),
    basicToken:
      'Basic ZTViM2Y2ZDAtN2Y4My00M2M5LWFmZjMtYTI1NGRiN2FmMzY4OjVKRk9DcjZDMjRPZk96bERxWnA3RXdxcmtMMFd3MDRVYXhjRGlFNlVkM3FJNVNFNA==',
    GCMSenderID: '414998006775',
  };
};

export const getBrandEnvironment = ({
  brand
}: BrandEnvironmentConfig): IndianBrandEnvironment => {
  switch (brand) {
    case 'hyundai':
      return Object.freeze(getHyundaiEnvironment());
    default:
      throw new Error(`Constructor ${brand} is not managed.`);
  }
};
