<template>
  <div>
    <p>{{ title }}</p>
    <p>
      <input
        @change="(event) => $emit('update:checked', event.target.checked)"
        type="checkbox"
        :checked="checked"
      />
    </p>
  </div>
</template>

<script>
export default {
  name: "SidebarSwitch",
  props: {
    title: String,
    checked: Boolean,
  },
};
</script>

<style scoped lang="scss">
div {
  display: inline-block;
  padding: 0 5%;
}

p {
  margin: 10px 0;
  font-size: 20px;
}

input[type="checkbox"] {
  width: 75px;
  height: 40px;
  margin: 0;
  background: rgba(255, 255, 255, 0.1);
  display: inline-block;
  -webkit-appearance: none;
  border-radius: 100px;
  position: relative;

  &::after {
    content: "";
    display: block;
    position: absolute;
    height: 30px;
    width: 30px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 100px;
    top: 5px;
    left: 5px;
    transition: 0.3s;
  }

  &:hover {
    &::after {
      left: 10px;
    }
  }

  &:checked {
    &::after {
      left: 40px !important;
    }
    &:hover {
      &::after {
        left: 35px !important;
      }
    }
  }
}
</style>
