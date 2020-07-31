import Q from 'js-quantities';

export default {
  id: 'i-16-type-24',
  type: 'I-16',
  variant: 'I-16 type 24',
  combatDebut: new Date(1941, 6),
  airframe: {
    indicatedStallSpeedRanges: {
      takeoffLanding: [Q('142 km/h'), Q('163 km/h')],
      flight: [Q('143 km/h'), Q('164 km/h')],
    },
    diveSpeedLimit: Q('620 km/h'),
    maxLoadFactor: Q('12 gee'),
    stallAngles: {
      landing: Q('15 deg'),
      flight: Q('17.6 deg'),
    },
    takeoffSpeedRange: [Q('145 km/h'), Q('175 km/h')],
    glideslopeSpeedRange: [Q('185 km/h'), Q('195 km/h')],
    landingSpeedRange: [Q('135 km/h'), Q('145 km/h')],
    landingAngle: Q('15.3 deg'),
    length: Q('6.04 m'),
    wingspan: Q('9 m'),
    wingSurface: Q('14.54 m^2'),
  },
  characteristics: {
    maxTrueAirspeeds: [
      {
        altitude: Q('0 m'),
        engineMode: 'Boosted',
        speed: Q('448 km/h'),
      },
      {
        altitude: Q('1800 m'),
        engineMode: 'Nominal',
        speed: Q('460 km/h'),
      },
      {
        altitude: Q('4500 m'),
        engineMode: 'Nominal',
        speed: Q('490 km/h'),
      },
    ],
    maxPerformance: {
      climb: [
        {
          altitude: Q('0 m'),
          engineMode: 'Boosted',
          speed: Q('230 m/s'),
          rate: Q('19.5 m/s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Boosted',
          speed: Q('230 m/s'),
          rate: Q('13.8 m/s'),
        },
        {
          altitude: Q('6000 m'),
          engineMode: 'Boosted',
          speed: Q('230 m/s'),
          rate: Q('8.8 m/s'),
        },
      ],
      turn: [
        {
          altitude: Q('0 m'),
          engineMode: 'Boosted',
          speed: Q('230 km/h'),
          time: Q('19.0 s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Emergency',
          speed: Q('230 km/h'),
          time: Q('25.3 s'),
        },
      ],
    },
    serviceCeiling: Q('10500 m'),
    flightEndurance: [
      {
        altitude: Q('3000 m'),
        speed: Q('350 km/h'),
        time: Q('2.6 h'),
      },
    ],
  },
  engine: {
    model: 'M-63',
    maxPowers: [
      {
        altitude: Q('0 m'),
        mode: 'Nominal',
        power: Q('930 hp'),
      },
      {
        altitude: Q('1800 m'),
        mode: 'Nominal',
        power: Q('1000 hp'),
      },
      {
        altitude: Q('4500 m'),
        mode: 'Nominal',
        power: Q('900 hp'),
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
        manifoldPressure: Q('915 mmHg'),
      },
      {
        name: 'Boosted',
        limit: Q('5 min'),
        rpm: Q('2300 rpm'),
        manifoldPressure: Q('1065 mmHg'),
      },
    ],
    ratedTemps: [
      {
        name: 'Oil',
        range: [Q('55 degC'), Q('90 degC')],
      },
      {
        name: 'Cylinder head',
        range: [Q('120 degC'), Q('200 degC')],
      },
    ],
    maxTemps: [
      {
        name: 'Oil',
        value: Q('125 degC'),
      },
      {
        name: 'Cylinder head',
        value: Q('205 degC'),
      },
    ],
    superchargerGearShiftAltitude: Q('3000 m'),
  },
  load: {
    emptyWeight: Q('1501 kg'),
    minimumWeight: Q('1633 kg'),
    standardWeight: Q('1878 kg'),
    maxTakeoffWeight: Q('2146 kg'),
    fuelLoad: [Q('191 kg'), Q('260 L')],
  },
  armament: {
    forwardFiring: {
      standard: [
        {
          qty: 2,
          name: 'ShKAS',
          type: '7.62mm machine gun',
          count: 500,
          details: null,
        },
        {
          qty: 2,
          name: 'ShKAS',
          type: '7.62mm machine gun',
          count: 900,
          details: 'wing-mounted',
        },
      ],
      modifications: [
        {
          qty: 2,
          name: 'SsVAK',
          type: '20mm gun',
          count: 90,
          details: 'wing-mounted',
        },
      ],
    },
    defensive: [],
    bombs: [
      {
        qty: 2,
        name: 'FAB-50sv',
        type: '50 kg general purpose bomb',
      },
      {
        qty: 2,
        name: 'FAB-100M',
        type: '104 kg general purpose bomb',
      },
    ],
    rockets: [
      {
        qty: 6,
        name: 'ROS-82',
        type: '7kg rocket',
      },
    ],
  },
  features: [
    {
      feature: 'Boost',
      details: ['To engage, set boost lever to full forward and increase engine to 2300 RPM'],
    },
    {
      feature: 'Supercharger',
      details: ['Manual control', 'Two-stage (shift at 3000 m)'],
    },
    {
      feature: 'Mixture control',
      details: ['Automatic when set to full rich'],
    },
    {
      feature: 'Governor',
      details: ['Automatically controls prop pitch to maintain required RPM'],
    },
    {
      feature: 'Oil radiator & air intake shutters',
      details: ['Manual control'],
    },
    {
      feature: 'Flaps',
      details: ['Manually operated (slow to operate)', 'Can be extended up to 53°'],
    },
    {
      feature: 'Landing gear',
      details: ['Manually operated (slow to operate)'],
    },
    {
      feature: 'Tail wheel',
      details: ['Rotation is linked to rudder pedals'],
    },
    {
      feature: 'Wheel brakes',
      details: ['Independent left and right brakes'],
    },
    {
      feature: 'Fuel gauge',
      details: ['Displays only when manual sucker lever is pushed in (in-game every 10 s)'],
    },
    {
      feature: 'Cockpit side doors',
      details: ['Should be closed before takeoff'],
    },
    {
      feature: 'Salvo controller',
      details: ['Bomb modes: 1, 2', 'Rocket modes: 1, 2, 4'],
    },
    {
      feature: 'Gunsight',
      details: ['Has a sliding sun filter', 'Has a backup folding mechanical sight'],
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
        steps: ['Airspeed: 180..200 km/hr'],
      },
    ],
  },
  trainingVideos: {
    cockpit: 'https://www.youtube.com/watch?v=U9VLCERaCvk&t=22s',
    startup: 'https://www.youtube.com/watch?v=U9VLCERaCvk&t=2m42s',
    takeoff: 'https://www.youtube.com/watch?v=U9VLCERaCvk&t=4m26s',
    landing: 'https://www.youtube.com/watch?v=U9VLCERaCvk&t=6m8s',
  },
};
