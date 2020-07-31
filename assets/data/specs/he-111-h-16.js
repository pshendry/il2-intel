import Q from 'js-quantities';

export default {
  id: 'he-111-h-16',
  type: 'He 111',
  variant: 'He 111 H-16',
  combatDebut: new Date(1943), // "Winter of 1943"
  airframe: {
    indicatedStallSpeedRanges: {
      takeoffLanding: [Q('123 km/h'), Q('156 km/h')],
      flight: [Q('150 km/h'), Q('194 km/h')],
    },
    diveSpeedLimit: Q('560 km/h'),
    maxLoadFactor: Q('4.5 gee'),
    stallAngles: {
      landing: Q('17 deg'),
      flight: Q('20 deg'),
    },
    takeoffSpeedRange: [Q('170 km/h'), Q('210 km/h')],
    glideslopeSpeedRange: [Q('180 km/h'), Q('200 km/h')],
    landingSpeedRange: [Q('125 km/h'), Q('150 km/h')],
    landingAngle: Q('9 deg'),
    length: Q('16.38 m'),
    wingspan: Q('22.5 m'),
    wingSurface: Q('79.5 m^2'),
  },
  characteristics: {
    maxTrueAirspeeds: [
      {
        altitude: Q('0 m'),
        engineMode: 'Climb',
        speed: Q('370 km/h'),
      },
      {
        altitude: Q('2000 m'),
        engineMode: 'Climb',
        speed: Q('399 km/h'),
      },
      {
        altitude: Q('5000 m'),
        engineMode: 'Climb',
        speed: Q('410 km/h'),
      },
    ],
    maxPerformance: {
      climb: [
        {
          altitude: Q('0 m'),
          engineMode: 'Climb',
          speed: Q('250 km/h'),
          rate: Q('5.3 m/s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Combat',
          speed: Q('250 km/h'),
          rate: Q('4.1 m/s'),
        },
        {
          altitude: Q('6000 m'),
          engineMode: 'Combat',
          speed: Q('250 km/h'),
          rate: Q('2.3 m/s'),
        },
      ],
      turn: [
        {
          altitude: Q('0 m'),
          engineMode: 'Take-off',
          speed: Q('250 km/h'),
          time: Q('30.8 s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Take-off',
          speed: Q('250 km/h'),
          time: Q('45.2 s'),
        },
      ],
    },
    serviceCeiling: Q('6850 m'),
    flightEndurance: [
      {
        altitude: Q('3000 m'),
        speed: Q('300 km/h'),
        time: Q('6.7 h'),
      },
    ],
  },
  engine: {
    model: 'Jumo-211F',
    maxPowers: [
      {
        altitude: Q('0 m'),
        mode: 'Climb',
        power: Q('1120 hp'),
      },
      {
        altitude: Q('1500 m'),
        mode: 'Climb',
        power: Q('1210 hp'),
      },
      {
        altitude: Q('4900 m'),
        mode: 'Climb',
        power: Q('1060 hp'),
      },
      {
        altitude: Q('0 m'),
        mode: 'Take-off',
        power: Q('1340 hp'),
      },
    ],
    modes: [
      {
        name: 'Nominal',
        limit: null,
        rpm: Q('2250 rpm'),
        manifoldPressure: Q('1.15 atm'),
      },
      {
        name: 'Climb',
        limit: Q('30 min'),
        rpm: Q('2400 rpm'),
        manifoldPressure: Q('1.25 atm'),
      },
      {
        name: 'Take-off',
        limit: Q('1 min'),
        rpm: Q('2600 rpm'),
        manifoldPressure: Q('1.40 atm'),
      },
    ],
    ratedTemps: [
      {
        name: 'Oil',
        range: [Q('90 degC')],
      },
      {
        name: 'Water',
        range: [Q('80 degC')],
      },
    ],
    maxTemps: [
      {
        name: 'Oil',
        value: Q('105 degC'),
      },
      {
        name: 'Water',
        value: Q('110 degC'),
      },
    ],
    superchargerGearShiftAltitude: null,
  },
  load: {
    emptyWeight: Q('8698 kg'),
    minimumWeight: Q('9831 kg'),
    standardWeight: Q('13017 kg'),
    maxTakeoffWeight: Q('15689 kg'),
    fuelLoad: [Q('2553 kg'), Q('3450 L')],
  },
  armament: {
    forwardFiring: {
      standard: [],
      modifications: [],
    },
    defensive: [
      {
        qty: 1,
        name: 'MG FF',
        type: '20mm gun',
        count: 240,
        details: 'Nose',
      },
      {
        qty: 1,
        name: 'MG 131',
        type: '13mm machine gun',
        count: 1000,
        details: 'Top',
      },
      {
        qty: 2,
        name: 'MG 81',
        type: '7.92mm machine gun',
        count: 850,
        details: 'Belly-backward',
      },
      {
        qty: 2,
        name: 'MG 81',
        type: '7.92mm machine gun',
        count: 500,
        details: 'Left/right',
      },
    ],
    bombs: [
      {
        qty: 16,
        name: 'SC 50',
        type: '55kg general purpose bomb',
      },
      {
        qty: 4,
        name: 'SC 250',
        type: '249kg general purpose bomb',
      },
      {
        qty: 2,
        name: 'SC 500',
        type: '500kg general purpose bomb',
      },
      {
        qty: 2,
        name: 'SC 1000',
        type: '1090kg general purpose bomb',
      },
      {
        qty: 2,
        name: 'SC 1800',
        type: '1780kg general purpose bomb',
      },
      {
        qty: 1,
        name: 'SC 2500',
        type: '2400kg general purpose bomb',
      },
    ],
    rockets: [],
  },
  features: [
    {
      feature: 'Supercharger',
      details: ['Automatic', 'Two-stage', 'Can be manually switched to 1st gear'],
    },
    {
      feature: 'Mixture control',
      details: ['Automatic'],
    },
    {
      feature: 'Governor',
      details: ['Automatically controls prop pitch to maintain required RPM'],
    },
    {
      feature: 'Propellers',
      details: ['Have a feathering system which should be activated to reduce the drag of a disabled engine'],
    },
    {
      feature: 'Oil & water radiator shutters',
      details: ['Automatic / manual control', 'Oil radiator has 5 fixed positions'],
    },
    {
      feature: 'Trimmers',
      details: ['Pitch, roll, yaw'],
    },
    {
      feature: 'Flaps',
      details: ['Can extend at any angle up to 60°'],
    },
    {
      feature: 'Tail wheel',
      details: ['Rotates freely and does not have a lock'],
    },
    {
      feature: 'Wheel brakes',
      details: ['Independent left and right brakes'],
    },
    {
      feature: 'Fuel gauge',
      details: [
        'Shows the fuel in left or right groups (alternates in-game every 10 seconds)',
        'Additional dedicated gauge for fuselage tank',
        'Has low fuel warning light (200 L) for left/right groups',
      ],
    },
    {
      feature: 'Salvo controller',
      details: ['Allows switching between internal/external, quantities, and delay'],
    },
  ],
  procedures: {
    startup: ['RPM: Full forward', 'Water/Oil Radiators: As required', 'Throttle: 1”', 'Press E to start'],
    takeoff: [
      'Flaps: 15-20°',
      'RPM: Full forward',
      'Water/Oil Radiators: Fully open',
      '160km/hr: Rotate',
      'Climb to 200 m AGL',
      'RPM: 2400 (Climb power)',
      'MP: 1.25 ATA (Climb power)',
      '200 km/hr: Retract Flaps',
      'Climb: 200 km/hr',
    ],
    landing: [
      {
        text: 'Downwind:',
        steps: [
          'Airspeed: Below 200 km/hr',
          'Gear: Extend',
          'Water/Oil Radiators: As required',
          'Flaps: 20°',
          'RPM: Full forward',
        ],
      },
      {
        text: 'End Downwind:',
        steps: ['Airspeed: 180 km/hr', 'Flaps: Extend to full'],
      },
      {
        text: '1 mile final',
        steps: ['Flaps: Extend fully', 'Airspeed: 160 km/hr'],
      },
    ],
  },
  trainingVideos: {
    cockpit: 'https://www.youtube.com/watch?v=bAcMxWJ_3Hc&t=9s',
    startup: null,
    takeoff: 'https://www.youtube.com/watch?v=bAcMxWJ_3Hc&t=4m54s',
    landing: 'https://www.youtube.com/watch?v=bAcMxWJ_3Hc&t=7m52s',
  },
};
