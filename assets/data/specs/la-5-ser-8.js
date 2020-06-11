import Q from 'js-quantities';

export default {
  id: 'la-5-ser-8',
  type: 'La-5',
  variant: 'La-5 series 8',
  combatDebut: new Date(1942, 8),
  airframe: {
    indicatedStallSpeedRanges: {
      takeoffLanding: [Q('147 km/h'), Q('162 km/h')],
      flight: [Q('165 km/h'), Q('183 km/h')],
    },
    diveSpeedLimit: Q('720 km/h'),
    maxLoadFactor: Q('10 gee'),
    stallAngles: {
      landing: Q('15.1 deg'),
      flight: Q('22.7 deg'),
    },
    takeoffSpeedRange: [Q('170 km/h'), Q('200 km/h')],
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
        altitude: Q('3000 m'),
        engineMode: 'Nominal',
        speed: Q('571 km/h'),
      },
      {
        altitude: Q('6500 m'),
        engineMode: 'Nominal',
        speed: Q('603 km/h'),
      },
      {
        altitude: Q('0 m'),
        engineMode: 'Boosted',
        speed: Q('544 km/h'),
      },
    ],
    maxPerformance: {
      climb: [
        {
          altitude: Q('0 m'),
          engineMode: 'Boosted',
          speed: Q('270 km/h'),
          rate: Q('18 m/s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Boosted',
          speed: Q('270 km/h'),
          rate: Q('13.3 m/s'),
        },
        {
          altitude: Q('6000 m'),
          engineMode: 'Boosted',
          speed: Q('270 km/h'),
          rate: Q('8.2 m/s'),
        },
      ],
      turn: [
        {
          altitude: Q('0 m'),
          engineMode: 'Boosted',
          speed: Q('270 km/h'),
          time: Q('23.4 s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Boosted',
          speed: Q('270 km/h'),
          time: Q('35.3 s'),
        },
      ],
    },
    serviceCeiling: Q('9500 m'),
    flightEndurance: [
      {
        altitude: Q('3000 m'),
        speed: Q('350 km/h'),
        time: Q('1.9 h'),
      },
    ],
  },
  engine: {
    model: 'M-82',
    maxPowers: [
      {
        altitude: Q('0 m'),
        mode: 'Nominal',
        power: Q('1400 hp'),
      },
      {
        altitude: Q('2100 m'),
        mode: 'Nominal',
        power: Q('1550 hp'),
      },
      {
        altitude: Q('5300 m'),
        mode: 'Nominal',
        power: Q('1335 hp'),
      },
      {
        altitude: Q('0 m'),
        mode: 'Boosted',
        power: Q('1700 hp'),
      },
    ],
    modes: [
      {
        name: 'Nominal',
        limit: null,
        rpm: Q('2400 rpm'),
        manifoldPressure: Q('950 mmHg'),
      },
      {
        name: 'Boosted',
        limit: Q('5 min'),
        rpm: Q('2400 rpm'),
        manifoldPressure: Q('1140 mmHg'),
      },
    ],
    ratedTemps: [
      {
        name: 'Oil',
        range: [Q('55 degC'), Q('90 degC')],
      },
      {
        name: 'Cylinder head',
        range: [Q('140 degC'), Q('210 degC')],
      },
    ],
    maxTemps: [
      {
        name: 'Oil',
        value: Q('125 degC'),
      },
      {
        name: 'Cylinder head',
        value: Q('215 degC'),
      },
    ],
    superchargerGearShiftAltitude: Q('3500 m'),
  },
  load: {
    emptyWeight: Q('2648 kg'),
    minimumWeight: Q('2928 kg'),
    standardWeight: Q('3353 kg'),
    maxTakeoffWeight: Q('3593 kg'),
    fuelLoad: [Q('370 kg'), Q('521 L')],
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
      details: ['Has a boost mode enabled by pushing boost knob and increase MP to 1140 mmHg'],
    },
    {
      feature: 'Supercharger',
      details: ['Manual control', 'Two-stage (shift at 3500 m)'],
    },
    {
      feature: 'Mixture control',
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
      details: ['Pitch, roll, yaw'],
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
        'Has a weak lock when open; may close in a steep dive',
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
