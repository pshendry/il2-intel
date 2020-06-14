import Q from 'js-quantities';

export default {
  id: 'bf-110-g-2',
  type: 'Bf 110',
  variant: 'Bf 110 G-2',
  combatDebut: new Date(1942), // "Autumn 1942"
  airframe: {
    indicatedStallSpeedRanges: {
      takeoffLanding: [Q('141 km/h'), Q('168 km/h')],
      flight: [Q('160 km/h'), Q('190 km/h')],
    },
    diveSpeedLimit: Q('740 km/h'),
    maxLoadFactor: Q('11 gee'),
    stallAngles: {
      landing: Q('17.4 deg'),
      flight: Q('20.3 deg'),
    },
    takeoffSpeedRange: [Q('190 km/h'), Q('230 km/h')],
    glideslopeSpeedRange: [Q('210 km/h'), Q('230 km/h')],
    landingSpeedRange: [Q('150 km/h'), Q('170 km/h')],
    landingAngle: Q('10.7 deg'),
    length: Q('12.1 m'),
    wingspan: Q('16.3 m'),
    wingSurface: Q('38.4 m^2'),
  },
  characteristics: {
    maxTrueAirspeeds: [
      {
        altitude: Q('0 m'),
        engineMode: 'Combat',
        speed: Q('489 km/h'),
      },
      {
        altitude: Q('2000 m'),
        engineMode: 'Combat',
        speed: Q('533 km/h'),
      },
      {
        altitude: Q('6500 m'),
        engineMode: 'Combat',
        speed: Q('581 km/h'),
      },
    ],
    maxPerformance: {
      climb: [
        {
          altitude: Q('0 m'),
          engineMode: 'Combat',
          speed: Q('270 km/h'),
          rate: Q('15.6 m/s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Combat',
          speed: Q('270 km/h'),
          rate: Q('14.1 m/s'),
        },
        {
          altitude: Q('6000 m'),
          engineMode: 'Combat',
          speed: Q('270 km/h'),
          rate: Q('10.7 m/s'),
        },
      ],
      turn: [
        {
          altitude: Q('0 m'),
          engineMode: 'Emergency',
          speed: Q('270 km/h'),
          time: Q('23.5 s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Emergency',
          speed: Q('270 km/h'),
          time: Q('31.2 s'),
        },
      ],
    },
    serviceCeiling: Q('10800 m'),
    flightEndurance: [
      {
        altitude: Q('3000 m'),
        speed: Q('300 km/h'),
        time: Q('4.0 h'),
      },
    ],
  },
  engine: {
    model: 'DB-605B',
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
      {
        altitude: Q('0 m'),
        mode: 'Emergency',
        power: Q('1480 hp'),
      },
      {
        altitude: Q('5600 m'),
        mode: 'Emergency',
        power: Q('1360 hp'),
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
      {
        name: 'Emergency',
        limit: Q('1 min'),
        rpm: Q('2800 rpm'),
        manifoldPressure: Q('1.42 atm'),
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
    emptyWeight: Q('5905 kg'),
    minimumWeight: Q('6335 kg'),
    standardWeight: Q('7514 kg'),
    maxTakeoffWeight: Q('8928 kg'),
    fuelLoad: [Q('1003 kg'), Q('1270 L')],
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
          qty: 1,
          name: 'MG 151/20',
          type: '20mm gun',
          count: 400,
          details: 'nose-mounted left',
        },
        {
          qty: 1,
          name: 'MG 151/20',
          type: '20mm gun',
          count: 350,
          details: 'nose-mounted right',
        },
      ],
      modifications: [
        {
          qty: 2,
          name: 'MG 151/20',
          type: '20mm gun',
          count: 200,
          details: 'nose-mounted',
        },
        {
          qty: 2,
          name: 'BK37',
          type: '37mm gun',
          count: 66,
          details: 'nose-mounted',
        },
      ],
    },
    defensive: [
      {
        qty: 2,
        name: 'MG 81',
        type: '7.92mm machine gun',
        count: 750,
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
      feature: 'Mixture control',
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
      details: ['Can extend at any angle up to 50°'],
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
        'Shows the fuel in one of four fuel tanks (alternates in-game every 10 seconds)',
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
      feature: 'BK37 gun',
      details: ["Reloading performed by the rear gunner at the pilot's command"],
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
  trainingVideos: {
    cockpit: 'https://www.youtube.com/watch?v=MpQ1GlJmVvE&t=9s',
    engineStart: null,
    takeoff: 'https://www.youtube.com/watch?v=MpQ1GlJmVvE&t=4m33s',
    landing: 'https://www.youtube.com/watch?v=MpQ1GlJmVvE&t=7m14s',
  },
};
