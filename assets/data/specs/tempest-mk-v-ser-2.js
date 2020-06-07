import Q from 'js-quantities';

export default {
  id: 'tempest-mk-5-ser-2',
  type: 'Tempest',
  variant: 'Tempest Mk.5 series 2',
  combatDebut: new Date(1944, 4),
  airframe: {
    indicatedStallSpeedRanges: {
      takeoffLanding: [Q('128 km/h'), Q('149 km/h')],
      flight: [Q('150 km/h'), Q('174 km/h')],
    },
    diveSpeedLimit: Q('870 km/h'),
    maxLoadFactor: Q('12.0 gee'),
    stallAngles: {
      landing: Q('13.7 deg'),
      flight: Q('17.5 deg'),
    },
    takeoffSpeedRange: [Q('150 km/h'), Q('170 km/h')],
    glideslopeSpeedRange: [Q('170 km/h'), Q('200 km/h')],
    landingSpeedRange: [Q('150 km/h'), Q('155 km/h')],
    landingAngle: Q('11.6 deg'),
    length: Q('10.26 m'),
    wingspan: Q('12.50 m'),
    wingSurface: Q('27.81 m^2'),
  },
  characteristics: {
    maxTrueAirspeeds: [
      {
        altitude: Q('0 m'),
        engineMode: 'Combat',
        speed: Q('600 km/h'),
      },
      {
        altitude: Q('1950 m'),
        engineMode: 'Combat',
        speed: Q('664 km/h'),
      },
      {
        altitude: Q('5640 m'),
        engineMode: 'Combat',
        speed: Q('703 km/h'),
      },
    ],
    maxPerformance: {
      climb: [
        {
          altitude: Q('0 m'),
          engineMode: 'Combat',
          speed: Q('270 km/h'),
          rate: Q('21.0 m/s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Combat',
          speed: Q('270 km/h'),
          rate: Q('15.1 m/s'),
        },
        {
          altitude: Q('6000 m'),
          engineMode: 'Combat',
          speed: Q('270 km/h'),
          rate: Q('12.1 m/s'),
        },
      ],
      turn: [
        {
          altitude: Q('0 m'),
          engineMode: 'Combat',
          speed: Q('270 km/h'),
          time: Q('20.0 s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Combat',
          speed: Q('270 km/h'),
          time: Q('27.8 s'),
        },
      ],
    },
    serviceCeiling: Q('10800 m'),
    flightEndurance: [
      {
        altitude: Q('3000 m'),
        speed: Q('350 km/h'),
        time: Q('3.3 h'),
      },
    ],
  },
  engine: {
    model: 'Napier Sabre IIA',
    maxPowers: [
      {
        altitude: Q('0 ft'),
        mode: 'Combat',
        power: Q('2180 hp'),
      },
      {
        altitude: Q('11500 ft'),
        mode: 'Combat',
        power: Q('1830 hp'),
      },
    ],
    modes: [
      {
        name: 'Max Cruising',
        limit: null,
        rpm: Q('3150 rpm'),
        boost: '+4.5',
      },
      {
        name: 'Climb',
        limit: Q('1 h'),
        rpm: Q('3700 rpm'),
        boost: '+7',
      },
      {
        name: 'Combat',
        limit: Q('5 min'),
        rpm: Q('3700 rpm'),
        boost: '+9',
      },
    ],
    ratedTemps: [
      {
        name: 'Oil',
        range: [Q('60 degC'), Q('90 degC')],
      },
      {
        name: 'Water',
        range: [Q('65 degC'), Q('125 degC')],
      },
    ],
    maxTemps: [
      {
        name: 'Oil',
        value: Q('95 degC'),
      },
      {
        name: 'Water',
        value: Q('130 degC'),
      },
    ],
    superchargerGearShiftAltitude: null,
  },
  load: {
    emptyWeight: Q('4354 kg'),
    minimumWeight: Q('4585 kg'),
    standardWeight: Q('5221 kg'),
    maxTakeoffWeight: Q('6190 kg'),
    fuelLoad: [Q('516 kg'), Q('718 L')],
  },
  armament: {
    forwardFiring: {
      standard: [
        {
          qty: 4,
          name: 'Hispano Mk.V',
          type: '20mm gun',
          count: 150,
          details: 'wing-mounted',
        },
      ],
      modifications: [],
    },
    defensive: [],
    bombs: [
      {
        qty: 2,
        name: '500 lb. M.C.',
        type: '500 lb general purpose bomb',
        details: null,
      },
      {
        qty: 2,
        name: '1000 lb. M.C.',
        type: '1000 lb general purpose bomb',
        details: null,
      },
    ],
    rockets: [],
  },
  features: [
    {
      feature: 'Supercharger',
      details: ['Manual control (switch at 9500 ft)'],
    },
    {
      feature: 'Mixture',
      details: ['Automatic when set to NORMAL (50%)'],
    },
    {
      feature: 'Governor',
      details: ['Automatically controls prop pitch to maintain required RPM'],
    },
    {
      feature: 'Oil & water outlet radiator shutters',
      details: ['Manual control'],
    },
    {
      feature: 'Trimmers',
      details: ['Pitch, yaw'],
    },
    {
      feature: 'Flaps',
      details: ['Can extend up to 80°'],
    },
    {
      feature: 'Tail wheel',
      details: ['Rotates freely and does not have a lock'],
    },
    {
      feature: 'Mixture',
      details: ['Automatic when set to full rich'],
    },
    {
      feature: 'Wheel brakes',
      details: ['Independent left and right brakes'],
    },
    {
      feature: 'Landing gear warning light',
      details: ['Lights up if throttle is set to low (≤ 33%) with landing gear retracted'],
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
      details: ['Projected directly onto windscreen', 'Can be adjusted for base / range'],
    },
  ],
  procedures: {
    engineStart: [],
    takeoff: [],
    landing: [],
  },
};
