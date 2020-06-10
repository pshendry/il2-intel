import Q from 'js-quantities';

export default {
  id: 'la-5fn-ser-2',
  type: 'La-5',
  variant: 'La-5FN series 2',
  combatDebut: new Date(1943, 5),
  airframe: {
    indicatedStallSpeedRanges: {
      takeoffLanding: [Q('147 km/h'), Q('159 km/h')],
      flight: [Q('168 km/h'), Q('185 km/h')],
    },
    diveSpeedLimit: Q('720 km/h'),
    maxLoadFactor: Q('10 gee'),
    stallAngles: {
      landing: Q('15 deg'),
      flight: Q('22.2 deg'),
    },
    takeoffSpeedRange: [Q('175 km/h'), Q('195 km/h')],
    glideslopeSpeedRange: [Q('200 km/h'), Q('210 km/h')],
    landingSpeedRange: [Q('150 km/h'), Q('160 km/h')],
    landingAngle: Q('13 deg'),
    length: Q('8.672 m'),
    wingspan: Q('9.8 m'),
    wingSurface: Q('17.51 m^2'),
  },
  characteristics: {
    maxTrueAirspeeds: [
      {
        altitude: Q('0 m'),
        engineMode: 'Nominal',
        speed: Q('583 km/h'),
      },
      {
        altitude: Q('2500 m'),
        engineMode: 'Nominal',
        speed: Q('605 km/h'),
      },
      {
        altitude: Q('6000 m'),
        engineMode: 'Nominal',
        speed: Q('646 km/h'),
      },
      {
        altitude: Q('0 m'),
        engineMode: 'Boosted',
        speed: Q('552 km/h'),
      },
    ],
    maxPerformance: {
      climb: [
        {
          altitude: Q('0 m'),
          engineMode: 'Boosted',
          speed: Q('320 km/h'),
          rate: Q('20 m/s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Boosted',
          speed: Q('340 km/h'),
          rate: Q('16.7 m/s'),
        },
        {
          altitude: Q('6000 m'),
          engineMode: 'Boosted',
          speed: Q('340 km/h'),
          rate: Q('12.5 m/s'),
        },
      ],
      turn: [
        {
          altitude: Q('0 m'),
          engineMode: 'Boosted',
          speed: Q('320 km/h'),
          time: Q('21.0 s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Boosted',
          speed: Q('340 km/h'),
          time: Q('28.0 s'),
        },
      ],
    },
    serviceCeiling: Q('10500 m'),
    flightEndurance: [
      {
        altitude: Q('3000 m'),
        speed: Q('350 km/h'),
        time: Q('2.0 h'),
      },
    ],
  },
  engine: {
    model: 'M-82FN',
    maxPowers: [
      {
        altitude: Q('0 m'),
        mode: 'Nominal',
        power: Q('1560 hp'),
      },
      {
        altitude: Q('1550 m'),
        mode: 'Nominal',
        power: Q('1630 hp'),
      },
      {
        altitude: Q('4800 m'),
        mode: 'Nominal',
        power: Q('1460 hp'),
      },
      {
        altitude: Q('0 m'),
        mode: 'Boosted',
        power: Q('1850 hp'),
      },
    ],
    modes: [
      {
        name: 'Nominal',
        limit: null,
        rpm: Q('2400 rpm'),
        manifoldPressure: Q('1000 mmHg'),
      },
      {
        name: 'Boosted',
        limit: Q('10 min'),
        rpm: Q('5400 rpm'),
        manifoldPressure: Q('1180 mmHg'),
      },
    ],
    ratedTemps: [
      {
        name: 'Oil',
        range: [Q('65 degC'), Q('75 degC')],
      },
      {
        name: 'Cylinder head',
        range: [Q('180 degC'), Q('215 degC')],
      },
    ],
    maxTemps: [
      {
        name: 'Oil',
        value: Q('85 degC'),
      },
      {
        name: 'Cylinder head',
        value: Q('250 degC'),
      },
    ],
    superchargerGearShiftAltitude: Q('3500 m'),
  },
  load: {
    emptyWeight: Q('2655 kg'),
    minimumWeight: Q('2929 kg'),
    standardWeight: Q('3305 kg'),
    maxTakeoffWeight: Q('3544 kg'),
    fuelLoad: [Q('334 kg'), Q('464 L')],
  },
  armament: {
    forwardFiring: {
      standard: [
        {
          qty: 2,
          name: 'SsVAK',
          type: '20mm gun',
          count: 170,
          details: 'synchronized',
        },
      ],
      modifications: [],
    },
    defensive: [],
    bombs: [
      {
        qty: 2,
        name: 'FAB-50sv',
        type: '50kg general purpose bomb',
        details: null,
      },
      {
        qty: 2,
        name: 'FAB-100M',
        type: '104kg general purpose bomb',
        details: null,
      },
    ],
    rockets: [],
  },
  features: [
    {
      feature: 'Engine',
      details: [
        'Has a boost mode enabled by pushing boost knob and increase MP to 1180 mmHg',
        'Boost mode only works in 1st supercharger gear',
      ],
    },
    {
      feature: 'Supercharger',
      details: ['Manual control', 'Two-stage (shift at 3500 m)'],
    },
    {
      feature: 'Mixture',
      details: ['Automatic when set to maximum'],
    },
    {
      feature: 'Governor',
      details: ['Automatically controls prop pitch to maintain required RPM'],
    },
    {
      feature: 'Oil radiator, air cooling intake and outlet shutters',
      details: [
        'Manual control',
        'Air cooking intake shutters should always be open except to avoid overcooling (e.g. dive with idle throttle)',
      ],
    },
    {
      feature: 'Trimmers',
      details: ['Pitch, yaw'],
    },
    {
      feature: 'Automatic wing slats',
      details: ['Deploy automatically at high angle of attack, which makes pre-stall softer'],
    },
    {
      feature: 'Flaps',
      details: ['Can be extended up to 60°'],
    },
    {
      feature: 'Tail wheel',
      details: ['Rotates freely and does not have a lock'],
    },
    {
      feature: 'Wheel brakes',
      details: ['Differential brakes with shared control lever', 'Differential is applied via rudder pedals'],
    },
    {
      feature: 'Canopy',
      details: [
        'Impossible to open/close at high speed',
        'Has no emergency release; bailout requires speed drop to open manually',
      ],
    },
  ],
  procedures: {
    engineStart: [],
    takeoff: [],
    landing: [],
  },
};
