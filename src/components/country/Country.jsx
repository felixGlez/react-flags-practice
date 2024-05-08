import { useNavigate } from 'react-router-dom';
import {
	StyledCardCountry,
	StyledCountryData,
	StyledCountryFlag,
	StyledCountryName
} from './styles';

const Country = ({ country }) => {
	const navigate = useNavigate();
	return (
		<StyledCardCountry
			// Recibe 2 parámetros: 1 la ruta y 2 las opciones (tienen que ser un objeto)
			onClick={() => navigate(`/country`, { state: country })}
			key={country.flag}
		>
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
	);
};

export default Country;
