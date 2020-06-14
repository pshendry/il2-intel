import Q from 'js-quantities';

export default {
  id: 'yak-1-ser-69',
  type: 'Yak-1',
  variant: 'Yak-1 series 69',
  combatDebut: new Date(1942, 4),
  airframe: {
    indicatedStallSpeedRanges: {
      takeoffLanding: [Q('133 km/h'), Q('146 km/h')],
      flight: [Q('155 km/h'), Q('171 km/h')],
    },
    diveSpeedLimit: Q('720 km/h'),
    maxLoadFactor: Q('10.3 gee'),
    stallAngles: {
      landing: Q('15.6 deg'),
      flight: Q('18 deg'),
    },
    takeoffSpeedRange: [Q('160 km/h'), Q('190 km/h')],
    glideslopeSpeedRange: [Q('195 km/h'), Q('205 km/h')],
    landingSpeedRange: [Q('135 km/h'), Q('145 km/h')],
    landingAngle: Q('12 deg'),
    length: Q('8.5 m'),
    wingspan: Q('10 m'),
    wingSurface: Q('17.15 m^2'),
  },
  characteristics: {
    maxTrueAirspeeds: [
      {
        altitude: Q('0 m'),
        engineMode: 'Nominal, 2550 RPM',
        speed: Q('514 km/h'),
      },
      {
        altitude: Q('2000 m'),
        engineMode: 'Nominal, 2700 RPM',
        speed: Q('549 km/h'),
      },
      {
        altitude: Q('4000 m'),
        engineMode: 'Nominal, 2700 RPM',
        speed: Q('582 km/h'),
      },
    ],
    maxPerformance: {
      climb: [
        {
          altitude: Q('0 m'),
          engineMode: 'Nominal, 2700 RPM',
          speed: Q('270 km/h'),
          rate: Q('16.9 m/s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Nominal, 2700 RPM',
          speed: Q('270 km/h'),
          rate: Q('15.0 m/s'),
        },
        {
          altitude: Q('6000 m'),
          engineMode: 'Nominal, 2700 RPM',
          speed: Q('270 km/h'),
          rate: Q('9.4 m/s'),
        },
      ],
      turn: [
        {
          altitude: Q('0 m'),
          engineMode: 'Nominal, 2700 RPM',
          speed: Q('270 km/h'),
          time: Q('19.2 s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Nominal, 2700 RPM',
          speed: Q('270 km/h'),
          time: Q('24.6 s'),
        },
      ],
    },
    serviceCeiling: Q('10200 m'),
    flightEndurance: [
      {
        altitude: Q('3000 m'),
        speed: Q('350 km/h'),
        time: Q('1.9 h'),
      },
    ],
  },
  engine: {
    model: 'M-105PF',
    maxPowers: [
      {
        altitude: Q('0 m'),
        mode: 'Nominal, 2550 RPM',
        power: Q('1240 hp'),
      },
      {
        altitude: Q('0 m'),
        mode: 'Nominal, 2700 RPM',
        power: Q('1210 hp'),
      },
      {
        altitude: Q('800 m'),
        mode: 'Nominal, 2700 RPM',
        power: Q('1260 hp'),
      },
      {
        altitude: Q('2700 m'),
        mode: 'Nominal, 2700 RPM',
        power: Q('1200 hp'),
      },
    ],
    modes: [
      {
        name: 'Nominal',
        limit: null,
        rpm: Q('2550 rpm'),
        manifoldPressure: Q('1050 mmHg'),
      },
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
    emptyWeight: Q('2365 kg'),
    minimumWeight: Q('2583 kg'),
    standardWeight: Q('2932 kg'),
    maxTakeoffWeight: Q('3170 kg'),
    fuelLoad: [Q('304 kg'), Q('408 L')],
  },
  armament: {
    forwardFiring: {
      standard: [
        {
          qty: 1,
          name: 'SsVAK',
          type: '20mm gun',
          count: 120,
          details: 'nose-mounted',
        },
        {
          qty: 2,
          name: 'ShKAS',
          type: '7.62mm machine gun',
          count: 750,
          details: 'synchronized',
        },
      ],
      modifications: [],
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
      details: ['Manual control', 'Two-stage (shift at 2300 m)'],
    },
    {
      feature: 'Mixture control',
      details: ['Manual control'],
    },
    {
      feature: 'Governor',
      details: ['Automatically controls prop pitch to maintain required RPM'],
    },
    {
      feature: 'Oil & water radiator shutters',
      details: ['Manual control'],
    },
    {
      feature: 'Trimmers',
      details: ['Pitch'],
    },
    {
      feature: 'Flaps',
      details: ['Can only extend fully (no gradual extension)', 'At ≥ 220 km/h, airflow may press the flaps upwards'],
    },
    {
      feature: 'Tail wheel',
      details: ['Has a manual lock'],
    },
    {
      feature: 'Wheel brakes',
      details: ['Differential brakes with shared control lever', 'Differential is applied via rudder pedals'],
    },
    {
      feature: 'Fuel gauges',
      details: ['Located on left/right wings, outside the cokcpit', 'Show only the last 80 L of fuel'],
    },
    {
      feature: 'Canopy',
      details: ['Impossible to open/close at high speed', 'No emergency release'],
    },
    {
      feature: 'Salvo controller',
      details: ['Bomb modes: 2', 'Rocket modes: 1, 2, 4'],
    },
  ],
  procedures: {
    engineStart: [],
    takeoff: [],
    landing: [],
  },
  trainingVideos: {
    cockpit: 'https://www.youtube.com/watch?v=0GsY3GkuS4E&t=22s',
    engineStart: 'https://www.youtube.com/watch?v=0GsY3GkuS4E&t=2m50s',
    takeoff: 'https://www.youtube.com/watch?v=0GsY3GkuS4E&t=3m49s',
    landing: 'https://www.youtube.com/watch?v=0GsY3GkuS4E&t=5m',
  },
};
