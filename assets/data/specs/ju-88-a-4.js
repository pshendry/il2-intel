import Q from 'js-quantities';

export default {
  id: 'ju-88-a-4',
  type: 'Ju 88',
  variant: 'Ju 88 A-4',
  combatDebut: new Date(1941, 5),
  airframe: {
    indicatedStallSpeedRanges: {
      takeoffLanding: [Q('158 km/h'), Q('205 km/h')],
      flight: [Q('188 km/h'), Q('205 km/h')],
    },
    diveSpeedLimit: Q('670 km/h'),
    maxLoadFactor: Q('8.0 gee'),
    stallAngles: {
      landing: Q('16.6 deg'),
      flight: Q('21.0 deg'),
    },
    takeoffSpeedRange: [Q('170 km/h'), Q('210 km/h')],
    glideslopeSpeedRange: [Q('210 km/h'), Q('220 km/h')],
    landingSpeedRange: [Q('150 km/h'), Q('160 km/h')],
    landingAngle: Q('9 deg'),
    length: Q('14.3 m'),
    wingspan: Q('20.02 m'),
    wingSurface: Q('52.7 m^2'),
  },
  characteristics: {
    maxTrueAirspeeds: [
      {
        altitude: Q('0 m'),
        engineMode: 'Climb',
        speed: Q('424 km/h'),
      },
      {
        altitude: Q('2000 m'),
        engineMode: 'Climb',
        speed: Q('462 km/h'),
      },
      {
        altitude: Q('5000 m'),
        engineMode: 'Climb',
        speed: Q('486 km/h'),
      },
    ],
    maxPerformance: {
      climb: [
        {
          altitude: Q('0 m'),
          engineMode: 'Combat',
          speed: Q('250 km/h'),
          rate: Q('7.0 m/s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Combat',
          speed: Q('250 km/h'),
          rate: Q('5.1 m/s'),
        },
        {
          altitude: Q('6000 m'),
          engineMode: 'Combat',
          speed: Q('250 km/h'),
          rate: Q('3.4 m/s'),
        },
      ],
      turn: [
        {
          altitude: Q('0 m'),
          engineMode: 'Take-off',
          speed: Q('250 km/h'),
          time: Q('33.0 s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Take-off',
          speed: Q('250 km/h'),
          time: Q('50.5 s'),
        },
      ],
    },
    serviceCeiling: Q('7500 m'),
    flightEndurance: [
      {
        altitude: Q('3000 m'),
        speed: Q('300 km/h'),
        time: Q('3.8 h'),
      },
    ],
  },
  engine: {
    model: 'Jumo-211J',
    maxPowers: [
      {
        altitude: Q('0 m'),
        mode: 'Climb',
        power: Q('1190 hp'),
      },
      {
        altitude: Q('1500 m'),
        mode: 'Climb',
        power: Q('1260 hp'),
      },
      {
        altitude: Q('4900 m'),
        mode: 'Climb',
        power: Q('1180 hp'),
      },
      {
        altitude: Q('0 m'),
        mode: 'Take-off',
        power: Q('1420 hp'),
      },
    ],
    modes: [
      {
        name: 'Nominal',
        limit: null,
        rpm: Q('2250 rpm'),
        manifoldPressure: Q('1.15 atm'),
      },
      {
        name: 'Climb',
        limit: Q('30 min'),
        rpm: Q('2400 rpm'),
        manifoldPressure: Q('1.25 atm'),
      },
      {
        name: 'Take-off',
        limit: Q('1 min'),
        rpm: Q('2600 rpm'),
        manifoldPressure: Q('1.42 atm'),
      },
    ],
    ratedTemps: [
      {
        name: 'Oil',
        range: [Q('100 degC')],
      },
      {
        name: 'Water',
        range: [Q('80 degC')],
      },
    ],
    maxTemps: [
      {
        name: 'Oil',
        value: Q('130 degC'),
      },
      {
        name: 'Water',
        value: Q('110 degC'),
      },
    ],
    superchargerGearShiftAltitude: null,
  },
  load: {
    emptyWeight: Q('8619 kg'),
    minimumWeight: Q('9458 kg'),
    standardWeight: Q('12110 kg'),
    maxTakeoffWeight: Q('13655 kg'),
    fuelLoad: [Q('1277 kg'), Q('1680 L')],
  },
  armament: {
    forwardFiring: {
      standard: [],
      modifications: [],
    },
    defensive: [
      {
        qty: 1,
        name: 'MG 81',
        type: '7.92mm machine gun',
        count: 750,
        details: 'Nose',
      },
      {
        qty: 1,
        name: 'MG 81',
        type: '7.92mm machine gun',
        count: 1000,
        details: 'Top',
      },
      {
        qty: 2,
        name: 'MG 81',
        type: '7.92mm machine gun',
        count: 950,
        details: 'Belly',
      },
    ],
    bombs: [
      {
        qty: 44,
        name: 'SC 50',
        type: '55kg general purpose bomb',
      },
      {
        qty: 6,
        name: 'SC 250',
        type: '249kg general purpose bomb',
      },
      {
        qty: 4,
        name: 'SC 500',
        type: '500kg general purpose bomb',
      },
      {
        qty: 2,
        name: 'SC 1000',
        type: '1090kg general purpose bomb',
      },
      {
        qty: 1,
        name: 'SC 1800',
        type: '1780kg general purpose bomb',
      },
    ],
    rockets: [],
  },
  features: [
    {
      feature: 'Supercharger',
      details: ['Automatic', 'Two-stage', 'Can be manually switched to 1st gear'],
    },
    {
      feature: 'Mixture control',
      details: ['Automatic'],
    },
    {
      feature: 'Governor',
      details: [
        'Automatically controls prop pitch to maintain required RPM',
        'Can be disabled for manual prop pitch control',
      ],
    },
    {
      feature: 'Propellers',
      details: ['Have a feathering system which should be activated to reduce the drag of a disabled engine'],
    },
    {
      feature: 'Oil & water radiator shutters',
      details: ['Manually operated', 'Joint with engine cowl outlet shutters'],
    },
    {
      feature: 'Trimmers',
      details: ['Pitch, roll, yaw', 'Horizontal stabilizer automatically controlled based on flaps extension'],
    },
    {
      feature: 'Airbrakes',
      details: ['Located under the wing and used to slow descent during steep dive bombing'],
    },
    {
      feature: 'Flaps',
      details: [
        '3 fixed positions: retracted, takeoff (25°) and landing (50°)',
        'Indicator lights located on left panel',
      ],
    },
    {
      feature: 'Differential ailerons',
      details: ['Lowered in sync with the flaps'],
    },
    {
      feature: 'Landing gear',
      details: ['Slow to operate, so extend gear well before final landing approach'],
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
        'Dedicated gauges for left and right tanks, with switch between internal and external groups (alternates in-game every 10s)',
        'Has low fuel warning light (180 L) for the internal tanks',
      ],
    },
    {
      feature: 'Salvo controller',
      details: ['Bomb modes: internal, external'],
    },
  ],
  procedures: {
    engineStart: [],
    takeoff: [],
    landing: [],
  },
  trainingVideos: {
    cockpit: 'https://www.youtube.com/watch?v=pl3EXXzIMSw&t=1m2s',
    engineStart: 'https://www.youtube.com/watch?v=pl3EXXzIMSw&t=3m42s',
    takeoff: 'https://www.youtube.com/watch?v=pl3EXXzIMSw&t=6m20s',
    landing: 'https://www.youtube.com/watch?v=pl3EXXzIMSw&t=8m26s',
  },
};
