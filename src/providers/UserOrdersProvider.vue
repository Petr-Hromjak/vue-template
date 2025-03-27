<!-- providers/UserOrdersProvider.vue -->
<template>
  <slot />
</template>

<script setup lang="ts">
import {provide, Ref, ref, watch} from 'vue';
import { useFetchHelper } from '@/composables/useFetchHelper';
import { getUserOrdersPaginated } from '@/api/api';
import { UserOrdersContextSymbol } from '@/composables/useUserOrdersContext';
import type { Order } from '@/types/order';

const props = defineProps<{ userId: number }>();

const page = ref(1);

const {
  data,
  status,
  message,
  pagination,
  fetchData,
} = useFetchHelper<Order>();

watch(
    () => [props.userId, page.value],
    () => {
      fetchData(() => getUserOrdersPaginated(props.userId, page.value), 'list');
    },
    { immediate: true }
);

provide(UserOrdersContextSymbol, {
  orders: data as Ref<Order[]>,
  status,
  message,
  pagination,
  page,
  setPage: (newPage: number) => (page.value = newPage),
});
</script>
