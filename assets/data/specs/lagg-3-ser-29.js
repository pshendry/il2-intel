import Q from 'js-quantities';

export default {
  id: 'lagg-3-ser-29',
  type: 'LaGG-3',
  variant: 'LaGG-3 series 29',
  combatDebut: new Date(1942, 4),
  airframe: {
    indicatedStallSpeedRanges: {
      takeoffLanding: [Q('138 km/h'), Q('168 km/h')],
      flight: [Q('163 km/h'), Q('189 km/h')],
    },
    diveSpeedLimit: Q('750 km/h'),
    maxLoadFactor: Q('11 gee'),
    stallAngles: {
      landing: Q('15 deg'),
      flight: Q('18 deg'),
    },
    takeoffSpeedRange: [Q('165 km/h'), Q('200 km/h')],
    glideslopeSpeedRange: [Q('200 km/h'), Q('210 km/h')],
    landingSpeedRange: [Q('140 km/h'), Q('160 km/h')],
    landingAngle: Q('12.8 deg'),
    length: Q('8.84 m'),
    wingspan: Q('9.8 m'),
    wingSurface: Q('17.51 m^2'),
  },
  characteristics: {
    maxTrueAirspeeds: [
      {
        altitude: Q('0 m'),
        engineMode: 'Nominal',
        speed: Q('505 km/h'),
      },
      {
        altitude: Q('2000 m'),
        engineMode: 'Nominal',
        speed: Q('548 km/h'),
      },
      {
        altitude: Q('4000 m'),
        engineMode: 'Nominal',
        speed: Q('573 km/h'),
      },
    ],
    maxPerformance: {
      climb: [
        {
          altitude: Q('0 m'),
          engineMode: 'Nominal',
          speed: Q('280 km/h'),
          rate: Q('14.9 m/s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Nominal',
          speed: Q('270 km/h'),
          rate: Q('13.3 m/s'),
        },
        {
          altitude: Q('6000 m'),
          engineMode: 'Nominal',
          speed: Q('270 km/h'),
          rate: Q('8 m/s'),
        },
      ],
      turn: [
        {
          altitude: Q('0 m'),
          engineMode: 'Nominal',
          speed: Q('280 km/h'),
          time: Q('22.2 s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Nominal',
          speed: Q('270 km/h'),
          time: Q('28.9 s'),
        },
      ],
    },
    serviceCeiling: Q('10500 m'),
    flightEndurance: [
      {
        altitude: Q('3000 m'),
        speed: Q('350 km/h'),
        time: Q('2.2 h'),
      },
    ],
  },
  engine: {
    model: 'M-105PF',
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
    superchargerGearShiftAltitude: Q('2500 m'),
  },
  load: {
    emptyWeight: Q('2620 kg'),
    minimumWeight: Q('2773 kg'),
    standardWeight: Q('3157 kg'),
    maxTakeoffWeight: Q('3701 kg'),
    fuelLoad: [Q('348 kg'), Q('467 L')],
  },
  armament: {
    forwardFiring: {
      standard: [
        {
          qty: 1,
          name: 'SsVAK',
          type: '20mm gun',
          count: 160,
          details: 'nose-mounted',
        },
        {
          qty: 1,
          name: 'UB',
          type: '12.7mm machine gun',
          count: 200,
          details: 'synchronized',
        },
      ],
      modifications: [
        {
          qty: 1,
          name: 'VYa-23',
          type: '23mm gun',
          count: 90,
          details: 'nose-mounted',
        },
        {
          qty: 1,
          name: 'Sh-37',
          type: '37mm gun',
          count: 20,
          details: 'nose-mounted',
        },
      ],
    },
    defensive: [],
    bombs: [
      {
        qty: 2,
        name: 'FAB-50sv',
        type: '50kg general purpose bomb',
        details: null,
      },
      {
        qty: 2,
        name: 'FAB-100M',
        type: '104kg general purpose bomb',
        details: null,
      },
    ],
    rockets: [
      {
        qty: 6,
        name: 'ROS-82',
        type: '7kg rocket',
        details: 'HE payload mass 2.52 kg',
      },
    ],
  },
  features: [
    {
      feature: 'Supercharger',
      details: ['Manual control', 'Two-stage (shift at 2500 m)'],
    },
    {
      feature: 'Mixture control',
      details: ['Manual control'],
    },
    {
      feature: 'Governor',
      details: ['Automatic'],
    },
    {
      feature: 'Oil & water radiator shutters',
      details: ['Manual control'],
    },
    {
      feature: 'Trimmers',
      details: ['Pitch, roll, yaw'],
    },
    {
      feature: 'Flaps',
      details: ['Can be extended up to 60°'],
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
      feature: 'Canopy',
      details: [
        'Has weak lock in open position; may close in a steep dive',
        'Impossible to open/close at high speed',
        'No emergency release',
      ],
    },
    {
      feature: 'Salvo controller',
      details: ['Bomb modes: 1', 'Rocket modes: 1, 2, 4'],
    },
  ],
  procedures: {
    startup: [
      'Mixture: Full Rich',
      'Throttle: 1”',
      'RPM: Full forward',
      'Water/Oil Radiators: As required',
      'Press E to start',
    ],
    takeoff: [
      'Canopy: Closed',
      'Flaps: 20°',
      'RPM: Full forward',
      'Water/Oil Radiators: Fully Open',
      '190 km/hr: Rotate',
      'Before 250 km/hr: Flaps up',
    ],
    landing: [
      {
        text: 'Downwind',
        steps: [
          'MP: 500 mmHG',
          'RPM: 2600',
          'Airspeed: Below 300 km/hr',
          'Gear: Extend',
          'Water/Oil Radiators: As required',
        ],
      },
      {
        text: 'End Downwind',
        steps: ['Airspeed: Below 250 km/hr', 'Flaps: Extend fully'],
      },
      {
        text: 'Base to Final',
        steps: ['Airspeed: 200 km/hr'],
      },
    ],
  },
  trainingVideos: {
    cockpit: 'https://www.youtube.com/watch?v=CxovZk-EfRo&t=30s',
    startup: 'https://www.youtube.com/watch?v=CxovZk-EfRo&t=2m44s',
    takeoff: 'https://www.youtube.com/watch?v=CxovZk-EfRo&t=3m29s',
    landing: 'https://www.youtube.com/watch?v=CxovZk-EfRo&t=4m47s',
  },
};
