import Q from 'js-quantities';

export default {
  id: 'fw-190-d-9',
  type: 'Fw 190',
  variant: 'Fw 190 D-9',
  combatDebut: new Date(1944, 8),
  airframe: {
    indicatedStallSpeedRanges: {
      takeoffLanding: [Q('160 km/h'), Q('181 km/h')],
      flight: [Q('174 km/h'), Q('197 km/h')],
    },
    diveSpeedLimit: Q('850 km/h'),
    maxLoadFactor: Q('11 gee'),
    stallAngles: {
      landing: Q('18.1 deg'),
      flight: Q('19.5 deg'),
    },
    takeoffSpeedRange: [Q('180 km/h'), Q('220 km/h')],
    glideslopeSpeedRange: [Q('215 km/h'), Q('225 km/h')],
    landingSpeedRange: [Q('160 km/h'), Q('180 km/h')],
    landingAngle: Q('12.5 deg'),
    length: Q('10.2 m'),
    wingspan: Q('10.51 m'),
    wingSurface: Q('18.3 m^2'),
  },
  characteristics: {
    maxTrueAirspeeds: [
      {
        altitude: Q('0 m'),
        engineMode: 'Combat',
        speed: Q('565 km/h'),
      },
      {
        altitude: Q('3200 m'),
        engineMode: 'Combat',
        speed: Q('623 km/h'),
      },
      {
        altitude: Q('6500 m'),
        engineMode: 'Combat',
        speed: Q('63 km/h'),
      },
      {
        altitude: Q('0 m'),
        engineMode: 'Emergency',
        speed: Q('607 km/h'),
      },
      {
        altitude: Q('2000 m'),
        engineMode: 'Emergency',
        speed: Q('641 km/h'),
      },
      {
        altitude: Q('5200 m'),
        engineMode: 'Emergency',
        speed: Q('694 km/h'),
      },
    ],
    maxPerformance: {
      climb: [
        {
          altitude: Q('0 m'),
          engineMode: 'Combat',
          speed: Q('300 km/h'),
          rate: Q('19.0 m/s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Combat',
          speed: Q('300 km/h'),
          rate: Q('17.3 m/s'),
        },
        {
          altitude: Q('6000 m'),
          engineMode: 'Combat',
          speed: Q('300 km/h'),
          rate: Q('14.6 m/s'),
        },
      ],
      turn: [
        {
          altitude: Q('0 m'),
          engineMode: 'Emergency',
          speed: Q('300 km/h'),
          time: Q('20.0 s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Emergency',
          speed: Q('300 km/h'),
          time: Q('29.0 s'),
        },
      ],
    },
    serviceCeiling: Q('11600 m'),
    flightEndurance: [
      {
        altitude: Q('3000 m'),
        speed: Q('350 km/h'),
        time: Q('2.5 h'),
      },
    ],
  },
  engine: {
    model: 'Jumo-213 A1',
    maxPowers: [
      {
        altitude: Q('0 m'),
        mode: 'Combat',
        power: Q('1900 hp'),
      },
      {
        altitude: Q('5100 m'),
        mode: 'Combat',
        power: Q('1680 hp'),
      },
      {
        altitude: Q('0 m'),
        mode: 'Emergency',
        power: Q('2130 hp'),
      },
      {
        altitude: Q('3800 m'),
        mode: 'Emergency',
        power: Q('1980 hp'),
      },
    ],
    modes: [
      {
        name: 'Nominal',
        limit: null,
        rpm: Q('3000 rpm'),
        manifoldPressure: Q('1.42 atm'),
      },
      {
        name: 'Combat',
        limit: Q('30 min'),
        rpm: Q('3250 rpm'),
        manifoldPressure: Q('1.51 atm'),
      },
      {
        name: 'Emergency',
        limit: Q('3 min'),
        rpm: Q('3250 rpm'),
        manifoldPressure: Q('1.7 atm'),
      },
      {
        name: 'Emergency w/ MW-50',
        limit: Q('10 min'),
        rpm: Q('3250 rpm'),
        manifoldPressure: Q('1.8 atm'),
      },
    ],
    ratedTemps: [
      {
        name: 'Oil',
        range: [Q('40 degC'), Q('110 degC')],
      },
      {
        name: 'Water',
        range: [Q('55 degC'), Q('100 degC')],
      },
    ],
    maxTemps: [
      {
        name: 'Oil',
        value: Q('120 degC'),
      },
      {
        name: 'Water',
        value: Q('110 degC'),
      },
    ],
    superchargerGearShiftAltitude: null,
  },
  load: {
    emptyWeight: Q('3443 kg'),
    minimumWeight: Q('3759 kg'),
    standardWeight: Q('4289 kg'),
    maxTakeoffWeight: Q('4832 kg'),
    fuelLoad: [Q('388 kg'), Q('524 L')],
  },
  armament: {
    forwardFiring: {
      standard: [
        {
          qty: 2,
          name: 'MG 151/20',
          type: '20mm cannon',
          count: 250,
          details: 'wing-mounted',
        },
        {
          qty: 2,
          name: 'MG 131',
          type: '13mm machine gun',
          count: 475,
          details: 'synchronized',
        },
      ],
      modifications: [],
    },
    defensive: [],
    bombs: [
      {
        qty: 4,
        name: 'SD 70',
        type: '66kg fragmentation bomb',
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
    rockets: [
      {
        qty: 2,
        name: 'WGr.21',
        type: 'rockets in jettisonable launchers',
        details: null,
      },
      {
        qty: 26,
        name: 'R4M',
        type: 'rocket',
        details: null,
      },
    ],
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
      feature: 'MW-50 water-methanol mixture injection system',
      details: ['Engages automatically in Emergency engine mode', 'Prevents engine detonation'],
    },
    {
      feature: 'Radiator flaps',
      details: ['Automatic', 'Theromstat temperature can be set manually'],
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
      details: ['Cannot be opened at high speed, but it has an emergency release for bailouts'],
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
      '100 km/hr: Stick neutral',
      '200 km/hr: Rotate',
      'Before 250 km/hr: Flaps Up ',
      'Climb: 280 km/hr',
    ],
    landing: [
      {
        text: 'Downwind:',
        steps: [
          'Airspeed: Below 300km/hr',
          'Gear: Extend',
          'Flaps: “Start” Position',
          'H-Stab Trim: +1.5°',
          'Prop Pitch: Auto or Manual 1130',
        ],
      },
      {
        text: 'End Downwind:',
        steps: ['Airspeed: 250 km/hr', 'Flaps: “Landing” position'],
      },
      {
        text: 'Base to final:',
        steps: ['Airspeed: 200-220 km/hr'],
      },
    ],
  },
  trainingVideos: {
    cockpit: 'https://www.youtube.com/watch?v=O3JMpt66NU0&t=8s',
    startup: null,
    takeoff: 'https://www.youtube.com/watch?v=O3JMpt66NU0&t=4m15s',
    landing: 'https://www.youtube.com/watch?v=O3JMpt66NU0&t=5m57s',
  },
};
