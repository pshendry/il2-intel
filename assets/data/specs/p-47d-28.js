import Q from 'js-quantities';

export default {
  id: 'p-47d-28',
  type: 'P-47',
  variant: 'P-47D-28',
  combatDebut: new Date(1944), // "1944"
  airframe: {
    indicatedStallSpeedRanges: {
      takeoffLanding: [Q('86 mi/h'), Q('106 mi/h')],
      flight: [Q('111 mi/h'), Q('138 mi/h')],
    },
    diveSpeedLimit: Q('500 mi/h'),
    maxLoadFactor: Q('11.0 gee'),
    stallAngles: {
      landing: Q('15.3 deg'),
      flight: Q('17.1 deg'),
    },
    takeoffSpeedRange: [Q('115 mi/h'), Q('125 mi/h')],
    glideslopeSpeedRange: [Q('115 mi/h'), Q('130 mi/h')],
    landingSpeedRange: [Q('110 mi/h'), Q('120 mi/h')],
    landingAngle: Q('11.9 deg'),
    length: Q('11.0 m'),
    wingspan: Q('12.43 m'),
    wingSurface: Q('27.87 m^2'),
  },
  characteristics: {
    maxTrueAirspeeds: [
      {
        altitude: Q('0 m'),
        engineMode: 'Cruise',
        speed: Q('290 mi/h'),
      },
      {
        altitude: Q('10000 m'),
        engineMode: 'Cruise',
        speed: Q('388 mi/h'),
      },
      {
        altitude: Q('0 m'),
        engineMode: 'Combat',
        speed: Q('312 mi/h'),
      },
      {
        altitude: Q('9000 m'),
        engineMode: 'Combat',
        speed: Q('407 mi/h'),
      },
      {
        altitude: Q('0 m'),
        engineMode: 'WEP',
        speed: Q('346 mi/h'),
      },
      {
        altitude: Q('7000 m'),
        engineMode: 'WEP',
        speed: Q('435 mi/h'),
      },
    ],
    maxPerformance: {
      climb: [
        {
          altitude: Q('0 m'),
          engineMode: 'Combat',
          speed: Q('200 mi/h'),
          rate: Q('12.1 m/s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Combat',
          speed: Q('205 mi/h'),
          rate: Q('11.5 m/s'),
        },
        {
          altitude: Q('6000 m'),
          engineMode: 'Combat',
          speed: Q('205 mi/h'),
          rate: Q('10.3 m/s'),
        },
      ],
      turn: [
        {
          altitude: Q('0 m'),
          engineMode: 'WEP',
          speed: Q('200 mi/h'),
          time: Q('27.5 s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'WEP',
          speed: Q('205 mi/h'),
          time: Q('31.0 s'),
        },
      ],
    },
    serviceCeiling: Q('38000 ft'),
    flightEndurance: [
      {
        altitude: Q('3000 m'),
        speed: Q('350 km/h'),
        time: Q('2.4 h'),
      },
    ],
  },
  engine: {
    model: 'R-2800-59',
    maxPowers: [
      {
        altitude: Q('0 m'),
        mode: 'Cruise',
        power: Q('1620 hp'),
      },
      {
        altitude: Q('10500 m'),
        mode: 'Cruise',
        power: Q('1600 hp'),
      },
      {
        altitude: Q('0 m'),
        mode: 'Combat',
        power: Q('1950 hp'),
      },
      {
        altitude: Q('9000 m'),
        mode: 'Combat',
        power: Q('1900 hp'),
      },
      {
        altitude: Q('0 m'),
        mode: 'WEP',
        power: Q('2600 hp'),
      },
      {
        altitude: Q('7000 m'),
        mode: 'WEP',
        power: Q('2600 hp'),
      },
    ],
    modes: [
      {
        name: 'Cruise',
        limit: null,
        rpm: Q('2550 rpm'),
        manifoldPressure: Q('42.0 inHg'),
      },
      {
        name: 'Combat',
        limit: Q('15 min'),
        rpm: Q('2700 rpm'),
        manifoldPressure: Q('52 inHg'),
      },
      {
        name: 'WEP',
        limit: Q('5 min'),
        rpm: Q('2700 rpm'),
        manifoldPressure: Q('64.0 inHg'),
      },
    ],
    ratedTemps: [
      {
        name: 'Oil',
        range: [Q('60 degC'), Q('95 degC')],
      },
    ],
    maxTemps: [
      {
        name: 'Oil',
        value: Q('100 degC'),
      },
    ],
    superchargerGearShiftAltitude: null,
  },
  load: {
    emptyWeight: Q('10483 lb'),
    minimumWeight: Q('11385 lb'),
    standardWeight: Q('14337 lb'),
    maxTakeoffWeight: Q('17996 lb'),
    fuelLoad: [Q('1006 kg'), Q('1404 L')],
  },
  armament: {
    forwardFiring: {
      standard: [
        {
          qty: 8,
          name: 'M2.50',
          type: '12.7mm machine gun',
          count: 267,
          details: 'wing-mounted',
        },
      ],
      modifications: [],
    },
    defensive: [],
    bombs: [
      {
        qty: 3,
        name: 'M64',
        type: '500 lb general purpose bomb',
        details: null,
      },
      {
        qty: 2,
        name: 'M65',
        type: '1000 lb general purpose bomb',
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
      details: ['Automatic', 'Single stage'],
    },
    {
      feature: 'Turbocharger',
      details: ['Manual control', 'RPM changes relatively slowly'],
    },
    {
      feature: 'Water injection system',
      details: ['Boosts power in emergency mode', 'Water supply is good for 15 minutes'],
    },
    {
      feature: 'Mixture',
      details: ['Automatic when set to Auto Rich (85%) or Auto Lean (60%)'],
    },
    {
      feature: 'Governor',
      details: [
        'Automatically controls prop pitch to maintain required RPM',
        'Can be disabled for manual prop pitch control',
      ],
    },
    {
      feature: 'Oil outlet radiator shutters',
      details: ['Manual control'],
    },
    {
      feature: 'Trimmers',
      details: ['Pitch, roll, yaw'],
    },
    {
      feature: 'Flaps',
      details: ['Can extend up to 40°'],
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
      feature: 'Parking brake',
      details: [],
    },
    {
      feature: 'Landing gear warning lamp',
      details: ['Lights when gear is up and throttle is back, or when gear is down and throttle is forward'],
    },
    {
      feature: 'Fuel gauge',
      details: ['Has separate indicator needles for front and rear tanks'],
    },
    {
      feature: 'Canopy',
      details: ['Has an emergency release for bailouts'],
    },
    {
      feature: 'Salvo controller',
      details: ['Bomb modes: left / centre / right', 'Rocket modes: 1 / 2 / 3 / All'],
    },
    {
      feature: 'Gunsight',
      details: [
        'Gyroscopic reticle automatically calculates deflection',
        'Has 3 modes: fixed, fixed + gyro, gyro',
        'Target base and distance must be adjusted',
      ],
    },
  ],
  procedures: {
    engineStart: [],
    takeoff: [],
    landing: [],
  },
};
