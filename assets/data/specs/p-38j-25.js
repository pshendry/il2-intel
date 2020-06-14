import Q from 'js-quantities';

export default {
  id: 'p-38j-25',
  type: 'P-38',
  variant: 'P-38J-25',
  combatDebut: new Date(1944), // "1944"
  airframe: {
    indicatedStallSpeedRanges: {
      takeoffLanding: [Q('93 mi/h'), Q('115 mi/h')],
      flight: [Q('111 mi/h'), Q('137 mi/h')],
    },
    diveSpeedLimit: Q('450 mi/h'),
    maxLoadFactor: Q('9.0 gee'),
    stallAngles: {
      landing: Q('11.5 deg'),
      flight: Q('14.1 deg'),
    },
    takeoffSpeedRange: [Q('100 mi/h'), Q('110 mi/h')],
    glideslopeSpeedRange: [Q('115 mi/h'), Q('130 mi/h')],
    landingSpeedRange: [Q('95 mi/h'), Q('110 mi/h')],
    landingAngle: Q('7.0 deg'),
    length: Q('10.89 m'),
    wingspan: Q('15.85 m'),
    wingSurface: Q('30.4 m^2'),
  },
  characteristics: {
    maxTrueAirspeeds: [
      {
        altitude: Q('0 m'),
        engineMode: 'Combat',
        speed: Q('336 mi/h'),
      },
      {
        altitude: Q('8500 m'),
        engineMode: 'Combat',
        speed: Q('416 mi/h'),
      },
      {
        altitude: Q('0 m'),
        engineMode: 'WEP',
        speed: Q('346 mi/h'),
      },
      {
        altitude: Q('7860 m'),
        engineMode: 'WEP',
        speed: Q('419 mi/h'),
      },
    ],
    maxPerformance: {
      climb: [
        {
          altitude: Q('0 m'),
          engineMode: 'Combat',
          speed: Q('195 mi/h'),
          rate: Q('20.4 m/s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Combat',
          speed: Q('200 mi/h'),
          rate: Q('19.1 m/s'),
        },
        {
          altitude: Q('6000 m'),
          engineMode: 'Combat',
          speed: Q('200 mi/h'),
          rate: Q('15.0 m/s'),
        },
      ],
      turn: [
        {
          altitude: Q('0 m'),
          engineMode: 'WEP',
          speed: Q('195 mi/h'),
          time: Q('20.0 s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'WEP',
          speed: Q('200 mi/h'),
          time: Q('28.3 s'),
        },
      ],
    },
    serviceCeiling: Q('40500 ft'),
    flightEndurance: [
      {
        altitude: Q('3000 m'),
        speed: Q('350 km/h'),
        time: Q('5.8 h'),
      },
    ],
  },
  engine: {
    model: 'Allisaon V-1710-89 (left) and V-1710-91 (right)',
    maxPowers: [
      {
        altitude: Q('0 ft'),
        mode: 'WEP',
        power: Q('1550 hp'),
      },
      {
        altitude: Q('25800 ft'),
        mode: 'WEP',
        power: Q('1390 hp'),
      },
    ],
    modes: [
      {
        name: 'Cruise',
        limit: null,
        rpm: Q('2600 rpm'),
        manifoldPressure: Q('44 inHg'),
      },
      {
        name: 'Combat',
        limit: Q('15 min'),
        rpm: Q('3000 rpm'),
        manifoldPressure: Q('54 inHg'),
      },
      {
        name: 'WEP',
        limit: Q('5 min'),
        rpm: Q('3000 rpm'),
        manifoldPressure: Q('60 inHg'),
      },
    ],
    ratedTemps: [
      {
        name: 'Oil',
        range: [Q('105 degC')],
      },
      {
        name: 'Water',
        range: [Q('85 degC')],
      },
    ],
    maxTemps: [
      {
        name: 'Oil',
        value: Q('115 degC'),
      },
      {
        name: 'Water',
        value: Q('105 degC'),
      },
    ],
    superchargerGearShiftAltitude: null,
  },
  load: {
    emptyWeight: Q('14013 lb'),
    minimumWeight: Q('14687 lb'),
    standardWeight: Q('17395 lb'),
    maxTakeoffWeight: Q('22295 lb'),
    fuelLoad: [Q('1132 kg'), Q('1575 L')],
  },
  armament: {
    forwardFiring: {
      standard: [
        {
          qty: 1,
          name: 'M2',
          type: '20mm gun',
          count: 150,
          details: 'nose-mounted',
        },
        {
          qty: 4,
          name: 'M2.50',
          type: '12.7mm machine gun',
          count: 300,
          details: 'nose-mounted',
        },
      ],
      modifications: [],
    },
    defensive: [],
    bombs: [
      {
        qty: 6,
        name: 'M64',
        type: '500 lb general purpose bomb',
        details: null,
      },
      {
        qty: 4,
        name: 'M65',
        type: '1000 lb general purpose bomb',
        details: null,
      },
      {
        qty: 2,
        name: 'M66',
        type: '2000 lb general purpose bomb',
        details: null,
      },
    ],
    rockets: [
      {
        qty: 6,
        name: 'M8',
        type: 'unguided rockets',
        details: null,
      },
    ],
  },
  features: [
    {
      feature: 'Supercharger',
      details: ['Automatic', 'Single-stage'],
    },
    {
      feature: 'Turbo-supercharger',
      details: ['Automatic', 'RPM changes relatively slowly'],
    },
    {
      feature: 'Mixture control',
      details: ['Automatic when set to Auto Rich (70%) or Auto Lean (30%)'],
    },
    {
      feature: 'Governor',
      details: [
        'Automatically controls prop pitch to maintain required RPM',
        'Can be disabled for manual prop pitch control',
      ],
    },
    {
      feature: 'Trimmers',
      details: ['Pitch, yaw'],
    },
    {
      feature: 'Flaps',
      details: ['Can extend up to 40°'],
    },
    {
      feature: 'Hydraulic aileron actuators',
      details: [
        'Makes high-performance rolls at high speed possible',
        'Can only operate with sufficient hydraulic pressure (both engines running); turns on/off automatically in-game',
      ],
    },
    {
      feature: 'Wheel brakes',
      details: ['Independent left and right brakes'],
    },
    {
      feature: 'Parking brake',
      details: [],
    },
    {
      feature: 'Landing gear indicator lamp',
      details: [
        'Lights when the gear is neither extended nor retracted',
        'Nose wheel extension can also be visually checked via its reflection on the engine nacelles',
      ],
    },
    {
      feature: 'Fuel gauges',
      details: [
        'Separate gauges for left and right tank pairs',
        'Has warning lights for low fuel in outer wing (primary) tanks',
      ],
    },
    {
      feature: 'Canopy',
      details: [
        'Has an emergency release for bailouts',
        'Side windows can be lowered during flight, but this can cause excessive shaking of the plane',
      ],
    },
    {
      feature: 'Salvo controller',
      details: ['Bomb modes: 1, 2', 'Rocket modes: 1 / 2 / 3 / All'],
    },
  ],
  procedures: {
    engineStart: [],
    takeoff: [],
    landing: [],
  },
  trainingVideos: {
    cockpit: 'https://www.youtube.com/watch?v=DMC0M6xV3xo&t=9s',
    engineStart: 'https://www.youtube.com/watch?v=DMC0M6xV3xo&t=4m33s',
    takeoff: 'https://www.youtube.com/watch?v=DMC0M6xV3xo&t=8m06s',
    landing: 'https://www.youtube.com/watch?v=DMC0M6xV3xo&t=10m25s',
  },
};
