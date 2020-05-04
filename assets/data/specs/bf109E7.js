import Q from 'js-quantities';

export default {
  id: 'bf-109-E-7',
  type: 'Bf 109',
  variant: 'Bf 109 E-7',
  combatDebut: new Date(1940, 7),
  airframe: {
    indicatedStallSpeedRanges: {
      takeoffLanding: [Q('146 km/h'), Q('147 km/h')],
      flight: [Q('152 km/h'), Q('159 km/h')],
    },
    diveSpeedLimit: Q('850 km/h'),
    maxLoadFactor: Q('11 gee'),
    stallAngles: {
      landing: Q('20 deg'),
      flight: Q('16.6 deg'),
    },
    takeoffSpeedRange: [Q('140 km/h'), Q('170 km/h')],
    glideslopeSpeedRange: [Q('180 km/h'), Q('190 km/h')],
    landingSpeedRange: [Q('130 km/h'), Q('140 km/h')],
    landingAngle: Q('14.3 deg'),
    length: Q('8.8 m'),
    wingspan: Q('9.9 m'),
    wingSurface: Q('16.4 m^2'),
  },
  characteristics: {
    maxTrueAirspeeds: [
      {
        altitude: Q('0 m'),
        engineMode: 'Emergency',
        speed: Q('477 km/h'),
      },
      {
        altitude: Q('2000 m'),
        engineMode: 'Emergency',
        speed: Q('520 km/h'),
      },
      {
        altitude: Q('5000 m'),
        engineMode: 'Combat',
        speed: Q('564 km/h'),
      },
    ],
    maxPerformance: {
      climb: [
        {
          altitude: Q('0 m'),
          engineMode: 'Combat',
          speed: Q('270 km/h'),
          rate: Q('14 m/s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Combat',
          speed: Q('270 km/h'),
          rate: Q('13.3 m/s'),
        },
        {
          altitude: Q('6000 m'),
          engineMode: 'Combat',
          speed: Q('270 km/h'),
          rate: Q('7 m/s'),
        },
      ],
      turn: [
        {
          altitude: Q('0 m'),
          engineMode: 'Emergency',
          speed: Q('270 km/h'),
          time: Q('20.5 s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Emergency',
          speed: Q('270 km/h'),
          time: Q('25.5 s'),
        },
      ],
    },
    serviceCeiling: Q('10500 m'),
    flightEndurance: [
      {
        altitude: Q('3000 m'),
        speed: Q('350 km/h'),
        time: Q('2.2h'),
      },
    ],
  },
  engine: {
    model: 'DB-601A',
    maxPowers: [
      {
        altitude: Q('0 m'),
        mode: 'Combat',
        power: Q('910 hp'),
      },
      {
        altitude: Q('5000 m'),
        mode: 'Combat',
        power: Q('960 hp'),
      },
      {
        altitude: Q('0 m'),
        mode: 'Emergency',
        power: Q('990 hp'),
      },
      {
        altitude: Q('4500 m'),
        mode: 'Emergency',
        power: Q('1020 hp'),
      },
      {
        altitude: Q('0 m'),
        mode: 'Boosted',
        power: Q('1100 hp'),
      },
    ],
    modes: [
      {
        name: 'Nominal',
        limit: null,
        rpm: Q('2200 rpm'),
        manifoldPressure: Q('1.15 atm'),
      },
      {
        name: 'Combat',
        limit: Q('30 min'),
        rpm: Q('2300 rpm'),
        manifoldPressure: Q('1.23 atm'),
      },
      {
        name: 'Emergency',
        limit: Q('5 min'),
        rpm: Q('2400 rpm'),
        manifoldPressure: Q('1.3 atm'),
      },
      {
        name: 'Boosted',
        limit: Q('1 min'),
        rpm: Q('2400 rpm'),
        manifoldPressure: Q('1.4 atm'),
      },
    ],
    ratedTemps: [
      {
        name: 'Oil intake',
        range: [Q('30 degC'), Q('75 degC')],
      },
      {
        name: 'Oil output',
        range: [Q('95 degC')],
      },
      {
        name: 'Water',
        range: [Q('94 degC')],
      },
    ],
    maxTemps: [
      {
        name: 'Oil intake',
        value: Q('80 degC'),
      },
      {
        name: 'Oil output',
        value: Q('105 degC'),
      },
      {
        name: 'Water',
        value: Q('100 degC'),
      },
    ],
    superchargerGearShiftAltitude: null,
  },
  load: {
    emptyWeight: Q('2049 kg'),
    minimumWeight: Q('2340 kg'),
    standardWeight: Q('2614 kg'),
    maxTakeoffWeight: Q('2893 kg'),
    fuelLoad: [Q('304 kg'), Q('400 L')],
  },
  armament: {
    forwardFiring: {
      standard: [
        {
          qty: 2,
          name: 'MG FF',
          type: '20mm gun',
          count: 60,
          details: 'wing-mounted',
        },
        {
          qty: 2,
          name: 'MG 17',
          type: '7.92mm machine gun',
          count: 1000,
          details: 'synchronized',
        },
      ],
      modifications: [],
    },
    defensive: [],
    bombs: [
      {
        qty: 4,
        name: 'SC 50',
        type: '55kg general purpose bomb',
      },
      {
        qty: 1,
        name: 'SC 250',
        type: '249kg general purpose bomb',
      },
    ],
    rockets: [],
  },
  features: [
    {
      feature: 'Governor',
      details: ['Can be disabled for manual prop pitch control'],
    },
    {
      feature: 'Mixture',
      details: ['Automatic'],
    },
    {
      feature: 'Supercharger',
      details: ['Automatic'],
    },
    {
      feature: 'Oil & water radiator shutters',
      details: ['Automatic / manual control'],
    },
    {
      feature: 'Trimmers',
      details: ['Horizontal stabilizer'],
    },
    {
      feature: 'Automatic wing slats',
      details: ['Deploy automatically at high angle of attack, which makes pre-stall softer'],
    },
    {
      feature: 'Flaps',
      details: [
        'Slow to operate; allow time for this on landing approach',
        'Black line markings on the flaps measure their extension',
      ],
    },
    {
      feature: 'Tail wheel lock',
      details: [],
    },
    {
      feature: 'Wheel brakes',
      details: ['Independent left and right brakes'],
    },
    {
      feature: 'Fuel gauge',
      details: ['Has emergency warning light (80 L)'],
    },
    {
      feature: 'Canopy',
      details: ['Design does not allow opening during flight, but it has an emergency release for bailouts'],
    },
    {
      feature: 'Gunsight',
      details: ['Has sliding sun filter'],
    },
  ],
  procedures: {
    engineStart: [],
    takeoff: [],
    landing: [],
  },
};
