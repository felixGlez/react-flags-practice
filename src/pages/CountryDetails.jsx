import { useLocation } from 'react-router-dom';
import { StyledBackButton, StyledCountryDetails } from './styles';

const CountryDetails = () => {
	const { state } = useLocation();
	console.log(state);
	return (
		<StyledCountryDetails>
			<StyledBackButton to={'/'}>Back</StyledBackButton>
		</StyledCountryDetails>
	);
};

export default CountryDetails;
