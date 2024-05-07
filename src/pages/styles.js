import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledCountryDetails = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2rem 5rem;
`;

const StyledBackButton = styled(NavLink)`
	width: 8.5rem;
	box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294);
`;

export { StyledCountryDetails, StyledBackButton };
