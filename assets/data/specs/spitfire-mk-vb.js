import Q from 'js-quantities';

export default {
  id: 'spitfire-mk-vb',
  type: 'Spitfire',
  variant: 'Spitfire Mk.VB',
  combatDebut: new Date(1941), // "Winter 1941"
  airframe: {
    indicatedStallSpeedRanges: {
      takeoffLanding: [Q('129 km/h'), Q('135 km/h')],
      flight: [Q('137 km/h'), Q('144 km/h')],
    },
    diveSpeedLimit: Q('725 km/h'),
    maxLoadFactor: Q('12.5 gee'),
    stallAngles: {
      landing: Q('16.0 deg'),
      flight: Q('18.8 deg'),
    },
    takeoffSpeedRange: [Q('160 km/h'), Q('170 km/h')],
    glideslopeSpeedRange: [Q('145 km/h'), Q('160 km/h')],
    landingSpeedRange: [Q('130 km/h'), Q('135 km/h')],
    landingAngle: Q('12.5 deg'),
    length: Q('9.2 m'),
    wingspan: Q('11.21 m'),
    wingSurface: Q('22.48 m^2'),
  },
  characteristics: {
    // Merlin 46 engine
    maxTrueAirspeeds: [
      {
        altitude: Q('0 m'),
        engineMode: '3000 RPM / boost +9',
        speed: Q('457 km/h'),
      },
      {
        altitude: Q('7400 m'),
        engineMode: '3000 RPM / boost +9',
        speed: Q('597 km/h'),
      },
      {
        altitude: Q('0 m'),
        engineMode: '3000 RPM / boost +16',
        speed: Q('515 km/h'),
      },
      {
        altitude: Q('5000 m'),
        engineMode: '3000 RPM / boost +16',
        speed: Q('604 km/h'),
      },
    ],
    maxPerformance: {
      climb: [
        {
          altitude: Q('0 m'),
          engineMode: '2850 RPM / boost +9',
          speed: Q('270 km/h'),
          rate: Q('12.9 m/s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: '2850 RPM / boost +9',
          speed: Q('260 km/h'),
          rate: Q('13.1 m/s'),
        },
        {
          altitude: Q('6000 m'),
          engineMode: '2850 RPM / boost +9',
          speed: Q('260 km/h'),
          rate: Q('12.0 m/s'),
        },
      ],
      turn: [
        {
          altitude: Q('0 m'),
          engineMode: '3000 RPM / boost +9',
          speed: Q('270 km/h'),
          time: Q('25 s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: '3000 RPM / boost +9',
          speed: Q('260 km/h'),
          time: Q('30 s'),
        },
      ],
    },
    serviceCeiling: Q('12000 m'),
    // TODO support multiple engines
    // Merlin 45 engine
    // maxTrueAirspeeds: [
    //   {
    //     altitude: Q('0 m'),
    //     engineMode: '3000 RPM / boost +9',
    //     speed: Q('480 km/h'),
    //   },
    //   {
    //     altitude: Q('6000 m'),
    //     engineMode: '3000 RPM / boost +9',
    //     speed: Q('590 km/h'),
    //   },
    //   {
    //     altitude: Q('0 m'),
    //     engineMode: '3000 RPM / boost +16',
    //     speed: Q('535 km/h'),
    //   },
    //   {
    //     altitude: Q('3500 m'),
    //     engineMode: '3000 RPM / boost +16',
    //     speed: Q('596 km/h'),
    //   },
    // ],
    // maxPerformance: {
    //   climb: [
    //     {
    //       altitude: Q('0 m'),
    //       engineMode: '2850 RPM / boost +9',
    //       speed: Q('270 km/h'),
    //       rate: Q('14.5 m/s'),
    //     },
    //     {
    //       altitude: Q('3000 m'),
    //       engineMode: '2850 RPM / boost +9',
    //       speed: Q('260 km/h'),
    //       rate: Q('14.7 m/s'),
    //     },
    //     {
    //       altitude: Q('6000 m'),
    //       engineMode: '2850 RPM / boost +9',
    //       speed: Q('260 km/h'),
    //       rate: Q('11.4 m/s'),
    //     },
    //   ],
    //   turn: [
    //     {
    //       altitude: Q('0 m'),
    //       engineMode: '3000 RPM / boost +9',
    //       speed: Q('270 km/h'),
    //       time: Q('22 s'),
    //     },
    //     {
    //       altitude: Q('3000 m'),
    //       engineMode: '3000 RPM / boost +9',
    //       speed: Q('260 km/h'),
    //       time: Q('28.2 s'),
    //     },
    //   ],
    // },
    // serviceCeiling: Q('11200 m'),
    flightEndurance: [
      {
        altitude: Q('3000 m'),
        speed: Q('350 km/h'),
        time: Q('1.75 h'),
      },
    ],
  },
  engine: {
    model: 'Merlin 46',
    maxPowers: [
      {
        altitude: Q('0 ft'),
        mode: 'Take-off',
        power: Q('1100 hp'),
      },
      {
        altitude: Q('19000 ft'),
        mode: 'International',
        power: Q('1115 hp'),
      },
      {
        altitude: Q('14000 ft'),
        mode: 'Emergency',
        power: Q('1400 hp'),
      },
    ],
    // TODO support multiple engines
    // model: 'Merlin 45',
    // maxPowers: [
    //   {
    //     altitude: Q('0 ft'),
    //     mode: 'Take-off',
    //     power: Q('1185 hp'),
    //   },
    //   {
    //     altitude: Q('14200 ft'),
    //     mode: 'International',
    //     power: Q('1170 hp'),
    //   },
    //   {
    //     altitude: Q('9000 ft'),
    //     mode: 'Take-off',
    //     power: Q('1455 hp'),
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
        limit: Q('30 m'),
        rpm: Q('2850 rpm'),
        boost: '+9',
      },
      {
        name: 'Emergency',
        limit: Q('5 min'),
        rpm: Q('3000 rpm'),
        boost: '+16',
      },
    ],
    ratedTemps: [
      {
        name: 'Oil',
        range: [Q('70 degC'), Q('85 degC')],
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
        value: Q('125 degC'),
      },
    ],
    superchargerGearShiftAltitude: null,
  },
  load: {
    emptyWeight: Q('2415 kg'),
    minimumWeight: Q('2732 kg'),
    standardWeight: Q('2979 kg'),
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
          count: 60,
          details: 'wing-mounted',
        },
        {
          qty: 4,
          name: 'Browning .303',
          type: '7.92 machine gun',
          count: 350,
          details: 'wing-mounted',
        },
      ],
      modifications: [],
    },
    defensive: [],
    bombs: [],
    rockets: [],
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
      details: ['Automatic', 'Single-stage'],
    },
    {
      feature: 'Mixture control',
      details: ['Automatic when set to full rich'],
    },
    {
      feature: 'Oil & water radiator shutters',
      details: ['Water radiator is manually controlled', 'Oil radiator is unadjustable'],
    },
    {
      feature: 'Flaps',
      details: ['Can only be fully extended', 'Aircraft is unstable with extended flaps (limit speed to ≤ 150 mph)'],
    },
    {
      feature: 'Trimmers',
      details: ['Pitch, yaw'],
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
      feature: 'Low speed warning siren',
      details: ['Sounds when the throttle is set to low position with landing gear retracted'],
    },
    {
      feature: 'Canopy',
      details: ['Cannot be opened at high speed, but has an emergency release for bailouts'],
    },
    {
      feature: 'Upper/bottom formation light',
      details: [],
    },
    {
      feature: 'Gunsight',
      details: ['Adjustable: target base and distance can be set', 'Has a sliding sun filter'],
    },
  ],
  procedures: {
    engineStart: [],
    takeoff: [],
    landing: [],
  },
};
