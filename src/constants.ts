import { Brand, VehicleStatusOptions } from './interfaces/common.interfaces';
// moved all the US constants to its own file, we can use this file for shared constants
import {
  CanadianBrandEnvironment,
  getBrandEnvironment as getCABrandEnvironment,
} from './constants/canada';
import {
  ChineseBrandEnvironment,
  getBrandEnvironment as getCNBrandEnvironment,
} from './constants/china';
import {
  EuropeanBrandEnvironment,
  getBrandEnvironment as getEUBrandEnvironment,
} from './constants/europe';
import {
  IndianBrandEnvironment,
  getBrandEnvironment as getINBrandEnvironment
} from './constants/india';

export const ALL_ENDPOINTS = {
  CA: (brand: Brand): CanadianBrandEnvironment['endpoints'] =>
    getCABrandEnvironment(brand).endpoints,
  EU: (brand: Brand): EuropeanBrandEnvironment['endpoints'] =>
    getEUBrandEnvironment({ brand }).endpoints,
  CN: (brand: Brand): ChineseBrandEnvironment['endpoints'] =>
    getCNBrandEnvironment({ brand }).endpoints,
  IN: (brand: Brand): IndianBrandEnvironment['endpoints'] =>
    getINBrandEnvironment({ brand }).endpoints,
};

export const GEN2 = 2;
export const GEN1 = 1;
export type REGION = 'US' | 'CA' | 'EU' | 'CN' | 'IN';
export enum REGIONS {
  US = 'US',
  CA = 'CA',
  EU = 'EU',
  CN = 'CN',
  IN = 'IN',
}

// ev stuffz
export type ChargeTarget = 50 | 60 | 70 | 80 | 90 | 100;
export const POSSIBLE_CHARGE_LIMIT_VALUES = [50, 60, 70, 80, 90, 100];

export const DEFAULT_VEHICLE_STATUS_OPTIONS: VehicleStatusOptions = {
  refresh: false,
  parsed: false,
};
