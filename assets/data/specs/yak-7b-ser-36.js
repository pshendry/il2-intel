import Q from 'js-quantities';

export default {
  id: 'yak-7b-ser-36',
  type: 'Yak-7B',
  variant: 'Yak-7B series 36',
  combatDebut: new Date(1942, 4),
  airframe: {
    indicatedStallSpeedRanges: {
      takeoffLanding: [Q('139 km/h'), Q('154 km/h')],
      flight: [Q('155 km/h'), Q('172 km/h')],
    },
    diveSpeedLimit: Q('740 km/h'),
    maxLoadFactor: Q('11.5 gee'),
    stallAngles: {
      landing: Q('19 deg'),
      flight: Q('20 deg'),
    },
    takeoffSpeedRange: [Q('170 km/h'), Q('175 km/h')],
    glideslopeSpeedRange: [Q('200 km/h')],
    landingSpeedRange: [Q('145 km/h'), Q('165 km/h')],
    landingAngle: Q('11.5 deg'),
    length: Q('8.5 m'),
    wingspan: Q('10 m'),
    wingSurface: Q('17.15 m^2'),
  },
  characteristics: {
    maxTrueAirspeeds: [
      {
        altitude: Q('0 m'),
        engineMode: 'Nominal',
        speed: Q('526 km/h'),
      },
      {
        altitude: Q('2000 m'),
        engineMode: 'Nominal',
        speed: Q('565 km/h'),
      },
      {
        altitude: Q('4000 m'),
        engineMode: 'Nominal',
        speed: Q('586 km/h'),
      },
    ],
    maxPerformance: {
      climb: [
        {
          altitude: Q('0 m'),
          engineMode: 'Nominal',
          speed: Q('310 km/h'),
          rate: Q('16.9 m/s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Nominal',
          speed: Q('310 km/h'),
          rate: Q('14.3 m/s'),
        },
        {
          altitude: Q('6000 m'),
          engineMode: 'Nominal',
          speed: Q('310 km/h'),
          rate: Q('8.6 m/s'),
        },
      ],
      turn: [
        {
          altitude: Q('0 m'),
          engineMode: 'Nominal',
          speed: Q('310 km/h'),
          time: Q('19.5 s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Nominal',
          speed: Q('310 km/h'),
          time: Q('24.5 s'),
        },
      ],
    },
    serviceCeiling: Q('10660 m'),
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
        mode: 'Nominal',
        power: Q('1210 hp'),
      },
      {
        altitude: Q('700 m'),
        mode: 'Nominal',
        power: Q('1260 hp'),
      },
      {
        altitude: Q('2700 m'),
        mode: 'Nominal',
        power: Q('1180 hp'),
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
    superchargerGearShiftAltitude: Q('2000 m'),
  },
  load: {
    emptyWeight: Q('2302 kg'),
    minimumWeight: Q('2630 kg'),
    standardWeight: Q('3002 kg'),
    maxTakeoffWeight: Q('3229 kg'),
    fuelLoad: [Q('305 kg'), Q('420 L')],
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
          name: 'UBS',
          type: '12.7mm machine gun',
          count: 400,
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
    rockets: [],
  },
  features: [
    {
      feature: 'Supercharger',
      details: ['Manual control', 'Two-stage (shift at 2000 m)'],
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
    cockpit: 'https://www.youtube.com/watch?v=jjojjr9zBNQ&t=8s',
    engineStart: null,
    takeoff: 'https://www.youtube.com/watch?v=jjojjr9zBNQ&t=3m16s',
    landing: 'https://www.youtube.com/watch?v=jjojjr9zBNQ&t=5m05s',
  },
};
