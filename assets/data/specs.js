import Q from 'js-quantities';

export default [
  {
    id: 'bf-109-F-4',
    variant: 'Bf 109 F-4',
    vSpeeds: {
      stall: {
        takeoff: [Q('148 km/h'), Q('161 km/h')],
        flight: [Q('154 km/h'), Q('171 km/h')],
      },
      diveLimit: Q('850 km/h'),
      maxTrue: [
        [Q('0 m'), Q('522 km/h')],
        [Q('2000 m'), Q('570 km/h')],
        [Q('6000 m'), Q('635 km/h')],
      ],
      maxPerformance: {
        climb: Q('280 km/h'),
        turn: Q('270 km/h'),
      },
      takeoff: [Q('150 km/h'), Q('180 km/h')],
      glideslope: [Q('190 km/h'), Q('200 km/h')],
      landing: [Q('145 km/h'), Q('155 km/h')],
      serviceCeiling: Q('11600 m'),
    },
    engine: {
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
    },
    load: {
      emptyWeight: Q('2382 kg'),
      standardWeight: Q('2890 kg'),
      maxTakeoffWeight: Q('3189 kg'),
      fuelLoad: [Q('304 kg'), Q('400 L')],
    },
    armament: {
      standard: [
        {
          qty: 1,
          name: 'MG 151/20',
          type: '15mm cannon',
          count: 200,
          details: '',
        },
        {
          qty: 2,
          name: 'MG 17',
          type: '7.92mm machine gun',
          count: 500,
          details: '',
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
    features: [
      {
        feature: 'Automatic operation of',
        details: ['Engine RPM', 'Engine mixture', 'Engine supercharger', 'Engine oil/water radiators'],
      },
      {
        feature: 'Trimmers',
        details: ['Horizontal stabilizer'],
      },
      {
        feature: 'Wheel brakes',
        details: ['Independent left and right brakes'],
      },
      {
        feature: 'Tail wheel lock',
        details: [],
      },
      {
        feature: 'Flaps',
        details: [
          'Retracted by a manual mechanical system which is slow to operate; allow time for this on landing approach.',
          'There are black line markings on the flaps to measure their extension.',
        ],
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
        'Gradually increase throttle to maximum',
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
  },
];
