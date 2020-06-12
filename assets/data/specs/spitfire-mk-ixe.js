import Q from 'js-quantities';

export default {
  id: 'spitfire-mk-ixe',
  type: 'Spitfire',
  variant: 'Spitfire Mk.IXe',
  combatDebut: new Date(1942, 5),
  airframe: {
    indicatedStallSpeedRanges: {
      takeoffLanding: [Q('135 km/h'), Q('154 km/h')],
      flight: [Q('143 km/h'), Q('163 km/h')],
    },
    diveSpeedLimit: Q('725 km/h'),
    maxLoadFactor: Q('12.5 gee'),
    stallAngles: {
      landing: Q('16.0 deg'),
      flight: Q('18.8 deg'),
    },
    takeoffSpeedRange: [Q('185 km/h'), Q('195 km/h')],
    glideslopeSpeedRange: [Q('165 km/h'), Q('185 km/h')],
    landingSpeedRange: [Q('150 km/h'), Q('155 km/h')],
    landingAngle: Q('12.5 deg'),
    length: Q('9.65 m'),
    wingspan: Q('11.21 m'),
    wingSurface: Q('22.48 m^2'),
  },
  characteristics: {
    maxTrueAirspeeds: [
      {
        altitude: Q('0 m'),
        engineMode: '3000 RPM / boost +18',
        speed: Q('532 km/h'),
      },
      {
        altitude: Q('4900 m'),
        engineMode: '3000 RPM / boost +18',
        speed: Q('634 km/h'),
      },
      {
        altitude: Q('8500 m'),
        engineMode: '3000 RPM / boost +18',
        speed: Q('677 km/h'),
      },
    ],
    maxPerformance: {
      climb: [
        {
          altitude: Q('0 m'),
          engineMode: '2850 RPM / boost +12',
          speed: Q('270 km/h'),
          rate: Q('18.5 m/s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: '2850 RPM / boost +12',
          speed: Q('260 km/h'),
          rate: Q('17.5 m/s'),
        },
        {
          altitude: Q('6000 m'),
          engineMode: '2850 RPM / boost +12',
          speed: Q('260 km/h'),
          rate: Q('14.1 m/s'),
        },
      ],
      turn: [
        {
          altitude: Q('0 m'),
          engineMode: '3000 RPM / boost +18',
          speed: Q('270 km/h'),
          time: Q('17.8 s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: '3000 RPM / boost +18',
          speed: Q('260 km/h'),
          time: Q('20.7 s'),
        },
      ],
    },
    serviceCeiling: Q('13000 m'),
    flightEndurance: [
      {
        altitude: Q('3000 m'),
        speed: Q('350 km/h'),
        time: Q('1.66 h'),
      },
    ],
  },
  engine: {
    model: 'Merlin 66',
    maxPowers: [
      {
        altitude: Q('9250 ft'),
        mode: 'International',
        power: Q('1400 hp'),
      },
      {
        altitude: Q('19000 ft'),
        mode: 'International',
        power: Q('1310 hp'),
      },
      {
        altitude: Q('0 ft'),
        mode: 'Take-off',
        power: Q('1320 hp'),
      },
      {
        altitude: Q('5750 ft'),
        mode: 'Emergency',
        power: Q('1705 hp'),
      },
      {
        altitude: Q('16000 ft'),
        mode: 'Emergency',
        power: Q('1580 hp'),
      },
    ],
    // TODO support multiple engines
    // model: 'Merlin 70',
    // maxPowers: [
    //   {
    //     altitude: Q('13500 ft'),
    //     mode: 'International',
    //     power: Q('1375 hp'),
    //   },
    //   {
    //     altitude: Q('25250 ft'),
    //     mode: 'International',
    //     power: Q('1255 hp'),
    //   },
    //   {
    //     altitude: Q('0 ft'),
    //     mode: 'Take-off',
    //     power: Q('1250 hp'),
    //   },
    //   {
    //     altitude: Q('10000 ft'),
    //     mode: 'Emergency',
    //     power: Q('1655 hp'),
    //   },
    //   {
    //     altitude: Q('22250 ft'),
    //     mode: 'Emergency',
    //     power: Q('1475 hp'),
    //   },
    // ],
    modes: [
      {
        name: 'Max Cruising',
        limit: null,
        rpm: Q('2650 rpm'),
        boost: '+7',
      },
      {
        name: 'International',
        limit: Q('1 h'),
        rpm: Q('2850 rpm'),
        boost: '+12',
      },
      {
        name: 'Emergency',
        limit: Q('5 min'),
        rpm: Q('3000 rpm'),
        boost: '+18',
      },
    ],
    ratedTemps: [
      {
        name: 'Oil',
        range: [Q('90 degC')],
      },
      {
        name: 'Water',
        range: [Q('105 degC'), Q('115 degC')],
      },
    ],
    maxTemps: [
      {
        name: 'Oil',
        value: Q('105 degC'),
      },
      {
        name: 'Water',
        value: Q('135 degC'),
      },
    ],
    superchargerGearShiftAltitude: null,
  },
  load: {
    emptyWeight: Q('2530 kg'),
    minimumWeight: Q('2977 kg'),
    standardWeight: Q('3359 kg'),
    maxTakeoffWeight: null,
    fuelLoad: [Q('274 kg'), Q('386 L')],
  },
  armament: {
    forwardFiring: {
      standard: [
        {
          qty: 2,
          name: 'Hispano Mk.II',
          type: '20mm gun',
          count: 120,
          details: 'wing-mounted',
        },
        {
          qty: 2,
          name: 'Browning .50',
          type: '12.7mm machine gun',
          count: 250,
          details: 'wing-mounted',
        },
      ],
      modifications: [],
    },
    defensive: [],
    bombs: [
      {
        qty: 2,
        name: '250 lb. G.P.',
        type: '250 lb general purpose bomb',
        details: null,
      },
      {
        qty: 1,
        name: '500 lb. G.P.',
        type: '500 lb general purpose bomb',
        details: null,
      },
    ],
    rockets: [
      {
        qty: 2,
        name: 'RP-3 A.P. 25 lb. mk.II',
        type: '25 lb armour-piercing rocket',
        details: null,
      },
      {
        qty: 2,
        name: 'RP-3 S.A.P. 60 lb. mk.II',
        type: '60 lb armour-piercing rocket',
        details: null,
      },
    ],
  },
  features: [
    {
      feature: 'Governor',
      details: [
        'Automatically controls manifold pressure when throttle is set to ≥ 33%',
        'Automatically controls prop pitch to maintain required RPM',
      ],
    },
    {
      feature: 'Supercharger',
      details: ['Automatic', 'Two-stage', 'Can be switched to low gear manually'],
    },
    {
      feature: 'Mixture control',
      details: ['Automatic when set to full rich'],
    },
    {
      feature: 'Oil & water radiator shutters',
      details: ['Automatic, with manual mode that opens them completely'],
    },
    {
      feature: 'Trimmers',
      details: ['Pitch, yaw'],
    },
    {
      feature: 'Flaps',
      details: ['Can only extend fully', 'Speed with flaps extended limited to 140 mph'],
    },
    {
      feature: 'Wheel brakes',
      details: ['Differential brakes with shared control lever', 'Differential is applied via rudder pedals'],
    },
    {
      feature: 'Low speed warning siren',
      details: ['Sounds when the throttle is set to low position with landing gear retracted'],
    },
    {
      feature: 'Canopy',
      details: ['Cannot be opened at high speed, but has an emergency release for bailouts'],
    },
    {
      feature: 'Bottom formation light',
      details: [],
    },
    {
      feature: 'Gunsight',
      details: [
        'Gyroscopic reticle automatically calculates deflection',
        'Has 4 modes: fixed, fixed + gyro, gyro, gyro w/ range fixed at 150 yard (night mode)',
        'Target base and distance must be adjusted',
        'Has a sliding sun filter',
      ],
    },
  ],
  procedures: {
    engineStart: [],
    takeoff: [],
    landing: [],
  },
};
