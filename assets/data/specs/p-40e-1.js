import Q from 'js-quantities';

export default {
  id: 'p-40e-1',
  type: 'P-40',
  variant: 'P-40E-1',
  combatDebut: new Date(1941, 11),
  airframe: {
    indicatedStallSpeedRanges: {
      takeoffLanding: [Q('141 km/h'), Q('164 km/h')],
      flight: [Q('153 km/h'), Q('176 km/h')],
    },
    diveSpeedLimit: Q('860 km/h'),
    maxLoadFactor: Q('12.2 gee'),
    stallAngles: {
      landing: Q('12.6 deg'),
      flight: Q('14 deg'),
    },
    takeoffSpeedRange: [Q('160 km/h'), Q('190 km/h')],
    glideslopeSpeedRange: [Q('210 km/h'), Q('220 km/h')],
    landingSpeedRange: [Q('140 km/h'), Q('145 km/h')],
    landingAngle: Q('13.9 deg'),
    length: Q('9.05 m'),
    wingspan: Q('11.4 m'),
    wingSurface: Q('21.92 m^2'),
  },
  characteristics: {
    maxTrueAirspeeds: [
      {
        altitude: Q('0 m'),
        engineMode: 'Take-off',
        speed: Q('494 km/h'),
      },
      {
        altitude: Q('5000 m'),
        engineMode: 'Take-off',
        speed: Q('601 km/h'),
      },
    ],
    maxPerformance: {
      climb: [
        {
          altitude: Q('0 m'),
          engineMode: 'Take-off',
          speed: Q('270 km/h'),
          rate: Q('12.5 m/s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Take-off',
          speed: Q('270 km/h'),
          rate: Q('10 m/s'),
        },
        {
          altitude: Q('6000 m'),
          engineMode: 'Take-off',
          speed: Q('270 km/h'),
          rate: Q('3.7 m/s'),
        },
      ],
      turn: [
        {
          altitude: Q('0 m'),
          engineMode: 'Take-off',
          speed: Q('270 km/h'),
          time: Q('24.3 s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Take-off',
          speed: Q('270 km/h'),
          time: Q('36.1 s'),
        },
      ],
    },
    serviceCeiling: Q('9200 m'),
    flightEndurance: [
      {
        altitude: Q('3000 m'),
        speed: Q('350 km/h'),
        time: Q('2.8 h'),
      },
    ],
  },
  engine: {
    model: 'V-1710-39',
    maxPowers: [
      {
        altitude: Q('0 ft'),
        mode: 'Nominal',
        power: Q('900 hp'),
      },
      {
        altitude: Q('10800 ft'),
        mode: 'Nominal',
        power: Q('1000 hp'),
      },
      {
        altitude: Q('12000 ft'),
        mode: 'Combat',
        power: Q('1150 hp'),
      },
      {
        altitude: Q('0 ft'),
        mode: 'Take-off',
        power: Q('1150 hp'),
      },
      {
        altitude: Q('0 ft'),
        mode: 'Maximum Possible',
        power: Q('1470 hp'),
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
        name: 'Combat',
        limit: Q('5 min'),
        rpm: Q('3000 rpm'),
        manifoldPressure: Q('42 inHg'),
      },
      {
        name: 'Take-off',
        limit: Q('2 min'),
        rpm: Q('3000 rpm'),
        manifoldPressure: Q('45.5 inHg'),
      },
      {
        name: 'Maximum Possible',
        limit: Q('0 min'),
        rpm: Q('3000 rpm'),
        manifoldPressure: Q('56.0 inHg'),
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
    emptyWeight: Q('3073 kg'),
    minimumWeight: Q('3264.2 kg'),
    standardWeight: Q('3819.1 kg'),
    maxTakeoffWeight: Q('4414 kg'),
    fuelLoad: [Q('404 kg'), Q('561 L')],
  },
  armament: {
    forwardFiring: {
      standard: [
        {
          qty: 6,
          name: 'M2.50',
          type: '12.7mm machine gun',
          count: 235,
          details: 'wing-mounted',
        },
      ],
      modifications: [],
    },
    defensive: [],
    bombs: [
      {
        qty: 1,
        name: 'FAB-250sv',
        type: '254kg general purpose bomb',
        details: null,
      },
      {
        qty: 1,
        name: 'FAB-500M',
        type: '512kg general purpose bomb',
        details: null,
      },
    ],
    rockets: [
      {
        qty: 4,
        name: 'ROS-82',
        type: '7 kg rockets',
        details: null,
      },
    ],
  },
  features: [
    {
      feature: 'Engine',
      details: [
        'Has no manifold pressure automatic governor, so MP depends not only on throttle position, but also RPM and altitude',
      ],
    },
    {
      feature: 'Supercharger',
      details: ['Automatic', 'Single stage'],
    },
    {
      feature: 'Mixture control',
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
      feature: 'Oil & water radiator shutters',
      details: ['Manually operated', 'Joint with engine cowl outlet shutters'],
    },
    {
      feature: 'Yaw stability',
      details: ['When side slip angle is more than 12°, plane becomes unstable'],
    },
    {
      feature: 'Trimmers',
      details: ['Pitch, roll, yaw'],
    },
    {
      feature: 'Flaps',
      details: ['Can extend up to 45°'],
    },
    {
      feature: 'Tail wheel',
      details: ['Has a lock which disengages when rudder pedals are deflected ≥ 50%'],
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
      feature: 'Canopy',
      details: ['Impossible to open/close at high speed', 'Has an emergency relaese'],
    },
    {
      feature: 'Salvo controller',
      details: ['Bomb modes: 1', 'Rocket modes: 1 / 2 / 4'],
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
  trainingVideos: {
    cockpit: 'https://www.youtube.com/watch?v=osF_WoHRWlc&t=10s',
    engineStart: 'https://www.youtube.com/watch?v=osF_WoHRWlc&t=3m40s',
    takeoff: 'https://www.youtube.com/watch?v=osF_WoHRWlc&t=6m36s',
    landing: 'https://www.youtube.com/watch?v=osF_WoHRWlc&t=8m24s',
  },
};
