import Q from 'js-quantities';

export default {
  id: 'u-2vs',
  type: 'U-2',
  variant: 'U-2VS',
  combatDebut: new Date(1941, 6),
  airframe: {
    indicatedStallSpeedRanges: {
      takeoffLanding: null,
      flight: [Q('63 km/h'), Q('70 km/h')],
    },
    diveSpeedLimit: Q('240 km/h'),
    maxLoadFactor: Q('6.5 gee'),
    stallAngles: {
      landing: null,
      flight: Q('19 deg'),
    },
    takeoffSpeedRange: [Q('75 km/h'), Q('85 km/h')],
    glideslopeSpeedRange: [Q('100 km/h')],
    landingSpeedRange: [Q('60 km/h'), Q('70 km/h')],
    landingAngle: Q('12 deg'),
    length: Q('8.17 m'),
    wingspan: Q('11.4 m'),
    wingSurface: Q('33.15 m^2'),
  },
  characteristics: {
    maxTrueAirspeeds: [
      {
        altitude: Q('0 m'),
        engineMode: 'Takeoff',
        speed: Q('151.7 km/h'),
      },
      {
        altitude: Q('500 m'),
        engineMode: 'Takeoff',
        speed: Q('150.3 km/h'),
      },
      {
        altitude: Q('1000 m'),
        engineMode: 'Takeoff',
        speed: Q('148.9 km/h'),
      },
    ],
    maxPerformance: {
      climb: [
        {
          altitude: Q('0 m'),
          engineMode: 'Takeoff',
          speed: Q('95 m/s'),
          rate: Q('2.7 m/s'),
        },
        {
          altitude: Q('500 m'),
          engineMode: 'Takeoff',
          speed: Q('95 m/s'),
          rate: Q('1.3 m/s'),
        },
      ],
      turn: [
        {
          altitude: Q('0 m'),
          engineMode: 'Takeoff',
          speed: Q('110 km/h'),
          time: Q('22.5 s'),
        },
      ],
    },
    serviceCeiling: Q('3700 m'),
    flightEndurance: [
      {
        altitude: Q('500 m'),
        speed: Q('90 km/h'),
        time: Q('5 h'),
      },
    ],
  },
  engine: {
    model: 'M-11D',
    maxPowers: [
      {
        altitude: Q('0 m'),
        mode: 'Continuous',
        power: Q('107 hp'),
      },
      {
        altitude: Q('500 m'),
        mode: 'Continuous',
        power: Q('100 hp'),
      },
      {
        altitude: Q('1000 m'),
        mode: 'Continous',
        power: Q('95 hp'),
      },
      {
        altitude: Q('0 m'),
        mode: 'Nominal',
        power: Q('118 hp'),
      },
      {
        altitude: Q('500 m'),
        mode: 'Nominal',
        power: Q('110 hp'),
      },
      {
        altitude: Q('1000 m'),
        mode: 'Nominal',
        power: Q('105 hp'),
      },
      {
        altitude: Q('0 m'),
        mode: 'Takeoff',
        power: Q('125 hp'),
      },
    ],
    modes: [
      {
        name: 'Continuous',
        limit: null,
        rpm: Q('1640 rpm'),
      },
      {
        name: 'Nominal',
        limit: null,
        rpm: Q('1700 rpm'),
      },
      {
        name: 'Takeoff',
        limit: Q('5 min'),
        rpm: Q('1750 rpm'),
      },
      {
        name: 'Emergency',
        limit: Q('5 min'),
        rpm: Q('1840 rpm'),
      },
    ],
    ratedTemps: [
      {
        name: 'Oil',
        range: [Q('70 degC'), Q('80 degC')],
      },
    ],
    maxTemps: [
      {
        name: 'Oil',
        value: Q('115 degC'),
      },
    ],
    superchargerGearShiftAltitude: null,
  },
  load: {
    emptyWeight: Q('748 kg'),
    minimumWeight: Q('927 kg'),
    standardWeight: Q('1007 kg'),
    maxTakeoffWeight: Q('1350 kg'),
    fuelLoad: [Q('90 kg'), Q('126 L')],
  },
  armament: {
    forwardFiring: {
      standard: [],
      modifications: [
        {
          qty: 1,
          name: 'ShKAS',
          type: '7.62mm machine gun',
          count: 500,
          details: 'wing-mounted',
        },
      ],
    },
    defensive: [
      {
        qty: 1,
        name: 'ShKAS',
        type: '7.62mm machine gun',
        count: 400,
        details: 'Rear',
      },
    ],
    bombs: [
      {
        qty: 6,
        name: 'FAB-50sv',
        type: '50 kg general purpose bomb',
      },
      {
        qty: 2,
        name: 'FAB-100M',
        type: '104 kg general purpose bomb',
      },
    ],
    rockets: [],
  },
  features: [
    {
      feature: 'Mixture control',
      details: ['Manual control'],
    },
    {
      feature: 'Propeller pitch control',
      details: ['Manual control'],
    },
    {
      feature: 'Tail skid',
      details: ['Linked to the rudder (8° max tilt)'],
    },
    {
      feature: 'Electronics',
      details: [
        'No generator in default configuration; electric lights and Pitot tube warmer fed from battery',
        'RSI-4 radio station modification adds generator',
      ],
    },
  ],
  procedures: {
    engineStart: [],
    takeoff: [],
    landing: [],
  },
  trainingVideos: {
    cockpit: 'https://www.youtube.com/watch?v=El7V_tN5n5E&t=5s',
    engineStart: null,
    takeoff: 'https://www.youtube.com/watch?v=El7V_tN5n5E&t=3m03s',
    landing: 'https://www.youtube.com/watch?v=El7V_tN5n5E&t=5m47s',
  },
};
