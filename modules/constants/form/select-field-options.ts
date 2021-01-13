import { Cities, Countries, Gender } from '@ilovemochi/enums';
/**
 * We are using value as key to translations
 */
export const SelectFieldGenderOptions = [Gender.Male, Gender.Female, Gender.Other] as const;

export const SelectFieldCityOptions = [Cities.Lisbon, Cities.Luanda];

export const SelectFieldCountryOptions = [Countries.Portugal, Countries.Angola];
