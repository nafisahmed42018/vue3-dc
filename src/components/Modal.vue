<template>
  <Teleport to=".modal-container">
    <div class="modal">
      <h2>This is a modal</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa dolor tenetur reiciendis
        placeat dolorem dicta, distinctio ducimus, ea, sequi dolorum nihil. Fugiat quo provident
        ipsam!
      </p>
      <button>Hide Modal</button>
    </div>
  </Teleport>
</template>

<style scoped>
.modal {
  display: flex;
  flex-direction: column;
  background-color: bisque;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  width: 50%;
  transform: translate(-50%, -50%);
}
</style>
