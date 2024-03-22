const BlueLinky = require('./dist/index.js');


// This is new test files for new repo 
const client = new BlueLinky({
    username: 'wfcbhopal@gmail.com',
    password: 'React@22030',
    region: 'IN',
    brand: 'hyundai',
    ping: '',
    autoLogin: true,
});

client.on('ready', async () => {
    console.log('Ready');
    const vehicles = await client.getVehicles();
    console.log(vehicles);
});

client.on('error', (error) => {
    console.error(error);
});

