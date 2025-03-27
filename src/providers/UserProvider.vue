<template>
  <slot />
</template>

<script setup lang="ts">
import { provide } from 'vue';
import { useFetchHelper } from '@/composables/useFetchHelper';
import { getUserById } from '@/api/api'; // your API function
import { UserContextSymbol } from '@/composables/useUserContext';

const props = defineProps<{ userId: number }>();

const { data: user, status, message, fetchData } = useFetchHelper();

fetchData(() => getUserById(props.userId));

provide(UserContextSymbol, {
  user,
  status,
  message,
});
</script>
