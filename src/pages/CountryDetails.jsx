import { useLocation, useNavigate } from 'react-router-dom';
import {
	StyledBackButton,
	StyledBorderCountry,
	StyledCountryData,
	StyledCountryDetails,
	StyledCountryName,
	StyledFlag,
	StyledInfo,
	StyledInfoContainer
} from './styles';

const CountryDetails = () => {
	const { state: country } = useLocation();
	const navigate = useNavigate();

	return (
		<StyledCountryDetails>
			<StyledBackButton onClick={() => navigate('/')}>
				<img src='/shape.png' />
				Back
			</StyledBackButton>
			<StyledInfoContainer>
				<StyledFlag src={country.flags.svg} />
				<StyledInfo>
					<StyledCountryName>{country.name.common}</StyledCountryName>
					<StyledCountryData>
						<b>Native Name:</b> {country.name.official}
					</StyledCountryData>
					<StyledCountryData>
						<b>Population:</b> {country.population}
					</StyledCountryData>
					<StyledCountryData>
						<b>Region:</b> {country.region}
					</StyledCountryData>
					<StyledCountryData>
						<b>Sub Region:</b> {country.subregion}
					</StyledCountryData>
					<StyledCountryData>
						<b>Capital:</b> {country.capital}
					</StyledCountryData>
					<StyledCountryData>
						<b>Top Level Domain:</b> {country.tld.join(', ')}
					</StyledCountryData>
					<StyledCountryData>
						<b>Currencies:</b>{' '}
						{Object.values(country.currencies).map(
							currency => `${currency.name}(${currency.symbol}) `
						)}
					</StyledCountryData>
					<StyledCountryData>
						<b>Languages:</b> {Object.values(country.languages).join(', ')}
					</StyledCountryData>
					<b>Border Countries:</b>
					{country?.borders?.map(border => (
						<StyledBorderCountry key={border}>{border}</StyledBorderCountry>
					))}
					{!country.borders && <span>No Borders Countries</span>}
				</StyledInfo>
			</StyledInfoContainer>
		</StyledCountryDetails>
	);
};

export default CountryDetails;
