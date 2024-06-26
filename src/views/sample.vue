<template>
    <div class="flex h-screen">
      <Sidebar />
      
      <div class="flex-1 flex flex-col">
        <Navbar />
        
        <div class="flex-1 p-4 overflow-y-auto">
          <div class="flex items-center justify-between mb-4">
            <span class="text-muted-foreground">Visible To: Only me</span>
            <div class="flex space-x-4">
              <button class="p-2 bg-secondary text-secondary-foreground rounded">Recent Activities</button>
              <button class="p-2 bg-secondary text-secondary-foreground rounded">Announcements</button>
            </div>
          </div>
  
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <!-- Contenido de ejemplo -->
            <div class="bg-card text-card-foreground p-4 rounded shadow">
              <h2 class="text-lg font-semibold">Overdue Tickets</h2>
              <p class="text-2xl">0</p>
            </div>
            <div class="bg-card text-card-foreground p-4 rounded shadow">
              <h2 class="text-lg font-semibold">Tickets Due Today</h2>
              <p class="text-2xl">0</p>
            </div>
            <div class="bg-card text-card-foreground p-4 rounded shadow">
              <h2 class="text-lg font-semibold">Open Tickets</h2>
              <p class="text-2xl">4</p>
            </div>
            <div class="bg-card text-card-foreground p-4 rounded shadow">
              <h2 class="text-lg font-semibold">Tickets On Hold</h2>
              <p class="text-2xl">0</p>
            </div>
          </div>
  
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <!-- Contenido de ejemplo -->
            <div class="bg-card text-card-foreground p-4 rounded shadow">
              <h2 class="text-lg font-semibold">Unresolved Tickets by Priority</h2>
              <img src="https://placehold.co/200x200?text=Chart1" alt="Unresolved Tickets by Priority Chart" class="w-full">
            </div>
            <div class="bg-card text-card-foreground p-4 rounded shadow">
              <h2 class="text-lg font-semibold">Unresolved Tickets by Status</h2>
              <img src="https://placehold.co/200x200?text=Chart2" alt="Unresolved Tickets by Status Chart" class="w-full">
            </div>
            <div class="bg-card text-card-foreground p-4 rounded shadow">
              <h2 class="text-lg font-semibold">New & My Open Tickets</h2>
              <img src="https://placehold.co/200x200?text=Chart3" alt="New & My Open Tickets Chart" class="w-full">
            </div>
            <div class="bg-card text-card-foreground p-4 rounded shadow">
              <h2 class="text-lg font-semibold">Achievements</h2>
              <img src="https://placehold.co/200x200?text=Chart4" alt="Achievements Chart" class="w-full">
            </div>
            <div class="bg-card text-card-foreground p-4 rounded shadow">
              <h2 class="text-lg font-semibold">Leaderboard</h2>
              <img src="https://placehold.co/200x200?text=Chart5" alt="Leaderboard Chart" class="w-full">
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue';
  import Sidebar from '@/components/Sidebar.vue';
  
  export default {
    name: 'Home',
    components: {
      Navbar,
      Sidebar
    }
  };
  </script>
  
  <style scoped>
  /* Estilos específicos de Home si es necesario */
  </style>
  