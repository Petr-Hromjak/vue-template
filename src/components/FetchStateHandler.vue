<!-- components/FetchStateHandler.vue -->
<template>
  <div v-if="status === 'loading'">
    <div class="text-center py-4">
      <span class="spinner-border" role="status" />
    </div>
  </div>

  <div v-else-if="status === 'error'">
    <div class="alert alert-danger">{{ message || 'Something went wrong' }}</div>
  </div>

  <div v-else-if="status === 'no-data'">
    <div class="alert alert-warning">{{ noDataMessage }}</div>
  </div>

  <div v-else>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  status: string;
  message?: string;
  noDataMessage?: string;
}>();
</script>
