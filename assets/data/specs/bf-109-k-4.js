import Q from 'js-quantities';

export default {
  id: 'bf-109-k-4',
  type: 'Bf 109',
  variant: 'Bf 109 K-4',
  combatDebut: new Date(1944, 9),
  airframe: {
    indicatedStallSpeedRanges: {
      takeoffLanding: [Q('160 km/h'), Q('181 km/h')],
      flight: [Q('167 km/h'), Q('190 km/h')],
    },
    diveSpeedLimit: Q('850 km/h'),
    maxLoadFactor: Q('10.5 gee'),
    stallAngles: {
      landing: Q('17 deg'),
      flight: Q('19.8 deg'),
    },
    takeoffSpeedRange: [Q('160 km/h'), Q('190 km/h')],
    glideslopeSpeedRange: [Q('200 km/h'), Q('215 km/h')],
    landingSpeedRange: [Q('155 km/h'), Q('160 km/h')],
    landingAngle: Q('12.5 deg'),
    length: Q('8.94 m'),
    wingspan: Q('9.97 m'),
    wingSurface: Q('16.1 m^2'),
  },
  characteristics: {
    // DB-605DB engine
    maxTrueAirspeeds: [
      {
        altitude: Q('0 m'),
        engineMode: 'Combat',
        speed: Q('543 km/h'),
      },
      {
        altitude: Q('8000 m'),
        engineMode: 'Combat',
        speed: Q('684 km/h'),
      },
      {
        altitude: Q('0 m'),
        engineMode: 'Emergency',
        speed: Q('599 km/h'),
      },
      {
        altitude: Q('7500 m'),
        engineMode: 'Emergency',
        speed: Q('702 km/h'),
      },
    ],
    maxPerformance: {
      climb: [
        {
          altitude: Q('0 m'),
          engineMode: 'Combat',
          speed: Q('270 km/h'),
          rate: Q('20.5 m/s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Combat',
          speed: Q('270 km/h'),
          rate: Q('17.5 m/s'),
        },
        {
          altitude: Q('6000 m'),
          engineMode: 'Combat',
          speed: Q('270 km/h'),
          rate: Q('13.4 m/s'),
        },
      ],
      turn: [
        {
          altitude: Q('0 m'),
          engineMode: 'Combat',
          speed: Q('270 km/h'),
          time: Q('24.0 s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Combat',
          speed: Q('270 km/h'),
          time: Q('32.2 s'),
        },
      ],
    },
    // TODO support multiple engines
    // DB-605DC engine
    // maxTrueAirspeeds: [
    //   {
    //     altitude: Q('0 m'),
    //     engineMode: 'Combat',
    //     speed: Q('536 km/h'),
    //   },
    //   {
    //     altitude: Q('8000 m'),
    //     engineMode: 'Combat',
    //     speed: Q('684 km/h'),
    //   },
    //   {
    //     altitude: Q('0 m'),
    //     engineMode: 'Emergency',
    //     speed: Q('614 km/h'),
    //   },
    //   {
    //     altitude: Q('6200 m'),
    //     engineMode: 'Emergency',
    //     speed: Q('713 km/h'),
    //   },
    // ],
    // maxPerformance: {
    //   climb: [
    //     {
    //       altitude: Q('0 m'),
    //       engineMode: 'Combat',
    //       speed: Q('270 km/h'),
    //       rate: Q('19.7 m/s'),
    //     },
    //     {
    //       altitude: Q('3000 m'),
    //       engineMode: 'Combat',
    //       speed: Q('270 km/h'),
    //       rate: Q('17.4 m/s'),
    //     },
    //     {
    //       altitude: Q('6000 m'),
    //       engineMode: 'Combat',
    //       speed: Q('270 km/h'),
    //       rate: Q('13.3 m/s'),
    //     },
    //   ],
    //   turn: [
    //     {
    //       altitude: Q('0 m'),
    //       engineMode: 'Combat',
    //       speed: Q('270 km/h'),
    //       time: Q('24.2 s'),
    //     },
    //     {
    //       altitude: Q('3000 m'),
    //       engineMode: 'Combat',
    //       speed: Q('270 km/h'),
    //       time: Q('32.3 s'),
    //     },
    //   ],
    // },
    serviceCeiling: Q('12300 m'),
    flightEndurance: [
      {
        altitude: Q('3000 m'),
        speed: Q('350 km/h'),
        time: Q('2.15 h'),
      },
    ],
  },
  engine: {
    model: 'DB-605DB',
    maxPowers: [
      {
        altitude: Q('0 m'),
        mode: 'Combat',
        power: Q('1430 hp'),
      },
      {
        altitude: Q('6800 m'),
        mode: 'Combat',
        power: Q('1285 hp'),
      },
      {
        altitude: Q('0 m'),
        mode: 'Emergency',
        power: Q('1850 hp'),
      },
      {
        altitude: Q('6000 m'),
        mode: 'Emergency',
        power: Q('1850 hp'),
      },
    ],
    modes: [
      {
        name: 'Nominal',
        limit: null,
        rpm: Q('2400 rpm'),
        manifoldPressure: Q('1.35 atm'),
      },
      {
        name: 'Combat',
        limit: Q('30 min'),
        rpm: Q('2600 rpm'),
        manifoldPressure: Q('1.45 atm'),
      },
      {
        name: 'Emergency',
        limit: Q('10 min'),
        rpm: Q('2800 rpm'),
        manifoldPressure: Q('1.98 atm'),
      },
    ],
    ratedTemps: [
      {
        name: 'Oil',
        range: [Q('70 degC'), Q('80 degC')],
      },
      {
        name: 'Water',
        range: [Q('100 degC'), Q('102 degC')],
      },
    ],
    maxTemps: [
      {
        name: 'Oil',
        value: Q('95 degC'),
      },
      {
        name: 'Water',
        value: Q('115 degC'),
      },
    ],
    superchargerGearShiftAltitude: null,
  },
  load: {
    emptyWeight: Q('2754 kg'),
    minimumWeight: Q('3006 kg'),
    standardWeight: Q('3361 kg'),
    maxTakeoffWeight: Q('3891 kg'),
    fuelLoad: [Q('304 kg'), Q('400 L')],
  },
  armament: {
    forwardFiring: {
      standard: [
        {
          qty: 1,
          name: 'MK 108',
          type: '30mm gun',
          count: 65,
          details: 'nose-mounted',
        },
        {
          qty: 2,
          name: 'MG 131',
          type: '13mm machine gun',
          count: 300,
          details: 'synchronized',
        },
      ],
      modifications: [
        {
          qty: 2,
          name: 'MG 151/20',
          type: '20mm cannon',
          count: 135,
          details: 'wing-mounted',
        },
      ],
    },
    defensive: [],
    bombs: [
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
      feature: 'MW-50 water-methanol mixture injection system',
      details: [
        'Prevents engine detonation in Emergency power mode',
        'Engages automatically when throttle is full forward',
        'Has enough mixture for 30 minutes',
        'Has a pressure indicator in left of cockpit: normal pressure is 0.6..0.7, stop using at < 0.4',
      ],
    },

    {
      feature: 'Oil & water radiator shutters',
      details: ['Automatic / manual control'],
    },
    {
      feature: 'Trimmers',
      details: ['Horizontal stabilizer'],
    },
    {
      feature: 'Automatic wing slats',
      details: ['Deploy automatically at high angle of attack, which makes pre-stall softer'],
    },
    {
      feature: 'Flaps',
      details: [
        'Slow to operate; allow time for this on landing approach',
        'Can be extended up to 40°',
        'Black line markings on the flaps measure their extension',
      ],
    },
    {
      feature: 'Tail wheel',
      details: ['Has a manual lock'],
    },
    {
      feature: 'Wheel brakes',
      details: ['Independent left and right brakes'],
    },
    {
      feature: 'Fuel gauge',
      details: ['Has emergency warning light (80 L)'],
    },
    {
      feature: 'Canopy',
      details: ['Design does not allow opening during flight, but it has an emergency release for bailouts'],
    },
    {
      feature: 'Gunsight',
      details: ['Has sliding sun filter'],
    },
  ],
  procedures: {
    startup: [
      'Canopy: Closed',
      'Flaps: 20°',
      'H-Stab Trim: +1',
      'Throttle: 1”',
      'Prop Pitch: Auto',
      'Radiators: Auto',
      'Press E to start',
    ],
    takeoff: [
      'Canopy: Closed',
      'Flaps: 20°',
      'H-Stab Trim: +1',
      'Tailwheel: Locked',
      'Prop Pitch: Auto',
      '180 km/h: Rotate',
      '200 km/h: Flaps Up',
      'Climb: 270 km/h to 3000m',
    ],
    landing: [
      {
        text: 'Downwind',
        steps: [
          'Airspeed: Below 300 km/h',
          'Gear: Extend',
          'Tailwheel: Locked',
          'H-Stab Trim: -4 to -5',
          'Prop Pitch: Auto or Manual 12OC',
        ],
      },
      {
        text: 'End Downwind',
        steps: ['Airspeed: 220 km/h', 'Flaps: Extend to full'],
      },
      {
        text: 'Base to final',
        steps: ['Airspeed: 180..200 km/h'],
      },
    ],
  },
  trainingVideos: {
    cockpit: 'https://www.youtube.com/watch?v=reVg2i8gcVg&t=7s',
    startup: null,
    takeoff: 'https://www.youtube.com/watch?v=reVg2i8gcVg&t=3m49s',
    landing: 'https://www.youtube.com/watch?v=reVg2i8gcVg&t=5m51s',
  },
};
