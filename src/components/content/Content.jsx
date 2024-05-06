import { useEffect, useState } from 'react';
import {
	StyledContent,
	StyledFiltersContainer,
	StyledFlagsContainer
} from './styles';
import CardCountry from '../card-country/CardCountry';

const Content = () => {
	const [region, setRegion] = useState(0);
	const [flags, setFlags] = useState([]);
	console.log(region);

	useEffect(() => {
		fetchCountries(setFlags, region);
	}, [region]);

	return (
		<StyledContent>
			<StyledFiltersContainer>
				<input type='text' name='search' id='search' />
				<select
					name='select'
					id='select'
					onChange={event => filterByRegion(event, setRegion)}
				>
					<option value='0'>All</option>
					<option value='1'>Africa</option>
					<option value='2'>America</option>
					<option value='3'>Asia</option>
					<option value='4'>Europe</option>
					<option value='5'>Oceania</option>
				</select>
			</StyledFiltersContainer>
			<StyledFlagsContainer>
				<CardCountry flags={flags} />
			</StyledFlagsContainer>
		</StyledContent>
	);
};

const fetchCountries = async (setFlags, region) => {
	const response = await fetch(`https://restcountries.com/v3.1/all`);
	const data = await response.json();

	const allCountries = [...data];
	switch (region) {
		case 0:
			setFlags(allCountries);
			break;
		case 1:
			setFlags(allCountries.filter(country => country.region === 'Africa'));
			break;
		case 2:
			setFlags(allCountries.filter(country => country.region === 'Americas'));
			break;
		case 3:
			setFlags(allCountries.filter(country => country.region === 'Asia'));
			break;
		case 4:
			setFlags(allCountries.filter(country => country.region === 'Europe'));
			break;
		case 5:
			setFlags(allCountries.filter(country => country.region === 'Oceania'));
			break;
	}
};

const filterByRegion = (event, setRegion) => {
	const { value } = event.target;
	setRegion(Number(value));
};

export default Content;
