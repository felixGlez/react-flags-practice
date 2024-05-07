import { StyledFilters } from './styles';

const Filters = ({ setSearchBy, setRegion }) => {
	return (
		<StyledFilters>
			<input
				type='text'
				placeholder='Search for a country...'
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
		</StyledFilters>
	);
};

export default Filters;
