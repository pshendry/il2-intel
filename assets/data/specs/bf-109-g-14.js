import Q from 'js-quantities';

export default {
  id: 'bf-109-g-14',
  type: 'Bf 109',
  variant: 'Bf 109 G-14',
  combatDebut: new Date(1943, 6),
  airframe: {
    indicatedStallSpeedRanges: {
      takeoffLanding: [Q('156 km/h'), Q('172 km/h')],
      flight: [Q('164 km/h'), Q('181 km/h')],
    },
    diveSpeedLimit: Q('850 km/h'),
    maxLoadFactor: Q('10.5 gee'),
    stallAngles: {
      landing: Q('17 deg'),
      flight: Q('19.8 deg'),
    },
    takeoffSpeedRange: [Q('155 km/h'), Q('180 km/h')],
    glideslopeSpeedRange: [Q('195 km/h'), Q('205 km/h')],
    landingSpeedRange: [Q('150 km/h'), Q('155 km/h')],
    landingAngle: Q('13.7 deg'),
    length: Q('8.94 m'),
    wingspan: Q('9.97 m'),
    wingSurface: Q('16.1 m^2'),
  },
  characteristics: {
    maxTrueAirspeeds: [
      {
        altitude: Q('0 m'),
        engineMode: 'Combat',
        speed: Q('505 km/h'),
      },
      {
        altitude: Q('2000 m'),
        engineMode: 'Combat',
        speed: Q('547 km/h'),
      },
      {
        altitude: Q('7000 m'),
        engineMode: 'Combat',
        speed: Q('619 km/h'),
      },
      {
        altitude: Q('0 m'),
        engineMode: 'Emergency',
        speed: Q('576 km/h'),
      },
      {
        altitude: Q('5500 m'),
        engineMode: 'Emergency',
        speed: Q('668 km/h'),
      },
    ],
    maxPerformance: {
      climb: [
        {
          altitude: Q('0 m'),
          engineMode: 'Combat',
          speed: Q('270 km/h'),
          rate: Q('19.2 m/s'),
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
          rate: Q('13.1 m/s'),
        },
      ],
      turn: [
        {
          altitude: Q('0 m'),
          engineMode: 'Combat',
          speed: Q('270 km/h'),
          time: Q('23.0 s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Combat',
          speed: Q('270 km/h'),
          time: Q('31.5 s'),
        },
      ],
    },
    serviceCeiling: Q('11500 m'),
    flightEndurance: [
      {
        altitude: Q('3000 m'),
        speed: Q('350 km/h'),
        time: Q('2.15 h'),
      },
    ],
  },
  engine: {
    model: 'DB-605AM',
    maxPowers: [
      {
        altitude: Q('0 m'),
        mode: 'Combat',
        power: Q('1310 hp'),
      },
      {
        altitude: Q('5800 m'),
        mode: 'Combat',
        power: Q('1250 hp'),
      },
      {
        altitude: Q('0 m'),
        mode: 'Emergency',
        power: Q('1800 hp'),
      },
      {
        altitude: Q('5600 m'),
        mode: 'Emergency',
        power: Q('1700 hp'),
      },
    ],
    modes: [
      {
        name: 'Nominal',
        limit: null,
        rpm: Q('2300 rpm'),
        manifoldPressure: Q('1.15 atm'),
      },
      {
        name: 'Combat',
        limit: Q('30 min'),
        rpm: Q('2600 rpm'),
        manifoldPressure: Q('1.3 atm'),
      },
      {
        name: 'Emergency',
        limit: Q('10 min'),
        rpm: Q('2800 rpm'),
        manifoldPressure: Q('1.7 atm'),
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
        value: Q('85 degC'),
      },
      {
        name: 'Water',
        value: Q('115 degC'),
      },
    ],
    superchargerGearShiftAltitude: null,
  },
  load: {
    emptyWeight: Q('2680 kg'),
    minimumWeight: Q('2899 kg'),
    standardWeight: Q('3266 kg'),
    maxTakeoffWeight: Q('3565 kg'),
    fuelLoad: [Q('304 kg'), Q('400 L')],
  },
  armament: {
    forwardFiring: {
      standard: [
        {
          qty: 1,
          name: 'MG 151/20',
          type: '20mm cannon',
          count: 200,
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
        {
          qty: 1,
          name: 'MK 108',
          type: '30mm gun',
          count: 65,
          details: 'nose-mounted',
        },
      ],
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
    ],
    rockets: [
      {
        qty: 2,
        name: 'WGr.21',
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
      '180 km/hr: Rotate',
      '200 km/hr: Flaps Up',
      'Climb: 270 km/hr to 3000m',
    ],
    landing: [
      {
        text: 'Downwind',
        steps: [
          'Airspeed: Below 300 km/hr',
          'Gear: Extend',
          'Tailwheel: Locked',
          'H-Stab Trim: -4 to -5',
          'Prop Pitch: Auto or Manual 12OC',
        ],
      },
      {
        text: 'End Downwind',
        steps: ['Airspeed: 220 km/hr', 'Flaps: Extend to full'],
      },
      {
        text: 'Base to final',
        steps: ['Airspeed: 180..200 km/hr'],
      },
    ],
  },
  trainingVideos: {
    cockpit: 'https://www.youtube.com/watch?v=aLM_hQoaqp0&t=5s',
    startup: null,
    takeoff: 'https://www.youtube.com/watch?v=aLM_hQoaqp0&t=4m14s',
    landing: 'https://www.youtube.com/watch?v=aLM_hQoaqp0&t=6m11s',
  },
};
