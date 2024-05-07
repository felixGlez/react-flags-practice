import Country from '../country/Country';
import { StyledCountries } from './styles';

const Countries = ({ filteredCountries }) => {
	return (
		<StyledCountries>
			{filteredCountries.map(country => (
				<Country key={country.flag} country={country} />
			))}
		</StyledCountries>
	);
};

export default Countries;
