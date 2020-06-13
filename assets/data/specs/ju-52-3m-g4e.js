import Q from 'js-quantities';

export default {
  id: 'ju-52-3m-g4e',
  type: 'Ju 52',
  variant: 'Ju 52/3m g4e',
  combatDebut: new Date(1936), // "1936"
  airframe: {
    indicatedStallSpeedRanges: {
      takeoffLanding: [Q('92 km/h'), Q('109 km/h')],
      flight: [Q('105 km/h'), Q('117 km/h')],
    },
    diveSpeedLimit: Q('330 km/h'),
    maxLoadFactor: Q('4.0 gee'),
    stallAngles: {
      landing: Q('17.2 deg'),
      flight: Q('20 deg'),
    },
    takeoffSpeedRange: [Q('100 km/h'), Q('120 km/h')],
    glideslopeSpeedRange: [Q('140 km/h'), Q('155 km/h')],
    landingSpeedRange: [Q('95 km/h'), Q('110 km/h')],
    landingAngle: Q('11.7 deg'),
    length: Q('18.9 m'),
    wingspan: Q('29.25 m'),
    wingSurface: Q('111.5 m^2'),
  },
  characteristics: {
    maxTrueAirspeeds: [
      {
        altitude: Q('0 m'),
        engineMode: 'Climb',
        speed: Q('260 km/h'),
      },
      {
        altitude: Q('3000 m'),
        engineMode: 'Climb',
        speed: Q('258 km/h'),
      },
      {
        altitude: Q('6000 m'),
        engineMode: 'Climb',
        speed: Q('241 km/h'),
      },
    ],
    maxPerformance: {
      climb: [
        {
          altitude: Q('0 m'),
          engineMode: 'Climb',
          speed: Q('165 km/h'),
          rate: Q('6.9 m/s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Climb',
          speed: Q('165 km/h'),
          rate: Q('4.2 m/s'),
        },
        {
          altitude: Q('6000 m'),
          engineMode: 'Climb',
          speed: Q('165 km/h'),
          rate: Q('1.4 m/s'),
        },
      ],
      turn: [
        {
          altitude: Q('0 m'),
          engineMode: 'Take-off',
          speed: Q('165 km/h'),
          time: Q('24.0 s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Climb',
          speed: Q('165 km/h'),
          time: Q('35.4 s'),
        },
      ],
    },
    serviceCeiling: Q('6800 m'),
    flightEndurance: [
      {
        altitude: Q('3000 m'),
        speed: Q('205 km/h'),
        time: Q('5.3 h'),
      },
    ],
  },
  engine: {
    model: 'BMW-132a',
    maxPowers: [
      {
        altitude: Q('0 m'),
        mode: 'Climb',
        power: Q('575 hp'),
      },
      {
        altitude: Q('900 m'),
        mode: 'Climb',
        power: Q('590 hp'),
      },
      {
        altitude: Q('0 m'),
        mode: 'Take-off',
        power: Q('640 hp'),
      },
      {
        altitude: Q('900 m'),
        mode: 'Take-off',
        power: Q('660 hp'),
      },
    ],
    modes: [
      {
        name: 'Nominal',
        limit: null,
        rpm: Q('1925 rpm'),
      },
      {
        name: 'Climb',
        limit: Q('30 min'),
        rpm: Q('1975 rpm'),
      },
      {
        name: 'Take-off',
        limit: Q('5 min'),
        rpm: Q('2050 rpm'),
      },
    ],
    ratedTemps: [
      {
        name: 'Oil intake',
        range: [Q('60 degC')],
      },
      {
        name: 'Oil output',
        range: [Q('80 degC')],
      },
    ],
    maxTemps: [
      {
        name: 'Oil intake',
        range: [Q('80 degC')],
      },
      {
        name: 'Oil output',
        range: [Q('100 degC')],
      },
    ],
    superchargerGearShiftAltitude: null,
  },
  load: {
    emptyWeight: Q('6305 kg'),
    minimumWeight: Q('7017 kg'),
    standardWeight: Q('10003 kg'),
    maxTakeoffWeight: Q('11333 kg'),
    fuelLoad: [Q('1824 kg'), Q('2400 L')],
  },
  armament: {
    forwardFiring: {
      standard: [],
      modifications: [],
    },
    defensive: [
      {
        qty: 1,
        name: 'MG 15',
        type: '7.92mm machine gun',
        count: 1125,
        details: 'Top',
      },
    ],
    bombs: [],
    rockets: [],
  },
  features: [
    {
      feature: 'Supercharger',
      details: ['Automatic', 'Single-stage'],
    },
    {
      feature: 'Mixture control',
      details: ['Manual'],
    },
    {
      feature: 'Propellers',
      details: ['All three are fixed-pitch, so thrust is controlled only by throttle'],
    },
    {
      feature: 'Radiator bypass valve & engine cowls',
      details: ['Manual control'],
    },
    {
      feature: 'Trimmers',
      details: ['Horizontal stabilizer'],
    },
    {
      feature: 'Flaps',
      details: [
        'Can be controlled simultaneously with horizontal stabilizer',
        'The two systems can be linked/unlinked via flaps controls',
        "It's possible to render the system inoperable by deviating from standard procedure",
      ],
    },
    {
      feature: 'Tail wheel',
      details: ['Rotates freely and does not have a lock'],
    },
    {
      feature: 'Wheel brakes',
      details: ["Separate brakes, engaged by setting the corresponding side's throttle to ≤ 20%"],
    },
    {
      feature: 'Parking brake',
      details: [],
    },
    {
      feature: 'Fuel gauges',
      details: ['Located directly on the engine nacelles'],
    },
    {
      feature: 'Oil gauges',
      details: ['Located directly on the engine nacelles'],
    },
    {
      feature: 'Cargo unload doors',
      details: ['Can be opened on the ground only'],
    },
    {
      feature: 'Paratrooper/cargo drop',
      details: ['Left passenger door must be removed before flight', 'Use "bomp drop" button to drop'],
    },
  ],
  procedures: {
    engineStart: [],
    takeoff: [],
    landing: [],
  },
};
