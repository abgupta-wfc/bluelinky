# bluelinky

An unofficial nodejs API wrapper for Hyundai BlueLink

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
Checkout out the [docs](https://bluelinky.readme.io) for more info.

Important information for login problems:
- If you experience login problems, please logout from the app on your phone and login again. You might need to ' upgrade ' your account to a generic Kia/Hyundai account, or create a new password or PIN.
- After you migrated your Bluelink account to a generic Hyundai account, or your UVO account to a generic Kia account, make sure that both accounts have the same credentials (userid and password) to avoid confusion in logging in.

### EU specific options
EU has specific Bluelinky options :

- `language`: The language to use when login into the system, it will also change the laguage of your mobile app. `en` by default.
- `stampMode`: *Advanced* The kind of stamping mechanism to use (`LOCAL` | `DISTANT`). `DISTANT` by default. :warning: though `LOCAL` seems to work properly, it's in beta for now.
- `stampFile`: *Advanced* The `DISTANT` stamp source to use. `https://raw.githubusercontent.com/neoPix/bluelinky-stamps/master/${brand}-${appId}.v2.json` by default.

### Custom Stamps
In the EU region, stamps are used to sign every API queries. These stamps have a 1 week validity. Those stamps are using a tricky algorithm and cannot be replicated by Bluelinky and have to be generated by an external solution. An http call is performed to get the existing tokens. It is possible to specify an other path using the `stampFile` option. This path can be a local file prefixed by `file://` or from any webserver.

By default the case is 24H, but it can but customized at will. A nice trick is to run you own stamp generator http server and querying it regularly (with low cache timeout) for fresh stamps.

The JSON file must respect [this format](https://github.com/neoPix/bluelinky-stamps/blob/master/kia.json)

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
- EV: driveHistory
- EV: getChargeTargets
- EV: setChargeLimits

## Supported Regions
| [Regions](https://github.com/Hacksore/bluelinky/wiki/Regions) 
## Show your support

Give a ⭐️ if this project helped you!

## Warnings
Using Bluelinky may result in draining your 12V battery when refreshing from the car too often. 
Make sure you have read and understood the terms of use of your Kia or Hyundai account before using Bluelinky.
