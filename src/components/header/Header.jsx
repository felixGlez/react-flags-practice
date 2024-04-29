import {
	StyledHeader,
	StyledLogo,
	StyledModeContainer,
	StyledModeIcon,
	StyledModeText
} from './styles';

const Header = () => {
	return (
		<StyledHeader>
			<StyledLogo>Where in the world?</StyledLogo>
			<StyledModeContainer>
				<StyledModeIcon src='./moon.png' />
				<StyledModeText>Dark Mode</StyledModeText>
			</StyledModeContainer>
		</StyledHeader>
	);
};

export default Header;
