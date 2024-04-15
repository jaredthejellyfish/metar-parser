# ✈️ TS METAR Parser

Parse METAR information into structured TypeScript objects. The structure of the returned object is closely related to the [API response of CheckWX](https://api.checkwx.com/#metar-fields).

## Installation

Install using npm:

```bash
npm install ts-metar-parser --save
```

Install using pnpm:

```bash
pnpm install ts-metar-parser
```

Install using yarn:

```bash
yarn add ts-metar-parser
```

Install using bun:

```bash
bun add ts-metar-parser
```

## Functionality

This METAR parser returns the following parts of a METAR string:

- ICAO code
- Date / time
- Wind speed (in kts, mps) & direction
- Visibility (in meters and miles)
- Weather phenomena
- Clouds
- Temperature (in °C & °F) & humidity
- Barometer pressure (in InHg, kpa & mb)

## Code Example

```typescript
import { parseMETAR } from 'ts-metar-parser';

const metarString =
  'KSEA 150253Z 23008KT 10SM FEW040 FEW150 SCT250 13/06 A3002 RMK AO2 SLP172 T01330061 53006';

const metarObject = parseMETAR(metarString);

console.log(metarObject);
```

…returns:

```json
{
  "raw_text": "KSEA 150253Z 23008KT 10SM FEW040 FEW150 SCT250 13/06 A3002 RMK AO2 SLP172 T01330061 53006",
  "raw_parts": [
    "KSEA",
    "150253Z",
    "23008KT",
    "10SM",
    "FEW040",
    "FEW150",
    "SCT250",
    "13/06",
    "A3002",
    "RMK",
    "AO2",
    "SLP172",
    "T01330061",
    "53006"
  ],
  "flight_category": "VFR",
  "icao": "KSEA",
  "observed": "2024-04-15T02:53:32.114Z",
  "wind": {
    "degrees": 230,
    "speed_kts": 8,
    "speed_mps": 4.115555539550617,
    "gust_kts": 8,
    "gust_mps": 4.115555539550617
  },
  "visibility": {
    "miles": "10",
    "miles_float": 10,
    "meters": "16000",
    "meters_float": 16093.44
  },
  "clouds": [
    {
      "code": "FEW",
      "base_feet_agl": 4000,
      "base_meters_agl": 1219.2
    },
    {
      "code": "FEW",
      "base_feet_agl": 15000,
      "base_meters_agl": 4572
    },
    {
      "code": "SCT",
      "base_feet_agl": 25000,
      "base_meters_agl": 7620
    }
  ],
  "temperature": {
    "celsius": 13,
    "fahrenheit": 55.400000000000006
  },
  "dewpoint": {
    "celsius": 6,
    "fahrenheit": 42.8
  },
  "humidity_percent": 62.48465840713307,
  "barometer": {
    "hg": 30.02,
    "kpa": 101.65939777999999,
    "mb": 1016.5939778
  },
  "ceiling": {
    "code": "SCT",
    "feet_agl": 25000,
    "meters_agl": 7620
  }
}
```

## More Information on METAR

Wikipedia has an [article on METAR information](https://en.wikipedia.org/wiki/METAR) explaining the very basics.

These sites make METAR information publicly available:

- https://en.allmetsat.com/metar-taf/
- https://aviationweather.gov/metar
- https://metars.com/

## Status

![NPM Version](https://img.shields.io/npm/v/ts-metar-parser)

![NPM dev or peer Dependency Version](https://img.shields.io/npm/dependency-version/ts-metar-parser/dev/typescript)

## Legal Stuff

Original Author: [Frank Boës](https://3960.org)

Update Author: [Jared Hernandez](https://github.com/jaredthejellyfish)
