import Q from 'js-quantities';

export default {
  id: 'pe-2-ser-87',
  type: 'Pe-2',
  variant: 'Pe-2 series 87',
  combatDebut: new Date(1942, 4),
  airframe: {
    indicatedStallSpeedRanges: {
      takeoffLanding: [Q('148 km/h'), Q('169 km/h')],
      flight: [Q('175 km/h'), Q('200 km/h')],
    },
    diveSpeedLimit: Q('790 km/h'),
    maxLoadFactor: Q('11 gee'),
    stallAngles: {
      landing: Q('9.8 deg'),
      flight: Q('13.9 deg'),
    },
    takeoffSpeedRange: [Q('160 km/h'), Q('200 km/h')],
    glideslopeSpeedRange: [Q('220 km/h'), Q('240 km/h')],
    landingSpeedRange: [Q('155 km/h'), Q('165 km/h')],
    landingAngle: Q('12.5 deg'),
    length: Q('12.69 m'),
    wingspan: Q('17.12 m'),
    wingSurface: Q('40.8 m^2'),
  },
  characteristics: {
    maxTrueAirspeeds: [
      {
        altitude: Q('0 m'),
        engineMode: 'Nominal',
        speed: Q('446 km/h'),
      },
      {
        altitude: Q('2000 m'),
        engineMode: 'Nominal',
        speed: Q('476 km/h'),
      },
      {
        altitude: Q('5000 m'),
        engineMode: 'Nominal',
        speed: Q('498 km/h'),
      },
    ],
    maxPerformance: {
      climb: [
        {
          altitude: Q('0 m'),
          engineMode: 'Nominal',
          speed: Q('270 km/h'),
          rate: Q('10.4 m/s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Nominal',
          speed: Q('270 km/h'),
          rate: Q('7.8 m/s'),
        },
        {
          altitude: Q('6000 m'),
          engineMode: 'Nominal',
          speed: Q('270 km/h'),
          rate: Q('3.0 m/s'),
        },
      ],
      turn: [
        {
          altitude: Q('0 m'),
          engineMode: 'Nominal',
          speed: Q('270 km/h'),
          time: Q('29.9 s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Nominal',
          speed: Q('270 km/h'),
          time: Q('40.3 s'),
        },
      ],
    },
    serviceCeiling: Q('8000 m'),
    flightEndurance: [
      {
        altitude: Q('3000 m'),
        speed: Q('300 km/h'),
        time: Q('2.8 h'),
      },
    ],
  },
  engine: {
    model: 'M-105RF',
    maxPowers: [
      {
        altitude: Q('0 m'),
        mode: 'Nominal',
        power: Q('1200 hp'),
      },
      {
        altitude: Q('800 m'),
        mode: 'Nominal',
        power: Q('1260 hp'),
      },
      {
        altitude: Q('2700 m'),
        mode: 'Nominal',
        power: Q('1200 hp'),
      },
    ],
    modes: [
      {
        name: 'Nominal',
        limit: null,
        rpm: Q('2700 rpm'),
        manifoldPressure: Q('1050 mmHg'),
      },
    ],
    ratedTemps: [
      {
        name: 'Oil',
        range: [Q('90 degC'), Q('100 degC')],
      },
      {
        name: 'Water',
        range: [Q('70 degC'), Q('85 degC')],
      },
    ],
    maxTemps: [
      {
        name: 'Oil',
        value: Q('115 degC'),
      },
      {
        name: 'Water',
        value: Q('100 degC'),
      },
    ],
    superchargerGearShiftAltitude: Q('2300 m'),
  },
  load: {
    emptyWeight: Q('6089 kg'),
    minimumWeight: Q('6643 kg'),
    standardWeight: Q('7685 kg'),
    maxTakeoffWeight: Q('8701 kg'),
    fuelLoad: [Q('1113 kg'), Q('1484 L')],
  },
  armament: {
    forwardFiring: {
      standard: [
        {
          qty: 1,
          name: 'UB',
          type: '12.7mm machine gun',
          count: 150,
          details: 'nose-mounted',
        },
        {
          qty: 1,
          name: 'ShKAS',
          type: '7.62mm machine gun',
          count: 450,
          details: 'nose-mounted',
        },
      ],
      modifications: [],
    },
    defensive: [
      {
        qty: 1,
        name: 'ShKAS',
        type: '7.62mm machine gun',
        count: 450,
        details: 'Top',
      },
      {
        qty: 1,
        name: 'UB',
        type: '12.7mm machine gun',
        count: 200,
        details: 'Belly',
      },
      {
        qty: 1,
        name: 'ShKAS',
        type: '7.62mm machine gun',
        count: 225,
        details: 'Side',
      },
    ],
    bombs: [
      {
        qty: 10,
        name: 'FAB-100M',
        type: '104kg general purpose bomb',
        details: null,
      },
      {
        qty: 4,
        name: 'FAB-250sv',
        type: '254kg general purpose bomb',
        details: null,
      },
      {
        qty: 2,
        name: 'FAB-500M',
        type: '512kg general purpose bomb',
        details: null,
      },
    ],
    rockets: [
      {
        qty: 10,
        name: 'ROS-132',
        type: '23kg rocket',
        details: 'HE payload mass 9.1 kg',
      },
    ],
  },
  features: [
    {
      feature: 'Supercharger',
      details: ['Manual control', 'Two-stage (shift at 2700 m)'],
    },
    {
      feature: 'Mixture control',
      details: ['Manual control', 'Lean if altitude is more than 3..4 km for optimal engine operation'],
    },
    {
      feature: 'Governor',
      details: ['Electrically actuated, takes a long time to reach required revolutions'],
    },
    {
      feature: 'Oil & water radiator shutters',
      details: ['Manual control'],
    },
    {
      feature: 'Trimmers',
      details: ['Pitch, roll, yaw', 'Horizontal stabilizer automatically controlled based on flaps extension'],
    },
    {
      feature: 'Airbrakes',
      details: ['Fence-type airbrakes located under the wing'],
    },
    {
      feature: 'Flaps',
      details: [
        'Can extend up to 50°',
        'When landing, flaps can cause the angle of attack for a stall to be lower than landing pitch angle. For this reason, do not extend flaps to more than 35° (70%) on landing.',
      ],
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
      feature: 'Fuel gauges',
      details: ['Three gauges (for fuselage, left wing tanks and right wing tanks)'],
    },
    {
      feature: 'Canopy',
      details: ['Has an emergency release system for bailouts'],
    },
    {
      feature: 'Salvo controller',
      details: ['Bomb modes: 1, 2, 4, All', 'Rocket modes: 1, 2, 4'],
    },
  ],
  procedures: {
    engineStart: [],
    takeoff: [],
    landing: [],
  },
};
