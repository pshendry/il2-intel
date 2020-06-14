import Q from 'js-quantities';

export default {
  id: 'mc-202-ser-viii',
  type: 'MC.202',
  variant: 'MC.202 series VIII',
  combatDebut: new Date(1942, 5),
  airframe: {
    indicatedStallSpeedRanges: {
      takeoffLanding: [Q('139 km/h'), Q('142 km/h')],
      flight: [Q('151 km/h'), Q('166 km/h')],
    },
    diveSpeedLimit: Q('850 km/h'),
    maxLoadFactor: Q('14.8 gee'),
    stallAngles: {
      landing: Q('17.4 deg'),
      flight: Q('19.6 deg'),
    },
    takeoffSpeedRange: [Q('160 km/h'), Q('190 km/h')],
    glideslopeSpeedRange: [Q('190 km/h'), Q('200 km/h')],
    landingSpeedRange: [Q('140 km/h'), Q('150 km/h')],
    landingAngle: Q('13.9 deg'),
    length: Q('8.85 m'),
    wingspan: Q('10.58 m'),
    wingSurface: Q('16.8 m^2'),
  },
  characteristics: {
    maxTrueAirspeeds: [
      {
        altitude: Q('0 m'),
        engineMode: 'Combat',
        speed: Q('500 km/h'),
      },
      {
        altitude: Q('2000 m'),
        engineMode: 'Combat',
        speed: Q('543 km/h'),
      },
      {
        altitude: Q('5000 m'),
        engineMode: 'Combat',
        speed: Q('604 km/h'),
      },
    ],
    maxPerformance: {
      climb: [
        {
          altitude: Q('0 m'),
          engineMode: 'Combat',
          speed: Q('270 km/h'),
          rate: Q('17.3 m/s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Combat',
          speed: Q('270 km/h'),
          rate: Q('15.1 m/s'),
        },
        {
          altitude: Q('6000 m'),
          engineMode: 'Combat',
          speed: Q('270 km/h'),
          rate: Q('10.6 m/s'),
        },
      ],
      turn: [
        {
          altitude: Q('0 m'),
          engineMode: 'Boosted',
          speed: Q('270 km/h'),
          time: Q('22.6 s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Boosted',
          speed: Q('270 km/h'),
          time: Q('28.2 s'),
        },
      ],
    },
    serviceCeiling: Q('11600 m'),
    flightEndurance: [
      {
        altitude: Q('3000 m'),
        speed: Q('350 km/h'),
        time: Q('2.2 h'),
      },
    ],
  },
  engine: {
    model: 'RA. 1000',
    maxPowers: [
      {
        altitude: Q('0 m'),
        mode: 'Combat',
        power: Q('1050 hp'),
      },
      {
        altitude: Q('3700 m'),
        mode: 'Combat',
        power: Q('1100 hp'),
      },
      {
        altitude: Q('0 m'),
        mode: 'Boosted',
        power: Q('1175 hp'),
      },
    ],
    modes: [
      {
        name: 'Nominal',
        limit: null,
        rpm: Q('2200 rpm'),
        manifoldPressure: Q('1.23 atm'),
      },
      {
        name: 'Combat',
        limit: Q('5 min'),
        rpm: Q('2400 rpm'),
        manifoldPressure: Q('1.35 atm'),
      },
      {
        name: 'Boosted',
        limit: Q('1 min'),
        rpm: Q('2500 rpm'),
        manifoldPressure: Q('1.45 atm'),
      },
    ],
    ratedTemps: [
      {
        name: 'Oil intake',
        range: [Q('60 degC'), Q('75 degC')],
      },
      {
        name: 'Oil output',
        range: [Q('90 degC'), Q('100 degC')],
      },
      {
        name: 'Water intake',
        range: [Q('70 degC'), Q('80 degC')],
      },
      {
        name: 'Water output',
        range: [Q('94 degC')],
      },
    ],
    maxTemps: [
      {
        name: 'Oil intake',
        value: Q('85 degC'),
      },
      {
        name: 'Oil output',
        value: Q('110 degC'),
      },
      {
        name: 'Water output',
        value: Q('100 degC'),
      },
    ],
    superchargerGearShiftAltitude: null,
  },
  load: {
    emptyWeight: Q('2448 kg'),
    minimumWeight: Q('2622 kg'),
    standardWeight: Q('2967 kg'),
    maxTakeoffWeight: Q('3197 kg'),
    fuelLoad: [Q('307 kg'), Q('430 L')],
  },
  armament: {
    forwardFiring: {
      standard: [
        {
          qty: 2,
          name: 'Breda SAFAT 12.7',
          type: '12.7mm machine gun',
          count: 400,
          details: 'synchronized',
        },
      ],
      modifications: [
        {
          qty: 2,
          name: 'Breda SAFAT 7.7',
          type: '7.7mm machine gun',
          count: 500,
          details: 'wing-mounted',
        },
        {
          qty: 2,
          name: 'MG 151/20',
          type: '20mm gun',
          count: 135,
          details: 'wing-mounted',
        },
      ],
    },
    defensive: [],
    bombs: [],
    rockets: [],
  },
  features: [
    {
      feature: 'Throttle lever',
      details: ['Inverted (backward = full, forward = idle)'],
    },
    {
      feature: 'Mixture control',
      details: ['Automatic'],
    },
    {
      feature: 'Supercharger',
      details: ['Automatic'],
    },
    {
      feature: 'Governor',
      details: [
        'Automatic with two fixed modes: 2200 RPM (normal) and 2400 RPM (boosted)',
        'Can be disabled for manual control',
      ],
    },
    {
      feature: 'Oil & water radiator shutters',
      details: ['Manual control'],
    },
    {
      feature: 'Wings',
      details: ['Asymmetric for roll compensation; left is 20cm longer than right'],
    },
    {
      feature: 'Trimmers',
      details: ['Horizontal stabilizer'],
    },
    {
      feature: 'Flaps',
      details: ['Can be extended up to 40°', 'Will be pressed upwards by airflow at high speed (≥ 200 km/h)'],
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
      feature: 'Fuel tank',
      details: ['Indicates only the front fuel tank level'],
    },
    {
      feature: 'Canopy',
      details: ['Design does not allow opening during flight, but it has an emergency release for bailouts'],
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
    cockpit: 'https://www.youtube.com/watch?v=IHbhIFb9OfM&t=24s',
    engineStart: 'https://www.youtube.com/watch?v=IHbhIFb9OfM&t=3m20s',
    takeoff: 'https://www.youtube.com/watch?v=IHbhIFb9OfM&t=4m58s',
    landing: 'https://www.youtube.com/watch?v=IHbhIFb9OfM&t=6m38s',
  },
};
