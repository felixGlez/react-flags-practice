import { useEffect, useState } from 'react';
import {
	StyledContent,
	StyledCountriesContainer,
	StyledFiltersContainer
} from './styles';
import CardCountry from '../card-country/CardCountry';

const Content = () => {
	const [region, setRegion] = useState(0);
	const [searchBy, setSearchBy] = useState('');
	const [countries, setCountries] = useState([]);

	let filteredCountries = filterByRegion(region, countries);
	filteredCountries = searchByName(searchBy, filteredCountries);

	useEffect(() => {
		fetchCountries(setCountries);
	}, []);

	return (
		<StyledContent>
			<StyledFiltersContainer>
				<input
					type='text'
					name='search'
					id='search'
					onChange={event => setSearchBy(event.target.value)}
				/>
				<select
					name='select'
					id='select'
					onChange={event => setRegion(Number(event.target.value))}
				>
					<option value='0'>All</option>
					<option value='1'>Africa</option>
					<option value='2'>America</option>
					<option value='3'>Asia</option>
					<option value='4'>Europe</option>
					<option value='5'>Oceania</option>
				</select>
			</StyledFiltersContainer>
			<StyledCountriesContainer>
				<CardCountry filteredCountries={filteredCountries} />
			</StyledCountriesContainer>
		</StyledContent>
	);
};

const fetchCountries = async setCountries => {
	const response = await fetch(`https://restcountries.com/v3.1/all`);
	const data = await response.json();
	setCountries(data);
};

const filterByRegion = (region, countries) => {
	const allCountries = [...countries];

	switch (region) {
		case 0:
			return allCountries;
		case 1:
			return allCountries.filter(country => country.region === 'Africa');
		case 2:
			return allCountries.filter(country => country.region === 'Americas');
		case 3:
			return allCountries.filter(country => country.region === 'Asia');
		case 4:
			return allCountries.filter(country => country.region === 'Europe');
		case 5:
			return allCountries.filter(country => country.region === 'Oceania');
	}
};

const searchByName = (searchBy, countries) => {
	const searchTerm = searchBy.toLowerCase();

	if (searchTerm) {
		const filteredCountries = countries.filter(country =>
			country.name.common.toLowerCase().includes(searchTerm)
		);
		return filteredCountries;
	}
	return [...countries];
};

export default Content;
