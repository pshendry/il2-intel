import Q from 'js-quantities';

export default {
  id: 'p-51d-15',
  type: 'P-51',
  variant: 'P-51D-15',
  combatDebut: new Date(1944), // "1944"
  airframe: {
    indicatedStallSpeedRanges: {
      takeoffLanding: [Q('91 mi/h'), Q('112 mi/h')],
      flight: [Q('99 mi/h'), Q('122 mi/h')],
    },
    diveSpeedLimit: Q('505 mi/h'),
    maxLoadFactor: Q('10.0 gee'),
    stallAngles: {
      landing: Q('16.3 deg'),
      flight: Q('19.1 deg'),
    },
    takeoffSpeedRange: [Q('115 mi/h'), Q('125 mi/h')],
    glideslopeSpeedRange: [Q('115 mi/h'), Q('130 mi/h')],
    landingSpeedRange: [Q('110 mi/h'), Q('120 mi/h')],
    landingAngle: Q('12.9 deg'),
    length: Q('9.84 m'),
    wingspan: Q('11.29 m'),
    wingSurface: Q('22.30 m^2'),
  },
  characteristics: {
    maxTrueAirspeeds: [
      {
        altitude: Q('0 m'),
        engineMode: 'Cruise',
        speed: Q('319 mi/h'),
      },
      {
        altitude: Q('8500 m'),
        engineMode: 'Cruise',
        speed: Q('401 mi/h'),
      },
      {
        altitude: Q('0 m'),
        engineMode: 'Combat',
        speed: Q('359 mi/h'),
      },
      {
        altitude: Q('8500 m'),
        engineMode: 'Combat',
        speed: Q('442 mi/h'),
      },
      {
        altitude: Q('0 m'),
        engineMode: 'WEP',
        speed: Q('368 mi/h'),
      },
      {
        altitude: Q('8000 m'),
        engineMode: 'WEP',
        speed: Q('446 mi/h'),
      },
      {
        altitude: Q('0 m'),
        engineMode: 'WEP w/ 150 fuel',
        speed: Q('377 mi/h'),
      },
      {
        altitude: Q('7000 m'),
        engineMode: 'WEP w/ 150 fuel',
        speed: Q('446 mi/h'),
      },
    ],
    maxPerformance: {
      climb: [
        {
          altitude: Q('0 m'),
          engineMode: 'WEP',
          speed: Q('180 mi/h'),
          rate: Q('18.1 m/s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'WEP',
          speed: Q('183 mi/h'),
          rate: Q('15.7 m/s'),
        },
        {
          altitude: Q('6000 m'),
          engineMode: 'WEP',
          speed: Q('183 mi/h'),
          rate: Q('12.4 m/s'),
        },
      ],
      turn: [
        {
          altitude: Q('0 m'),
          engineMode: 'WEP',
          speed: Q('180 mi/h'),
          time: Q('20.0 s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'WEP',
          speed: Q('183 mi/h'),
          time: Q('29.5 s'),
        },
      ],
    },
    serviceCeiling: Q('41600 ft'),
    flightEndurance: [
      {
        altitude: Q('3000 m'),
        speed: Q('350 km/h'),
        time: Q('4.3 h'),
      },
    ],
  },
  engine: {
    model: 'Packard V-1650-7',
    maxPowers: [
      {
        altitude: Q('0 m'),
        mode: 'Combat',
        power: Q('1490 hp'),
      },
      {
        altitude: Q('6500 m'),
        mode: 'Combat',
        power: Q('1390 hp'),
      },
      {
        altitude: Q('0 m'),
        mode: 'WEP',
        power: Q('1650 hp'),
      },
      {
        altitude: Q('5800 m'),
        mode: 'WEP',
        power: Q('1525 hp'),
      },
    ],
    modes: [
      {
        name: 'Cruise',
        limit: null,
        rpm: Q('2700 rpm'),
        manifoldPressure: Q('46 inHg'),
      },
      {
        name: 'Combat',
        limit: Q('15 min'),
        rpm: Q('3000 rpm'),
        manifoldPressure: Q('61 inHg'),
      },
      {
        name: 'WEP',
        limit: Q('5 min'),
        rpm: Q('3000 rpm'),
        manifoldPressure: Q('67 inHg'),
      },
      {
        name: 'WEP w/ 150 fuel',
        limit: Q('5 min'),
        rpm: Q('3000 rpm'),
        manifoldPressure: Q('75 inHg'),
      },
    ],
    ratedTemps: [
      {
        name: 'Oil',
        range: [Q('80 degC')],
      },
      {
        name: 'Water',
        range: [Q('100 degC'), Q('110 degC')],
      },
    ],
    maxTemps: [
      {
        name: 'Oil',
        value: Q('90 degC'),
      },
      {
        name: 'Water',
        value: Q('121 degC'),
      },
    ],
    superchargerGearShiftAltitude: null,
  },
  load: {
    emptyWeight: Q('7568 lb'),
    minimumWeight: Q('8002 lb'),
    standardWeight: Q('10093 lb'),
    maxTakeoffWeight: Q('12493 lb'),
    fuelLoad: [Q('732 kg'), Q('1020 L')],
  },
  armament: {
    forwardFiring: {
      standard: [
        {
          qty: 2,
          name: 'M2.50',
          type: '12.7mm machine gun',
          count: 400,
          details: 'wing-mounted',
        },
        {
          qty: 4,
          name: 'M2.50',
          type: '12.7mm machine gun',
          count: 270,
          details: 'wing-mounted',
        },
      ],
      modifications: [],
    },
    defensive: [],
    bombs: [
      {
        qty: 2,
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
      feature: 'Rear fuel tank',
      details: ['WARNING: aircraft is unstable when tank is full (> 75%, or > 68% of total fuel load)'],
    },
    {
      feature: 'Governor',
      details: [
        'Automatically controls prop pitch and manifold pressure to maintain required RPM',
        'Enabled when throttle is at ≥ 33%',
      ],
    },
    {
      feature: 'Supercharger',
      details: ['Automatic', 'Two-stage', 'Can be manually switched to low gear'],
    },
    {
      feature: 'Mixture control',
      details: ['Automatic when set to RUN (70%)'],
    },
    {
      feature: 'Oil & water radiator shutters',
      details: ['Automatic / manual control'],
    },
    {
      feature: 'Trimmers',
      details: ['Pitch, roll, yaw'],
    },
    {
      feature: 'Flaps',
      details: ['Can extend up to 50° in 10° increments'],
    },
    {
      feature: 'Fuel gauges',
      details: ['Wing tank gauges on the cockpit floor', 'Rear tank gauge behind the pilot, to the left'],
    },
    {
      feature: 'Tail wheel',
      details: ['Locks when the flight stick is pulled back'],
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
      feature: 'Landing gear warning siren',
      details: ['Sounds when gear is up and throttle is back'],
    },
    {
      feature: 'Canopy',
      details: ['Cannot be opened at high speed, but has an emergency release for bailouts'],
    },
    {
      feature: 'Formation lights',
      details: [],
    },
    {
      feature: 'Salvo controller',
      details: ['Rocket modes: 1 / 2 / 3 / All'],
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
