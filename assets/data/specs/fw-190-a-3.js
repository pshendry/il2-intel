import Q from 'js-quantities';

export default {
  id: 'fw-190-a-3',
  type: 'Fw 190',
  variant: 'Fw 190 A-3',
  combatDebut: new Date(1942, 2),
  airframe: {
    indicatedStallSpeedRanges: {
      takeoffLanding: [Q('166 km/h'), Q('172 km/h')],
      flight: [Q('166 km/h'), Q('189 km/h')],
    },
    diveSpeedLimit: Q('850 km/h'),
    maxLoadFactor: Q('11 gee'),
    stallAngles: {
      landing: Q('18.1 deg'),
      flight: Q('19.5 deg'),
    },
    takeoffSpeedRange: [Q('170 km/h'), Q('210 km/h')],
    glideslopeSpeedRange: [Q('205 km/h'), Q('215 km/h')],
    landingSpeedRange: [Q('160 km/h'), Q('170 km/h')],
    landingAngle: Q('12.5 deg'),
    length: Q('8.85 m'),
    wingspan: Q('10.51 m'),
    wingSurface: Q('18.3 m^2'),
  },
  characteristics: {
    maxTrueAirspeeds: [
      {
        altitude: Q('0 m'),
        engineMode: 'Combat',
        speed: Q('535 km/h'),
      },
      {
        altitude: Q('3000 m'),
        engineMode: 'Combat',
        speed: Q('562 km/h'),
      },
      {
        altitude: Q('6000 m'),
        engineMode: 'Combat',
        speed: Q('626 km/h'),
      },
      {
        altitude: Q('0 m'),
        engineMode: 'Emergency',
        speed: Q('560 km/h'),
      },
      {
        altitude: Q('3000 m'),
        engineMode: 'Emergency',
        speed: Q('581 km/h'),
      },
      {
        altitude: Q('6400 m'),
        engineMode: 'Emergency',
        speed: Q('662 km/h'),
      },
    ],
    maxPerformance: {
      climb: [
        {
          altitude: Q('0 m'),
          engineMode: 'Combat',
          speed: Q('280 km/h'),
          rate: Q('16.0 m/s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Combat',
          speed: Q('280 km/h'),
          rate: Q('12.7 m/s'),
        },
        {
          altitude: Q('6000 m'),
          engineMode: 'Combat',
          speed: Q('280 km/h'),
          rate: Q('10.3 m/s'),
        },
      ],
      turn: [
        {
          altitude: Q('0 m'),
          engineMode: 'Emergency',
          speed: Q('280 km/h'),
          time: Q('23.0 s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Emergency',
          speed: Q('280 km/h'),
          time: Q('28.0 s'),
        },
      ],
    },
    serviceCeiling: Q('10800 m'),
    flightEndurance: [
      {
        altitude: Q('3000 m'),
        speed: Q('350 km/h'),
        time: Q('3.2 h'),
      },
    ],
  },
  engine: {
    model: 'BMW-801D',
    maxPowers: [
      {
        altitude: Q('700 m'),
        mode: 'Combat',
        power: Q('1520 hp'),
      },
      {
        altitude: Q('5300 m'),
        mode: 'Combat',
        power: Q('1320 hp'),
      },
      {
        altitude: Q('0 m'),
        mode: 'Emergency',
        power: Q('1700 hp'),
      },
      {
        altitude: Q('5700 m'),
        mode: 'Emergency',
        power: Q('1440 hp'),
      },
    ],
    modes: [
      {
        name: 'Nominal',
        limit: null,
        rpm: Q('2300 rpm'),
        manifoldPressure: Q('1.2 atm'),
      },
      {
        name: 'Combat',
        limit: Q('30 min'),
        rpm: Q('2400 rpm'),
        manifoldPressure: Q('1.32 atm'),
      },
      {
        name: 'Emergency',
        limit: Q('3 min'),
        rpm: Q('2700 rpm'),
        manifoldPressure: Q('1.42 atm'),
      },
    ],
    ratedTemps: [
      {
        name: 'Oil intake',
        range: [Q('60 degC'), Q('70 degC')],
      },
      {
        name: 'Oil output',
        range: [Q('105 degC')],
      },
      {
        name: 'Cylinder head',
        range: [Q('180 degC')],
      },
    ],
    maxTemps: [
      {
        name: 'Oil intake',
        value: Q('85 degC'),
      },
      {
        name: 'Oil output',
        value: Q('120 degC'),
      },
      {
        name: 'Cylinder head',
        value: Q('220 degC'),
      },
    ],
    superchargerGearShiftAltitude: null,
  },
  load: {
    emptyWeight: Q('3148 kg'),
    minimumWeight: Q('330 kg'),
    standardWeight: Q('3855 kg'),
    maxTakeoffWeight: Q('4385 kg'),
    fuelLoad: [Q('409 kg'), Q('524 L')],
  },
  armament: {
    forwardFiring: {
      standard: [
        {
          qty: 2,
          name: 'MG 151/20',
          type: '20mm cannon',
          count: 250,
          details: 'synchronized',
        },
        {
          qty: 2,
          name: 'MG 17',
          type: '7.92mm machine gun',
          count: 900,
          details: 'synchronized',
        },
      ],
      modifications: [
        {
          qty: 2,
          name: 'MG FF',
          type: '20mm cannon',
          count: 90,
          details: 'wing-mounted',
        },
      ],
    },
    defensive: [],
    bombs: [
      {
        qty: 4,
        name: 'SC 50',
        type: '55kg general purpose bomb',
      },
      {
        qty: 1,
        name: 'SC 250',
        type: '249kg general purpose bomb',
      },
      {
        qty: 1,
        name: 'SC 500',
        type: '500kg general purpose bomb',
      },
    ],
    rockets: [],
  },
  features: [
    {
      feature: 'Governor',
      details: ['Automatically controls prop pitch to maintain required RPM'],
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
      feature: 'Trimmers',
      details: ['Horizontal stabilizer'],
    },
    {
      feature: 'Flaps',
      details: [
        'Have 3 fixed positions: retracted, takeoff (13°) and landing (58°)',
        'Indicated by lights on the left panel and on the wing itself',
      ],
    },
    {
      feature: 'Tail wheel',
      details: ['Locks when the flight stick is pulled backward'],
    },
    {
      feature: 'Wheel brakes',
      details: ['Independent left and right brakes'],
    },
    {
      feature: 'Fuel gauge',
      details: [
        'Shows fuel in the front or rear tank (switches in-game every 10s)',
        'Has emergency warning light (100 L)',
      ],
    },
    {
      feature: 'Canopy',
      details: ['Cannot be opened during flight, but it has an emergency release for bailouts'],
    },
    {
      feature: 'Gunsight',
      details: ['Has sliding sun filter'],
    },
  ],
  procedures: {
    startup: ['Throttle: 1”', 'Prop Pitch: Auto', 'Press E to start'],
    takeoff: [
      'Canopy: Closed',
      'Flaps: “Start” position',
      'H-stab trim: +1.5°',
      'Prop Pitch: Auto',
      'Tailwheel: Locked (pull stick back)',
      '100 km/h: Stick neutral',
      '180 km/h: Rotate',
      'Before 250 km/h: Flaps Up ',
      'Climb: 280 km/h',
    ],
    landing: [
      {
        text: 'Downwind:',
        steps: [
          'Airspeed: Below 300km/h',
          'Gear: Extend',
          'Flaps: “Start” Position',
          'H-Stab Trim: +1.5°',
          'Prop Pitch: Auto or Manual 1130',
        ],
      },
      {
        text: 'End Downwind:',
        steps: ['Airspeed: 250 km/h', 'Flaps: “Landing” position'],
      },
      {
        text: 'Base to final:',
        steps: ['Airspeed: 200-220 km/h'],
      },
    ],
  },
  trainingVideos: {
    cockpit: 'https://www.youtube.com/watch?v=e_IfUWe7F8c&t=26s',
    startup: 'https://www.youtube.com/watch?v=e_IfUWe7F8c&t=2m06s',
    takeoff: 'https://www.youtube.com/watch?v=e_IfUWe7F8c&t=3m30s',
    landing: 'https://www.youtube.com/watch?v=e_IfUWe7F8c&t=4m36s',
  },
};
