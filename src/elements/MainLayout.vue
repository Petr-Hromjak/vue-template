<template>
  <div class="main-layout d-flex">
    <aside class="sidebar bg-dark text-white p-3">
      <h5 class="mb-4">MyApp</h5>
      <nav class="nav flex-column">
        <RouterLink :to="`/users/${userId}`" class="nav-link text-white">User</RouterLink>
        <RouterLink :to="`/users/${userId}/orders`" class="nav-link text-white">Orders</RouterLink>
        <RouterLink :to="`/users/${userId}/create-order`" class="nav-link text-white">Create Order</RouterLink>
      </nav>
    </aside>

    <main class="flex-fill p-4 content-area">
      <h3 class="mb-4">{{ pageTitle }}</h3>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const userId = route.params.userId as string;

const isOrdersPage = computed(() => route.path.includes('/orders'));
const isCreatePage = computed(() => route.path.includes('/create-order'));
const isUserPage = computed(() => route.path.includes(`/users/${userId}`) && !isOrdersPage.value && !isCreatePage.value);

const pageTitle = computed(() => {
  if (isUserPage.value) return 'User';
  if (isOrdersPage.value) return 'Orders';
  if (isCreatePage.value) return 'Create Order';
  return 'Dashboard';
});
</script>

<style scoped>
.main-layout {
  min-height: 100vh;
}

.sidebar {
  width: 220px;
  min-height: 100vh;
}

.content-area {
  background-color: #f8f9fa;
}
</style>
