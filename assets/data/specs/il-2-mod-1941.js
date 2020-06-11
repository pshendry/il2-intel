import Q from 'js-quantities';

export default {
  id: 'il-2-mod-1941',
  type: 'IL-2',
  variant: 'IL-2 model of 1941',
  combatDebut: new Date(1941, 6),
  airframe: {
    indicatedStallSpeedRanges: {
      takeoffLanding: [Q('128 km/h'), Q('146 km/h')],
      flight: [Q('136 km/h'), Q('156 km/h')],
    },
    diveSpeedLimit: Q('570 km/h'),
    maxLoadFactor: Q('11.5 gee'),
    stallAngles: {
      landing: Q('17.5 deg'),
      flight: Q('19.4 deg'),
    },
    takeoffSpeedRange: [Q('150 km/h'), Q('190 km/h')],
    glideslopeSpeedRange: [Q('185 km/h'), Q('195 km/h')],
    landingSpeedRange: [Q('130 km/h'), Q('140 km/h')],
    landingAngle: Q('11.7 deg'),
    length: Q('11.5 m'),
    wingspan: Q('14.6 m'),
    wingSurface: Q('38.5 m^2'),
  },
  characteristics: {
    maxTrueAirspeeds: [
      {
        altitude: Q('0 m'),
        engineMode: 'Nominal',
        speed: Q('421 km/h'),
      },
      {
        altitude: Q('0 m'),
        engineMode: 'Boosted',
        speed: Q('430 km/h'),
      },
      {
        altitude: Q('2500 m'),
        engineMode: 'Nominal',
        speed: Q('455 km/h'),
      },
    ],
    maxPerformance: {
      climb: [
        {
          altitude: Q('0 m'),
          engineMode: 'Nominal',
          speed: Q('250 km/h'),
          rate: Q('9.4 m/s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Nominal',
          speed: Q('250 km/h'),
          rate: Q('8.9 m/s'),
        },
        {
          altitude: Q('6000 m'),
          engineMode: 'Nominal',
          speed: Q('250 km/h'),
          rate: Q('3.9 m/s'),
        },
      ],
      turn: [
        {
          altitude: Q('0 m'),
          engineMode: 'Boosted',
          speed: Q('250 km/h'),
          time: Q('23.1 s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Boosted',
          speed: Q('250 km/h'),
          time: Q('32.6 s'),
        },
      ],
    },
    serviceCeiling: Q('7500 m'),
    flightEndurance: [
      {
        altitude: Q('3000 m'),
        speed: Q('300 km/h'),
        time: Q('1.7 h'),
      },
    ],
  },
  engine: {
    model: 'AM-38',
    maxPowers: [
      {
        altitude: Q('0 m'),
        mode: 'Nominal',
        power: Q('1500 hp'),
      },
      {
        altitude: Q('1650 m'),
        mode: 'Nominal',
        power: Q('1500 hp'),
      },
      {
        altitude: Q('0 m'),
        mode: 'Boosted',
        power: Q('1600 hp'),
      },
    ],
    modes: [
      {
        name: 'Nominal',
        limit: null,
        rpm: Q('2050 rpm'),
        manifoldPressure: Q('1180 mmHg'),
      },
      {
        name: 'Boosted',
        limit: Q('10 min'),
        rpm: Q('2150 rpm'),
        manifoldPressure: Q('1280 mmHg'),
      },
    ],
    ratedTemps: [
      {
        name: 'Oil intake',
        range: [Q('40 degC'), Q('80 degC')],
      },
      {
        name: 'Oil output',
        range: [Q('115 degC')],
      },
      {
        name: 'Water',
        range: [Q('80 degC'), Q('110 degC')],
      },
    ],
    maxTemps: [
      {
        name: 'Oil intake',
        value: Q('85 degC'),
      },
      {
        name: 'Oil',
        value: Q('120 degC'),
      },
      {
        name: 'Water',
        value: Q('120 degC'),
      },
    ],
    superchargerGearShiftAltitude: null,
  },
  load: {
    emptyWeight: Q('4242 kg'),
    minimumWeight: Q('4464 kg'),
    standardWeight: Q('5049 kg'),
    maxTakeoffWeight: Q('5888 kg'),
    fuelLoad: [Q('470 kg'), Q('641 L')],
  },
  armament: {
    forwardFiring: {
      standard: [
        {
          qty: 2,
          name: 'SsVAK',
          type: '20mm gun',
          count: 210,
          details: 'wing-mounted',
        },
        {
          qty: 2,
          name: 'ShKAS',
          type: '7.62mm machine gun',
          count: 750,
          details: 'wing-mounted',
        },
      ],
      modifications: [
        {
          qty: 2,
          name: 'VYa-23',
          type: '23mm gun',
          count: 150,
          details: 'wing-mounted',
        },
      ],
    },
    defensive: [],
    bombs: [
      {
        qty: 6,
        name: 'FAB-50sv',
        type: '50kg general purpose bomb',
      },
      {
        qty: 6,
        name: 'FAB-100M',
        type: '104kg general purpose bomb',
      },
      {
        qty: 2,
        name: 'FAB-250sv',
        type: '254kg general purpose bomb',
      },
    ],
    rockets: [
      {
        qty: 8,
        name: 'ROS-82',
        type: '7kg rocket',
        details: 'HE payload mass 2.5 kg',
      },
      {
        qty: 8,
        name: 'RBS-82',
        type: '15kg rocket',
        details: 'HEAT payload mass 7.2 kg',
      },
      {
        qty: 8,
        name: 'ROFS-132',
        type: '42kg rocket',
        details: 'HE payload mass 21.3 kg',
      },
    ],
  },
  features: [
    {
      feature: 'Boost',
      details: ['Engaged by setting mixture to full rich'],
    },
    {
      feature: 'Supercharger',
      details: ['Automatic', 'Single stage'],
    },
    {
      feature: 'Mixture control',
      details: ['Automatic when set to intermediate (50%)'],
    },
    {
      feature: 'Governor',
      details: ['Automatically controls prop pitch to maintain required RPM'],
    },
    {
      feature: 'Oil & water radiator shutters',
      details: ['Manual control', 'Oil radiator shutters are armoured; close during ground attacks'],
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
      feature: 'Fuel gauge',
      details: [
        'Indicates fuel in front or bottom tanks (alternates in-game every 10 seconds)',
        'Rear tank level is not indicated',
      ],
    },
    {
      feature: 'Canopy',
      details: [
        'Has no lock in open position; may close in a steep dive',
        'Impossible to open/close at high speed',
        'Has no emergency release',
      ],
    },
    {
      feature: 'Salvo controller',
      details: ['Bomb/rocket modes: 1, 2, 4'],
    },
    {
      feature: 'Gunsight',
      details: ['Installed on sliding bar which can be extended to increase FoV'],
    },
  ],
  procedures: {
    engineStart: ['Start engine'],
    takeoff: [
      'Set oil and water radiators to full open',
      'Set mixture to intermediate',
      'Set RPM to maximum',
      'Lock tail wheel',
      'At 170 km/h, rotate',
      'Retract landing gear',
      'Set engine for climb (1800..2000 RPM)',
      'Climb at 250 km/h',
    ],
    landing: [
      'Set RPM to maximum, MP to 5..6',
      'Reduce airspeed to ≤ 250 km/h',
      'Extend landing gear',
      'Set oil and water radiators as required',
      'Lock tail wheel',
      'On base leg, extend flaps and reduce airspeed to ≤ 220 km/h',
      'Set engine to 1500 RPM / 0.6 ata',
      'Set horizontal stabilizer to -4..5°',
      'At ≤ 350 km/h, extend landing gear',
      'At ≤ 250 km/h, extend flaps to 20°',
      'On base leg, descend at 150 m/min',
      'On final approach, descend at 185 km/h',
    ],
  },
};
