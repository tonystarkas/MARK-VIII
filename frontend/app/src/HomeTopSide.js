import { Button, Typography } from '@mui/material';
import SearchBar from './SearchBar';
import image from './stonker.jpg';
import './Home.css';

const HomeTopSide = () => {
	return (
		<div className='background'>
			<img className='image' src={image} alt=''></img>
			<Typography
				style={{ marginLeft: '1rem' }}
				component={'h3'}
				variant='h3'
			>
				Market Viewer
			</Typography>
			<div className='center'>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<SearchBar size={'10rem'} />
					<Button
						style={{ marginLeft: '1rem' }}
						size='large'
						variant='contained'
					>
						Submit
					</Button>
				</div>
			</div>
		</div>
	);
};

export default HomeTopSide;
