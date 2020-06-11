import Q from 'js-quantities';

export default {
  id: 'bf-109-g-2',
  type: 'Bf 109',
  variant: 'Bf 109 G-2',
  combatDebut: new Date(1942, 4),
  airframe: {
    indicatedStallSpeedRanges: {
      takeoffLanding: [Q('153 km/h'), Q('164 km/h')],
      flight: [Q('158 km/h'), Q('174 km/h')],
    },
    diveSpeedLimit: Q('850 km/h'),
    maxLoadFactor: Q('10.5 gee'),
    stallAngles: {
      landing: Q('17 deg'),
      flight: Q('19.8 deg'),
    },
    takeoffSpeedRange: [Q('155 km/h'), Q('180 km/h')],
    glideslopeSpeedRange: [Q('195 km/h'), Q('205 km/h')],
    landingSpeedRange: [Q('150 km/h'), Q('155 km/h')],
    landingAngle: Q('14.8 deg'),
    length: Q('8.94 m'),
    wingspan: Q('9.97 m'),
    wingSurface: Q('16.1 m^2'),
  },
  characteristics: {
    maxTrueAirspeeds: [
      {
        altitude: Q('0 m'),
        engineMode: 'Combat',
        speed: Q('530 km/h'),
      },
      {
        altitude: Q('2000 m'),
        engineMode: 'Combat',
        speed: Q('577 km/h'),
      },
      {
        altitude: Q('7000 m'),
        engineMode: 'Combat',
        speed: Q('656 km/h'),
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
          rate: Q('19.5 m/s'),
        },
        {
          altitude: Q('6000 m'),
          engineMode: 'Combat',
          speed: Q('270 km/h'),
          rate: Q('16.5 m/s'),
        },
      ],
      turn: [
        {
          altitude: Q('0 m'),
          engineMode: 'Emergency',
          speed: Q('270 km/h'),
          time: Q('22.2 s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Emergency',
          speed: Q('270 km/h'),
          time: Q('28.3 s'),
        },
      ],
    },
    serviceCeiling: Q('12100 m'),
    flightEndurance: [
      {
        altitude: Q('3000 m'),
        speed: Q('350 km/h'),
        time: Q('2.4 h'),
      },
    ],
  },
  engine: {
    model: 'DB-605A',
    maxPowers: [
      {
        altitude: Q('0 m'),
        mode: 'Combat',
        power: Q('1310 hp'),
      },
      {
        altitude: Q('5800 m'),
        mode: 'Combat',
        power: Q('1250 hp'),
      },
    ],
    modes: [
      {
        name: 'Nominal',
        limit: null,
        rpm: Q('2300 rpm'),
        manifoldPressure: Q('1.15 atm'),
      },
      {
        name: 'Combat',
        limit: Q('30 min'),
        rpm: Q('2600 rpm'),
        manifoldPressure: Q('1.3 atm'),
      },
    ],
    ratedTemps: [
      {
        name: 'Oil',
        range: [Q('70 degC'), Q('80 degC')],
      },
      {
        name: 'Water',
        range: [Q('100 degC'), Q('102 degC')],
      },
    ],
    maxTemps: [
      {
        name: 'Oil',
        value: Q('85 degC'),
      },
      {
        name: 'Water',
        value: Q('115 degC'),
      },
    ],
    superchargerGearShiftAltitude: null,
  },
  load: {
    emptyWeight: Q('2382 kg'),
    minimumWeight: Q('2545 kg'),
    standardWeight: Q('2890 kg'),
    maxTakeoffWeight: Q('3189 kg'),
    fuelLoad: [Q('304 kg'), Q('400 L')],
  },
  armament: {
    forwardFiring: {
      standard: [
        {
          qty: 1,
          name: 'MG 151/20',
          type: '20mm cannon',
          count: 200,
          details: 'nose-mounted',
        },
        {
          qty: 2,
          name: 'MG 17',
          type: '7.92mm machine gun',
          count: 500,
          details: 'synchronized',
        },
      ],
      modifications: [
        {
          qty: 2,
          name: 'MG 151/20',
          type: '20mm cannon',
          count: 135,
          details: 'wing-mounted',
        },
      ],
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
      details: ['Automatically controls prop pitch to maintain required RPM'],
    },
    {
      feature: 'Mixture control',
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
        'Can be extended up to 40°',
        'Black line markings on the flaps measure their extension',
      ],
    },
    {
      feature: 'Tail wheel',
      details: ['Has a manual lock'],
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
