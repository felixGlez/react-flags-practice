import {
	StyledCardCountry,
	StyledCountryData,
	StyledCountryFlag,
	StyledCountryName
} from './styles';

const CardCountry = ({ filteredCountries }) => {
	return (
		<>
			{filteredCountries.map(country => (
				<StyledCardCountry key={country.flag}>
					<StyledCountryFlag src={country.flags.svg} />
					<StyledCountryName>{country.name.common}</StyledCountryName>
					<StyledCountryData>
						<b>Population:</b> {country.population}
					</StyledCountryData>
					<StyledCountryData>
						<b>Region:</b> {country.region}
					</StyledCountryData>
					<StyledCountryData>
						<b>Capital:</b> {country.capital}
					</StyledCountryData>
				</StyledCardCountry>
			))}
		</>
	);
};

export default CardCountry;
