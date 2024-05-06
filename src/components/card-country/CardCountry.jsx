import { v4 } from 'uuid';
import {
	StyledCardCountry,
	StyledCountryData,
	StyledCountryFlag,
	StyledCountryName
} from './styles';

const CardCountry = ({ flags }) => {
	return (
		<>
			{flags.map(country => (
				<StyledCardCountry key={v4()}>
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
