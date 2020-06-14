import Q from 'js-quantities';

export default {
  id: 'me-262-a',
  type: 'Me 262',
  variant: 'Me 262 A',
  combatDebut: new Date(1944), // "Summer 1944"
  airframe: {
    indicatedStallSpeedRanges: {
      takeoffLanding: [Q('139 km/h'), Q('154 km/h')],
      flight: [Q('165 km/h'), Q('200 km/h')],
    },
    diveSpeedLimit: Q('1000 km/h'),
    maxLoadFactor: Q('12.5 gee'),
    stallAngles: {
      landing: Q('22 deg'),
      flight: Q('17 deg'),
    },
    takeoffSpeedRange: [Q('200 km/h'), Q('220 km/h')],
    glideslopeSpeedRange: [Q('250 km/h')],
    landingSpeedRange: [Q('165 km/h'), Q('185 km/h')],
    landingAngle: Q('12.3 deg'),
    length: Q('10.6 m'),
    wingspan: Q('12.6 m'),
    wingSurface: Q('20.4 m^2'),
  },
  characteristics: {
    maxTrueAirspeeds: [
      {
        altitude: Q('0 m'),
        engineMode: 'Nominal',
        speed: Q('759 km/h'),
      },
      {
        altitude: Q('6000 m'),
        engineMode: 'Nominal',
        speed: Q('780 km/h'),
      },
      {
        altitude: Q('9000 m'),
        engineMode: 'Nominal',
        speed: Q('739 km/h'),
      },
      {
        altitude: Q('0 m'),
        engineMode: 'Maximal',
        speed: Q('837 km/h'),
      },
      {
        altitude: Q('6000 m'),
        engineMode: 'Maximal',
        speed: Q('871 km/h'),
      },
      {
        altitude: Q('9000 m'),
        engineMode: 'Maximal',
        speed: Q('838 km/h'),
      },
    ],
    maxPerformance: {
      climb: [
        {
          altitude: Q('0 m'),
          engineMode: 'Maximal',
          speed: Q('450 km/h'),
          rate: Q('19.3 m/s'),
        },
        {
          altitude: Q('6000 m'),
          engineMode: 'Maximal',
          speed: Q('380 km/h'),
          rate: Q('9.7 m/s'),
        },
        {
          altitude: Q('9000 m'),
          engineMode: 'Maximal',
          speed: Q('380 km/h'),
          rate: Q('5.4 m/s'),
        },
      ],
      turn: [
        {
          altitude: Q('0 m'),
          engineMode: 'Maximal',
          speed: Q('450 km/h'),
          time: Q('33.5 s'),
        },
        {
          altitude: Q('6000 m'),
          engineMode: 'Maximal',
          speed: Q('380 km/h'),
          time: Q('45.5 s'),
        },
      ],
    },
    serviceCeiling: Q('12000 m'),
    flightEndurance: [
      {
        altitude: Q('6000 m'),
        speed: Q('475 km/h'),
        time: Q('2.33 h'),
      },
    ],
  },
  engine: {
    model: 'Jumo-004 B1',
    maxPowers: [
      {
        altitude: Q('0 m'),
        mode: 'Maximal',
        power: Q('1785.74 lbf'),
      },
      {
        altitude: Q('6000 m'),
        mode: 'Combat',
        power: Q('1168.45 lbf'),
      },
      {
        altitude: Q('9000 m'),
        mode: 'Emergency',
        power: Q('848.78 lbf'),
      },
    ],
    modes: [
      {
        name: 'Nominal',
        limit: null,
        rpm: Q('8400 rpm'),
      },
      {
        name: 'Maximal',
        limit: Q('15 min'),
        rpm: Q('8700 rpm'),
      },
    ],
    ratedTemps: [
      {
        name: 'Exhaust',
        range: [Q('600 degC')],
      },
    ],
    maxTemps: [
      {
        name: 'Exhaust',
        value: Q('650 degC'),
      },
    ],
    superchargerGearShiftAltitude: null,
  },
  load: {
    emptyWeight: Q('4146 kg'),
    minimumWeight: Q('4737 kg'),
    standardWeight: Q('6400 kg'),
    maxTakeoffWeight: Q('7100 kg'),
    fuelLoad: [Q('2161 kg'), Q('2570 L')],
  },
  armament: {
    forwardFiring: {
      standard: [
        {
          qty: 2,
          name: 'MK 108',
          type: '30mm gun',
          count: 100,
          details: 'nose-mounted',
        },
        {
          qty: 2,
          name: 'MK 108',
          type: '30mm gun',
          count: 80,
          details: 'nose-mounted',
        },
      ],
      modifications: [],
    },
    defensive: [],
    bombs: [
      {
        qty: 2,
        name: 'SC 250',
        type: '249kg general purpose bomb',
      },
      {
        qty: 1,
        name: 'SC 500',
        type: '500kg general purpose bomb',
      },
    ],
    rockets: [],
  },
  features: [
    {
      feature: 'Automatic fuel regulator',
      details: ['Engages only at ≥ 6000 RPM, below this sudden throttle increases can cause overheating or fire'],
    },
    {
      feature: 'Engines',
      details: [
        'At high altitudes usdden throttle decreases can cause flameouts',
        'Impossible to restart at ≥ 4000 m altitudes',
      ],
    },
    {
      feature: 'Trimmers',
      details: ['Yaw, horizontal stabilizer'],
    },
    {
      feature: 'Flaps',
      details: ['Can extend up to 55°', 'Cannot operate during landing gear operation'],
    },
    {
      feature: 'Wheel brakes',
      details: ['Independent left and right brakes for rear wheels', 'Dedicated brake handle for nose wheel'],
    },
    {
      feature: 'Fuel tanks',
      details: [
        'Two main (900 L) and two secondary (600 L / 170 L) fuel tanks',
        'Fuel transfer from secondary to main tanks is initiated by pilot',
        'Main tanks have gauges and emergency lamps (≤ 250 L)',
      ],
    },
  ],
  procedures: {
    engineStart: [],
    takeoff: [],
    landing: [],
  },
  trainingVideos: {
    cockpit: 'https://www.youtube.com/watch?v=kUOomY9Xu9o&t=5s',
    engineStart: 'https://www.youtube.com/watch?v=kUOomY9Xu9o&t=3m10s',
    takeoff: 'https://www.youtube.com/watch?v=kUOomY9Xu9o&t=6m55s',
    landing: 'https://www.youtube.com/watch?v=kUOomY9Xu9o&t=9m44s',
  },
};
