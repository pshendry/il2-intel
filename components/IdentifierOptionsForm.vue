<template>
  <div>
    <b-form-group label="Difficulty">
      <b-form-radio-group
        stacked
        :value="difficulty"
        :options="[
          {text: 'Easy', value: 0},
          {text: 'Medium', value: 1},
          {text: 'Hard', value: 2},
          {text: 'Random', value: null},
        ]"
        @input="$emit('update:difficulty', $event)"
      />
    </b-form-group>
    <b-form-group label="Aircraft">
      <b-form-checkbox-group
        stacked
        :checked="dlc"
        :options="[
          {text: 'Battle of Moscow', value: 'BoM'},
          {text: 'Battle of Stalingrad', value: 'BoS'},
          {text: 'Battle of Kuban', value: 'BoK'},
          {text: 'Battle of Bodenplatte', value: 'BoB'},
        ]"
        @input="$emit('update:dlc', $event)"
      />
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: 'IdentifierOptionsForm',
  props: {
    difficulty: { type: Number, default: null },
    dlc: { type: Array, required: true },
  },
};
</script>
