import Q from 'js-quantities';

export default {
  id: 'bf-110-E-2',
  type: 'Bf 110',
  variant: 'Bf 110 E-2',
  combatDebut: new Date(1940, 9),
  airframe: {
    indicatedStallSpeedRanges: {
      takeoffLanding: [Q('131 km/h'), Q('162 km/h')],
      flight: [Q('148 km/h'), Q('182 km/h')],
    },
    diveSpeedLimit: Q('740 km/h'),
    maxLoadFactor: Q('11 gee'),
    stallAngles: {
      landing: Q('17.5 deg'),
      flight: Q('20.7 deg'),
    },
    takeoffSpeedRange: [Q('180 km/h'), Q('220 km/h')],
    glideslopeSpeedRange: [Q('200 km/h'), Q('220 km/h')],
    landingSpeedRange: [Q('140 km/h'), Q('160 km/h')],
    landingAngle: Q('10.6 deg'),
    length: Q('12.1 m'),
    wingspan: Q('16.3 m'),
    wingSurface: Q('38.4 m^2'),
  },
  characteristics: {
    maxTrueAirspeeds: [
      {
        altitude: Q('0 m'),
        engineMode: 'Emergency',
        speed: Q('456 km/h'),
      },
      {
        altitude: Q('2000 m'),
        engineMode: 'Emergency',
        speed: Q('494 km/h'),
      },
      {
        altitude: Q('5000 m'),
        engineMode: 'Emergency',
        speed: Q('529 km/h'),
      },
    ],
    maxPerformance: {
      climb: [
        {
          altitude: Q('0 m'),
          engineMode: 'Combat',
          speed: Q('270 km/h'),
          rate: Q('10.3 m/s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Combat',
          speed: Q('270 km/h'),
          rate: Q('9.6 m/s'),
        },
        {
          altitude: Q('6000 m'),
          engineMode: 'Combat',
          speed: Q('270 km/h'),
          rate: Q('6.1 m/s'),
        },
      ],
      turn: [
        {
          altitude: Q('0 m'),
          engineMode: 'Boosted',
          speed: Q('270 km/h'),
          time: Q('27.4 s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Boosted',
          speed: Q('270 km/h'),
          time: Q('35.4 s'),
        },
      ],
    },
    serviceCeiling: Q('9500 m'),
    flightEndurance: [
      {
        altitude: Q('3000 m'),
        speed: Q('300 km/h'),
        time: Q('3.5 h'),
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
        limit: Q('3 min'),
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
    emptyWeight: Q('5175 kg'),
    minimumWeight: Q('5597 kg'),
    standardWeight: Q('6706 kg'),
    maxTakeoffWeight: Q('8398 kg'),
    fuelLoad: [Q('965 kg'), Q('1270 L')],
  },
  armament: {
    forwardFiring: {
      standard: [
        {
          qty: 4,
          name: 'MG 17',
          type: '7.92mm machine gun',
          count: 1000,
          details: 'nose-mounted',
        },
        {
          qty: 2,
          name: 'MG FF',
          type: '20mm gun',
          count: 180,
          details: 'nose-mounted',
        },
      ],
      modifications: [
        {
          qty: 1,
          name: 'MG 151/20',
          type: '20mm gun',
          count: 200,
          details: 'nose-mounted',
        },
      ],
    },
    defensive: [
      {
        qty: 1,
        name: 'MG 15',
        type: '7.92mm machine gun',
        count: 825,
        details: 'Rear',
      },
    ],
    bombs: [
      {
        qty: 12,
        name: 'SC 50',
        type: '55kg general purpose bomb',
      },
      {
        qty: 2,
        name: 'SC 250',
        type: '249kg general purpose bomb',
      },
      {
        qty: 2,
        name: 'SC 500',
        type: '500kg general purpose bomb',
      },
      {
        qty: 1,
        name: 'SC 1000',
        type: '1090kg general purpose bomb',
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
      feature: 'Mixture',
      details: ['Automatic'],
    },
    {
      feature: 'Supercharger',
      details: ['Automatic'],
    },
    {
      feature: 'Oil & water radiator shutters',
      details: ['Automatic / manual control', 'Has fixed positions (5 for oil, 9 for water)'],
    },
    {
      feature: 'Propellers',
      details: ['Have a feathering system which should be activated to reduce the drag of a disabled engine'],
    },
    {
      feature: 'Trimmers',
      details: ['Pitch, yaw', 'Horizontal stabilizer automatically controlled based on flaps extension'],
    },
    {
      feature: 'Automatic wing slats',
      details: ['Deploy automatically at high angle of attack, which makes pre-stall softer'],
    },
    {
      feature: 'Flaps',
      details: ['Can be extended at any angle up to 50°'],
    },
    {
      feature: 'Tail wheel',
      details: ['Rotates freely and does not have a lock'],
    },
    {
      feature: 'Wheel brakes',
      details: ['Independent left and right brakes'],
    },
    {
      feature: 'Fuel gauge',
      details: [
        'Shows the fuel in one of four fuel tanks (alternates every 10 seconds)',
        'Has emergency warning light (50 L) for each tank',
      ],
    },
    {
      feature: 'Canopy',
      details: ['Design does not allow opening during flight, but it has an emergency release for bailouts'],
    },
    {
      feature: 'Salvo controller',
      details: ['Bomb modes: central 1, central all, left/right wing 1, left/right wing all'],
    },
    {
      feature: 'MG-FF guns',
      details: ["Must be reloaded at the pilot's command; reloading is performed by the rear gunner"],
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
