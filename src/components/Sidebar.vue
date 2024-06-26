<template>
  <div class="w-16 bg-secondary text-secondary-foreground flex flex-col items-center py-4 space-y-4">
    <img src="/src/assets/imagen_2024-06-25_022820759-removebg-preview.png" alt="Logo" class="w-10 h-10 rounded-full">


    <button class="icon-button">
      <img src="/src/assets/icon-ticket.png" alt="Tickets" class="icon-image">
    </button>
    <button class="icon-button">
      <img src="/src/assets/icon-communication.png" alt="Communication" class="icon-image">
    </button>
    <button class="icon-button">
      <img src="/src/assets/icon-knowledge-base.png" alt="Knowledge Base" class="icon-image">
    </button>
    <button class="icon-button">
      <img src="/src/assets/icon-dashboard.png" alt="Dashboard" class="icon-image">
    </button>
    <button class="icon-button">
      <img src="/src/assets/icon-settings.png" alt="Settings" class="icon-image">
    </button>
    <button class="icon-button">
      <img src="/src/assets/icon-report.png" alt="Reports" class="icon-image">
    </button>
    <button class="icon-button">
      <img src="/src/assets/icon-help.png" alt="Help" class="icon-image">
    </button>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
};
</script>

<style scoped>
.w-16 {
  background-color: #23212c; /* Aplica el color de fondo #23212c */
}
.text-secondary-foreground {
  color: #23212c; /* Aplica el color de texto #23212c */
}

.icon-button {
  @apply bg-transparent border-none  cursor-pointer transition-all duration-300 p-4;
}

.icon-button:hover {
  @apply bg-yellow-500 p-4 rounded-lg;
}

.icon-image {
  @apply w-6 h-6;
}
</style>
