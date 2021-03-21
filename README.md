# bluelinky

An unoffcial nodejs API wrapper for Hyundai BlueLink

[![CI](https://img.shields.io/github/workflow/status/Hacksore/bluelinky/npm)](https://github.com/Hacksore/bluelinky/actions?query=workflow%3Anpm)
[![npm](https://img.shields.io/npm/v/bluelinky.svg)](https://www.npmjs.com/package/bluelinky)
[![Discord](https://img.shields.io/discord/652755205041029120)](https://discord.gg/HwnG8sY)

## Install
```sh
npm install bluelinky
```

## Example
```javascript
const BlueLinky = require('bluelinky');

const client = new BlueLinky({
  username: 'someguy@example.com',
  password: 'hunter1',
  brand: 'hyundai',
  region: 'US',
  pin: '1234'
});

client.on('ready', async () => {
  const vehicle = client.getVehicle('5NMS55555555555555');
  try {
    const response = await vehicle.lock();
    console.log(response);
  } catch (err) {
    // log the error from the command invocation 
  }
});

client.on('error', async (err) => {
  // something went wrong with login
});

```

## Debug locally
Ensure you have a `config.json` that matches the structure of the following, with your account details

```json
{
  "username": "email",
  "password": "password",
  "pin": "pin",
  "brand": "kia" or "hyundai",
  "vin": "vin"
}
```
Run an install for all the dependencies, `npm install`

Now you can invoke the debug.ts script with `npm run debug`

## Documentation
Checkout out the [bluelinky-docs](https://hacksore.github.io/bluelinky-docs/) for more info.

## Supported Features
- Lock
- Unlock
- Start (with climate control)
- Stop
- Status (full, parsed, cached)
- odometer
- location
- startCharge
- monthlyReport
- tripInfo
- EV: getChargeTargets
- EV: setChargeLimits

## Supported Regions
| [Regions](https://github.com/Hacksore/bluelinky/wiki/Regions) 
## Show your support

Give a ⭐️ if this project helped you!
