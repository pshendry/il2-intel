import Q from 'js-quantities';

export default {
  id: 'p-39l-1',
  type: 'P-39',
  variant: 'P-39L-1',
  combatDebut: new Date(1942),
  airframe: {
    indicatedStallSpeedRanges: {
      takeoffLanding: [Q('140 km/h'), Q('151 km/h')],
      flight: [Q('160 km/h'), Q('172 km/h')],
    },
    diveSpeedLimit: Q('841 km/h'),
    maxLoadFactor: Q('13 gee'),
    stallAngles: {
      landing: Q('16.3 deg'),
      flight: Q('18.3 deg'),
    },
    takeoffSpeedRange: [Q('150 km/h'), Q('180 km/h')],
    glideslopeSpeedRange: [Q('180 km/h'), Q('210 km/h')],
    landingSpeedRange: [Q('155 km/h'), Q('160 km/h')],
    landingAngle: Q('17 deg'),
    length: Q('9.2 m'),
    wingspan: Q('10.4 m'),
    wingSurface: Q('29.82 m^2'),
  },
  characteristics: {
    maxTrueAirspeeds: [
      {
        altitude: Q('0 m'),
        engineMode: 'Take-off',
        speed: Q('539 km/h'),
      },
      {
        altitude: Q('2850 m'),
        engineMode: 'Take-off',
        speed: Q('600 km/h'),
      },
      {
        altitude: Q('4600 m'),
        engineMode: 'Military',
        speed: Q('596 km/h'),
      },
    ],
    maxPerformance: {
      climb: [
        {
          altitude: Q('0 m'),
          engineMode: 'Take-off',
          speed: Q('270 km/h'),
          rate: Q('16.7 m/s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Take-off',
          speed: Q('270 km/h'),
          rate: Q('13.5 m/s'),
        },
        {
          altitude: Q('6000 m'),
          engineMode: 'Take-off',
          speed: Q('270 km/h'),
          rate: Q('7.2 m/s'),
        },
      ],
      turn: [
        {
          altitude: Q('0 m'),
          engineMode: 'Take-off',
          speed: Q('270 km/h'),
          time: Q('21.5 s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Take-off',
          speed: Q('270 km/h'),
          time: Q('30.3 s'),
        },
      ],
    },
    serviceCeiling: Q('9300 m'),
    flightEndurance: [
      {
        altitude: Q('3000 m'),
        speed: Q('350 km/h'),
        time: Q('1.6 h'),
      },
    ],
  },
  engine: {
    model: 'V-1710-63',
    maxPowers: [
      {
        altitude: Q('10800 ft'),
        mode: 'Nominal',
        power: Q('1000 hp'),
      },
      {
        altitude: Q('12000 ft'),
        mode: 'Military',
        power: Q('1150 hp'),
      },
      {
        altitude: Q('0 ft'),
        mode: 'Take-off',
        power: Q('1325 hp'),
      },
      {
        altitude: Q('0 ft'),
        mode: 'War Emergency',
        power: Q('1550 hp'),
      },
    ],
    modes: [
      {
        name: 'Nominal',
        limit: null,
        rpm: Q('2600 rpm'),
        manifoldPressure: Q('37.2 inHg'),
      },
      {
        name: 'Military',
        limit: Q('15 min'),
        rpm: Q('3000 rpm'),
        manifoldPressure: Q('42 inHg'),
      },
      {
        name: 'Take-off',
        limit: Q('5 min'),
        rpm: Q('3000 rpm'),
        manifoldPressure: Q('51 inHg'),
      },
      {
        name: 'War Emergency',
        limit: Q('2 min'),
        rpm: Q('3000 rpm'),
        manifoldPressure: Q('60 inHg'),
      },
    ],
    ratedTemps: [
      {
        name: 'Oil',
        range: [Q('70 degC'), Q('85 degC')],
      },
      {
        name: 'Water',
        range: [Q('105 degC'), Q('115 degC')],
      },
    ],
    maxTemps: [
      {
        name: 'Oil',
        value: Q('90 degC'),
      },
      {
        name: 'Water',
        value: Q('125 degC'),
      },
    ],
    superchargerGearShiftAltitude: null,
  },
  load: {
    emptyWeight: Q('2929 kg'),
    minimumWeight: Q('3331 kg'),
    standardWeight: Q('3508 kg'),
    maxTakeoffWeight: Q('3868 kg'),
    fuelLoad: [Q('326.9 kg'), Q('454 L')],
  },
  armament: {
    forwardFiring: {
      standard: [
        {
          qty: 1,
          name: 'M4',
          type: '37mm cannon',
          count: 30,
          details: 'nose-mounted',
        },
        {
          qty: 2,
          name: 'M2.50',
          type: '12.7mm machine gun',
          count: 200,
          details: 'synchronized',
        },
        {
          qty: 4,
          name: 'M2.30',
          type: '7.62mm machine gun',
          count: 300,
          details: 'wing-mounted',
        },
      ],
      modifications: [],
    },
    defensive: [],
    bombs: [
      {
        qty: 1,
        name: 'FAB-100M',
        type: '104kg general purpose bomb',
        details: null,
      },
      {
        qty: 1,
        name: 'FAB-250sv',
        type: '254kg general purpose bomb',
        details: null,
      },
    ],
    rockets: [],
  },
  features: [
    {
      feature: 'Engine',
      details: ['Has a War Emergency power mode, engaged by setting throttle to full forward and mixture to full rich'],
    },
    {
      feature: 'Supercharger',
      details: ['Automatic', 'Single stage'],
    },
    {
      feature: 'Mixture',
      details: ['Has Auto Rich (66%) and Auto Lean (33%) settings'],
    },
    {
      feature: 'Governor',
      details: [
        'Automatically controls prop pitch to maintain required RPM',
        'Can be disabled for manual prop pitch control',
      ],
    },
    {
      feature: 'Oil & water outlet radiator shutters',
      details: ['Manual control'],
    },
    {
      feature: 'Trimmers',
      details: ['Pitch, roll, yaw'],
    },
    {
      feature: 'Flaps',
      details: ['Can extend up to 43°'],
    },
    {
      feature: 'Nose landing gear',
      details: ['Orients by itself and does not have brakes', 'Maximum turn angle of 60°'],
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
      feature: 'Cockpit doors',
      details: ['Can be jettisoned to bail out'],
    },
    {
      feature: 'Gunsight',
      details: ['Has sliding sun filter and backup mechanical sight'],
    },
  ],
  procedures: {
    engineStart: [],
    takeoff: [],
    landing: [],
  },
};
