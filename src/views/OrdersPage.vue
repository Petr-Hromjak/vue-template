<template>
  <MainLayout>
    <div v-if="!userId || isNaN(userId)">
      <p class="text-danger">Invalid user ID</p>
    </div>
    <div v-else>
      <UserOrdersProvider :user-id="userId">
        <UserOrdersList />
      </UserOrdersProvider>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import MainLayout from '@/elements/MainLayout.vue';
import UserOrdersProvider from '@/providers/UserOrdersProvider.vue';
import UserOrdersList from '@/components/UserOrdersList.vue';

const route = useRoute();
const userId = parseInt(route.params.userId as string, 10);
</script>
