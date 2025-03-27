<template>
  <div v-if="status === FETCH_STATUS.LOADING">
    <div class="text-center py-4">
      <span class="spinner-border" role="status" />
    </div>
  </div>

  <div v-else-if="status === FETCH_STATUS.ERROR">
    <div class="alert alert-danger">{{ message || 'Something went wrong' }}</div>
  </div>

  <div v-else-if="status === FETCH_STATUS.NO_DATA">
    <div class="alert alert-warning">{{ noDataMessage }}</div>
  </div>

  <div v-else>
    <slot />
  </div>
</template>

<script setup lang="ts">
import {FETCH_STATUS} from "@/constants/fetch-constants";

defineProps<{
  status: string;
  message?: string;
  noDataMessage?: string;
}>();
</script>
