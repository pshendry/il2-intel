import Q from 'js-quantities';

export default {
  id: 'bf-109-f-2',
  type: 'Bf 109',
  variant: 'Bf 109 F-2',
  combatDebut: new Date(1941, 2),
  airframe: {
    indicatedStallSpeedRanges: {
      takeoffLanding: [Q('144 km/h'), Q('159 km/h')],
      flight: [Q('151 km/h'), Q('168 km/h')],
    },
    diveSpeedLimit: Q('850 km/h'),
    maxLoadFactor: Q('11 gee'),
    stallAngles: {
      landing: Q('17 deg'),
      flight: Q('19.7 deg'),
    },
    takeoffSpeedRange: [Q('145 km/h'), Q('175 km/h')],
    glideslopeSpeedRange: [Q('185 km/h'), Q('195 km/h')],
    landingSpeedRange: [Q('135 km/h'), Q('145 km/h')],
    landingAngle: Q('14.8 deg'),
    length: Q('8.94 m'),
    wingspan: Q('9.97 m'),
    wingSurface: Q('16.1 m^2'),
  },
  characteristics: {
    maxTrueAirspeeds: [
      {
        altitude: Q('0 m'),
        engineMode: 'Emergency',
        speed: Q('528 km/h'),
      },
      {
        altitude: Q('2000 m'),
        engineMode: 'Emergency',
        speed: Q('563 km/h'),
      },
      {
        altitude: Q('5000 m'),
        engineMode: 'Emergency',
        speed: Q('606 km/h'),
      },
    ],
    maxPerformance: {
      climb: [
        {
          altitude: Q('0 m'),
          engineMode: 'Combat',
          speed: Q('270 km/h'),
          rate: Q('16.4 m/s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Combat',
          speed: Q('270 km/h'),
          rate: Q('14.1 m/s'),
        },
        {
          altitude: Q('6000 m'),
          engineMode: 'Combat',
          speed: Q('270 km/h'),
          rate: Q('10 m/s'),
        },
      ],
      turn: [
        {
          altitude: Q('0 m'),
          engineMode: 'Boosted',
          speed: Q('270 km/h'),
          time: Q('23.6 s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Boosted',
          speed: Q('270 km/h'),
          time: Q('29 s'),
        },
      ],
    },
    serviceCeiling: Q('11500 m'),
    flightEndurance: [
      {
        altitude: Q('3000 m'),
        speed: Q('350 km/h'),
        time: Q('2.4 h'),
      },
    ],
  },
  engine: {
    model: 'DB-601N',
    maxPowers: [
      {
        altitude: Q('0 m'),
        mode: 'Combat',
        power: Q('1015 hp'),
      },
      {
        altitude: Q('4900 m'),
        mode: 'Combat',
        power: Q('1045 hp'),
      },
      {
        altitude: Q('0 m'),
        mode: 'Emergency',
        power: Q('1175 hp'),
      },
      {
        altitude: Q('4900 m'),
        mode: 'Emergency',
        power: Q('1175 hp'),
      },
      {
        altitude: Q('5500 m'),
        mode: 'Boosted',
        power: Q('1220 hp'),
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
        rpm: Q('2400 rpm'),
        manifoldPressure: Q('1.25 atm'),
      },
      {
        name: 'Emergency',
        limit: Q('3 min'),
        rpm: Q('2600 rpm'),
        manifoldPressure: Q('1.35 atm'),
      },
      {
        name: 'Boosted',
        limit: Q('1 min'),
        rpm: Q('2800 rpm'),
        manifoldPressure: Q('1.42 atm'),
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
        value: Q('110 degC'),
      },
    ],
    superchargerGearShiftAltitude: null,
  },
  load: {
    emptyWeight: Q('2171 kg'),
    minimumWeight: Q('2445 kg'),
    standardWeight: Q('2789 kg'),
    maxTakeoffWeight: Q('3092 kg'),
    fuelLoad: [Q('304 kg'), Q('400 L')],
  },
  armament: {
    forwardFiring: {
      standard: [
        {
          qty: 1,
          name: 'MG 151/15',
          type: '15mm gun',
          count: 200,
          details: 'nose-mounted',
        },
        {
          qty: 2,
          name: 'MG 17',
          type: '7.92mm machine gun',
          count: 500,
          details: 'synchronized',
        },
      ],
      modifications: [
        {
          qty: 1,
          name: 'MG 151/20',
          type: '20mm gun',
          count: 200,
          details: 'nose-mounted',
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
      details: [
        'Close before takeoff to prevent damage',
        'Has an emergency release, but otherwise cannot be opened during flight',
      ],
    },
    {
      feature: 'Gunsight',
      details: ['Has sliding sun filter'],
    },
  ],
  procedures: {
    startup: [
      'Mixture: Off',
      'Throttle: 1”',
      'RPM: Full forward',
      'Shutters: As required',
      'Press E to start',
      'As engine fires Mixture: Auto Rich',
    ],
    takeoff: [
      'Canopy: Closed',
      'Aileron Trim: Neutral',
      'Rudder Trim: 2° right',
      'Elevator Trim: “TO” position',
      'Mixture: Auto Rich',
      'RPM: Full forward',
      'Shutters: Fully Open',
      'MP: Increase to 40”',
      '110 mph: Rotate',
      '150 mph: 2500 RPM, 35” MP',
      'Climb: 150 mph',
    ],
    landing: [
      {
        text: 'Downwind',
        steps: [
          'MP: 35”',
          'RPM: 2600',
          'Airspeed: Below 175 mph',
          'Gear: Extend',
          'Shutters: As required',
          'Canopy: Open',
        ],
      },
      {
        text: 'End Downwind',
        steps: ['Airspeed: Below 140 mph', 'Flaps: 15°'],
      },
      {
        text: 'Base to Final',
        steps: ['Flaps: 30..45°', 'Airspeed: 110..115 mph'],
      },
    ],
  },
  trainingVideos: {
    cockpit: 'https://www.youtube.com/watch?v=lWcvadayviA&t=12s',
    startup: 'https://www.youtube.com/watch?v=lWcvadayviA&t=2m16s',
    takeoff: 'https://www.youtube.com/watch?v=lWcvadayviA&t=3m22s',
    landing: 'https://www.youtube.com/watch?v=lWcvadayviA&t=5m18s',
  },
};
