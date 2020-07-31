import Q from 'js-quantities';

export default {
  id: 'hs-129-b-2',
  type: 'Hs 129',
  variant: 'Hs 129 B-2',
  combatDebut: new Date(1942, 4),
  airframe: {
    indicatedStallSpeedRanges: {
      takeoffLanding: [Q('136 km/h'), Q('150 km/h')],
      flight: [Q('143 km/h'), Q('159 km/h')],
    },
    diveSpeedLimit: Q('670 km/h'),
    maxLoadFactor: Q('9 gee'),
    stallAngles: {
      landing: Q('18.0 deg'),
      flight: Q('20.0 deg'),
    },
    takeoffSpeedRange: [Q('145 km/h'), Q('155 km/h')],
    glideslopeSpeedRange: [Q('180 km/h'), Q('200 km/h')],
    landingSpeedRange: [Q('135 km/h'), Q('145 km/h')],
    landingAngle: Q('10.6 deg'),
    length: Q('9.7 m'),
    wingspan: Q('14.2 m'),
    wingSurface: Q('28.9 m^2'),
  },
  characteristics: {
    maxTrueAirspeeds: [
      {
        altitude: Q('0 m'),
        engineMode: 'Combat',
        speed: Q('349 km/h'),
      },
      {
        altitude: Q('3000 m'),
        engineMode: 'Combat',
        speed: Q('396 km/h'),
      },
    ],
    maxPerformance: {
      climb: [
        {
          altitude: Q('0 m'),
          engineMode: 'Combat',
          speed: Q('255 km/h'),
          rate: Q('8.4 m/s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Combat',
          speed: Q('270 km/h'),
          rate: Q('8.1 m/s'),
        },
        {
          altitude: Q('6000 m'),
          engineMode: 'Combat',
          speed: Q('270 km/h'),
          rate: Q('2.6 m/s'),
        },
      ],
      turn: [
        {
          altitude: Q('0 m'),
          engineMode: 'Combat',
          speed: Q('255 km/h'),
          time: Q('30.0 s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Combat',
          speed: Q('270 km/h'),
          time: Q('46.0 s'),
        },
      ],
    },
    serviceCeiling: Q('7000 m'),
    flightEndurance: [
      {
        altitude: Q('3000 m'),
        speed: Q('300 km/h'),
        time: Q('2.1 h'),
      },
    ],
  },
  engine: {
    model: 'Gnome-Rhone 14 M',
    maxPowers: [
      {
        altitude: Q('0 m'),
        mode: 'Combat',
        power: Q('580 hp'),
      },
      {
        altitude: Q('4000 m'),
        mode: 'Combat',
        power: Q('650 hp'),
      },
      {
        altitude: Q('0 m'),
        mode: 'Take-off',
        power: Q('700 hp'),
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
        range: [Q('60 degC'), Q('75 degC')],
      },
    ],
    maxTemps: [
      {
        name: 'Oil',
        value: Q('125 degC'),
      },
    ],
    superchargerGearShiftAltitude: null,
  },
  load: {
    emptyWeight: Q('3992 kg'),
    minimumWeight: Q('4200 kg'),
    standardWeight: Q('4756 kg'),
    maxTakeoffWeight: Q('5170 kg'),
    fuelLoad: [Q('451 kg'), Q('610 L')],
  },
  armament: {
    forwardFiring: {
      standard: [
        {
          qty: 2,
          name: 'MG 17',
          type: '7.92mm machine gun',
          count: 1000,
          details: 'nose-mounted',
        },
        {
          qty: 2,
          name: 'MG 151/15',
          type: '20mm gun',
          count: 250,
          details: 'nose-mounted',
        },
      ],
      modifications: [
        {
          qty: 2,
          name: 'MG 151/20',
          type: '20mm cannon',
          count: 250,
          details: 'nose-mounted',
        },
        {
          qty: 4,
          name: 'MG 17',
          type: '7.92mm machine gun',
          count: 1000,
          details: 'underbelly',
        },
        {
          qty: 1,
          name: 'MK 101',
          type: '30mm gun',
          count: 30,
          details: 'underbelly',
        },
        {
          qty: 1,
          name: 'MK 103',
          type: '30mm gun',
          count: 80,
          details: 'underbelly',
        },
      ],
    },
    defensive: [],
    bombs: [
      {
        qty: 6,
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
      details: ['Automatically maintains 2750 RPM', 'Can be disabled for manual prop pitch control'],
    },
    {
      feature: 'Take-off mode',
      details: ['To enable, move boost level to 1.5 ATA position and set propellers to 3030 RPM'],
    },
    {
      feature: 'Mixture control',
      details: ['Automatic'],
    },
    {
      feature: 'Oil radiator shutters',
      details: ['Automatic'],
    },
    {
      feature: 'Propellers',
      details: ['Have a feathering system which should be activated to reduce the drag of a disabled engine'],
    },
    {
      feature: 'Trimmers',
      details: ['Pitch, yaw'],
    },
    {
      feature: 'Wheel brakes',
      details: ['Independent left and right brakes'],
    },
    {
      feature: 'Flaps',
      details: ['Can extend up to 40° or to the fixed takeoff position'],
    },
    {
      feature: 'Tail wheel',
      details: ['Rotates freely and does not have a lock'],
    },
    {
      feature: 'Fuel gauges',
      details: [
        'Position directly on tne engine nacelles',
        'Only indicate the wing tanks (central tank is not indicated)',
      ],
    },
    {
      feature: 'No oxygen system',
      details: ['Flying above 4000 m is forbidden'],
    },
    {
      feature: 'Gunsight',
      details: ['Has sliding sun filter'],
    },
  ],
  procedures: {
    startup: [
      'Mixture: Auto (full forward)',
      'Throttle: 1”',
      'RPM: Full forward',
      'Oil Radiator: As required',
      'Inlet Cowl: As required',
      'Press E to start',
    ],
    takeoff: [
      'Cockpit door: Closed',
      'Mixture: Auto (full forward)',
      'RPM: Full forward',
      'Oil Radiator: Fully open',
      'Inlet Cowl: Fully Open',
      '170 km/hr: Rotate',
      'Climb: 250 km/hr',
    ],
    landing: [
      {
        text: 'Downwind',
        steps: [
          'Airspeed: Below 300 km/hr',
          'Gear: Extend',
          'Mixture: Auto (full forward)',
          'Airspeed: Below 220 km/hr',
          'Oil Radiator: As required',
          'Inlet Cowl: As required',
          'Flaps: 15°',
        ],
      },
      {
        text: 'End Downwind',
        steps: ['Flaps: Extend fully'],
      },
      {
        text: 'Base to Final',
        steps: ['Airspeed: 180..200km/hr'],
      },
    ],
  },
  trainingVideos: {
    cockpit: 'https://www.youtube.com/watch?v=-s8ySZyzOIA&t=6s',
    startup: null,
    takeoff: 'https://www.youtube.com/watch?v=-s8ySZyzOIA&t=3m55s',
    landing: 'https://www.youtube.com/watch?v=-s8ySZyzOIA&t=6m30s',
  },
};
