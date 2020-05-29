import Q from 'js-quantities';

export default {
  id: 'bf-109-f-4',
  type: 'Bf 109',
  variant: 'Bf 109 F-4',
  combatDebut: new Date(1941, 6),
  airframe: {
    indicatedStallSpeedRanges: {
      takeoffLanding: [Q('148 km/h'), Q('161 km/h')],
      flight: [Q('154 km/h'), Q('171 km/h')],
    },
    diveSpeedLimit: Q('850 km/h'),
    maxLoadFactor: Q('11 gee'),
    stallAngles: {
      landing: Q('17 deg'),
      flight: Q('19.9 deg'),
    },
    takeoffSpeedRange: [Q('150 km/h'), Q('180 km/h')],
    glideslopeSpeedRange: [Q('190 km/h'), Q('200 km/h')],
    landingSpeedRange: [Q('145 km/h'), Q('155 km/h')],
    landingAngle: Q('14.8 deg'),
    length: Q('8.94 m'),
    wingspan: Q('9.97 m'),
    wingSurface: Q('16.1 m^2'),
  },
  characteristics: {
    maxTrueAirspeeds: [
      {
        altitude: Q('0 m'),
        engineMode: 'Combat',
        speed: Q('522 km/h'),
      },
      {
        altitude: Q('2000 m'),
        engineMode: 'Combat',
        speed: Q('570 km/h'),
      },
      {
        altitude: Q('6000 m'),
        engineMode: 'Combat',
        speed: Q('635 km/h'),
      },
    ],
    maxPerformance: {
      climb: [
        {
          altitude: Q('0 m'),
          engineMode: 'Combat',
          speed: Q('280 km/h'),
          rate: Q('19.5 m/s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Combat',
          speed: Q('280 km/h'),
          rate: Q('18.8 m/s'),
        },
        {
          altitude: Q('6000 m'),
          engineMode: 'Combat',
          speed: Q('280 km/h'),
          rate: Q('14.9 m/s'),
        },
      ],
      turn: [
        {
          altitude: Q('0 m'),
          engineMode: 'Emergency',
          speed: Q('270 km/h'),
          time: Q('20.3 s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Emergency',
          speed: Q('270 km/h'),
          time: Q('26.1 s'),
        },
      ],
    },
    serviceCeiling: Q('11600 m'),
    flightEndurance: [
      {
        altitude: Q('3000 m'),
        speed: Q('350 km/h'),
        time: Q('2.6 h'),
      },
    ],
  },
  engine: {
    model: 'DB-601E',
    maxPowers: [
      {
        altitude: Q('0 m'),
        mode: 'Combat',
        power: Q('1200 hp'),
      },
      {
        altitude: Q('4900 m'),
        mode: 'Combat',
        power: Q('1200 hp'),
      },
      {
        altitude: Q('0 m'),
        mode: 'Emergency',
        power: Q('1350 hp'),
      },
      {
        altitude: Q('4800 m'),
        mode: 'Emergency',
        power: Q('1320 hp'),
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
        rpm: Q('2500 rpm'),
        manifoldPressure: Q('1.3 atm'),
      },
      {
        name: 'Emergency',
        limit: Q('1 min'),
        rpm: Q('2700 rpm'),
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
        value: Q('115 degC'),
      },
    ],
    superchargerGearShiftAltitude: null,
  },
  load: {
    emptyWeight: Q('2382 kg'),
    minimumWeight: Q('2545 kg'),
    standardWeight: Q('2890 kg'),
    maxTakeoffWeight: Q('3189 kg'),
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
          details: null,
        },
        {
          qty: 2,
          name: 'MG 17',
          type: '7.92mm machine gun',
          count: 500,
          details: null,
        },
      ],
      modifications: [
        {
          qty: 2,
          name: 'MG 151/15',
          type: '15mm cannon',
          count: 135,
          details: 'wing-mounted',
        },
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
    bombs: [],
    rockets: [],
  },
  features: [
    {
      feature: 'Governor',
      details: ['Automatically controls prop pitch to maintain required RPM'],
    },
    {
      feature: 'Mixture',
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
      details: ['Design does not allow opening during flight, but it has an emergency release for bailouts'],
    },
    {
      feature: 'Gunsight',
      details: ['Has sliding sun filter'],
    },
  ],
  procedures: {
    engineStart: [
      'Set throttle to idle (or 15..20% for cold engine start)',
      'Set prop pitch and radiators to auto',
      'Start engine',
    ],
    takeoff: [
      'Lock tail wheel',
      'Close canopy',
      'Set flaps to 20° (two notches on wing)',
      'Set horizontal stabilizer to +1°',
      'Gradually open throttle to maximum',
      'At 180 km/h, rotate',
      {
        text: 'At ≥ 250 km/h',
        steps: ['Retract landing gear', 'Retract flaps', 'Set engine for climb (2500 RPM / 1.3 ata)'],
      },
    ],
    landing: [
      'Set engine to 1500 RPM / 0.6 ata',
      'Lock tail wheel',
      'Set horizontal stabilizer to -4..5°',
      'At ≤ 350 km/h, extend landing gear',
      'At ≤ 250 km/h, extend flaps to 20°',
      'On base leg, descend at 150 m/min',
      'On final approach, descend at 200..220 km/h',
      'Touch down at 160 km/h',
    ],
  },
};
