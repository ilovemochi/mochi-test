export enum Countries {
  Portugal = 'portugal',
  Angola = 'angola',
}

export const CountriesWithoutPostalCode = [Countries.Angola];

export enum Exceptions {
  PostalCode = '__99999',
}

export enum Cities {
  Lisbon = 'lisbon',
  Luanda = 'luanda',
}

export const CountryCityValidationMap = {
  [Countries.Angola]: [Cities.Luanda],
  [Countries.Portugal]: [Cities.Lisbon],
};
