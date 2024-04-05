import { Country } from "./country.interface"
import { Region, Subregion } from './regions.interface';

export interface CacheStore {
    byCapital: TermCountries,
    byCountries: TermCountries,
    byRegion: RegionCountries
}


export interface TermCountries {
    term: string;
    countries: Country[];
}

export interface RegionCountries {
    region?: Region;
    subregion?: Subregion
    countries: Country[];
}
