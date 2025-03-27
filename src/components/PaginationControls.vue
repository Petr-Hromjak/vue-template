<template>
  <nav v-if="pagination.totalPages > 1" class="mt-3 d-flex justify-content-center">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: page === 1 }">
        <button class="page-link" @click="() => setPage(1)" :disabled="page === 1">First</button>
      </li>

      <li class="page-item" :class="{ disabled: page === 1 }">
        <button class="page-link" @click="() => setPage(page - 1)" :disabled="page === 1">Previous</button>
      </li>

      <li
          v-for="i in pagination.totalPages"
          :key="i"
          class="page-item"
          :class="{ active: i === page }"
      >
        <button class="page-link" @click="() => setPage(i)">{{ i }}</button>
      </li>

      <li class="page-item" :class="{ disabled: page === pagination.totalPages }">
        <button class="page-link" @click="() => setPage(page + 1)" :disabled="page === pagination.totalPages">
          Next
        </button>
      </li>

      <li class="page-item" :class="{ disabled: page === pagination.totalPages }">
        <button class="page-link" @click="() => setPage(pagination.totalPages)" :disabled="page === pagination.totalPages">
          Last
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import type { Pagination } from '@/types/fetch';

defineProps<{
  pagination: Pagination;
  page: number;
  setPage: (page: number) => void;
}>();
</script>