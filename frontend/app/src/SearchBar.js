import TextField from '@mui/material/TextField';

const SearchBar = (props) => {
	return (
		<TextField
			sx={{ flexGrow: 1, background: '#FFFFFF' }}
			label='Enter instrument'
			variant='filled'
		/>
	);
};

export default SearchBar;
